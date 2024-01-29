# Getting Started

## Accessing the Testbed
### Remote Desktop Software
One of the easiest ways to access the NETWA is through the a remote desktop software, such as Remote Desktop Connection, which is a pre-installed softare on Windows. Microsoft also has a [version available for MacOs](https://apps.apple.com/us/app/microsoft-remote-desktop/id1295203466?mt=12) as well, but any software that allows remote desktop access will do. Below are steps to access your own virtual desktop on the testbed:
	1. Launch Remote Desktop Connection or similar software to connect to your virtual desktop
	2. In the "computer:" field, enter "ciroh-testbed.uvm.edu"
	3. Click "connect" and enter your university username and password when prompted
	4. Congratulations! You've just logged on to your very own NETWA virtual desktop
### SSH
Another way to access the testbed is through the Secure Shell Protocol, more comomnly known as SSH. This option is more appropriate for users who are familiar with using the Linux terminal or other command-line interfaces.
1. Open a terminal application on your machine (there are built-in terminals on MacOS and Windows, or you can use a third-party app such as [PuTTY](https://putty.org) or [MobaXterm](https://mobaxterm.mobatek.net/))
2. Type the command `ssh your_netId@ciroh-testbed.uvm.edu`, using your actual netID
3. Enter your password when prompted
4. Now you should be logged in to the testbed and be able to navigate via the command-line

## Data Storage
The `/netfiles/ciroh/` directory on the NETWA has over 40 terabytes of disk space that researchers can use to store data - that's equivalent to 40 million megabytes! Needless to say, there's plenty of space for data. If you have data you'd like to store here, please create your own directroy titled after your netID. For example, "John Smith" would store their data under `/netfiles/ciroh/jsmith`.

## Setting up Mamba
[Mamba](https://mamba.readthedocs.io/en/latest/index.html) is a lightweight version of [Conda](https://docs.conda.io/projects/conda/en/stable/), a popular package manager for a variety of programming languages. It is used on the testbed to set up virtual environments that contain all of the relevant packages and dependencies for a given software repository or workflow. There are a few existing mamba environments on the testbed already, such as one that houses all of the packages necessary to run the forecast-workflow repo (more specific instructions for accessing that [here](https://docs.ciroh.org/docs/products/tools/netwa/forecast-workflow)). This section will demonstrate how to initalize mamba for a new user and how to see what virtual enviornments are available
1. On the testbed, open a terminal and run the following command: `/usr/local/mambaforge/bin/mamba init`
   1. *Note:* you only have to do this once, not every time you open a new terminal or want to use mamba
   2. If the command ran successfully, you should see something like this now at the command line:
      1.  `(base) [jsmith@ciroh-testbed ~]$`
2.  The `(base)` text indicates that you are in the mamba base environment. To see the list of packages in said enviornment (or any environment you happen to be in), run `mamba list`
    1.  *Note:* from here on out, you can use `mamba` and `conda` at the command line interchangeably, but for simplicity's sake we will stick with using `mamba`
3.  To see a list of available environments, run `mamba env list`
    1.  Most relevant mamba environments will be located in `/data/condaEnvs/`
4.  To activate an environmnet, simply run `mamba activate /data/condaEnvs/env_name` replacing `env_name` with the actual name of the environment