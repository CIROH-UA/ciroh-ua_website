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

:::info
[HydroShare website](https://www.hydroshare.org)
:::

## HydroShare and CIROH JupyterHub Integration

Users now have the capability to directly launch and execute computational notebooks from HydroShare resources into the CIROH Jupyterhub environments. Wondering how to do it? 

Here are the steps for you to follow:

1. First, confirm that you have access to the CIROH Jupyterhub. If not, follow [Steps](../../../../docs/services/cloudservices/ciroh%20jupyterhub/#how-to-get-access-to-these-environments)

2. Head to HydroShare and navigate to the "CIROH Production Jupyterhub" resource at this [URL](https://www.hydroshare.org/resource/2dd1ac86e8854d4fb9fe5fbafaec2b98/). This resource resource is an "app connector" that will allow you to add the CIROH production JupyterHub to the list of apps you have available via your "Open with" menu in HydroShare.

3. Ensure that the square icon labeled "Add Web App to Open with list" in HydroShare is green. If it appears red, a single click will change it to green. Clicking on this icon and making sure it is green will add the CIROH JupyterHub to the list of apps in the "Open With" menu that appears at the top of the landing page for any HydroShare resources you visit.

<p align="center">
<img src="/img/hydroshare.png" alt="HydroShare 2i2c Image" style={{'width':'80%', 'height':'50%'}}/>
</p>


4. Once you have completed Step 3, you can navigate to any HydroShare resource and click on the "Open with" dropdown menu at the top right of the resource's landing page. You will now see and will be able to select "CIROH Production JupyterHub". Once you select this option from the drop down in HydroShare, a new browser tab will open for the CIROH JupyterHub. Click on the "Login to continue" button and select one of the server options that is appropriate for the analysis you need to run (small, medium, large, or huge) and image : New Pangeo Notebook base image. Then, click the "Start" button to launch your server.


<p align="center">
<img src="/img/hydroshare-1.png" alt="HydroShare 2i2c Image" style={{'width':'80%', 'height':'50%'}}/>
</p>
-----
<p align="center">
<img src="/img/hydroshare-2.png" alt="HydroShare 2i2c Image" style={{'width':'80%', 'height':'50%'}}/>
</p>

5. You will now be inside the CIROH JupyterHub. All of the files from your HydroShare resource will appear in the file browser on the left, including any notebooks that were in your resource. Double click on a notebook to open it and then run it.
