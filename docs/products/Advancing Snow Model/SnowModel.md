---
sidebar_position: 1
---

# Advancing Snow Modeling

The National Snow Model incorporates ground-based snow measuring sites, remotely-sensed snow cover information, and a Artificial Neural Network to provide point estimations of Snow Water Equivalent. The network was trained on historical data data from NASA’s ASO missions, divided into regions, and then a LightGradientBoost Model was used to preform recursive feature elimination to produce an efficient feature selection and region-specific model. The class contains the required functions for downloading data, pre-processing, running inference, and for producing visualizations.


## Code

The source code for the Snow Model can be found on GitHub:

https://github.com/whitelightning450/National-Snow-Model