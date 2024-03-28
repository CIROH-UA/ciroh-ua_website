---
sidebar_position: 2
title: "Accessing the System"
description: "Access of On-Premises Cluster Pantarhei"
tags:
  - HPC
  - On-Premises
  - Access
  - Pantarhei
---

Pantarhei curretly only supports the Secure Shell (SSH) mechanisms for logging in. The Secure Shell mechanism uses SSH keys. If you need help creating or uploading your SSH keys, please see the Managing SSH Public Keys page for that information.

### General overview

To connect to Pantarhei using SSH, you must follow three high-level steps:
* [Connect to the University of Alabama (UA) Network](#connect-to-the-network)
* [Connect to the Secure Shell (SSH)](#connect-to-the-ssh)

### Connect to the Network

University of Alabama (UA) requires that you use the Virtual private network (VPN) to connect to the UA campus network in order to connect to the Pantarhei cluster.

:::tip
To request credentials for VPN Access, please fill this form [CIROH Service Request Form](https://forms.office.com/Pages/DesignPageV2.aspx?subpage=design&token=eaeef2bd5f894e62ab350cafb3b5ea76&id=jnIAKtDwtECk6M5DPz-8p4IIpHdEnmhNgjOa9FjrwGtUME1GV1JXRFVSQzQxM1FFRUc4SDhCOFNONy4u)
:::
:::tip
For more information on setting up a VPN, please visit the [Office of Information Technology (OIT) website](https://oit.ua.edu/services/internet-networking/vpn/)
:::

### Connect to the SSH

#### Mac and Linux:

Once you are connected to the VPN, follow these steps to access Pantarhei:

1. **Open a Terminal:** Find `Terminal` in your local machine and open it.
    :::tip
    In MacOS, use Spotlight search (**Command** + **Spacebar**) and type `Terminal` to open a new terminal window.
    :::

2. **Connect via SSH:** In the terminal, 
    * Use the SSH command to connect to Pantarhei. 
        ```Shell
        ssh <USERNAME>@pantarhei.ua.edu
        ```
        :::note
        Replace `<USERNAME>` with your actual Pantarhei username.
        :::
    * Enter your Pantarhei password


#### Windows:
<table  style={{'width':'100%'}}>
    <tr> 
        <th colspan="2">Windows SSH Instruction </th>
    </tr>
    <tr> 
        <th>Programs</th>
        <th>Instructions</th>
    </tr>
    <tr> 
        <td>MobaXterm</td>
        <td>Open a local terminal and [follow above steps](#mac-and-linux)&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td>
    </tr>
    <tr> 
        <td>Git Bash</td>
        <td>[Follow above steps](#mac-and-linux)</td>
    </tr>
    <tr> 
        <td>Windows 10 PowerShell</td>
        <td>[Follow above steps](#mac-and-linux)</td>
    </tr>
    <tr> 
        <td>Windows 10 Subsystem for Linux</td>
        <td>[Follow above steps](#mac-and-linux)</td>
    </tr>
    <tr> 
        <td>PuTTY</td>
        <td>[Follow steps below](#putty)</td>
    </tr>
</table>

#### PuTTY:
PuTTY, initially developed by Simon Tatham for the Windows operating system, serves as a client application for both SSH (Secure Shell) and telnet protocols. It is characterized by its open-source nature, providing access to its source code, and is maintained through collaborative efforts by a community of volunteers.

:::tip
For more information on PuTTY, please visit the [PuTTY website](https://www.putty.org/)
:::

1. **Download PuTTY:** To download PuTTY, click [download page](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)
2. **Open PuTTY:** Open downloaded file `putty.exe`
    <p align="center">
    <img src="/img/putty/image.png" alt="putty" style={{'width':'50%', 'height':'50%'}}/>
    </p>
3. **Host Name:** In the <mark>___Host Name (or IP address)___</mark> field enter the `pantarhei.ua.edu`
4. **Port:** In the <mark>___Port___</mark> field enter the `22`
5. **Open:** Click on the <mark>___Open___</mark> button. This will prompt a new login Secure Shell window.
6. **User Name:** In given new window, enter your Pantarhei <mark>___User Name___</mark>.
    <p align="center">
    <img src="/img/putty/frame08_1.webp" alt="putty"/>
    </p>
7. **Password:** Enter your Pantarhei account <mark>___Password___</mark>.
    <p align="center">
    <img src="/img/putty/frame09_1.webp" alt="putty"/>
    </p>

<!-- 3. **Submit a Job:** Start a job using either a GPU or CPU job file, depending on your requirements. Replace `THE_NAME_OF_THE_JOB_FILE` with your specific job file name.
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
- Ensure your Pantarhei username and the job file name are correct.
- If you encounter any issues, please contact CIROH's support team for assistance. -->

We hope this guide helps you efficiently utilize the Pantarhei HPC system for your research needs. Happy computing!