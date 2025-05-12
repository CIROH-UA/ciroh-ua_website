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

import { tryGetCachedRepository, tryGetCachedOrganization, tryGetCachedRepositoryWorkflows } from './GitHubHandling/AccessUtils';
import { RateLimitError } from './GitHubHandling/RateLimitError';
import { AccessConfig } from './GitHubHandling/AccessConfig';
import { useObserveFraction, visibleOnce } from './GitHubHandling/VisibilityUtil';
import Link from '@docusaurus/Link';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Details from '@theme/Details';

/**
 * @name BuildRepoDiv
 * @param {Repository} repository
 * @param {string} [padding] - optional, default null
 * @description
 * This function takes a repository and returns a HTML element
 * that displays the repository information.
 * @returns {JSX.Element}
 */
function BuildRepoDiv(repository, padding = null) {
    // Repository information
    const repo_name = repository.name;
    const repo_desc = repository.description;
    const repo_url = repository.html_url;
    var outer_style = {
        border: '1px solid black',
    }
    outer_style.padding = (padding) ? padding : '3px';
    return (
        <div style={outer_style}>
            <h2>{repo_name}</h2>
            <p>{repo_desc}</p>
            <Link href={repo_url} target="_blank" rel="noopener noreferrer">View Repository</Link>
        </div>
    );
}

/**
 * @name RepoDiv
 * @description
 * This function takes a repository's name and org and returns a HTML element
 * that displays the repository information.
 * @param {Object} props
 * @param {string} props.org_name - The name of the organization.
 * @param {string} props.repo_name - The name of the repository.
 * @param {string} [padding] - The padding of the element. Default is null.
 * @returns {JSX.Element}
 */
function RepoDiv({ org_name, repo_name, padding = null }) {
    // Repository information
    const [loading, setLoading] = useState(true);
    const [repoData, setRepoData] = useState(null);
    const [rateError, setError] = useState(null);
    // Only fetch the data once the component is visible
    const ref = React.useRef(null);
    // const visibleFraction = useObserveFraction(ref, true);
    const seenOnce = visibleOnce(ref);
    useEffect(() => {
        if (seenOnce === false) {
            return;
        }
        async function fetchData() {
            try {
                const data = await tryGetCachedRepository(org_name, repo_name);
                setRepoData(data);
            } catch (error) {
                // console.error('Error fetching repository data:', error);
                if (error instanceof RateLimitError) {
                    setError(error);
                }
                else {
                    console.error('Error fetching repository data:', error);
                }
            }
            finally {
                setLoading(false);
                setError(null);
            }
        }
        fetchData();
    }, [org_name, repo_name, seenOnce]);
    let content;
    if (rateError && rateError instanceof RateLimitError) {
        content = rateError.asJSXElement();
    }
    else if (loading) {
        content = <div>Loading...</div>;
    }
    else {
        content = BuildRepoDiv(repoData, padding);
    }
    // Add the ref to the content before returning
    return <div ref={ref}>{content}</div>;
}

/**
 * @name BuildOrgDiv
 * @param {Organization} organization
 * @param {string} [padding] - optional, default null
 * @description
 * This function takes an organization and returns a HTML element
 * that displays the organization information.
 * @returns {JSX.Element}
 */
function BuildOrgDiv(organization, padding = null) {
    // Organization information
    const org_name = organization.login;
    const org_desc = organization.description;
    const org_url = organization.html_url;
    const org_avatar = organization.avatar_url;
    var outer_style = {
        border: '1px solid black',
    }
    outer_style.padding = (padding) ? padding : '3px';
    return (
        <div style={outer_style}>
            <h2>{org_name}</h2>
            <p>{org_desc}</p>
            <p><img className="image" crossOrigin="anonymous" src={org_avatar} alt="Organization Avatar" style={{ width: '100px', height: '100px' }} /></p>
            <Link href={org_url} target="_blank" rel="noopener noreferrer">View Organization</Link>
        </div>
    );
}

/**
 * @name OrgDiv
 * @description
 * This function takes an organization's name and returns a HTML element
 * that displays the organization information.
 * @param {Object} props
 * @param {string} props.org_name - The name of the organization.
 * @param {string} [padding] - The padding of the element. Default is null.
 * @returns {JSX.Element}
 */
function OrgDiv({ org_name, padding = null }) {
    // Organization information
    const [loading, setLoading] = useState(true);
    const [orgData, setOrgData] = useState(null);
    const [rateError, setError] = useState(null);
    // Only fetch the data once the component is visible
    const ref = React.useRef(null);
    // const visibleFraction = useObserveFraction(ref, true);
    const seenOnce = visibleOnce(ref);
    useEffect(() => {
        if (seenOnce === false) {
            return;
        }
        async function fetchData() {
            try {
                const data = await tryGetCachedOrganization(org_name);
                setOrgData(data);
            } catch (error) {
                // console.error('Error fetching organization data:', error);
                if (error && error instanceof RateLimitError) {
                    setError(error);
                }
                else {
                    console.error('Error fetching organization data:', error);
                }
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [org_name, seenOnce]);
    // if (rateError && rateError instanceof RateLimitError) {
    //     return rateError.asJSXElement();
    // }
    // else if (loading) {
    //     return <div>Loading...</div>;
    // }
    // else {
    //     return BuildOrgDiv(orgData, padding);
    // }
    let content;
    if (rateError && rateError instanceof RateLimitError) {
        content = rateError.asJSXElement();
    }
    else if (loading) {
        content = <div>Loading...</div>;
    }
    else {
        content = BuildOrgDiv(orgData, padding);
    }
    // Add the ref to the content before returning
    return <div ref={ref}>{content}</div>;
}

/**
 * @name BuildRepoWorkflowsDiv
 * @param {Repository} repository
 * @param {Workflow[]} workflows
 * @description
 * This function takes a repository and a list of workflows
 * and returns a HTML element that displays the workflows
 * of the repository.
 * The workflows are displayed in a vertical manner.
 * @returns {JSX.Element}
 */
function BuildRepoWorkflowsDiv(repository, workflows_0) {
    var workflows = workflows_0;
    if (!Array.isArray(workflows)) {
        // if it's an iterable object, unpack it into an array
        // if it's some other type, attempt to convert it.
        if (Symbol.iterator in workflows) {
            workflows = [...workflows];
        }
        else if ("workflows" in workflows) {
            workflows = workflows.workflows;
        }
        else {
            console.log("Workflows is not an array or iterable object.");
        }
    }
    const repo_workflow_contents = (workflow) => {
        return [
            <h3 key={workflow.id}>{workflow.name}</h3>,
            <p key={workflow.id + "_desc"}>{workflow.description}</p>,
            <Link key={workflow.id + "_link"} to={workflow.html_url} target="_blank" rel="noopener noreferrer">
                <img className="image" src={workflow.badge_url} alt="Workflow Badge" />
            </Link>,
            <p key={workflow.id + "_state"} style={{ color: workflow.state === "active" ? 'green' : 'red' }}>
                {workflow.state === "active" ? "Active" : "Inactive"}
            </p>,
            <p key={workflow.id + "_created"}>Created at: {new Date(workflow.created_at).toLocaleString()}</p>,
            <p key={workflow.id + "_updated"}>Updated at: {new Date(workflow.updated_at).toLocaleString()}</p>,
            <Link key={workflow.id + "_view"} href={workflow.html_url} target="_blank" rel="noopener noreferrer">View Workflow</Link>
        ];
    }
    const repo_workflow_listitem = (workflow) => {
        const listitem = (
            <li key={workflow.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
                {repo_workflow_contents(workflow)}
            </li>
        );
        // verify that the list item has a unique key
        if (listitem.key === undefined) {
            console.error("List item does not have a unique key.");
        }
        else {
            // console.log("List item has a unique key: " + listitem.key);
        }
        return listitem;
    }
    const workflow_list = workflows.map(repo_workflow_listitem);
    var workflows_div_interior = (<div>No workflows found for this repository.</div>);
    if (workflow_list.length > 0) {
        workflows_div_interior = (
            <div>
                <h3>Workflows:</h3>
                <ul>
                    {workflow_list}
                </ul>
            </div>
        )
    }
    const workflows_div = <Details summary="Workflows">{workflows_div_interior}</Details>;
    var workflows_div_key = "workflows_div";
    workflows_div_key += "_" + repository.id;
    for (const workflow of workflows) {
        workflows_div_key += "_" + workflow.id;
    }
    return (
        <div key={workflows_div_key}>
            {workflows_div}
        </div>
    );
}
import { RepoCache } from './GitHubHandling/AccessUtils';
/**
 * @name RepoWorkflowsDiv
 * @description
 * This function takes a repository's name and org and returns a HTML element
 * that displays the repository information and its workflows.
 * @param {Object} props
 * @param {string} props.org_name - The name of the organization.
 * @param {string} props.repo_name - The name of the repository.
 * @param {string} [padding] - The padding of the element. Default is null.
 * @returns {JSX.Element}
 */
function RepoWorkflowsDiv({ org_name, repo_name, padding = null }) {
    // Repository information
    const [loading, setLoading] = useState(true);
    const [repoData, setRepoData] = useState(null);
    const [workflowsData, setWorkflowsData] = useState(null);
    const [repoRateError, setRepoError] = useState(null);
    const [workflowsRateError, setWorkflowsError] = useState(null);
    // Only fetch the data once the component is visible
    const ref = React.useRef(null);
    // const visibleFraction = useObserveFraction(ref, true);
    const seenOnce = visibleOnce(ref);
    useEffect(() => {
        if (seenOnce === false) {
            return;
        }
        async function fetchRepo() {
            try {
                const data = await tryGetCachedRepository(org_name, repo_name);
                setRepoData(data);
            } catch (error) {
                // console.log('Error fetching repository data:', error);
                if (error && error instanceof RateLimitError) {
                    setRepoError(error);
                }
                else {
                    // console.warn('Error fetching repository data:', error);
                }
            }
            finally {
                setLoading(false);
                setRepoError(null);
            }
        }
        fetchRepo();
    }, [org_name, repo_name, seenOnce]);
    useEffect(() => {
        if (repoData === null) {
            return;
        }
        async function fetchWorkflows() {
            try {
                const data = await tryGetCachedRepositoryWorkflows(org_name, repo_name);
                setWorkflowsData(data);
            } catch (error) {
                // console.log('Error fetching workflows data:', error);
                if (error && error instanceof RateLimitError) {
                    setWorkflowsError(error);
                }
                else {
                    // console.warn('Error fetching workflows data:', error);
                }
            }
            finally {
                setLoading(false);
                setWorkflowsError(null);
            }
        }
        fetchWorkflows();
    }, [repoData]);
    let repoContent, workflowsContent;
    let didRepoError = (repoRateError && repoRateError instanceof RateLimitError);
    let didWorkflowsError = (workflowsRateError && workflowsRateError instanceof RateLimitError);
    if (didRepoError || didWorkflowsError) {
        // check which is more recent, display that one
        /** @type {RateLimitError} */
        const repoError = repoRateError;
        /** @type {RateLimitError} */
        const workflowsError = workflowsRateError;
        if (didRepoError && didWorkflowsError) {
            if (repoError.limit_data.calculated_at > workflowsError.limit_data.calculated_at) {
                repoContent = repoError.asJSXElement();
                workflowsContent = null;
            }
            else {
                workflowsContent = workflowsError.asJSXElement();
                repoContent = null;
            }
        }
        else if (didRepoError) {
            repoContent = repoError.asJSXElement();
            workflowsContent = null;
        }
        else if (didWorkflowsError) {
            workflowsContent = workflowsError.asJSXElement();
            repoContent = null;
        }
    }
    else if (loading) {
        repoContent = <div>Loading...</div>;
        workflowsContent = null;
    }
    else if (repoData === null) {
        repoContent = (
            <div>
                <p>Repository not found.</p>
                <p>Found Repositories:</p>
                <p>{JSON.stringify(Object.keys(RepoCache[AccessConfig.CIROH]))}</p>
            </div>
        );
        workflowsContent = null;
    }
    else if (workflowsData === null) {
        workflowsContent = <div>Workflows not found.</div>;
        repoContent = BuildRepoDiv(repoData, padding);
    }
    else if (workflowsData.length === 0) {
        workflowsContent = <div>No workflows found for this repository.</div>;
        repoContent = BuildRepoDiv(repoData, padding);
    }
    else {
        workflowsContent = BuildRepoWorkflowsDiv(repoData, workflowsData);
        repoContent = BuildRepoDiv(repoData, padding);
    }
    // Add the ref to the content before returning
    return <div ref={ref}>
        {repoContent}
        {workflowsContent}
    </div>;
}

export { RepoDiv, OrgDiv, RepoWorkflowsDiv };