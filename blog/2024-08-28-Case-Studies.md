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

The goal of this project is to investigate, design, and build a prototype hydrologic model/forecast evaluation system (TEEHR) that will significantly improve our ability to evaluate continental-scale datasets and will provide a robust and consistent evaluation tool for CIROH and OWP research. Design priorities include easy integration into common research workflows, rapid execution of large-scale evaluations, simplified exploration of performance trends and drivers, inclusion of common and emergent evaluation methods, efficient data structures, open-source and community development, and easy extensibility.


<span className="hero-image" style={{ textAlign: 'center' }}>
        <img src="/img/teehr-image.png" alt="teehr image" style={{ width: '40%' }} />
</span>

### Contribution to CIROH: 

- **TEEHR-HUB**: It is a JupyterHub environment, running the TEEHR image, with AWS services (EFS and S3) to provide a scalable platform for hydrologic research.
- **Data Processing**: TEEHR-HUB has successfully processed the AORC (v3.0 retrospective) gridded precipitation data to the MERIT basins, as well as the CONUS 40-year retrospective (v3.0 and USGS).
- **Testbed Integration**: TEEHR-HUB’s compatibility with various testbeds allows researchers to experiment with different hydrologic models and datasets.
- **Evaluation** - TEEHR is being used (or is planned for use) by several CIROH research teams to evaluate large scale model results.

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
- **AWS Lamda and Step Functions**

