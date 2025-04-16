---
sidebar_position: 10
title: "HydroServer"
description: "HydroServer Portal"
tags: [Products, CIROH, National Water Model, AWS]
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# HydroServer

Future iterations of the National Water Model will need to assimilate local-scale data to improve forecasts. The United States Geological Survey (USGS) operates the largest network of operational streamflow gages in the U.S., but generally does not incorporate data from gages operated by other agencies/organizations. A cooperative network of the many streamflow gages outside of the USGS network would enhance data available to national-scale modeling. No cyberinfrastructure currently exists to support such a network.

HydroServer is an open-source software stack with functionality for collecting, managing, and sharing operational hydrologic data - e.g., time series of hydrologic observations from fixed monitoring sites like streamflow gages. HydroServer development for CIROH is focused on creating an enhanced, national-scale stream gage network to make more data available to operational modeling.

![CIROH Portal](/img/hydroserver.png)

## Software and Technologies

The HydroServer software stack includes:
* A user-oriented web application for creation of monitorings sites, site metadata, information about observed variables, etc.
* A Python package and desktop app for loading time series data from monitoring sites into HydroServer
* Application Programming Interfaces (APIs) for data ingest into HydroServer, data querying and retrieval, and data and metadata management
* A highly performant time series database for storing and managing time series data

Additional planned tools include:
* A Python client package for retrieving time series data from HydroServer
* Automated archival of time series data to the HydroShare repository
* Integration of data quality control functionality
* Web app(s) for data visualization

The HydroServer software stack is being build using the following technologies:
* [Vue.js](https://vuejs.org/) - A JavaScript framework for building web user interfaces
* [Python/Django](https://www.djangoproject.com/) - A Python web framework for backend web development
* [Open Geospatial Consortium SensorThings API](https://www.ogc.org/standard/sensorthings/) - An API specification and data model for managing and retrieving observations and metadata from sensor systems.
* [Timescale Cloud](https://www.timescale.com/) - A cloud native implementation of PostgreSQL and its Timescale extension for storing and managing time series data
* [Amazon Web Services (AWS)](https://aws.amazon.com/) - The HydroServer web application and APIs are deployed using AWS.

## Access

As of August 28, 2023, we are currently working on setting up domains, associated security certificates, and additional settings, but we anticipate that the CIROH HydroServer instances will be:
* [https://hydroserver.ciroh.org](https://hydroserver.ciroh.org) - Production instance of HydroServer for CIROH
* [https://hydroserver-dev.ciroh.org](https://hydroserver-dev.ciroh.org) - Development instance for internal development and testing
* [https://hydroserver-beta.ciroh.org](https://hydroserver-beta.ciroh.org) - Beta instance for testing and demonstration of latest functionality

## Open-Source Code Development

The HydroServer software stack is developed as open-source software using the BSD3 open source license. All code development is hosted in our GitHub repositories hosted under the HydroServer GitHub Organization [https://github.com/hydroserver2/](https://github.com/hydroserver2/)

## Bugs and Issues

Bugs, issues, and feature requests related to HydroServer applications can be reported via their respective GitHub repositories at:

* [https://github.com/orgs/hydroserver2/repositories](https://github.com/orgs/hydroserver2/repositories)

## Development Team

The HydroServer software stack is under development at the Utah Water Research Laboratory at Utah State University. The main contributors include:
* Jeff Horsburgh - Associate Professor, Utah Water Research Laboratory and Civil and Environmental Engineering, Utah State University
* Ken Lippold - Software Engineer, Utah Water Research Laboratory, Utah State University
* Daniel Slaugh - Software Engineer, Utah Water Research Laboratory, Utah State University
* Maurier Ramirez - Software Engineer, Utah Water Research Laboratory, Utah State University

