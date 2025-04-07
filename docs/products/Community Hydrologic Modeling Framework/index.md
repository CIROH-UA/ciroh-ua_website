---
sidebar_position: 2
title: "Community Hydrologic Modeling"
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

import { Link } from 'react-router-dom'
import useBaseUrl from '@docusaurus/useBaseUrl'

Community NextGen is a community-accessible version of the NextGen Water Resources Modeling Framework ([NextGen](https://github.com/NOAA-OWP/ngen)). It provides hydrologists and researchers with powerful modeling capabilities through simplified deployment options:

### Deployment Options
- **Cloud infrastructure** via docker-based [NGIAB-CloudInfra](https://github.com/CIROH-UA/NGIAB-CloudInfra/blob/main/README.md)
- **High-performance computing** using singularity-based [NGIAB-HPCInfra](https://github.com/CIROH-UA/NGIAB-HPCInfra/blob/main/README.md)

### Essential Components
NGIAB integrates several powerful tools:
- [**Data Preprocess**](https://github.com/CIROH-UA/NGIAB_data_preprocess/blob/main/README.md): Simplifies data preparation through an interactive map interface and command line tools
- [**TEEHR Evaluation**](https://github.com/CIROH-UA/ngiab-teehr/blob/main/README.md): Provides comprehensive model evaluation capabilities
- [**Data Visualizer**](https://github.com/CIROH-UA/ngiab-client): Delivers sophisticated geospatial and time series visualization
- [**DataStreamCLI**](https://github.com/CIROH-UA/ngen-datastream/blob/main/README.md): Manages data streams for model input/output

NGIAB and extensions are to make advanced hydrological modeling accessible to the broader community while maintaining the computational power needed for complex water resource simulations.


<div class="darkImage" style={{'margin-right':'1.3rem','margin-bottom':'1.3rem'}}><img src={useBaseUrl("/img/NGIAB-extensions-diagram-dark.png")} /></div>
<div class="lightImage" style={{'margin-right':'1.3rem','margin-bottom':'1.3rem'}}><img src={useBaseUrl("/img/NGIAB-extensions-diagram-light.png")} /></div>

<Link class="button button--active button--primary" style={{'margin-right':'1.3rem','margin-bottom':'1.3rem'}} to="/docs/products/Community%20Hydrologic%20Modeling%20Framework/nextgeninaboxDocker/workflow">Get started with NGIAB on local machine</Link>

<Link class="button button--active button--primary" style={{'margin-right':'1.3rem','margin-bottom':'1.3rem'}} to="/docs/products/Community%20Hydrologic%20Modeling%20Framework/nextgeninaboxDocker/workflow-cloud">Get started with NGIAB using CIROH JupyterHub</Link>

<Link class="button button--active button--primary" style={{'margin-right':'1.3rem','margin-bottom':'1.3rem'}} to="/news">Community NextGen News</Link>

---

## NGIAB at a Glance

Explore NextGen In A Box (NGIAB) and extensions through interactive tabs below.

Click on Key Features, Capabilities, or Access Methods to learn more.

import PlatformModal from "@site/src/components/products/platform-modal.jsx"

<PlatformModal />