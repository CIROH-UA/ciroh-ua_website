---
sidebar_position: 8
title: "SWEML"
description: "Snow Water Equivalent Machine Learning"
tags:
  - national_snow_model
---

# Advancing Snow Modeling

The Snow Water Equivalent Machine Learning(SWEML) incorporates ground-based snow measuring sites, remotely-sensed snow cover information, and a Artificial Neural Network to provide point estimations of Snow Water Equivalent. The network was trained on historical data data from NASA’s ASO missions, divided into regions, and then a LightGradientBoost Model was used to preform recursive feature elimination to produce an efficient feature selection and region-specific model. The class contains the required functions for downloading data, pre-processing, running inference, and for producing visualizations.

import GitHubReadme from '@site/src/components/GitHubReadme';
 
<GitHubReadme username="CIROH-UA" repo="SWEML"/>