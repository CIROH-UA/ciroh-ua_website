---
sidebar_position: 3
title: "CIROH JupyterHub"
description: "2i2c JupyterHub is a cloud-based JupyterHub environment specifically designed for hydrological researchers. It is powered by 2i2c JupyterHub, a cloud-based JupyterHub environment specifically on Google Cloud"
tags: [CIROH, Services, Cloud Services, JupyterHub, 2i2c, Google Cloud]
---

import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'

# CIROH-2i2c JupyterHub
## Powered by 2i2c JupyterHub on Google Cloud

CIROH, in collaboration with 2i2c, offers a dedicated JupyterHub environment on Google Cloud specifically designed for hydrological researchers. 2i2c is a cloud service provider specializing in open-source infrastructure for research and development.

<p align="center">
<img src={useBaseUrl("/img/2i2c.png")} alt="2i2c Image" style={{'width':'80%', 'height':'50%'}}/>
</p>

## Video Tutorial

Watch this video to find out how to access CIROH Jupyterhub and how to launch and use CIROH Jupyterhub with HydroShare:

<div style={{textAlign: 'center'}}>
  <iframe width="791" height="421" src="https://www.youtube.com/embed/DnbxhLdb6TM" title="CIROH Jupyterhub" style={{border: 'none'}} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


## **Benefits of CIROH Cloud's 2i2c JupyterHub:**

*   **Managed JupyterHub as a Service:** CIROH Cloud takes care of the entire JupyterHub infrastructure, allowing researchers to focus on their scientific endeavors.
    
*   **Open Source Powerhouse:** Built on open-source tools, 2i2c JupyterHub offers flexibility, scalability, and a collaborative environment that fosters research advancement.
    
*   **Leveraging Google Cloud:** 2i2c utilizes Google Cloud's robust infrastructure to deliver a powerful and reliable platform for your computational needs.

-----
## Requesting Access to CIROH JupyterHub

CIROH JupyterHub provides both CPU and GPU capabilities. To get started, please head to the Infrastructure Access page.

<Link class="button button--active button--primary" to="/docs/services/access#accessing-ciroh-jupyterhub">Infrastructure Access</Link>

-----
## Requesting Software Installation on CIROH JupyterHub

Before making a request, please refer to the [Dockerfile](https://github.com/2i2c-org/awi-ciroh-image/blob/main/Dockerfile) for the list of software currently deployed on CIROH JupyterHub.

If your software in not listed in this file, please submit the form below to request new software installation on 2i2c JupyterHub.

<Link class="button button--active button--primary" to="https://forms.office.com/Pages/ResponsePage.aspx?id=jnIAKtDwtECk6M5DPz-8p4IIpHdEnmhNgjOa9FjrwGtUNUoyV1UxNFIzV1AyTDhTNzdOT1Q5NVlLTC4u"> JupyterHub (2i2c) Software Install Form</Link>


---

## CIROH JupyterHub Environments

Click on the buttons below to access the CIROH JupyterHub environments:

<Link class="button button--active button--primary" style={{'margin-bottom':'1.3rem', 'margin-right':'1.4rem'}}  to="https://ciroh.awi.2i2c.cloud/hub/login"> CIROH Production JupyterHub</Link>

<Link class="button button--active button--primary" style={{'margin-bottom':'1.3rem'}} to="https://staging.ciroh.awi.2i2c.cloud/hub/login"> CIROH Staging JupyterHub</Link>

import VideoPlayer from '/src/components/VideoPlayer.js';

<div class="indent-wrapper">
  <p><b>Please remember to stop the server when you're not actively using it.</b></p>
  <VideoPlayer url="https://youtu.be/VSFs2bu4-74"/>
</div>
_____

<p align="center">
<img src={useBaseUrl("/img/2i2c-1.png")} alt="2i2c Image" style={{'width':'80%', 'height':'50%'}}/>
</p>

### Server Options
- Small - 5GB RAM, 2 CPUs

- Medium - 11GB RAM, 4 CPUs

- Large - 24GB RAM, 8 CPUs

- Huge - 52GB RAM, 16 CPUs

### Softwares currently deployed on CIROH JupyterHub

Please refer to the [Dockerfile](https://github.com/2i2c-org/awi-ciroh-image/blob/main/Dockerfile) for the list of software currently deployed on CIROH JupyterHub.

### Cost of Use

CIROH 2i2c JupyterHub is free to use for consortium members. Its cost is covered by CIROH Infrastructure project funds.

---

## 2i2c Blog

Stay up-to-date on the latest 2i2c news and announcements by visiting the official 2i2c Blog:

<Link class="button button--active button--primary" to="https://2i2c.org/blog/"> 2i2c Blog</Link>

---

## Help and Support

- Email UA's CIROH Cloud Team: ciroh-it-admin@ua.edu 
- Message the CIROH Cloud Slack Channel: #ciroh-ua-it-admin