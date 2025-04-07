---
sidebar_position: 3
title: "Anvil"
description: "Accessing and Using Anvil"
tags:
  - NSF
  - Anvil
  - HPC
  - Account
  - Access
---

import { Link } from 'react-router-dom'

Anvil is a powerful supercomputer, offering computing power for demanding research problems. Purdue's Anvil cluster consists of 1,000 nodes with two 64-core AMD EPYC "Milan" processors each and delivers over one billion CPU core hours each year. With a peak performance of 5.1 petaflops and a speed of 100 Gbps interconnect, Anvil ensures rapid data transfer and processing for efficient research workflows. Standard Anvil nodes have 256GB of DDR4-3200 memory each, ideal for most research tasks.

<div className="col col--6">
				<img src="https://www.rcac.purdue.edu/files/anvil/Anvil_cummulative_8-2024_stats_only%20%281%29.png" alt="Anvil statistics"/>
				<i>Image Source: <Link to="https://www.rcac.purdue.edu/anvil">https://www.rcac.purdue.edu/anvil</Link> </i>
</div>

### Use cases:
- **General-Purpose CPU Power**: Anvil's powerful CPUs (with 128 cores per node) are ideal for computationally intensive tasks suitable for modeling and simulation across scientific and engineering fields.
- **Memory-Intensive Workloads**: The dedicated large memory nodes (with 1TB of DDR4-3200 memory per node) works bestfor research that demands significant memory resources.
- **Composable Subsystem**: It is a private cloud built on Kubernetes and consists of bothe CPU and GPU nodes and S3 data storage. It is suitable for applications such as model inference service (via NVIDIA Triton), Specialized LLMs, dataset hosting, science gateways and web application hosting, and classroom and training applications via interactive access interfaces.

<Link class="button button--active button--primary" style={{'margin-right':'1.3rem','margin-bottom':'1.3rem'}} to="https://www.rcac.purdue.edu/anvil#docs">Anvil Documentation</Link>


:::info
For a more detailed information on Anvil, visit the official NSF ACCESS website <Link to="https://allocations.access-ci.org/resources">here.</Link>
:::