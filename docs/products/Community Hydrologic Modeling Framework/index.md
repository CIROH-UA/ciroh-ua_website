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

<a class="button button--active button--primary" style={{'margin-right':'1.3rem','margin-bottom':'1.3rem'}}  href="/docs/products/Community%20Hydrologic%20Modeling%20Framework/nextgeninaboxDocker/workflow">Get started with NGIAB</a>
<a class="button button--active button--primary" style={{'margin-right':'1.3rem','margin-bottom':'1.3rem'}}  href="/news">Community NextGen News</a>

---

## NGIAB Platforms at a Glance

Click the buttons below to open/close their panels.

import FoldableButton from "@site/src/components/foldable.js"




<FoldableButton text="Platform Status">
  <table>
    <thead>
      <tr>
        <th><a href="/docs/products/Community Hydrologic Modeling Framework/ngiabpreprocessor/">Data Preprocess</a></th>
        <th>
          <p style={{'margin':'0'}}>NGIAB Implementation (<a href="/docs/products/Community Hydrologic Modeling Framework/nextgeninaboxDocker/">Cloud</a>)</p>
        </th>
        <th>
          <p style={{'margin':'0'}}>NGIAB Implementation (<a href="/docs/products/Community Hydrologic Modeling Framework/nextgeninaboxSingularity/">HPC</a>)</p>
        </th>
        <th><a href="/docs/products/Evaluation Tools/rtiteehr/">TEEHR Evaluation</a></th>
        <th><a href="/docs/products/Visualization and Analysis Tools/tethys-cses/">Data Visualizer</a></th>
        <th><a href="/docs/products/Community Hydrologic Modeling Framework/nextgenDatastream/">DataStreamCLI</a></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td>
          <a href="https://github.com/CIROH-UA/NGIAB-CloudInfra/blob/main/README.md">
            <img src="https://github.com/CIROH-UA/NGIAB-CloudInfra/actions/workflows/docker_image_main_branch.yml/badge.svg" alt="NGIAB-CloudInfra status" />
          </a>
        </td>
        <td></td>
        <td></td>
        <td>
          <a href="https://github.com/CIROH-UA/Tethys-CSES/blob/main/README.md">
            <img src="https://camo.githubusercontent.com/02c8977bdb708eb0580786ed92a3b28030e4e1fd640642ce3cdedabade7e9088/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c616e6775616765732f746f702f77686974656c696768746e696e673435302f436f6d6d756e6974792d53747265616d666c6f772d4576616c756174696f6e2d53797374656d3f7374796c653d706c6173746963" alt="Data Visualizer Jupyter Notebook status" />
          </a>
        </td>
        <td>
          <a href="https://github.com/CIROH-UA/ngen-datastream/blob/main/STATUS.md">
            <img src="https://github.com/CIROH-UA/ngen-datastream/actions/workflows/test_datastream_options.yaml/badge.svg" alt="DataStream status" />
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</FoldableButton>

<FoldableButton text="Key Features">
  <table>
    <thead>
      <th>Platform</th>
      <th>Key features</th>
      <th>NOAA-OWP Tools/Libraries Utilized</th>
    </thead>
    <tbody>
      <tr>
      <th><a href="/docs/products/Community Hydrologic Modeling Framework/ngiabpreprocessor/">Data Preprocess</a></th>
      <td>
        - Specializes in initial data preparation
        - Handles subsetting and forcing processing
        - Supports basic data processing tasks
        - Helps with running NGIAB
      </td>
      <td>
        - t-route
        - htdrotools
        - hydrofabric tools
      </td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <th>
          <p style={{'margin':'0'}}>NGIAB Implementation</p>
          <p style={{'margin':'0'}}>(<a href="/docs/products/Community Hydrologic Modeling Framework/nextgeninaboxDocker/">Cloud</a>, <a href="/docs/products/Community Hydrologic Modeling Framework/nextgeninaboxSingularity/">HPC</a>)</p>
        </th>
        <td>
          - Focused specifically on model execution
          - Core engine for running simulations
          - Does not handle pre/post-processing tasks
        </td>
        <td> </td>
      </tr>
      <tr>
        <th><a href="/docs/products/Evaluation Tools/rtiteehr/">TEEHR Evaluation</a></th>
        <td>
          - Handles both input and output processing
          - Supports full workflow, from data preparation to cloud deployment
        </td>
        <td>
          Built to evaluate OWP model outputs
        </td>
      </tr>
      <tr>
        <th><a href="/docs/products/Visualization and Analysis Tools/tethys-cses/">Data Visualizer</a></th>
        <td>
          - Focused on analysis and validation
          - Supports data processing and output analysis
        </td>
        <td>
          Designed for OWP hydrofabric visualization
        </td>
      </tr>
      <tr>
        <th><a href="/docs/products/Community Hydrologic Modeling Framework/nextgenDatastream/">DataStreamCLI</a></th>
        <td>
          - Specialized in visualization tasks
          - Supports output analysis
          - Visual representation of results
        </td>
        <td>
          - ngen-cal
          - t-route
          - hydrofabric tools
        </td>
      </tr>
    </tbody>
  </table>
</FoldableButton>

<FoldableButton text="Capabilities">
  <table>
    <thead>
      <tr>
        <th>Capability</th>
        <th><a href="/docs/products/Community Hydrologic Modeling Framework/ngiabpreprocessor/">Data Preprocess</a></th>
        <th><a href="/docs/products/Evaluation Tools/rtiteehr/">TEEHR Evaluation</a></th>
        <th><a href="/docs/products/Visualization and Analysis Tools/tethys-cses/">Data Visualizer</a></th>
        <th><a href="/docs/products/Community Hydrologic Modeling Framework/nextgenDatastream/">DataStreamCLI</a></th>
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
</FoldableButton>

<FoldableButton text="Access Methods">
  <table>
    <thead>
      <tr>
        <th>Access method</th>
        <th><a href="/docs/products/Community Hydrologic Modeling Framework/ngiabpreprocessor/">Data Preprocess</a></th>
        <th>
          <p style={{'margin':'0'}}>NGIAB Implementation</p>
          <p style={{'margin':'0'}}>(<a href="/docs/products/Community Hydrologic Modeling Framework/nextgeninaboxDocker/">Cloud</a>, <a href="/docs/products/Community Hydrologic Modeling Framework/nextgeninaboxSingularity/">HPC</a>)</p>
        </th>
        <th><a href="/docs/products/Evaluation Tools/rtiteehr/">TEEHR Evaluation</a></th>
        <th><a href="/docs/products/Visualization and Analysis Tools/tethys-cses/">Data Visualizer</a></th>
        <th><a href="/docs/products/Community Hydrologic Modeling Framework/nextgenDatastream/">DataStreamCLI</a></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Docker</td>
        <td>-</td>
        <td>✓</td>
        <td>✓</td>
        <td>✓</td>
        <td>✓</td>
      </tr>
      <tr>
        <td>Python Package (pip)</td>
        <td>✓</td>
        <td>✓</td>
        <td>✓</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Web Interface</td>
        <td>✓</td>
        <td>-</td>
        <td>-</td>
        <td>✓</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Notebook (ipynb)</td>
        <td>-</td>
        <td>-</td>
        <td>✓</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Singularity (HPC)</td>
        <td>-</td>
        <td>✓</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </tbody>
  </table>
</FoldableButton>