import React, { useState } from 'react';
import { useCollapse } from "react-collapsed";

const AccessSection = ({ display }) => {
    return (
        <section style={{'display': display ? 'block' : 'none'}}>
            <table>
                <thead>
                <tr>
                    <th>Access method</th>
                    <th><a href="/docs/products/Community Hydrologic Modeling Framework/ngiabpreprocessor/">Data Preprocess</a></th>
                    <th>
                    <p style={{'margin':'0'}}>NGIAB Implementation</p>
                    <p style={{'margin':'0'}}>(<a href="/docs/products/Community Hydrologic Modeling Framework/nextgeninaboxDocker/">Cloud</a>, <a href="/docs/products/Community Hydrologic Modeling Framework/nextgeninaboxSingularity/">HPC</a>)</p>
                    </th>
                    <th><a href="/docs/products/Community Hydrologic Modeling Framework/nextgeninaboxTeehr/">TEEHR Evaluation</a></th>
                    <th><a href="/docs/products/Community Hydrologic Modeling Framework/nextgeninaboxVisualizer/">Data Visualizer</a></th>
                    <th><a href="/docs/products/Community Hydrologic Modeling Framework/nextgenDatastream/">DataStreamCLI</a></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Docker (cloud)</td>
                    <td>-</td>
                    <td>✅</td>
                    <td>✅</td>
                    <td>✅</td>
                    <td>✅</td>
                </tr>
                <tr>
                    <td>Python Package (pip)</td>
                    <td>✅</td>
                    <td>✅</td>
                    <td>✅</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Web Interface</td>
                    <td>✅</td>
                    <td>-</td>
                    <td>-</td>
                    <td>✅</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Notebook (ipynb)</td>
                    <td>-</td>
                    <td>-</td>
                    <td>✅</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Singularity (HPC)</td>
                    <td>-</td>
                    <td>✅</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                </tbody>
            </table>
        </section>
    );
}

export default AccessSection;