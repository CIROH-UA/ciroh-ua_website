---
sidebar_position: 1
title: "System Architecture"
description: "System Architecture of Pantarhei"
hide_table_of_contents: false
tags:
- HPC
- On-Premises
- System Architecture
- Pantarhei
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Heading from '@theme/Heading';


# Hardware Specifications

<Tabs>
  <TabItem value="login" label="Login Node" default>
    <div className="container">
      <table style={{ width: '100%', display: 'inline-table' }}>
        <tr> 
          <th colSpan="6">Pantarhei Login Node</th>
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
  </TabItem>
  <TabItem value="compute" label="Compute Nodes">
  <div className="container">

    <details style={{backgroundColor: 'transparent', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 'var(--ifm-global-radius)', padding: 'var(--ifm-spacing-vertical) var(--ifm-spacing-horizontal)'}}>
      <summary style={{backgroundColor: 'transparent', color: 'var(--ifm-color-primary)', fontWeight: 'var(--ifm-font-weight-bold)'}}>Partition : normal</summary>
      <table style={{ width: '100%', display: 'inline-table' }}>
		<tr> 
			<th colspan="2"> Compute Node Specifications</th>
		</tr>
		<tr>
			<td>Model</td>
			<td>Intel(R) Xeon(R) Gold 6148 CPU @ 2.40GHz</td>
		</tr>
		<tr>
			<td>Number of nodes</td>
			<td>5</td>
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
			<td> L1d cache: 1.3 MiB (40 instances)<br/>
				L1i cache: 1.3 MiB (40 instances)<br/>
				L2 cache: 40 MiB (40 instances)<br/>
				L3 cache: 55 MiB (2 instances)</td>
		</tr>
		<!-- <tr>
			<td>Local storage per node</td>
			<td>4 TB</td>
		</tr> -->
	</table>
    </details>

    <details style={{backgroundColor: 'transparent', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 'var(--ifm-global-radius)', padding: 'var(--ifm-spacing-vertical) var(--ifm-spacing-horizontal)'}}>
      <summary style={{backgroundColor: 'transparent', color: 'var(--ifm-color-primary)', fontWeight: 'var(--ifm-font-weight-bold)'}}>Partition : long</summary>
      <table style={{ width: '100%', display: 'inline-table' }}>
		<tr> 
			<th colspan="2"> Compute Node Specifications</th>
		</tr>
		<tr>
			<td>Model</td>
			<td>Intel(R) Xeon(R) Gold 6326 CPU @ 2.90 GHz</td>
		</tr>
		<tr>
			<td>Number of nodes</td>
			<td>4</td>
		</tr>
		<tr>
			<td>Sockets per node</td>
			<td>2</td>
		</tr>
		<tr>
			<td>Cores per socket</td>
			<td>16</td>
		</tr>
		<tr>
			<td>Cores per node</td>
			<td>64</td>
		</tr>
		<tr>
			<td>Hardware threads per core</td>
			<td>2</td>
		</tr>
		<tr>
			<td>Hardware threads per node</td>
			<td>64</td>
		</tr>
		<tr>
			<td>Clock rate</td>
			<td>2.90GHz (3.50GHz max boost)</td>
		</tr>
		<tr>
			<td>RAM</td>
			<td>256 GB DDR4-2666</td>
		</tr>
		<tr>
			<td>Cache</td>
			<td> L1d cache: 1.5 MiB (32 instances)<br/>
				L1i cache: 1 MiB (32 instances)<br/>
				L2 cache: 40 MiB (32 instances)<br/>
				L3 cache: 48 MiB (2 instances)</td>
		</tr>
		<!-- <tr>
			<td>Local storage per node</td>
			<td>4 TB</td>
		</tr> -->
	</table>
    </details>

    <details style={{backgroundColor: 'transparent', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 'var(--ifm-global-radius)', padding: 'var(--ifm-spacing-vertical) var(--ifm-spacing-horizontal)'}}>
      <summary style={{backgroundColor: 'transparent', color: 'var(--ifm-color-primary)', fontWeight: 'var(--ifm-font-weight-bold)'}}>Partition : amd</summary>
      <table style={{ width: '100%', display: 'inline-table' }}>
		<tr> 
			<th colspan="2"> Compute Node Specifications</th>
		</tr>
		<tr>
			<td>Model</td>
			<td>AMD EPYC 7702 64-Core Processor</td>
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
			<td>64</td>
		</tr>
		<tr>
			<td>Cores per node</td>
			<td>256</td>
		</tr>
		<tr>
			<td>Hardware threads per core</td>
			<td>2</td>
		</tr>
		<tr>
			<td>Hardware threads per node</td>
			<td>256</td>
		</tr>
		<tr>
			<td>Clock rate</td>
			<td>2.00GHz (3.40GHz max boost)</td>
		</tr>
		<tr>
			<td>RAM</td>
			<td>512 GB DDR4-2666</td>
		</tr>
		<tr>
			<td>Cache</td>
			<td> L1d cache: 4 MiB (128 instances)<br/>
				L1i cache: 4 MiB (128 instances)<br/>
				L2 cache: 64 MiB (128 instances)<br/>
				L3 cache: 512 MiB (32 instances)</td>
		</tr>
		<!-- <tr>
			<td>Local storage per node</td>
			<td>4 TB</td>
		</tr> -->
	</table>
    </details>

  </div>
</TabItem>

  
  <TabItem value="fpga" label="FPGA Nodes">
    <div className="container" >
      <table style={{ width: '100%', display: 'inline-table' }}>
        <tr> 
          <th colSpan="2">FPGA Node Specifications</th>
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
          <td>
            L1d cache: 1.3 MiB (40 instances)<br/>
            L1i cache: 1.3 MiB (40 instances)<br/>
            L2 cache: 40 MiB (40 instances)<br/>
            L3 cache: 55 MiB (2 instances)
          </td>
        </tr>
        <tr>
          <td>Local storage per node</td>
          <td>2 TB</td>
        </tr>
      </table>
    </div>
  </TabItem>
  
  <TabItem value="gpu" label="GPU Nodes">
    <div className="container">
      <table style={{ width: '100%', display: 'inline-table' }}>
        <tr> 
          <th colSpan="2">GPU Node Specifications</th>
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
          <td>
            L1d cache: 1.3 MiB (40 instances)<br/>
            L1i cache: 1.3 MiB (40 instances)<br/>
            L2 cache: 40 MiB (40 instances)<br/>
            L3 cache: 55 MiB (2 instances)
          </td>
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
  </TabItem>
</Tabs>
### Network
All nodes are interconnected by a Mellanox InfiniBand switch with FDR 56 Gb/s networks.