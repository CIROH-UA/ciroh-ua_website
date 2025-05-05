---
sidebar_position: 11
title: "NETWA"
description: "NETWA"
tags: [Products, CIROH]
---

# Forecast-Workflow

## About
The [forecast-workflow](https://github.com/CIROH-UVM/forecast-workflow) repository was initally created to implement the AEM3D model to generate 7-day forecasts of Harmful Algal Blooms (HABs) in Lake Champlain. However, we've created some handy data grabbers along the way that we've modified in order to make them more useful for other CIROH researchers. The scripts for these data grabbers can be found in the `data/` folder within the repository. This page will include documentation on how to use some of these data grabber tools we've created.

## Cloning the repository
The first thing you need to do in order to be able to use the tools in forecast-workflow is clone the repository into your user space using git.
1. Once logged on the testbed, open a new terminal and navigate to the directroy in which you'd like to store the repo
2. Then, run `git clone https://github.com/CIROH-UVM/forecast-workflow.git`
3. That's it! You now have the repo on your own personal user space.
   1. Be sure to checkout the repo on GitHub every now and then to make sure you have the most recent version of the repo.
   2. If you need to pull any updates to your local repo, simply run `git pull` from your `forecast-workflow/` directory

##  Using Jupyter Notebooks
We recommmend using Jupyter notebooks for interactive computing, but you can also import forecast-workflow tools in a plain old python script as well (see code blocks below).

1. Log onto the CIROH VM using Remote Desktop Viewer or similar software
2. Open a new terminal and `cd` to the top level project directory for your python scripts (it could be your home directory)
3. Activate the `standard` mamba environment with `mamba activate standard`
4. Run `jupyter lab` to launch Jupyter
5. If starting a new notebook, click on a kernel underneath the "Notebooks" banner
6. Or if you have a notebook you're working on, simply open that one and pick up where you left off!

#### Add the repo to your python path variable
Evertime you start or restart a jupyter kernel, you will need to add the forecast-workflow directory to your `sys.path` variable so that python knows where to look for forecast-workflow code. You can do that with the following code block:

```
import sys
sys.path.append("/absolute/path/to/your/forecast-workflow")
```
This cell should be at the top of your notebook, but you only need to run it once; comment out these lines after runing so that you do not add the same path to you `sys.path` over and over again.

Now, you can import the data grabbers into your notebook like any other module!

```
import data.nwm_fc as nwm
import data.gfs_fc as gfs
```
Etc.

## Data Grabber Demo
There is a neat demo notebook that includes more in-depth instructions on how to use our data grabber tools. You can find that notebook at `forecast-workflow/examples/get_data_demo.ipynb`
