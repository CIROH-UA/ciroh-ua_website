---
sidebar_position: 1
---

# CIROH Data Access
The many CIROH projects involve many different data resources and data access methods and one of the most common questions we receive is, "How can I get access to <fill-in-the-blank-data-resource>". To help with answering that question, we have documented some of the most common data access methods and resources here, with links to additional sites to dive deeper.

## National Water Model – Input and Output Data
The following resources provide access to the input used in and output data produced from the operational national water model. 
### NOMADS official reseource
The official NWM meteorological inputs and hydrology and routing outputs are made avaialable via http and ftp from the National Center for Environmental Prediction (NCEP) sites here:
NOMADS - NOAA Operational Model Archive and Distribution System
- https://nomads.ncep.noaa.gov/pub/data/nccf/com/nwm/ 
- ftp://ftpprd.ncep.noaa.gov/pub/data/nccf/com/nwm

For instance, those resources currently (24 October 2023) include the following folders: 
```
para_post-processed/    22-Sep-2023 20:37    -   
post-processed/         02-Nov-2020 14:31    -   
prod/                   24-Oct-2023 00:18    -   
v3.0/                   24-Oct-2023 00:18    -  
```
The `para_post-processed` does not have specific documentation, though the `para` designation indicates that it is a "parallel" execution, meaning a candidate production run being tested for readiness to serve as the operational model. In the post-processed dataset, we find the following subfolders:
NOMADS post-processed - https://nomads.ncep.noaa.gov/pub/data/nccf/com/nwm/post-processed/ 
- RFC: outputs filtered down to RFC locations.
- WMS: Contains re-index/reformatted outputs in per-forecast netcdfs suitable for rapid querying (for any given forecast, that is) and sufficiently responsive to provide the back end for the graph visualizations on the water.noaa.gov/map site.
- IMAGES: .png formatted renderings of NWM output for various domains and variables
- logs: logs. :)
  
### NODD - NOAA Open Data Dissemination Program
"The NOAA Open Data Dissemination (NODD) Program provides public access to NOAA's open data on commercial cloud platforms through public-private partnerships. These partnerships remove obstacles to the public use of NOAA data, help avoid costs and risks associated with federal data access services, and leverage operational public-private partnerships with the cloud computing and information services industries."
(https://www.noaa.gov/information-technology/open-data-dissemination)

The NODD datasets made available through several public cloud vendors are an incredible resource for accessing NWM data for research and evaluative purposes. The NWS NODD datasets are listed on [this page](https://www.noaa.gov/nodd/datasets) and include the following:

#### AWS
AWS hosts two repositories are part of their sustainability data initiative. The first repository contains the operational data (now hosts 4 week rolling collection of all output; it used to only be short range and the registry entry retains the short_range description https://registry.opendata.aws/noaa-nwm-pds/; alternatively under sustainability initiative: https://aws.amazon.com/marketplace/pp/prodview-73iwu7dcfuge2)
- The catalog of data may be browsed here. https://noaa-nwm-pds.s3.amazonaws.com/index.html


The other (and more useful) AWS repository contains several version of the retrospective dataset each described on the main page under the open data registry: https://registry.opendata.aws/nwm-archive/
(Main page under sustainability initiative: https://aws.amazon.com/marketplace/pp/prodview-g6lcchc7brshwa)
The different catalogs of those [currently] five versions of that resource are linked below: 
two versions of NWM v2.1 retrospective
- netCDF, https://noaa-nwm-retrospective-2-1-pds.s3.amazonaws.com/index.html
- zarr, https://noaa-nwm-retrospective-2-1-zarr-pds.s3.amazonaws.com/index.html
two versions of NWM v2.0 retrospective
- netCDF, https://noaa-nwm-retro-v2-0-pds.s3.amazonaws.com/index.html
- zarr, https://noaa-nwm-retro-v2-zarr-pds.s3.amazonaws.com/index.html
and the NWM v1.2 retrospective data as a
- netCDF. https://nwm-archive.s3.amazonaws.com/index.html
The AWS retrospective resource is the primary publicly available source for the version 1.0 of the “AORC” Analysis of Record for Calibration dataset, which is a 40-year best-available estimate of most common meteorological parameters required for hydrological modeling. Version 1.1 of the dataset will accompany the release of the NWM model version 3.0 retrospective (or 2.2 version??), hopefully in the next few weeks. 
#### Google – operational NWM data
Google hosts the most complete operational data archive of inputs and outputs from the National Water Model, with nearly every file since August, 2018. The Google open data registry provides additional explantions: https://console.cloud.google.com/marketplace/product/noaa-public/national-water-model?project=explore-ai-387703
- Operational data may be browsed here: https://console.cloud.google.com/storage/browser/national-water-model
Google also hosts a copy of the
- NWM v1.2 retrospective: https://console.cloud.google.com/storage/browser/national-water-model-reanalysis
Coming soon: Big Query
There is an effort underway to make some of the datasets from the NWM operational and retrospective simulations avaialable on BigQuery for ultra-high-bandwidth access. Stay tuned...

#### Azure/Planetary Computer
Microsoft hosts the NWM input and output datasets in Azure Blob Storage associated with the Microsoft Planetary Computer. 
https://planetarycomputer.microsoft.com/dataset/storage/noaa-nwm
Tom Augspurger of Microsoft has a series of notebooks providing examples of how to use this data from his workshop at the first CIROH developers conference.
https://github.com/TomAugspurger/noaa-nwm
### CIROH Resources
More detail and example usage coming soon!
- Kerchunk Retro (points to AWS 2.1 NetCDF Retro) - https://ciroh-nwm-zarr-retrospective-data-copy.s3.amazonaws.com/index.html Forcing complete; model output 2011-2020
- Kerchunk Operational (points to Google assets – a simple text change can point to AWS short range, if desired) https://ciroh-nwm-zarr-copy.s3.amazonaws.com/index.html 
### Other resources
#### ESRI Living Atlas

ESRI living atlas posts a map-enabled version of the NWM output here: https://www.esri.com/arcgis-blog/products/analytics/analytics/esri-visualizes-noaas-national-water-model/ 

#### Description of WRF-Hydro code: 
Detailed description of many aspects of the WRF-Hydro code which produces the current NWM found here:
https://ral.ucar.edu/sites/default/files/public/projects/wrf_hydro/technical-description-user-guide/wrf-hydro-v5.1.1-technical-description.pdf 
