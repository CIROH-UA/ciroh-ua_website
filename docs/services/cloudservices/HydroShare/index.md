---
sidebar_position: 4
title: "HydroShare and CIROH JupyterHub Integration"
description: "HydroShare and CIROH JupyterHub Integration"
tags:
  - 2i2c
  - JupyterHub
  - GCP
  - notebook
  - hydroshare
---

# CIROH JupyterHub via HydroShare

HydroShare is a repository, website, and hydrologic information system for sharing hydrologic data and models aimed at giving users the cyberinfrastructure needed to innovate and collaborate in research to solve water problems.

<a class="button button--active button--primary" href="https://www.hydroshare.org">HydroShare Homepage</a>

## HydroShare and CIROH JupyterHub Integration

Users now have the capability to directly launch and execute computational notebooks from HydroShare resources into the CIROH Jupyterhub environments. Here's how to get started:

1. First, confirm that you have access to the CIROH Jupyterhub. If not, follow [these steps](/docs/services/access#accessing-ciroh-jupyterhub)

2. CIROH Jupyterhub is an approved app, and appears on https://www.hydroshare.org/apps/. Navigate to this page to access it directly, or select it from the "Open with" list on any resource that you have access to containing a Jupyter notebook. 

3. In CIROH JupyterHub, click on the "Login to continue" button. Select one of the server options that is appropriate for the analysis you need to run (small, medium, large, or huge), as well as the "New Pangeo Notebook" base image. Then, click the "Start" button to launch your server.

<p align="center">
<img src="/img/hydroshare.png" alt="HydroShare 2i2c Image" style={{'width':'80%', 'height':'50%'}}/>
</p>

<p align="center">
<img src="/img/hydroshare-1.png" alt="HydroShare 2i2c Image" style={{'width':'80%', 'height':'50%'}}/>
</p>
-----

4. You will now be inside the CIROH JupyterHub. All of the files from your HydroShare resource will appear in the file browser on the left, including any notebooks that were in your resource. Double click on a notebook to open it and then run it.

<p align="center">
<img src="/img/hydroshare-2.png" alt="HydroShare 2i2c Image" style={{'width':'80%', 'height':'50%'}}/>
</p>