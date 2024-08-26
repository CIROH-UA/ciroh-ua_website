---
sidebar_position: 4
title: "AWS S3 Sync with Different Access Keys"
description: "AWS S3 Sync with Different Access Keyss"
tags:
  - aws
  - documentation
  - tutorial
  - AWS
  - s3 sync
  - access keys
---


### Step 1: Configure AWS CLI Profiles
First, set up two different profiles in your AWS CLI configuration, one for the source bucket and one for the destination bucket.

```
# Configure source profile
aws configure --profile source-profile
AWS Access Key ID [None]: [Enter source bucket access key]
AWS Secret Access Key [None]: [Enter source bucket secret key]
Default region name [None]: [Enter region, e.g., us-west-2]
Default output format [None]: json

# Configure destination profile
aws configure --profile destination-profile
AWS Access Key ID [None]: [Enter destination bucket access key]
AWS Secret Access Key [None]: [Enter destination bucket secret key]
Default region name [None]: [Enter region, e.g., us-east-1]
Default output format [None]: json

``` 

### Step 2: Verify Profiles
Verify that your profiles are set up correctly:
```
aws configure list --profile source-profile
aws configure list --profile destination-profile
```

### Step 3: Use AWS S3 Sync Command
Now, you can use the aws s3 sync command with these profiles. Here's the basic syntax:
```
aws s3 sync s3://source-bucket s3://destination-bucket \
    --source-profile source-profile \
    --profile destination-profile
```
Examples

```
#Sync all contents:

aws s3 sync s3://my-source-bucket s3://my-destination-bucket \
    --source-profile source-profile \
    --profile destination-profile


#Sync with specific options:

aws s3 sync s3://my-source-bucket s3://my-destination-bucket \
    --source-profile source-profile \
    --profile destination-profile \
    --delete \
    --exclude "*.tmp" \
    --include "*.jpg"

#Dry run (no actual changes):

aws s3 sync s3://my-source-bucket s3://my-destination-bucket \
    --source-profile source-profile \
    --profile destination-profile \
    --dryrun
```

### Important Notes:
- The --source-profile is used for reading from the source bucket.
- The --profile (or --dest-profile in some AWS CLI versions) is used for writing to the destination bucket.
- Ensure both profiles have the necessary permissions on their respective buckets.
- Be cautious with the --delete flag as it removes files in the destination that don't exist in the source.
- Always test with --dryrun first to ensure the operation will do what you expect.