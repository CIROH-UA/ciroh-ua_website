import React, { useEffect, useState } from 'react';

function GitHubReadme({ repo, username, subfolder = '', readmeFileName = '' }) {
    const [readmeContent, setReadmeContent] = useState('');

    const convertRelativePaths = (html, baseUrl) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Convert image sources
        doc.querySelectorAll('img[src]').forEach(img => {
            const src = img.getAttribute('src');
            if (!src.startsWith('http')) {
                const relativePath = src.replace(/^\//, '');
                img.src = `https://github.com/${username}/${repo}/raw/main/${subfolder ? subfolder + '/' : ''}${relativePath}`;
            }
        });

        // Convert anchor href attributes
        doc.querySelectorAll('a[href]').forEach(anchor => {
            const href = anchor.getAttribute('href');
            if (href && !href.startsWith('http') && !href.startsWith('#')) {
                const relativePath = href.replace(/^\//, '');
                anchor.href = `https://github.com/${username}/${repo}/blob/main/${subfolder ? subfolder + '/' : ''}${relativePath}`;
            }
        });

        return doc.body.innerHTML;
    };

    useEffect(() => {
        // Construct the GitHub API URL to fetch the README as HTML
        let apiUrl = '';
        if (subfolder !== '') {
            if (readmeFileName !== '') 
                apiUrl = `https://api.github.com/repos/${username}/${repo}/contents/${subfolder}/${readmeFileName}?ref=main`;
            else
                apiUrl = `https://api.github.com/repos/${username}/${repo}/contents/${subfolder}/readme?ref=main`;
        } 
        else {
            if (readmeFileName !== '') 
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
                // Convert relative paths to absolute
                const processedHtml = convertRelativePaths(html);

                // Define the note markdown as a string
                const noteMarkdown = `
                <blockquote style='padding:10px;font-size:1.1rem;'>
                    <p><strong>NOTE</strong></p>
                    <p>Below content is rendered from <a href='https://github.com/${username}/${repo}/blob/main/README.md'>https://github.com/${username}/${repo}/blob/main/README.md</a></p>
                    <p></p>
                </blockquote>
                `;

                // Prepend the note markdown to the processed README content
                const combinedContent = noteMarkdown + processedHtml;

                // Update the state with the combined content
                setReadmeContent(combinedContent);
            })
            .catch(err => console.error('Error fetching README:', err));
    }, [repo, username, subfolder, readmeFileName]);

    // Render the HTML content
    return <div dangerouslySetInnerHTML={{ __html: readmeContent }} />;
}

export default GitHubReadme;