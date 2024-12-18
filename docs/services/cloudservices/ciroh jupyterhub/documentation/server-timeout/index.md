---
sidebar_position: 6
title: "Prevent Server Timeout"
description: "
Currently, user servers on JupyterHub stop after about an hour of inactivity. While this helps save costs, it can be problematic for long-running jobs if there is no active interaction with the notebook."
tags:
  - 2i2c
  - JupyterHub
  - timeout
  - notebook
  - tutorial
---
# Preventing JupyterHub Server Timeout for Long-Running Jobs

JupyterHub servers typically stop after about an hour of inactivity to help manage computational reosurces. This can be present challenges for users who need to run long-running jobs. You have two options to keep your JupyterHub server active for longer periods:


### 1. Jupyter Keepalive Extension

The Jupyter Keepalive extension provides an easy way to control your server's active time. 
- To install the extension, open a terminal and run:

```bash
pip install jupyter-keepalive
```

- Use the JupyterLab Command Palette (Command+Shift+C on Mac or Control+Shift+C on Linux/Windows) to select the "Keep server alive while idle" option. 
- Once your task is complete, it's crucial that you then use the Command Palette to select the "Stop keeping server alive" option. This will ensure that the server is no longer being kept active unnecessarily.
<img src="/img/server-keepalive.png" width="700" alt="image of jupyterlab command palette" />

### 2. Using `time.sleep()` (Alternate Method)

As an alternative, you can create a separate notebook with the following code and run the cell before starting your job.

```python
import time
time.sleep(24 * 60 * 60) # Sleeps for 24 hours
```
