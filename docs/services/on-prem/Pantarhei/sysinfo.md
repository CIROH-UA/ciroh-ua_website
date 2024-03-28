---
sidebar_position: 1
title: "System Architecture"
description: "System Architecture of Pantarhei"
tags:
- HPC
- On-Premises
- System Architecture
- Pantarhei
---
### Login Node
<div class="container">
	<table>
		<tr> 
			<th colspan="6"> Pantarhei Login Node</th>
		</tr>
		<tr>
			<td>Number of nodes</td>
			<td>Processors per node</td>
			<td>Cores per node</td>
			<td>Sockets per node</td>
			<td>Memory per node</td>
			<td>Local storage per node</td>
		</tr>
		<tr>
			<td>1</td>
			<td>2x Intel(R) Xeon(R) Silver 4110 CPU @ 2.10GHz</td>
			<td>16</td>
			<td>2</td>
			<td>96 Gb</td>
			<td>76 TB</td>
		</tr>
	</table>
</div>

### Compute Nodes
<div class="container">
	<table  style={{'width':'100%'}}>
		<tr> 
			<th colspan="2"> Compute Node Specifications</th>
		</tr>
		<tr>
			<td>Model</td>
			<td>Intel(R) Xeon(R) Gold 6148</td>
		</tr>
		<tr>
			<td>Number of nodes</td>
			<td>6</td>
		</tr>
		<tr>
			<td>Sockets per node</td>
			<td>2</td>
		</tr>
		<tr>
			<td>Cores per socket</td>
			<td>20</td>
		</tr>
		<tr>
			<td>Cores per node</td>
			<td>40</td>
		</tr>
		<tr>
			<td>Hardware threads per core</td>
			<td>1</td>
		</tr>
		<tr>
			<td>Hardware threads per node</td>
			<td>40</td>
		</tr>
		<tr>
			<td>Clock rate</td>
			<td>2.40GHz (3.70GHz max boost)</td>
		</tr>
		<tr>
			<td>RAM</td>
			<td>384 GB DDR4-2666</td>
		</tr>
		<tr>
			<td>Cache</td>
			<td> L1d cache: 1.3 MiB (40 instances)&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<br/>
				L1i cache: 1.3 MiB (40 instances)<br/>
				L2 cache: 40 MiB (40 instances)<br/>
				L3 cache: 55 MiB (2 instances)</td>
		</tr>
		<tr>
			<td>Local storage per node</td>
			<td>4 TB</td>
		</tr>
	</table>
</div>

### FPGA Nodes
<div class="container">
	<table  style={{'width':'100%'}}>
		<tr> 
			<th colspan="2"> Compute Node Specifications</th>
		</tr>
		<tr>
			<td>Model</td>
			<td>Intel(R) Xeon(R) Gold 6148</td>
		</tr>
		<tr>
			<td>Number of nodes</td>
			<td>1</td>
		</tr>
		<tr>
			<td>Sockets per node</td>
			<td>2</td>
		</tr>
		<tr>
			<td>Cores per socket</td>
			<td>20</td>
		</tr>
		<tr>
			<td>Cores per node</td>
			<td>40</td>
		</tr>
		<tr>
			<td>Hardware threads per core</td>
			<td>1</td>
		</tr>
		<tr>
			<td>Hardware threads per node</td>
			<td>40</td>
		</tr>
		<tr>
			<td>Clock rate</td>
			<td>2.40GHz (3.70GHz max boost)</td>
		</tr>
		<tr>
			<td>RAM</td>
			<td>384 GB DDR4-2666</td>
		</tr>
		<tr>
			<td>Cache</td>
			<td> L1d cache: 1.3 MiB (40 instances)&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<br/>
				L1i cache: 1.3 MiB (40 instances)<br/>
				L2 cache: 40 MiB (40 instances)<br/>
				L3 cache: 55 MiB (2 instances)</td>
		</tr>
		<tr>
			<td>Local storage per node</td>
			<td>2 TB</td>
		</tr>
	</table>
</div>

### GPU Nodes
<div class="container">
	<table  style={{'width':'100%'}}>
		<tr> 
			<th colspan="2"> Compute Node Specifications</th>
		</tr>
		<tr>
			<td>Model</td>
			<td>Intel(R) Xeon(R) Gold 6148</td>
		</tr>
		<tr>
			<td>Number of nodes</td>
			<td>1</td>
		</tr>
		<tr>
			<td>Sockets per node</td>
			<td>2</td>
		</tr>
		<tr>
			<td>Cores per socket</td>
			<td>20</td>
		</tr>
		<tr>
			<td>Cores per node</td>
			<td>40</td>
		</tr>
		<tr>
			<td>Hardware threads per core</td>
			<td>1</td>
		</tr>
		<tr>
			<td>Hardware threads per node</td>
			<td>40</td>
		</tr>
		<tr>
			<td>Clock rate</td>
			<td>2.40GHz (3.70GHz max boost)</td>
		</tr>
		<tr>
			<td>RAM</td>
			<td>384 GB DDR4-2666</td>
		</tr>
		<tr>
			<td>Cache</td>
			<td> L1d cache: 1.3 MiB (40 instances)&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<br/>
				L1i cache: 1.3 MiB (40 instances)<br/>
				L2 cache: 40 MiB (40 instances)<br/>
				L3 cache: 55 MiB (2 instances)</td>
		</tr>
		<tr>
			<td>Local storage per node</td>
			<td>3 TB</td>
		</tr>
		<tr>
			<td>Number GPUs per node</td>
			<td>4</td>
		</tr>
		<tr>
			<td>GPU model</td>
			<td>NVIDIA Tesla V100 SXM2</td>
		</tr>
		<tr>
			<td>Memory per GPU</td>
			<td>16 GB</td>
		</tr>
	</table>
</div>

### Network
All nodes are interconnected by a Mellanox InfiniBand switch with FDR 56 Gb/s networks.