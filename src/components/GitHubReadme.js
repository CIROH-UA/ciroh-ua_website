import React, { useEffect, useState } from 'react';

function GitHubReadme({ repo, username , subfolder = '', readmeFileName ='' }) {
    const [readmeContent, setReadmeContent] = useState('');

    useEffect(() => {
        // Construct the GitHub API URL to fetch the README as HTML
        let apiUrl = '';
        if (subfolder != '') {
            if (readmeFileName != '') 
                apiUrl = `https://api.github.com/repos/${username}/${repo}/contents/${subfolder}/${readmeFileName}?ref=main`;
            else
                apiUrl = `https://api.github.com/repos/${username}/${repo}/contents/${subfolder}/readme?ref=main`;
        } 
        else {
            if (readmeFileName != '') 
                apiUrl = `https://api.github.com/repos/${username}/${repo}/${readmeFileName}?ref=main`;
            else
                apiUrl = `https://api.github.com/repos/${username}/${repo}/readme?ref=main`;
        }
        fetch(apiUrl, {
            headers: {
                Accept: 'application/vnd.github.v3.html',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch README');
                }
                return response.text();
            })
            .then(html => {
                // Define the note markdown as a string
                const noteMarkdown = `
                <blockquote style='padding:10px;font-size:1.1rem;'>
                    <p><strong>NOTE</strong></p>
                    <p>Below content is rendered from <a href='https://github.com/${username}/${repo}/blob/main/README.md'>https://github.com/${username}/${repo}/blob/main/README.md</a></p>
                    <p></p>
                </blockquote>
                `;
                    

                // Prepend the note markdown to the fetched README content
                const combinedContent = noteMarkdown + html;

                // Update the state with the combined content
                setReadmeContent(combinedContent);
            })
            .catch(err => console.error('Error fetching README:', err));
    }, [repo, username]);

    // Render the HTML content
    return <div dangerouslySetInnerHTML={{ __html: readmeContent }} />;
}

export default GitHubReadme;