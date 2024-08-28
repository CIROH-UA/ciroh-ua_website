---
title: "CIROH Research Case Studies"
description: "August Monthly Blog Update"
slug: August Monthly Blog Update

tags: [ciroh, tuscaloosa, 2i2c, gcp, gpu, si, reu, bigquery, api, aws, nsf access]
hide_table_of_contents: false
---

This month, we are excited to showcase three case studies that utilized our cyberinfrastructure tools and services. These case studies demonstrate how CIROH's cyberinfrastructure is being utilized to support hydrological research and operational advancements.



## 1. Integrated Evaluation System Prototype for Testing Research and Operational Advancements

- **PI** : Katie van Wekhoven
- **Co-PI** : Matt Denno (Development Lead)
- **Developer** : Sam Lamont

### Project Overview:

This project aims to create a set of tools (and system) for hydrologic model and forecast evaluation that are scalable and flexible for the wide range of use cases and users, that enable highly exploratory evaluation, and that foster open community development.
<span className="hero-image" style={{ textAlign: 'center' }}>
        <img src="/img/teehr-image.png" alt="teehr image" style={{ width: '40%' }} />
</span>

### Contribution to CIROH: 

- **TEEHR-HUB**: It is a JupyterHub environment, running the TEEHR image, with AWS services (EFS and S3) to provide a scalable platform for hydrologic research.
- **Data Processing**: TEEHR-HUB has successfully processed the AORC (v3.0 retrospective) gridded precipitation data to the MERIT basins, as well as the CONUS 40-year retrospective (v3.0 and USGS).
- **Testbed Integration**: TEEHR-HUB’s compatibility with various testbeds allows researchers to experiment with different hydrologic models and datasets.

### Infrastructure Utilized: 

- **Elastic Kubernetes Service (EKS)** (including supporting AWS services) - Scalable computing resources to host JupyterHub Dask and Spark
- **Elastic File System (EFS)** - Shared data drive for cached data and shared documents (notebooks, etc.)
- **Simple Storage Service (S3)** - Bucket storage for large public and private datasets

## NextGen Water Modeling Framework Datastream
<span className="hero-image" style={{ textAlign: 'center' }}>
        <img src="https://github.com/CIROH-UA/ngen-datastream/blob/main/docs/images/ngen-datastream.jpg?raw=true" alt="ngen-datastream image" style={{ width: '80%' }} />
</span>
### Overview:

ngen-datastream builds and validates input data for NextGen, executes NextGen through NextGen In A Box (NGIAB), and handles output. It offers a flexible and scalable solution to run NextGen in an efficient manner.


### Contribution to CIROH: 

- **Automation**: It automates the process of collecting, formatting, and validating input data for NextGen, streamlining model preparation.
- **Flexibility**: It allows users to provide their own input files to run NextGen.
- **Scalable Infrastructure**: It utilizes AWS state machine to provide access to high-performance computing (HPC) resources.


### Infrastructure Utilized: 

- **Elastic Compute Cloud (EC2)**
- **Simple Storage Service (S3)** 
- **Elastic Kubernetes Service (EKS)** 
- **AWS Lamda and Step Functions**


## 3. Community Streamflow Evaluation System (CSES)

<span className="hero-image" style={{ textAlign: 'center' }}>
        <img src="https://portal.ciroh.org/t/static/community_streamflow_evaluation_system/images/CSESoverviewImage.JPG" alt="cses image" style={{ width: '70%' }} />
</span>

### Project Overview:
**CSES** is a model evaluation platform designed to lower the barrier for researchers and end-users in assessing hydrological models.

**CSES** provides a:
- Model agnostic evaluation framework
- Research-oriented version for developers
- Web-based version for end-users
- Interactive model evaluation and analysis



### Contribution to CIROH: 

- It is a centralized location for all CIROH model evaluation tools.
- It is a framework for sharing CIROH Streamflow prediction advancements with the greater hydrological community.
- CSES-Python supports developers assess the model skill from different modeling formulations - regionally dominate hydrology.
- CSES Web-App provides a platform to share modeling advancements with the hydrological community - researchers to end users.



### Infrastructure Utilized: 

- **Elastic Compute Cloud (EC2)**
- **Simple Storage Service (S3)** 
- **UA Pantarhei HPC**
- **CIROH JupyterHub** 
