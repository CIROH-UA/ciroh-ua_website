---
sidebar_position: 1
title: "AWS tags"
description: "AWS tags for cost tracking"
tags:
  - AWS
  - Tag
  - Cost
---

Tags help you to categorize your AWS resources by purpose, owner, or environment. If unique key and value are given, it can track the cost of resouces by the tags.

# How to create a tag in AWS

1. Using AWS Console

   Every resource has a property field named Tag, and this example is creating a tag in EC2 instance, and it has similar interface to create a tag in other resources.

- Click on a instance in the list view.
- Click on Tags tab, and Click on Manage tags button on the right.
- Add new tag, and provide unique Key and Value.
<p align="center">
<img src="/img/EC2-CreateTag.png" alt="NGIAB Logo" style={{'width':'50%', 'height':'50%'}}/>
</p>
- Click on Save

2. Using aws cli

   This is an example of creating a tag in EC2 instance.
  ```
  aws ec2 create-tags \
    --resources i-1234567890abcdef0 \
    --tags Key=webserver,Value=dev
  ```