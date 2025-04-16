---
sidebar_position: 2
title: "National Water Model"
description: "Introduction to the National Water Model"
tags: [Education, National Water Model, NOAA]
---

# What is National Water Model (NWM)?

The National Water Model (NWM) is a hydrologic model developed by **the National Oceanic and Atmospheric Administration (NOAA)** to simulate and forecast water conditions across the United States.

- This water prediction model creates forecast guidance for over 3.4 million miles of rivers and streams across the United States and its territories
- The NWM supercomputer is fed nonstop data covering everything from current stream-flow to the snowpack in mountain ranges above.
- The job of the supercomputer is to take all of that data and produce stream flow forecasts for every stream and river in the continental United States and its territories. There are three different flavors of forecasts: short, medium, and long range.
- Just like how your local weather station can tell you what the weather will be like tomorrow, in 3 days, or a week from now; the NWM can tell you what the stream flow will be like in 18 hours, 10 days, or even up to 30 days from now.

- NOAA Central Library Seminar Recording from OWP (Next-Generation Water Resources Modeling): https://youtu.be/DLIi3PruYxo

## Features - NWM3.0

- First time provision of NWM Total Water Level guidance for coastal areas of the Continental United States (CONUS), Hawaii and Puerto Rico / U.S. Virgin Island domains.  This is accomplished via use of the Semi-implicit Cross-scale Hydroscience Integrated System Model (SCHISM) integrated within the NWM, to couple NWM freshwater discharge estimates with oceanic forcing from the Surge and Tide Operational Forecast System (STOFS) and Probabilistic Tropical Storm Surge (P-SURGE) model.  Output will be provided in both NetCDF as well as Standard Hydrometeorological Exchange Format (SHEF) format.  Each NetCDF file contains full TWL domain output for one output time step, while each SHEF file contains timeseries station output for the full length of each simulation.  

- NWM Domain expansion to south-central Alaska (Cook Inlet, Copper River Basin, and Prince William Sound regions), enabling provision of NWM operational hydrologic model forecast guidance to this region.  

- Addition of the National Blend of Models (NBM) as a forcing source for NWM CONUS medium-range forecasts and Alaska short-range and medium-range forecasts. 

- Use of Multi-Radar Multi-Sensor (MRMS) precipitation as forcing for the NWM Analysis and Assimilation configuration over the Puerto Rico / U.S. Virgin Island domain.  

- Ingest of RFC-supplied reservoir outflow forecasts at 77 additional locations, bringing the total of such sites to 392.  

- Enhancements to the treatment of reservoirs, land surface parameters and calibration/regionalization approach leading to improvements in model skill. 

## Features - NWM2.1

The NWM currently runs in four configurations:
- Analysis and assimilation provides a snapshotof current hydrologic conditions
- Short-Range produces hourly forecasts of streamflow and hydrologic states out to 15 hours
- Medium-Range produces 3-hourly forecasts out to 10 days
- Long-Range generates 30-day ensemble forecasts.

Source : https://water.noaa.gov/about/nwm

