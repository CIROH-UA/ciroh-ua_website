import React, { useEffect, useState } from 'react';

/**
 * JSX Markdown components are imported through the following method:
 * (Where:
 * - `[componentName]` is the name of the component you want to import
 * - `[componentFileName]` is the name of the file where the component is defined WITHOUT the `.js` extension
 * - `[kwargs]` is replaced by the keyword arguments of the component in the form `key1="value1" key2="value2" ...`
 * )
 * ```javascript
 * import { [componentName] } from `@site/src/components/[componentFileName]`;
 * 
 * <[componentName] [kwargs] />
 * ```
 * 
 * The only thing to do on this end is to ensure that the component is exported at the end with:
 * ```javascript
 * export default [componentName];
 * ```
 */
const help = null; // help keyword in the code can be moused over to see the above explanation

import { tryGetOrganization, tryListRepositories } from './GitHubHandling/AccessUtils';
import { AccessConfig } from './GitHubHandling/AccessConfig';
import Link from '@docusaurus/Link';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
// making a test component to check if the import and github API both work

function IntroDiv() {
    // Short introduction to the page.
    // Show the list of relevant repositories' names.
    // Further details will be given in further sections.
    var repo_names = AccessConfig.target_repo_names;
    var org_names = AccessConfig.target_org_names;
    var intro_paragraph = "This page contains the list of repositories that CIROH is interested in taking ownership of."
    var org_desc = "All repositories originate from the NOAA-OWP organization, but the ones CIROH has taken ownership of can be found as forks in the CIROH-UA organization."
    var repo_desc = "The repositories are as follows:"
    var repo_list = repo_names.map((repo) => {
        return <li key={repo}>{repo}</li>;
    });
    return (
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
            <h2>Introduction</h2>
            <p>{intro_paragraph}</p>
            <p>{org_desc}</p>
            <p>{repo_desc}</p>
            <ul>
                {repo_list}
            </ul>
        </div>
    );
}

/**
 * @param {Organization} organization
 * @param {Repository[]} repositories
 * @description
 * This function takes an organization and a list of repositories
 * and returns a list of repositories that are relevant to CIROH.
 * The list is displayed in a vertical manner.
 * Each repository is displayed in a div with a visible border.
 * The divs are arranged vertically.
 * @returns {JSX.Element}
 * @throws {Error} If the organization is not found or if there is an error in the request.
 */
function RepoListSection(organization, repositories) {
    // List of repositories in the organization
    // that are relevant to CIROH
    const repo_names = AccessConfig.target_repo_names;
    const org_name = organization.login;
    const org_desc = organization.description;
    const org_url = organization.html_url;
    const org_avatar = organization.avatar_url;
    const filter_repos = (repositories) => {
        // console.log("Repositories: ", repositories);
        // console.log("Type of repositories: ", typeof repositories);
        var filtered_repos = [];
        repositories.forEach((repo) => {
            if (repo_names.includes(repo.name)) {
                filtered_repos.push(repo);
            }
        });
        return filtered_repos;
    }
    // const org_repos = repositories.filter(repo => repo_names.includes(repo.name));
    const org_repos = filter_repos(repositories);
    const repo_div = (repo) => {
        return (
            <div key={repo.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">View Repository</Link>
            </div>
        );
    }
    const repo_list = org_repos.map((repo) => {
        return repo_div(repo);
    });
    const number_of_repos = org_repos.length;
    const repo_list_header = number_of_repos > 0 ? <h3>Repositories from this organization:</h3> : <h3>No repositories found in this organization.</h3>;
    const repo_list_div = <div>{repo_list_header}{repo_list}</div>;
    return (
        <div style={{ border: '2px solid black', padding: '20px' }}>
            <h2>{org_name}</h2>
            <p>{org_desc}</p>
            <p><img src={org_avatar} alt="Organization Avatar" style={{ width: '100px', height: '100px' }} /></p>
            <Link href={org_url} target="_blank" rel="noopener noreferrer">View Organization</Link>
            {/* <p>Repositories from this organization:</p> */}
            {repo_list_div}
        </div>
    );
}

function GitHubDashboard() {
    const [orgData, setOrgData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [repositories, setRepositories] = useState([]);

    const [noaa_org_data, setNOAAOrgData] = useState(null);
    const [noaa_org_repos, setNOAAOrgRepos] = useState([]);
    const [ciroh_org_data, setCIROHOrgData] = useState(null);
    const [ciroh_org_repos, setCIROHOrgRepos] = useState([]);
    const [awi_org_data, setAWIOrgData] = useState(null);
    const [awi_org_repos, setAWIOrgRepos] = useState([]);

    useEffect(() => {
        async function fetchData(org_name, setter) {
            // console.log('Fetching organization data...');
            try {
                const data = await tryGetOrganization(org_name);
                // setOrgData(data);
                setter(data);
            } catch (error) {
                console.error('Error fetching organization data:', error);
            } finally {
                setLoading(false);
            }
        }
        async function getRepositories(org_name, setter) {
            // console.log('Fetching repositories...');
            try {
                const repos = await tryListRepositories(org_name);
                // setRepositories(repos);
                setter(repos);
            } catch (error) {
                console.error('Error fetching repositories:', error);
            } finally {
                setLoading(false);
            }
        }


        // fetchData();
        // getRepositories();
        fetchData(AccessConfig.NOAA_OWP, setNOAAOrgData);
        getRepositories(AccessConfig.NOAA_OWP, setNOAAOrgRepos);
        fetchData(AccessConfig.CIROH, setCIROHOrgData);
        getRepositories(AccessConfig.CIROH, setCIROHOrgRepos);
        fetchData(AccessConfig.AWI, setAWIOrgData);
        getRepositories(AccessConfig.AWI, setAWIOrgRepos);
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    // if (!orgData) {
    //     return <div>Error loading data</div>;
    // }

    var ciroh_repo_list = <div>Error loading data</div>;
    if (ciroh_org_data && ciroh_org_repos) {
        ciroh_repo_list = RepoListSection(ciroh_org_data, ciroh_org_repos);
    }
    // var noaa_repo_list = RepoListSection(noaa_org_data, noaa_org_repos);
    var noaa_repo_list = <div>Error loading data</div>;
    if (noaa_org_data && noaa_org_repos) {
        noaa_repo_list = RepoListSection(noaa_org_data, noaa_org_repos);
    }
    var awi_repo_list = <div>Error loading data</div>;
    if (awi_org_data && awi_org_repos) {
        awi_repo_list = RepoListSection(awi_org_data, awi_org_repos);
    }
    return (
        <div>
            <IntroDiv />
            {/* {ciroh_repo_list}
            {awi_repo_list}
            {noaa_repo_list} */}
            <Tabs defaultValue="ciroh" values={[
                { label: 'CIROH-UA', value: 'ciroh' },
                { label: 'NOAA-OWP', value: 'noaa' },
                { label: 'Alabama Water Institute', value: 'awi' },
            ]}>
                <TabItem value="ciroh" label="CIROH-UA" default>
                    {ciroh_repo_list}
                </TabItem>
                <TabItem value="noaa" label="NOAA-OWP">
                    {noaa_repo_list}
                </TabItem>
                <TabItem value="awi" label="Alabama Water Institute">
                    {awi_repo_list}
                </TabItem>
            </Tabs>
            <p>Note: The list of repositories is not exhaustive. It is filtered by name, and currently can miss repositories that have had their names changed after being forked.</p>
        </div>
    );
}

export default GitHubDashboard;