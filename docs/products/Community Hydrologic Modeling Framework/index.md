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

## NGIAB Tools at a Glance

import FoldableButton from "@site/src/components/foldable.js"

<FoldableButton text="Key Features">
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
    <tbody>
        <tr>
        <th>Key Features</th>
        <td>
            - Specializes in initial data preparation
            - Handles subsetting and forcing processing
            - Supports basic data processing tasks
            - Helps with running NGIAB
        </td>
        <td>
            - Focused specifically on model execution
            - Core engine for running simulations
            - Does not handle pre/post-processing tasks
        </td>
        <td>
            - Handles both input and output processing
            - Supports full workflow, from data preparation to cloud deployment
        </td>
        <td>
            - Focused on analysis and validation
            - Supports data processing and output analysis
        </td>
        <td>
            - Specialized in visualization tasks
            - Supports output analysis
            - Visual representation of results
        </td>
        </tr>
        <tr>
        <th>NOAA-OWP Tools/Libraries Utilized</th>
        <td>
            - t-route
            - htdrotools
            - hydrofabric tools
        </td>
        <td>
        </td>
        <td>
            Built to evaluate OWP model outputs
        </td>
        <td>
            Designed for OWP hydrofabric visualization
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
</FoldableButton>

<FoldableButton text="Access Methods">
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

---

## List of NGAIB Tools

import DocCardList from '@theme/DocCardList';

<DocCardList />
