// Repository API 
// https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28

// import the types from GitHubTypes.js

/**
 * @import * from './GitHubTypes.js';
 * @description
 * Importing the types from GitHubTypes.js to use in this file.
 */


const base_url = "https://api.github.com";
const org_url = base_url + "/orgs/";
const repo_url = base_url + "/repos/";
const user_url = base_url + "/users/";

/**
 * @name getRateLimitStatus
 * @description
 * Fetches the rate limit status from GitHub API. 
 * Uses time based caching to avoid hitting the API too often.
 * @returns {RateLimitStatus}
 * @throws {Error} If the rate limit status is not found or if there is an error in the request.
 */
async function getRateLimitStatus() {
    const now = new Date();
    var response = null;
    if (Object.hasOwn(getRateLimitStatus, "last_call")) {
        const diff = now - getRateLimitStatus.last_call;
        if (diff < 10 * 1000) { // 10 seconds
            response = getRateLimitStatus.last_response;
        }
    }
    if (!response) {
        const url = base_url + "/rate_limit";
        response = await fetch(url);
        getRateLimitStatus.last_call = now;
        getRateLimitStatus.last_response = response;
    }
    if (!response.ok) {
        throw new Error(`Rate limit status not found: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
}


/**
 * @name getPaginatedRequest
 * @param {string} url - The URL to fetch.
 * @param {number} page - The page number to fetch.
 * @default 1
 * @param {number} per_page - The number of items per page.
 * @default 100
 * @param {string} first_option - The option, if any, to be added to the URL first.
 * @default null
 * @returns {Array} - An array containing the URL and the configuration object.
 * @description
 * Generates a paginated request for the GitHub API.
 */
function getPaginatedRequest(url, page = 1, per_page = 100, first_option = null) {
    var headers = {
        "X-GitHub-Api-Version": "2022-11-28",
        "accept": "application/vnd.github.v3+json",
    };
    var conf = {
        method: "GET",
        headers: headers,
    };
    if (first_option) {
        url += "?" + first_option + "&";
    }
    else {
        url += "?";
    }
    url += "per_page=" + per_page;
    url += "&page=" + page;
    return [url, conf];
}


/**
 * @name tryGetOrganization
 * @param {string} organization_name
 * @returns {Organization}
 * @description
 * Fetches the organization data from GitHub API. Blocks until the data is received.
 * @throws {Error} If the organization is not found or if there is an error in the request.
 */
async function tryGetOrganization(organization_name) {
    const url = org_url + organization_name;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Organization not found: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
}


/**
 * @name tryGetRepository
 * @param {string} organization_name
 * @param {string} repo_name
 * @returns {Repository}
 * @description
 * Fetches the repository data from GitHub API. Blocks until the data is received.
 */
async function tryGetRepository(organization_name, repo_name) {
    const url = repo_url + organization_name + "/" + repo_name;
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) {
        return null;
    }
    // const data = await response.json();
    return data;
}

/**
 * @name tryGetRepositoryNumber
 * @param {string} organization_name
 * @returns {number}
 * @description
 * Fetches the number of repositories of the organization from GitHub API. Blocks until the data is received.
 * @throws {Error} If the organization is not found or if there is an error in the request.
 */
async function tryGetRepositoryNumber(organization_name) {
    // Have to use same method as tryGetCommitCount
    var url = org_url + organization_name + "/repos";
    var req = getPaginatedRequest(url, 1, 1);
    url = req[0];
    var conf = req[1];
    const response = await fetch(url, conf);
    if (!response.ok) {
        throw new Error(`Repositories not found: ${response.statusText}`);
    }
    var link = response.headers.get("Link");
    // find rel="last", then get next previous page
    var last_page = null;
    if (link) {
        var last_page = link.match(/<([^>]+)>;\s*rel="last"/);
        if (last_page) {
            last_page = last_page[1];
        }
        else {
            throw new Error(`Last page not found: ${link}`);
        }
    }
    else {
        throw new Error(`Link header not found: ${link}`);
    }
    var last_page_url = new URL(last_page);
    var last_page_number = last_page_url.searchParams.get("page");

    return last_page_number;
}

/**
 * @param {string} organization_name
 * @param {number} max_count - The maximum number of repositories to fetch.
 * @default 100
 * @returns {Repository[]}
 * @description
 * Fetches the repositories of the organization from GitHub API. Blocks until the data is received.
 * @throws {Error} If the organization is not found or if there is an error in the request.
 */
async function tryListRepositories(organization_name, max_count = 100) {
    // Have to use same method as tryGetCommits
    if (max_count == -1) {
        max_count = await tryGetRepositoryNumber(organization_name);
    }
    var url = org_url + organization_name + "/repos";
    var req = getPaginatedRequest(url, 1, max_count);
    url = req[0];
    var conf = req[1];
    const response = await fetch(url, conf);
    if (!response.ok) {
        throw new Error(`Repositories not found: ${response.statusText}`);
    }
    const data = await response.json();
    // should be the desired array
    return data;
}


/**
 * @param {Repository} repo
 * @returns {Branch[]}
 * @description
 * Fetches the branches of the repository from GitHub API. Blocks until the data is received.
 * @throws {Error} If the repository is not found or if there is an error in the request.
 */
async function tryGetBranches(repo) {
    const url = repo["branches_url"].replace("{/branch}", "");
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Branches not found: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
}

/**
 * @param {Branch} branch
 * @param {string|Sha|null} sha - Sha or branch name to start listing commits from.
 * @default Repository.default_branch
 * @param {number} per_page - The number of commits to fetch per page.
 * @default 100
 * @param {number} page - The page number to fetch.
 * @default 1
 * @returns {Commit[]}
 * @description
 * Fetches the commits of the branch from GitHub API. Blocks until the data is received.
 * @throws {Error} If the branch is not found or if there is an error in the request.
 */
async function tryGetCommits(branch, start = null, per_page = 100, page = 1) {
    var url = branch["commit"]["url"]; // repo/commits/sha
    url = url.replace(/\/commits\/.*/, "/commits");
    var insert = "sha=";
    if (start) {
        insert += start;
    }
    else {
        insert += branch["name"];
    }
    const req = getPaginatedRequest(url, page, per_page, insert);
    url = req[0];
    const conf = req[1];

    const response = await fetch(url, conf);
    if (!response.ok) {
        throw new Error(`Commits not found: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
}

/**
 * @param {Branch} branch
 * @param {string|Sha|null} start - Sha or branch name to start listing commits from.
 * @default Repository.default_branch
 * @returns {number}
 * @description
 * Fetches the number of commits in the branch from GitHub API. Blocks until the data is received.
 * @throws {Error} If the branch is not found or if there is an error in the request.
 */
async function tryGetCommitCount(branch, start = null) {
    var url = branch["commit"]["url"]; // repo/commits/sha
    url = url.replace(/\/commits\/.*/, "/commits");
    var headers = {
        "X-GitHub-Api-Version": "2022-11-28",
        "accept": "application/vnd.github.v3+json",
    };
    var conf = {
        method: "GET",
        headers: headers,
    };
    if (start) {
        url += "?sha=" + start;
    }
    else {
        url += "?sha=" + branch.name;
    }
    url += "&per_page=1";
    const response = await fetch(url, conf);
    if (!response.ok) {
        console.log(url);
        console.log(response);
        throw new Error(`Commits not found: ${response.statusText}`);
    }
    var link = response.headers.get("Link");
    // find rel="last", then get next previous page
    var last_page = null;
    if (link) {
        var last_page = link.match(/<([^>]+)>;\s*rel="last"/);
        if (last_page) {
            last_page = last_page[1];
        }
        else {
            throw new Error(`Last page not found: ${link}`);
        }
    }
    else {
        throw new Error(`Link header not found: ${link}`);
    }
    var last_page_url = new URL(last_page);
    var last_page_number = last_page_url.searchParams.get("page");
    return last_page_number;
}


/**
 * @name tryGetCommit
 * @param {Repository} repo
 * @param {string} branch - The name of the branch.
 * @param {string|Sha|null} sha - The SHA of the commit, if any.
 * @returns {Commit}
 * @description
 * Fetches the commit data from GitHub API. Blocks until the data is received.
 * @throws {Error} If the commit is not found or if there is an error in the request.
 */
async function tryGetCommit(repo, branch, sha = null) {
    var url = repo["commits_url"].replace("{/sha}", "");
    if (sha) {
        url += "/" + sha;
    }
    else {
        url += "/" + branch["commit"]["sha"];
    }
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Commit not found: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
}

/**
 * @name tryGetRepositoryWorkflows
 * @param {Repository} repo
 * @description
 * Fetches the workflows of the repository from GitHub API. Blocks until the data is received.
 * @throws {Error} If the workflows are not found or if there is an error in the request.
 * @returns {Workflow[]}
 */
async function tryGetRepositoryWorkflows(repo) {
    const url = repo["url"] + "/actions/workflows";
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Workflows not found: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
}

export {
    getRateLimitStatus,
    tryGetOrganization,
    tryGetRepository,
    tryListRepositories,
    tryGetBranches,
    tryGetCommits,
    tryGetCommitCount,
    tryGetCommit,
    tryGetRepositoryWorkflows,
};