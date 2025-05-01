---
sidebar_position: 1
title: "JupyterHub User Directory"
description: "2i2c JupyterHub File System"
tags: [CIROH, Services, Cloud Services, JupyterHub, 2i2c, Google Cloud, Education]
---

This is a guide for understanding the File System in CIROH JupyterHub. You can find detailed explanation on [2i2c docs site](https://docs.2i2c.org/user/topics/data/filesystem/).

### 1. `/home/jovyan`
This is your home directory and is same for all JupyterHub users. **Only you can access files in your home directory.** Any files you place in your home directory persists between sessions. It is recommended to use only for notebooks and code since it is not suitable for large datasets.

### 2. `/home/jovyan/shared`
This is the shared **readonly** directory. All users can access and read from the shared directory. Only the hub admins can add and delete data from this directory. 

### 3. `/tmp`
This is a non persistient directory. This means any files you add under /tmp direcotry will be deleted once you log out. This directory can be used to store data temporary data.

