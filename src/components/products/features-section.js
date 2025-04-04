import React from 'react';
import { Link } from 'react-router-dom'

const FeaturesSection = ({ display }) => {
    return (
        <section style={{'display': display ? 'block' : 'none'}}>
            <table>
                <thead>
                    <th>NGIAB and Extensions</th>
                    <th>Key features</th>
                    <th>NOAA-OWP Tools/Libraries Utilized</th>
                </thead>
                <tbody>
                    <tr>
                        <th><Link to="/docs/products/Community Hydrologic Modeling Framework/ngiabpreprocessor/">Data Preprocess</Link></th>
                        <td>
                            <ul>
                                <li>Specializes in initial data preparation</li>
                                <li>Handles subsetting and forcing processing</li>
                                <li>Supports basic data processing tasks</li>
                                <li>Helps with running NGIAB</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>t-route</li>
                                <li>htdrotools</li>
                                <li>hydrofabric tools</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <p style={{'margin':'0'}}>NGIAB Implementation</p>
                            <p style={{'margin':'0'}}>(<Link to="/docs/products/Community Hydrologic Modeling Framework/nextgeninaboxDocker/">Cloud</Link>, <Link to="/docs/products/Community Hydrologic Modeling Framework/nextgeninaboxSingularity/">HPC</Link>)</p>
                        </th>
                        <td>
                            <ul>
                                <li>Focused specifically on model execution</li>
                                <li>Core engine for running simulations</li>
                                <li>Does not handle pre/post-processing tasks</li>
                            </ul>
                        </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <th><Link to="/docs/products/Community Hydrologic Modeling Framework/nextgeninaboxTeehr/">TEEHR Evaluation</Link></th>
                        <td>
                            <ul>
                                <li>Handles both input and output processing</li>
                                <li>Supports full workflow, from data preparation to cloud deployment</li>
                            </ul>
                        </td>
                        <td>
                            Built to evaluate OWP model outputs
                        </td>
                    </tr>
                    <tr>
                        <th><Link to="/docs/products/Community Hydrologic Modeling Framework/nextgeninaboxVisualizer/">Data Visualizer</Link></th>
                        <td>
                            <ul>
                                <li>Focused on analysis and validation</li>
                                <li>Supports data processing and output analysis</li>
                            </ul>
                        </td>
                        <td>
                            Designed for OWP hydrofabric visualization
                        </td>
                    </tr>
                    <tr>
                        <th><Link to="/docs/products/Community Hydrologic Modeling Framework/nextgenDatastream/">DataStreamCLI</Link></th>
                        <td>
                            <ul>
                                <li>Specialized in visualization tasks</li>
                                <li>Supports output analysis</li>
                                <li>Visual representation of results</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>ngen-cal</li>
                                <li>t-route</li>
                                <li>hydrofabric tools</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

export default FeaturesSection;