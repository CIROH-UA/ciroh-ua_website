---
sidebar_position: 1
title: "Data Access"
description: "Input and Output of NWM"
tags:
  - NOMADS
  - NODD
  - Microsoft Planetary Computer
  - AWS Open data registry
  - ESRI
---

# CIROH Data Access

Within the CIROH projects, we encounter a wide range of data resources and data access inquiries. One of the most frequently asked questions is, "How can I obtain access to xyz-resource?". To help with answering that question, we have documented some of the most common data access methods and resources here, with links to additional sites to dive deeper.

## Input and Output Data of the National Water Model

Here, you will find resources that grant access to the input data used and the output data produced by the operational national water model.

### Official NOMADS Resource

The official NWM meteorological inputs and hydrology and routing outputs are accessible through both HTTP and FTP. These resources are provided by the National Center for Environmental Prediction (NCEP) at the following locations:

- NOMADS - NOAA Operational Model Archive and Distribution System
    - [HTTP](https://nomads.ncep.noaa.gov/pub/data/nccf/com/nwm)
    - [FTP](ftp://ftpprd.ncep.noaa.gov/pub/data/nccf/com/nwm)

As of October 24, 2023, these resources include the following directories:

```
para_post-processed/    22-Sep-2023 20:37    -   
post-processed/         02-Nov-2020 14:31    -   
prod/                   24-Oct-2023 00:18    -   
v3.0/                   24-Oct-2023 00:18    -  
```
The `para_post-processed` directory lacks specific documentation, although the "para" designation suggests it is a "parallel" execution, indicating a candidate production run under testing for operational use. In the post-processed dataset, you will find the following subdirectories:

- [NOMADS post-processed](https://nomads.ncep.noaa.gov/pub/data/nccf/com/nwm/post-processed/)
    - RFC: Outputs filtered down to RFC locations.
    - WMS: Contains re-indexed/reformatted outputs in per-forecast netCDFs suitable for rapid querying and responsive for graph visualizations on the water.noaa.gov/map site.
    - IMAGES: .png-formatted renderings of NWM output for various domains and variables.
    - logs: Logs. :)
  
### NODD - NOAA Open Data Dissemination Program
"The NOAA Open Data Dissemination (NODD) Program provides public access to NOAA's open data on commercial cloud platforms through public-private partnerships. These partnerships remove obstacles to public use of NOAA data, help avoid costs and risks associated with federal data access services, and leverage operational public-private partnerships with the cloud computing and information services industries."
(For more information, visit [NODD](https://www.noaa.gov/information-technology/open-data-dissemination))

The NODD datasets made available through several public cloud vendors are an incredible resource for accessing NWM data for research and evaluative purposes. The NWS NODD datasets are listed on [this page](https://www.noaa.gov/nodd/datasets) and include the following:

#### AWS

AWS hosts two repositories as part of their sustainability data initiative. The first repository contains the operational data (now hosts 4 week rolling collection of all output; it used to only be short range and the registry entry retains the short_range description https://registry.opendata.aws/noaa-nwm-pds/; alternatively under sustainability initiative: https://aws.amazon.com/marketplace/pp/prodview-73iwu7dcfuge2)
- The catalog of data can be browsed [here](https://noaa-nwm-pds.s3.amazonaws.com/index.html).

The other (and more useful) AWS repository contains several versions of the retrospective dataset each described on the main page under the open data registry: [Here](https://registry.opendata.aws/nwm-archive/)
(Main page under sustainability initiative [here](https://aws.amazon.com/marketplace/pp/prodview-g6lcchc7brshwa) )

The different catalogs of those [currently] five versions of that resource are linked below:
- Two versions of NWM v2.1 retrospective
  - netCDF, [here](https://noaa-nwm-retrospective-2-1-pds.s3.amazonaws.com/index.html)
  - zarr, [here](https://noaa-nwm-retrospective-2-1-zarr-pds.s3.amazonaws.com/index.html)
- Two versions of NWM v2.0 retrospective
  - netCDF, [here](https://noaa-nwm-retro-v2-0-pds.s3.amazonaws.com/index.html)
  - zarr, [here](https://noaa-nwm-retro-v2-zarr-pds.s3.amazonaws.com/index.html)
- NWM v1.2 retrospective data
  - netCDF, [here](https://nwm-archive.s3.amazonaws.com/index.html)

The AWS retrospective resource is the primary publicly available source for the version 1.0 of the “AORC” Analysis of Record for Calibration dataset, which is a 40-year best-available estimate of most common meteorological parameters required for hydrological modeling. Version 1.1 of the dataset will accompany the release of the NWM model version 3.0 retrospective (or 2.2 version??), hopefully in the next few weeks. 

#### Google – Operational NWM Data

Google hosts the most complete operational data archive of inputs and outputs from the National Water Model, with nearly every file since August 2018. The Google open data registry provides additional explanations [here](https://console.cloud.google.com/marketplace/product/noaa-public/national-water-model?project=explore-ai-387703).
- Operational data can be browsed [here](https://console.cloud.google.com/storage/browser/national-water-model).
- Google also hosts a copy of the NWM v1.2 retrospective [here](https://console.cloud.google.com/storage/browser/national-water-model-reanalysis).

Coming soon: Big Query

Efforts are underway to make some of the datasets from the NWM operational and retrospective simulations available on BigQuery for ultra-high-bandwidth access. Stay tuned...


#### Azure/Planetary Computer

Microsoft hosts the NWM input and output datasets in Azure Blob Storage, associated with the Microsoft Planetary Computer.
[Microsoft Planetary Computer](https://planetarycomputer.microsoft.com/dataset/storage/noaa-nwm)
Tom Augspurger of Microsoft has a series of notebooks providing examples of how to use this data from his workshop at the first CIROH developers conference.
[Tom Augspurger's Notebooks](https://github.com/TomAugspurger/noaa-nwm)

### CIROH Resources
More detailed information and example usage will be available soon.

- Kerchunk Retro (points to AWS 2.1 NetCDF Retro)
  - [Kerchunk Retro](https://ciroh-nwm-zarr-retrospective-data-copy.s3.amazonaws.com/index.html) - Forcing complete; model output 2011-2020
- Kerchunk Operational (points to Google assets – a simple text change can point to AWS short range, if desired)
  - [Kerchunk Operational](https://ciroh-nwm-zarr-copy.s3.amazonaws.com/index.html)

### Other resources
#### ESRI Living Atlas

ESRI Living Atlas provides a map-enabled version of the NWM output, which can be accessed [here](https://www.esri.com/arcgis-blog/products/analytics/analytics/esri-visualizes-noaas-national-water-model/).

#### Description of WRF-Hydro code: 

A detailed description of various aspects of the WRF-Hydro code, which produces the current NWM, can be found [here](https://ral.ucar.edu/sites/default/files/public/projects/wrf_hydro/technical-description-user-guide/wrf-hydro-v5.1.1-technical-description.pdf).



