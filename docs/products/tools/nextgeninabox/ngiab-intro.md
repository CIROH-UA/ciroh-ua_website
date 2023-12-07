---
sidebar_position: 2
title: "Introduction"
description: "NextGen In a Box (NGIAB)"
tags:
  - NextGen In A Box
  - NGIAB
  - NextGen framework
  - National Water Model
  - national water center
---

# NextGen In A Box (NGIAB)

Experience the simplicity of NextGen framework-based simulations with NextGen In A Box!
<p align="center">
<img src="/img/NGIABLogoWithoutText-Transparant.png" alt="NGIAB Logo" style={{'width':'50%', 'height':'50%'}}/>
</p>

[![GitHub for NGIAB using Docker](https://img.shields.io/badge/GitHub-Docker-blue?style=for-the-badge&logo=github)](https://github.com/CIROH-UA/NGIAB-CloudInfra/)
[![GitHub for NGIAB using Singularity](https://img.shields.io/badge/GitHub-Singularity-blue?style=for-the-badge&logo=github)](https://github.com/CIROH-UA/Ngen-Singularity)


- "NextGen In a Box" (NGIAB) is a containerized version of the NextGen National Water Resources Modeling Framework.
- The project's key achievement is the development and distribution of NGIAB, which makes the NextGen framework more accessible to the research community.
- NGIAB enhances research infrastructure and promotes the integration of the NextGen Framework.
- The project includes training sessions for researchers to work more efficiently with the NextGen framework.
- NGIAB is a a community version of the National Water Model (NWM). CIROH, in collaboration with Lynker, is establishing the processes, protocols, and research infrastructure that bridges the academic and research community with NOAA's National Water Center's NextGen National Water Resources Modeling Framework (NextGen Framework).
- It is a community version, allowing the NextGen framework to run on local machines for watersheds of any size.

## Explore Our Case Study:

#### NWM Run for Sipsey Fork, Black Warrior River

- Avoid running the entire CONUS.
- Run NextGen locally.
- Gain control over inputs and configurations.
- The solution is "NextGen In A Box."

## Case Study Map for the Sipsey Fork, Black Warrior River, AL

![AGU_113060_03W_002](https://github.com/CIROH-UA/ciroh-ua_website/assets/28275758/dbe5e070-718e-498d-add9-855cdeecdacc)

## How to Generate Your Own Input Data?
Follow the steps in our [ngen datastream repository](https://github.com/CIROH-UA/ngen-datastream/tree/main)

## How to Run the NGIAB with Your Sample Input Data?

Follow the steps in our [Run Guide](https://github.com/CIROH-UA/NGIAB-CloudInfra/blob/main/README.md)
For Singularity, follow the steps in our [Run Guide](https://github.com/CIROH-UA/NGIAB-Singularity/blob/main/README.md)

## Output Plot of the NGIAB Case Study

Using the *flowveldepth.csv files from the 'outputs' folder, the streamflow at the Clear Creek gauge (USGS site ID 02450825) is displayed here. Below is the 'Modelled' vs 'Observed' plot generated in MS Excel after *flowveldepth.csv files are post-processed using Python.

![image](https://github.com/shahab122/NGIAB-CloudInfra/assets/28275758/58aaf351-8bb5-4b61-9f84-d9dd520053e5)

## Understanding the NGIAB CI Pipeline

![NGIAB CI](/img/ngiab-ci.jpg)

## Dependencies: NGIAB, NGEN, and T-Route

Learn how NGIAB relies on NGEN and T-Route with this visual guide.

![NGIAB Dependencies](/img/ngiab-ngen-deps.jpg)

# Contribute to CIROH-UA/NGIAB-CloudInfra

To contribute, follow the steps outlined in our [Contribution Guide](https://github.com/CIROH-UA/NGIAB-CloudInfra/blob/main/contribute.md)

## Technologies We Use

Our stack includes:

- Git
- GitHub
- GitHub Actions (CI/CD)
- Docker
- DockerHub
- AWS S3 for storing input data.

## Access Our Code

The source code for NextGen In A Box can be found on GitHub:

- GitHub Repository: [CIROH-UA/NGIAB-CloudInfra](https://github.com/CIROH-UA/NGIAB-CloudInfra)

You can also find our Docker images on:

- DockerHub: [Dockerhub - NGIAB](https://hub.docker.com/u/awiciroh)

## Report Bugs and Issues

If you encounter any problems, please report them on our GitHub Issues page:

- Issue Tracker: [Issue Tracker](https://github.com/CIROH-UA/CloudInfra/issues/)

## Meet Our Team

Our dedicated team members include:

- **The University of Alabama Team:** [Arpita Patel](https://dev.awi.ua.edu/about/staff/arpita-patel/), Dr. James Halgren, [Dr. Puri Bangalore](https://eng.ua.edu/eng-directory/dr-purushotham-bangalore/), [Dr. Jeff Carver](http://carver.cs.ua.edu/), Benjamin Lee, [Dr. Sepehr Karimiziarani](https://dev.awi.ua.edu/about/staff/sepehr-karimiziarani-ph-d/), [Dr. Shahab Alam](https://dev.awi.ua.edu/about/staff/md-shahabul-alam-ph-d/), Trupesh Patel, Josh Cunningham, Hari Jajula, Rohan Sunkarapalli, Manjiri Gunaji, [Dr. Steve Burian](https://eng.ua.edu/eng-directory/dr-steven-burian/)

- **Lynker Contractors:** Zach Wills, Nels Frazier, Jordan Laser, Mike Johnson, Josh Sturtevant
