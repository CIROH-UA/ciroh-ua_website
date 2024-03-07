---
sidebar_position: 1
title: "Accessing the System"
description: "Access of On-Premises Cluster Pantarhei"
## How to Use Pantharhei

### Connect to the Network
First, you need to connect to the University of Alabama network using a VPN. This step is crucial for ensuring a secure connection. For more information on setting up a VPN, please visit the [Office of Information Technology (OIT) website](https://oit.ua.edu).

### For Mac Users:
Once you are connected to the VPN, follow these steps to access Pantharhei:

1. **Open a Terminal:** Use Spotlight search (Cmd + Space) and type "Terminal" to open a new terminal window.

2. **Connect via SSH:** In the terminal, use the SSH command to connect to Pantharhei. Replace `YOUR_PANTHARHEI_USERNAME` with your actual Pantharhei username.
    ```
    ssh YOUR_PANTHARHEI_USERNAME@pantharhei.ciroh.edu
    ```
    When prompted, enter your Pantharhei password.

3. **Submit a Job:** Start a job using either a GPU or CPU job file, depending on your requirements. Replace `THE_NAME_OF_THE_JOB_FILE` with your specific job file name.
    ```
    sbatch THE_NAME_OF_THE_JOB_FILE
    ```

4. **Monitor Your Job:** To get a list of job IDs, use the following command:
    ```
    squeue
    ```
    To check the log file of a specific job, replace `JOBID` with your job's ID.
    ```
    cat jupyter-notebook-JOBID.log
    ```

5. **Access Jupyter Notebook:** Open a new terminal tab, then copy and paste the SSH command from the top of the log file into the new terminal tab. Enter your password again when prompted.

6. **Open the Jupyter Notebook:** Return to the original terminal tab and locate the HTTP link at the end of the log file. Copy this link and paste it into a web browser to access the Jupyter Notebook interface.

7. **You are ready to go now!** Explore the Jupyter Notebook environment to conduct your research computations.

### Additional Notes:
- Ensure your Pantharhei username and the job file name are correct.
- If you encounter any issues, please contact CIROH's support team for assistance.

We hope this guide helps you efficiently utilize the Pantharhei HPC system for your research needs. Happy computing!
tags:
  - HPC
  - On-Premises
  - Access
  - Pantarhei
---
