---
sidebar_position: 5
title: "NGIAB E2E Workflow: Cloud Tutorial"
description: "Complete guide for setting up and running NextGen In a Box (NGIAB)"
tags: [Products, NGIAB, CIROH, Cloud Services, Docker, National Water Model, Education]
---

# NGIAB End-to-End Setup Guide

## Overview

This guide walks you through the complete NGIAB (NextGen In A Box) workflow:
1. Preparing input data using the Data Preprocessor
2. Running the NGIAB model
3. Evaluating results with TEEHR
4. Visualizing outputs through the Tethys portal

## Prerequisites

- Git
- Docker Desktop (installed and running)
- Terminal/Command Prompt access
- Internet connection for downloading data and images

## Tutorial Overview

This guide provides a complete walkthrough of the NGIAB setup process, covering:

1. **Data Preprocessing** - Preparing hydrofabric, forcings, and model configurations
2. **NGIAB Installation** - Setting up the containerized environment
3. **Model Execution** - Running the NextGen hydrological model
4. **TEEHR Evaluation** - Analyzing model performance
5. **Tethys Visualization** - Exploring results through interactive visualization

## Step 1: Data Preprocessing

The first step involves preparing the necessary input data for the NGIAB model:

### Using CIROH JupyterHub (Recommended)

1. **Access the CIROH JupyterHub**
   - Navigate to [CIROH JupyterHub](https://ciroh.awi.2i2c.cloud/)
   - If you need access, [request it here](/docs/services/access#accessing-ciroh-jupyterhub)

2. **Select the Appropriate Environment**
   - When starting your server, choose "NGIAB Data Preprocess" from the dropdown menu
   - This environment has all required dependencies pre-installed

3. **Run the Data Preprocessing Tool**
   - Open a terminal in JupyterHub (New → Terminal)
   - Execute the following command:
   ```bash
   python -m ngiab_data_cli -i cat-2863657 --subset --start 2010-01-01 --end 2010-01-02 --forcings --realization
   ```

4. **Download the Processed Data**
   - After processing completes, compress the output folder into a ZIP archive
   - In the file navigator (left panel), right-click the ZIP file and select "Download"

### Customization Options

You can adjust the command parameters to customize your data:
- `-i cat-XXXXXXX`: Use a different catchment ID
- `--start YYYY-MM-DD`: Change start date
- `--end YYYY-MM-DD`: Change end date

For all available options:
```bash
python -m ngiab_data_cli --help
```

## Step 2: NGIAB Setup and Execution

After preparing your input data, you'll set up and run the NGIAB model on local machine:

### Clone and Run NGIAB

```bash
# Return to home directory (if needed)
cd ~

# Clone NGIAB repository
git clone https://github.com/CIROH-UA/NGIAB-CloudInfra.git

# Navigate to NGIAB directory
cd NGIAB-CloudInfra

# Execute the setup and run script
./guide.sh
```

### What Happens During Execution

The `guide.sh` script performs several key operations automatically:
- Downloads and configures the NGIAB Docker environment
- Launches the NextGen hydrologic model with your input data
- Initializes TEEHR analysis tools to evaluate model results
- Starts the Tethys visualization interface for interactive exploration

Follow the on-screen prompts during script execution to provide necessary inputs.

## Step 3: Accessing Results and Visualization

Once the script completes successfully:

1. **Access the Tethys Visualizer**
   - Open your web browser
   - Navigate to: `http://localhost/apps/ngiab`
   - The interface allows you to explore:
     - Catchment maps
     - Hydrologic time series
     - Performance metrics
     - Comparison visualizations

2. **View TEEHR Evaluation Results**
   - Performance metrics are displayed in the Tethys interface
   - Raw evaluation data is available in the designated output directory

## Troubleshooting

### Common Issues

1. **Docker Problems**
   - Ensure Docker Desktop is running
   - Verify you have sufficient system resources allocated to Docker
   - Check for Docker permission issues (you may need to run as administrator/sudo)

2. **JupyterHub Connection**
   - Verify your internet connection
   - Try refreshing the page or restarting your server
   - Check that you have proper access permissions

3. **Data Processing Errors**
   - Ensure you've selected a valid catchment ID
   - Verify date ranges are valid and formatted correctly
   - Check for sufficient disk space

4. **NGIAB Execution Failures**
   - Ensure you have the latest version of the repository
   - Check that input data paths are correctly specified
   - Review Docker logs for detailed error information

## Additional Resources

### Documentation

- [NGIAB Data Preprocessor](https://github.com/CIROH-UA/NGIAB_data_preprocess)
- [NGIAB Cloud Infrastructure](https://github.com/CIROH-UA/NGIAB-CloudInfra)
- [TEEHR Documentation](https://github.com/RTIInternational/teehr)
- [Tethys Platform Documentation](https://www.tethysplatform.org/)

### Support

- Technical issues: Create an issue in the respective GitHub repository
- General questions: Contact the CIROH support team
- Community discussions: Join the CIROH Slack workspace
