---
sidebar_position: 2
title: "Community Hydrologic Modeling Framework"
description: "Community NextGen"
tags:
  - NextGen In A Box
  - NGIAB
  - NextGen framework
  - National Water Model
  - national water center
  - docker
  - NextGen
  - ngen-datastream
  - NGIAB-preprocessor
  - Data Visualizer
  - Singularity
---

Community NextGen is a community-accessible verison of NextGen Water Resources Modeling Framework ([NextGen](https://github.com/NOAA-OWP/ngen)). It simplifies deployment with a one-click containerization. NGIAB offers both Docker-based cloud infrastructure ([NGIAB-CloudInfra](https://github.com/CIROH-UA/NGIAB-CloudInfra/blob/main/README.md)) and Singularity-based high-performance computing ([NGIAB-HPCInfra](https://github.com/CIROH-UA/NGIAB-HPCInfra/blob/main/README.md)). NGIAB includes essential tools such as [Data Preprocess](https://github.com/CIROH-UA/NGIAB_data_preprocess/blob/main/README.md), which simplifies data preparation with its interactive map, and [Data Visualizer](https://github.com/CIROH-UA/ngiab-client), which provides geospatial and time series visualization. With [NextGen Datastream](https://github.com/CIROH-UA/ngen-datastream/blob/main/README.md) you can build and validate NextGen input packages, execute NextGen through NGIAB and version the entire run for reproducibility.

<a class="button button--active button--primary" style={{'margin-right':'1.3rem','margin-bottom':'1.3rem'}}  href="https://docs.ciroh.org/docs/products/Community%20Hydrologic%20Modeling%20Framework/nextgeninaboxDocker/workflow">Get started with NGIAB</a>
<a class="button button--active button--primary" style={{'margin-right':'1.3rem','margin-bottom':'1.3rem'}}  href="https://docs.ciroh.org/news">Community NextGen News</a>

---

## NGIAB Tools at a Glance

<table>
  <thead>
    <tr>
      <th></th>
      <th>Data Preprocess</th>
      <th>NGIAB Implementation</th>
      <th>TEEHR Evaluation</th>
      <th>Data Visualizer</th>
      <th>DataStreamCLI</th>
    </tr>
  </thead>
  <tbody style={{'text-align':'left'}}>
    <tr>
      <th>Key Features</th>
      <th>
        - Specializes in initial data preparation
        - Handles subsetting and forcing processing
        - Supports basic data processing tasks
        - Helps with running NGIAB
      </th>
      <th>
        - Focused specifically on model execution
        - Core engine for running simulations
        - Does not handle pre/post-processing tasks
      </th>
      <th>
        - Handles both input and output processing
        - Supports full workflow, from data preparation to cloud deployment
      </th>
      <th>
        - Focused on analysis and validation
        - Supports data processing and output analysis
      </th>
      <th>
        - Specialized in visualization tasks
        - Supports output analysis
        - Visual representation of results
      </th>
    </tr>
    <tr>
      <th>NOAA-OWP Tools/Libraries Utilized</th>
      <th>
        - t-route
        - htdrotools
        - hydrofabric tools
      </th>
      <th>
      </th>
      <th>
        Built to evaluate OWP model outputs
      </th>
      <th>
        Designed for OWP hydrofabric visualization
      </th>
      <th>
        - ngen-cal
        - t-route
        - hydrofabric tools
      </th>
    </tr>
  </tbody>
</table>


<table>
  <thead>
    <tr>
      <th>Capability</th>
      <th>Data Preprocess</th>
      <th>TEEHR Evaluation</th>
      <th>Data Visualizer</th>
      <th>DataStreamCLI</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GUI</td>
      <td>✓</td>
      <td>-</td>
      <td>✓</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Hydrofabric Subsetting</td>
      <td>✓</td>
      <td>-</td>
      <td>✓ (view only)</td>
      <td>✓🔨</td>
    </tr>
    <tr>
      <td>NetCDF Forcing Processing</td>
      <td>-</td>
      <td>✓</td>
      <td>-</td>
      <td>✓🔨</td>
    </tr>
    <tr>
      <td>Zarr Forcing Processing</td>
      <td>✓</td>
      <td>✓</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Forcing Metadata Generation</td>
      <td>✓</td>
      <td>-</td>
      <td>-</td>
      <td>✓🔨</td>
    </tr>
    <tr>
      <td>NextGen BMI Configuration File Generation</td>
      <td>✓</td>
      <td>-</td>
      <td>-</td>
      <td>✓🔨</td>
    </tr>
    <tr>
      <td>Directory and File Format Validation</td>
      <td>🔨</td>
      <td>-</td>
      <td>-</td>
      <td>✓🔨</td>
    </tr>
    <tr>
      <td>NextGen Execution via NGIAB</td>
      <td>✓</td>
      <td>-</td>
      <td>-</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>Execution Metadata Generation</td>
      <td>🔨</td>
      <td>-</td>
      <td>-</td>
      <td>✓🔨</td>
    </tr>
    <tr>
      <td>Calibration</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Evaluation</td>
      <td>-</td>
      <td>✓🔨</td>
      <td>🔨 (displays TEEHR results)</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>Visualization</td>
      <td>-</td>
      <td>🔨 (metrics visualization)</td>
      <td>✓</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th>Access method</th>
      <th>Data Preprocess</th>
      <th>NGIAB Implementation</th>
      <th>TEEHR Evaluation</th>
      <th>Data Visualizer</th>
      <th>DataStreamCLI</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Docker</th>
      <th>-</th>
      <th>✓</th>
      <th>✓</th>
      <th>✓</th>
      <th>✓</th>
    </tr>
    <tr>
      <th>Python Package (pip)</th>
      <th>✓</th>
      <th>✓</th>
      <th>✓</th>
      <th>-</th>
      <th>-</th>
    </tr>
    <tr>
      <th>Web Interface</th>
      <th>✓</th>
      <th>-</th>
      <th>-</th>
      <th>✓</th>
      <th>-</th>
    </tr>
    <tr>
      <th>Notebook (ipynb)</th>
      <th>-</th>
      <th>-</th>
      <th>✓</th>
      <th>-</th>
      <th>-</th>
    </tr>
    <tr>
      <th>Singularity (HPC)</th>
      <th>-</th>
      <th>✓</th>
      <th>-</th>
      <th>-</th>
      <th>-</th>
    </tr>
  </tbody>
</table>

---

## List of NGAIB Tools

import DocCardList from '@theme/DocCardList';

<DocCardList />
