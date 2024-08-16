---
sidebar_position: 2
title: "Manage files in GCP bucket"
description: "2i2c JupyterHub Google Cloud Buckets"
tags:
  - 2i2c
  - JupyterHub
  - GCP
  - notebook
  - custom images
  - tutorial
---

This guide is for managing objects in GCP buckets available on 2i2c CIROH JupyterHub. For more detailed explanation, you can visit [2i2c docs site](https://docs.2i2c.org/user/topics/data/object-storage/manage-object-storage-gcp/).

### 1. Overview
CIROH JupyterHub uses object Google Cloud Storage to store data in buckets (containers for objects). Currently, there are two buckets available to use on CIROH JupyterHub. 
- **Scratch Buckets**: It is intended for storing temporary files since any files in scratch buckets get deleted after seven days. Open a terminal in CIROH JupyterHub and run this command to display your scratch bucket name:

```
echo $SCRATCH_BUCKET
gs://awi-ciroh-scratch/<username>
```
- **Persistent Buckets**: It is recommended to use for storing files that you will be using for a longer period of time. Open a terminal in CIROH JupyterHub and run this command to display your persistent bucket name:

```
echo $PERSISTENT_BUCKET
gs://awi-ciroh-persistent/<username>
```

### 2. Copying file to a bucket
You can copy files on your CIROH JupyterHub to an available bucket using the following command.

```
gcloud storage ls cp <filepath> $PERSISTENT_BUCKET/<filepath>
```

### 3. Copying file from a bucket to CIROH JupyterHub
You can copy files from an accessible bucket to your CIROH JupyterHub using the following command.

```
gcloud storage ls cp $PERSISTENT_BUCKET/<filepath> <destination-filepath>
```

### 4. Deleting file from a bucket
You can delete a file in a bucket with the following command:

```
gcloud storage ls rm $PERSISTENT_BUCKET/<filepath>
```


:::note
Anyone can access each other's files in persistent buckets on the hub. Please be careful not to delete other user's files. Your actions impact the entire organization's storage. If unsure, consult with the team lead or ciroh IT support.
:::

## Where to go for help:

- Email ciroh-it-admin@ua.edu UA CIROH Cloud Team
- CIROH Cloud Slack Channel - #ciroh-ua-it-admin
- CIROH Infrastructure Support Slack Channel - #ciroh-infrastructure-support