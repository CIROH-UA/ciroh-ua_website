---
sidebar_position: 7
title: "Debugging Package Conflicts"
description: "a tutorial guide to help debug python package conflicts"
tags:
  - 2i2c
  - JupyterHub
  - Python
  - Package Management
  - Troubleshooting
---
# Debugging Python Package Conflicts

### Overview

When Python packages are installed in your home directory (`~/.local`) instead of the system environment, they may conflict with packages provided by your JupyterHub image. These local installations take precedence over system or environment packages, potentially causing version mismatches and unexpected behavior.
### Common causes include:

- Running `pip install --user <package-name>`
- Running `pip install <package-name>` in a non-writable environment
- Previous manual installations in your home directory

### How to Identify Package Conflicts

Check for Local Package Installations:

```bash
ls ~/.local/lib/pythonX.Y/site-packages/
```



### Recommended Solution

#### Step 1: Remove Conflicting Packages

Clear all locally installed Python packages:

```bash
rm -rf ~/.local/lib/pythonX.Y
```
**Note**: This will remove **ALL** Python packages installed in your home directory and ensure that only system or environment packages are used.

#### Step 3: Verify Your Environment
- Verify that you are using the correct JupyterHub image by checking the JUPYTER_IMAGE environment variable:

```bash
echo $JUPYTER_IMAGE
```
- Reinstall needed packages properly
```bash
pip install <package-name>
```

### Best Practices
- Avoid using `pip install --user` in JupyterHub environments
- Use virtual environments for project-specific packages
- When installing packages first check if the package is already available in your image