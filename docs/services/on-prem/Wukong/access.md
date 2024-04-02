---
sidebar_position: 3
title: "Accessing the System"
description: "Access of On-Premises Cluster Wukong"
tags:
  - HPC
  - On-Premises
  - Access
  - Wukong
---

Wukong curretly only supports the Secure Shell (SSH) mechanisms for logging in. The Secure Shell mechanism uses SSH keys. If you need help creating or uploading your SSH keys, please see the Managing SSH Public Keys page for that information.

### General overview

To connect to Wukong using SSH, you must follow two high-level steps:
* [Connect to the University of Alabama (UA) Network](#connect-to-the-network)
* [Connect to the Secure Shell (SSH)](#connect-to-the-ssh)

:::info[Obtain Wukong Access]
In the case that access to the Wukong system is unavailable to you, please follow the instructions on [Obtaining an Account](/docs/services/on-prem/Wukong/obtain).
:::

### Connect to the Network

University of Alabama (UA) requires users to use the Virtual private network (VPN) to connect to the UA campus network in order to connect to the Wukong cluster.

:::tip
For more information on setting up a VPN, please visit the [Office of Information Technology (OIT) website](https://oit.ua.edu/services/internet-networking/vpn/). 
:::

### Connect to the SSH
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="current-os" queryString>
	<TabItem value="mac" label="MacOS and Linux" default>
		Once you are connected to the VPN, follow these steps to access Wukong:
		
		1. **Open a Terminal:** Find `Terminal` in your local machine and open it.

			:::tip
			In MacOS, use Spotlight search (**Command** + **Spacebar**) and type `Terminal` to open a new terminal window.
			:::

		2. **Connect via SSH:** In the terminal, 
			* Use the SSH command to connect to Wukong. 
				```Shell
				ssh <USERNAME>@Wukong.ua.edu
				```
				:::note
				Replace `<USERNAME>` with your actual Wukong username.
				:::
			* Enter your Wukong password
	</TabItem>
	<TabItem value="win" label="Windows">
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
				<td>Open a local terminal and [follow steps](/docs/services/on-prem/Wukong/access?current-os=mac#connect-to-the-ssh)&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td>
			</tr>
			<tr> 
				<td>Git Bash</td>
				<td>[follow steps](/docs/services/on-prem/Wukong/access?current-os=mac#connect-to-the-ssh)</td>
			</tr>
			<tr> 
				<td>Windows 10 PowerShell</td>
				<td>[follow steps](/docs/services/on-prem/Wukong/access?current-os=mac#connect-to-the-ssh)</td>
			</tr>
			<tr> 
				<td>Windows 10 Subsystem for Linux</td>
				<td>[follow steps](/docs/services/on-prem/Wukong/access?current-os=mac#connect-to-the-ssh)</td>
			</tr>
			<tr> 
				<td>PuTTY</td>
				<td>
					[Follow steps below](/docs/services/on-prem/Wukong/access?current-os=win#putty)
				</td>
			</tr>
		</table>

------------------------------------------------

		#### PuTTY

		PuTTY, initially developed by Simon Tatham for the Windows operating system, serves as a client application for both SSH (Secure Shell) and telnet protocols. It is characterized by its open-source nature, providing access to its source code, and is maintained through collaborative efforts by a community of volunteers.
:::tip
For more information on PuTTY, please visit the [PuTTY website](https://www.putty.org/)
:::
		1. **Download PuTTY:** To download PuTTY, click [download page](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)
		2. **Open PuTTY:** Open downloaded file `putty.exe`
			<p align="center">
				<img src="/img/putty/image.png" alt="putty" style={{'width':'50%', 'height':'50%'}}/>
			</p>
		3. **Host Name:** In the <mark>___Host Name (or IP address)___</mark> field enter the `Wukong.ua.edu`
		4. **Port:** In the <mark>___Port___</mark> field enter the `22`
		5. **Open:** Click on the <mark>___Open___</mark> button. This will prompt a new login Secure Shell window.
		6. **User Name:** In given new window, enter your Wukong <mark>___User Name___</mark>.
			<p align="center">
				<img src="/img/putty/frame08_1.webp" alt="putty"/>
			</p>
		7. **Password:** Enter your Wukong account <mark>___Password___</mark>.
			<p align="center">
				<img src="/img/putty/frame09_1.webp" alt="putty"/>
			</p>
	</TabItem>
</Tabs>

We hope this guide helps you efficiently utilize the Wukong HPC system for your research needs. Happy computing!