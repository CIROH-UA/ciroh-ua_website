---
sidebar_position: 8
title: 'CIROH Research Portal'
description: 'CIROH Research Portal'
tags: [Products, CIROH, NOAA, HydroShare, AWS, BigQuery, Tethys Platform, Google Cloud]
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# CIROH Research Portal

Comprised of a large technologically and topically diverse group of scientists, CIROH and NOAA NWM researchers require a means to organize, catalog, coordinate, and share research data products, tools, visualizations, and interactive software applications in an accessible, consistent, and intuitive manner. This project aims to address this need by building and seeding a web-based catalog of interactive web applications, notebooks, software tools, and learning modules that demonstrate and provide access to NWM modeling advances, datasets, visualizations, and information synthesis innovations.

![CIROH Portal](/img/ciroh-portal-home-page.png)

The resulting serves as a pathway for advances in research tools to inform the development of future applications within the National Water Center – e.g. within the Water Prediction Operations Division (WPOD) and the Geo Intelligence Division (GID). This project is a cross-cutting activity, exposing NWM research results across disciplines and institutions. The NWM Research Apps Portal is a highly visible resource that NOAA and CIROH leadership can use to showcase the work accomplished by the collaboration and within the cooperative institute. It also serve as a communication tool to allow the broader hydrologic research community to connect with the NWM research activities.

## Technologies

The proposed catalog is being built using Django CMS, Tethys Platform, HydroShare, HydroLearn, Amazon AWS cloud computing infrastructure, Google BigQuery data services, and an agile, continuous integration development and deployment approach. Use the following links to learn more about the technologies powering the NWM Research Apps Portal:

- [Django CMS](https://www.django-cms.org/) - A Content Management System built on the most popular open-source Python-based web framework: Django.
- [Tethys Platform](https://www.tethysplatform.org/) - An open-source web framework for build and hosting geospatial and scientific web applications.
- [HydroShare](https://www.hydroshare.org/) - CUAHSI's online collaboration environment for sharing data, models, and code.
- [HydroLearn](https://www.hydrolearn.org/) - A platform for instructors to find and collaborate on developing learning modules, and for students to discover and learn from authentic problems.
- [Amazon AWS](https://aws.amazon.com/) - The NWM Research Apps Portal is hosted on AWS cloud resources.
- [Google BigQuery](https://cloud.google.com/bigquery) - BigQuery is a serverless and cost-effective enterprise data warehouse that works across clouds and scales with your data. Use built-in ML/AI and BI for insights at scale.

## Research Applications

The portal includes applications developed using the [Tethys Platform framework](https://www.tethysplatform.org/), and external applications. Please use the following information to learn more about the applications hosted in the portal:

### Native Applications

Native applications are application developed using the [Tethys Platform framework](https://www.tethysplatform.org/). The following application are hosted in the CIROH Research Portal

- [Water Data Explorer](https://github.com/BYU-Hydroinformatics/Water-Data-Explorer.git): Open-source web application which allows users to import, visualizem, and interact with water data management services such as [CUAHSI WaterOneFlow](https://his.cuahsi.org/wofws.html) and the [SensorThings API](https://hydroserver2.github.io/hydroserver/api/sensor-things-api.html) used by [HydroServer](https://hydroserver2.github.io/hydroserver/).

- [Met Data Explorer](https://github.com/BYU-Hydroinformatics/tethysapp-metdataexplorer.git): Open-source web application for visualizing meteorological gridded data. Utilizing TDS to serve the data, the application allows you to organize and save data files with the specific variables and dimensions that you need, visualize the data in a Leaflet based map viewer, animate the data across a time series, and extract a time series over a specified area.

- [HydroCompute &amp;&amp; HydroLang Tethys Application Demo](https://github.com/tethysplatform/tethysapp-hydrocompute.git): This application demonstrates two projects developed by the [University of Iowa Hydroinformatics Lab (UIHI Lab)](https://hydroinformatics.uiowa.edu/): [HydroLang](https://github.com/uihilab/HydroLang) and [HydroCompute](https://github.com/uihilab/HydroCompute). This application serves as the solution for HydroCompute Case Study 3: Dashboard for Station Statistical Analysis tutorial. This tutorial was developed by the University of Iowa Hydroinformatics Lab for the 2023 CIROH Developer Conference.

- [SWE](https://github.com/Aquaveo/tethysapp-swe.git)
  Open-source web application designed for the visualization of Standardized Snow Water Equivalent (SWE). This application provides users with a comprehensive platform to view, and interpret snow water equivalent data, which is crucial for understanding snowpack dynamics, water resource management, and environmental monitoring

- [Ground Water Mapper Application](https://github.com/Aquaveo/gwdm.git): The Groundwater Data Mapper (GWDM) is an open source web application and an associated set of Python scripts. The GWDM app can be used to host and visualize groundwater data in one or more regions. The groundwater data is a set of wells organized by aquifers. For each well, the user can upload a set of measurements (typically groundwater elevations) taken at different points in time. The wells are then displayed on a map in the web interface and the measurement time series can be visualized by clicking on the wells.

- [Grace Groundwater Subsseting Tool](https://github.com/Aquaveo/ggst.git): The Grace Groundwater Subsseting Tool (GGST) app uses GRACE data to generate time series and animated maps of groundwater storage changes. GRACE provides monthly estimates of water storage anomalies in equivalent water height and has provided monthly gravity field solutions since April 2002. Estimates of mass variability and associated observational errors are available on a global 300 km grid. GRACE has proved an effective tool for characterizing groundwater storage changes in large regions

- [Snow Inspector](https://github.com/BYU-Hydroinformatics/snow-inspector): Open-source web tool designed for visualizing and analyzing snow cover data using imagery from the MODIS_Terra satellite. It leverages interactive maps and time-series plots to provide insights into snow coverage and depth over specified periods. The application fetches data from NASA's GIBS WMTS service, processes the imagery to extract snow percentage values, and presents the information through a user-friendly interface. This tool is particularly valuable for researchers, hydrologists, and environmental scientists studying snow dynamics and their impact on water resources.
- [OWP Experimental App](https://github.com/Aquaveo/OWP): Open-source application designed to provide analysis assimilation, short-term, medium-term, and long-term forecasts for any river ID that appears in the anomaly layer of the National Water Model. It also integrates with the Google BigQuery API to perform the same analysis and forecasts for groups of reaches. Additionally, the app allows users to create reach groups from a CSV list of reaches, geometry data, or HydroShare resources.
- [Community Streamflow Evaluation System (CSES)](https://github.com/CIROH-UA/Tethys-CSES): Open-source web application designed to evaluate hydrological model performance using the National Water Model (NWM) and USGS monitoring data. It provides interactive visualizations for over 5,000 monitoring sites, enabling users to analyze streamflow data and assess model accuracy. The application supports various evaluation methods, including state, reach, and HUC (Hydrologic Unit Code) evaluations, and leverages data from the Alabama Water Institute hosted on Amazon AWS S3. Researchers can also use a Python-based package for hands-on model evaluation and are encouraged to contribute to the development and integration of additional hydrological modeling components.

### Proxy Applications

[Proxy applications](https://docs.tethysplatform.org/en/stable/tethys_portal/admin_pages.html#proxy-apps) are applications developed using frameworks other than the Tethys platform and are deployed outside the CIROH research portal. However, they are integrated into the portal through Tethys' capability to incorporate external applications. This allows users to access and utilize these applications seamlessly within the CIROH research portal environment.

- [OWP NWM Map Viewer](https://water.noaa.gov/map): Experimental geospatial services depicting forecasts from the River Forecast Centers and the National Water Model. Services available via the prototype NWS National Map Viewer, or directly via URLs hosted on the [Hydrologic Visualization and Inundation Services](https://maps.water.noaa.gov/server/rest/services) (HydroVIS) cloud resource.

- [CIROH JupyterHub](https://jupyterhub.cuahsi.org/hub/login): Cloud computing service that enables users to execute scientific code and explore, modify, and interact with data inside a remote execution environment using Python and/or R programming languages. Our JupyterHub is closely integrated with CUAHSI’s HydroShare and Hydrologic Information System data repositories, making it easy to leverage community datasets, collaborate, and disseminate research workflows. This platform provides all users with a modest amount of persistent disk space to store files as well as free cloud computing, making it ideal for water science education, data analysis, and research dissemination. To access this system you must become a member of the CUAHSI HydroShare and join our Cloud Computing group
- [HydroShare](https://www.hydroshare.org/home/): Online, collaborative system for sharing, publishing, and discovering water-related data and models. It is developed and maintained by the Consortium of Universities for the Advancement of Hydrologic Science, Inc. (CUAHSI).

You can develop an application using the [Tethys platform](https://www.tethysplatform.org/), which can later be installed in the portal for greater visibility. Similarly, if you already have an application developed using another framework already deployed it can be added to the portal as a proxy applications

## Access

The developed NWM Research Apps Portal is hosted at https://portal.ciroh.org and serves as a platform that links and organizes together a curated selection of publicly-facing NWM visualization and analysis tools developed by CIROH and NOAA.

## Contribute

There are many ways to contribute to the NWM Research Apps Portal. You can contribute applications, datasets, learning modules, and publications, which will gain greater visibility within the CIROH community.

### Applications

If you would like any current application that you have to appear on the [portal application page](http://portal.ciroh.org/applications/), you can create a [HydroShare](https://www.hydroshare.org/home/) resource containing your application information, and it will be displayed automatically in the portal. Follow these steps:

1. Log in to HydroShare or create an account.
2. Create a **HydroShare App Resource**.
3. Add the following keyword: `nwm_portal_app`.
4. Fill in the following metadata:

   - `app icon`
   - `help page url`
   - `app home page url`
   - `source code url`

   Note: You need to provide an URL for the **app_icon**, for example:
   `http://portal.ciroh.org/t/static/water_data_explorer/images/wde.png`

5. Make the resource public.

After following these steps, you will be able to see your app as shown below:

![applications](/img/applications.png)

### Data

If you would like any current data set that you have to appear on the [portal data access page](http://portal.ciroh.org/data-access/), you can create a [HydroShare](https://www.hydroshare.org/home/) resource containing your dataset information, and it will be displayed automatically in the portal. Follow these steps:

1. Log in to HydroShare or create an account.
2. Create a **HydroShare Resource**.
3. Add the following keyword: `nwm_portal_data`.
4. Fill in the following metadata in the **additional metadata portion**:

   - `app_icon`
   - `help_page_url`
   - `app_home_page_url`
   - `source_code_url`

   Note: You need to provide an URL for the **app_icon**, for example:
   `http://portal.ciroh.org/t/static/water_data_explorer/images/wde.png`

5. Make the resource public.

After following these steps, you will be able to see your dataset:

### Publications

If you would like any current or previous publication to appear on the [portal publications page](http://portal.ciroh.org/publications/), you can create a [Zotero](https://www.zotero.org/) item in the [Zotero CIROH Library Group](https://www.zotero.org/groups/5261687/ciroh/library) for your publications, and it will be displayed automatically in the portal. Follow these steps:

1. Request access to the [Zotero CIROH Library Group](https://www.zotero.org/groups/5261687/ciroh/library).
2. Return to your Zotero library.
3. Sync your Zotero account to see your group folder.
4. Click on a group folder, then add new citations using the Zotero icon in the URL bar or drag and drop items from other folders into your group folders.

After following these steps, you will be able to see your publications:

![publications](/img/publications.png)

### Learning Modules

If you would like any [HydroLearn](https://www.hydrolearn.org/) learning module to appear on the [portal learning modules page](http://portal.ciroh.org/learning-modules/), you can create a HydroShare resource containing your learning module information, and it will be displayed automatically in the portal. Follow these steps:

1. Log in to HydroShare or create an account.
2. Create a **HydroShare Resource**.
3. Add the following keyword: `nwm_portal_module`.
4. Make sure the **name** of the **resource** is the same as the **name** of the **learning module**.
5. Make the resource public.

After following these steps, you will be able to see your learning module

### Resources

- [Making Resources Public](https://help.hydroshare.org/sharing-and-privacy/sharing-and-publishing-resources/)
- [HydroShare Resources](https://help.hydroshare.org/hydroshare-resources/)
- [Uploading and Publishing Data and Models](https://help.hydroshare.org/creating-and-managing-resources/)

## Code

The source code for the NWM Research Apps Portal can be found on GitHub:

- [https://github.com/CIROH-UA/tethysportal-ciroh](https://github.com/CIROH-UA/tethysportal-ciroh)

## Bugs and Issues

Please report bugs and issues on the GitHub Issues page:

- [https://github.com/CIROH-UA/tethysportal-ciroh/issues](https://github.com/CIROH-UA/tethysportal-ciroh/issues)

## Team

- Brigham Young University - Roja Najafi, Iman Maghami, Dan Ames, Jim Nelson
- University of Iowa - Ibrahim Demir
- Aquaveo Contractors - Gio Romero, Michael Souffront, Nathan Swain

## Develop

If you would like to develop a native Tethys application or integrate an existing application about your research into the CIROH Research Portal, please contact the Aquaveo team:

- Nathan Swain
- Michael Souffront
- Jacob Johnson
- Giovanni Romero