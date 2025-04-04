import React from 'react';
import { Link } from 'react-router-dom'

const AccessSection = ({ display }) => {
    return (
        <section style={{'display': display ? 'block' : 'none'}}>
            <table>
                <thead>
                <tr>
                    <th>Access method</th>
                    <th><Link to="/docs/products/Community Hydrologic Modeling Framework/ngiabpreprocessor/">Data Preprocess</Link></th>
                    <th>
                    <p style={{'margin':'0'}}>NGIAB Implementation</p>
                    <p style={{'margin':'0'}}>(<Link to="/docs/products/Community Hydrologic Modeling Framework/nextgeninaboxDocker/">Cloud</Link>, <Link to="/docs/products/Community Hydrologic Modeling Framework/nextgeninaboxSingularity/">HPC</Link>)</p>
                    </th>
                    <th><Link to="/docs/products/Community Hydrologic Modeling Framework/nextgeninaboxTeehr/">TEEHR Evaluation</Link></th>
                    <th><Link to="/docs/products/Community Hydrologic Modeling Framework/nextgeninaboxVisualizer/">Data Visualizer</Link></th>
                    <th><Link to="/docs/products/Community Hydrologic Modeling Framework/nextgenDatastream/">DataStreamCLI</Link></th>
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