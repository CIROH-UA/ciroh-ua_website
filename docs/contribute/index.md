---
sidebar_position: 1
title: "Contributing to CIROH DocuHub"
description: "Find out how to contribute information to DocuHub."
tags:
  - contribute
---


# Contributing to CIROH DocuHub

Thank you for your interest in contributing to CIROH's DocuHub, our technical documentation site! Whether you're commenting on project information or submitting a pull request, we appreciate all kinds of contributions. This guide will help you understand the process of contributing code to the CIROH DocuHub.

Our website is constructed using [Docusaurus](https://docusaurus.io/), a modern static website generator.

import { contributeSimpleDocsCards,contributeBlogsDocsCards,contributeProductsDocsCards } from './cardContent'
import StepsCards from "@site/src/components/StepsCards.js"

## Contributing simple changes to DocuHub

<StepsCards
  steps={contributeSimpleDocsCards}
  containerId="add-docs-steps"
/>

## Submitting a blog post to DocuHub
<StepsCards
  steps={contributeBlogsDocsCards}
  containerId="add-blogs-steps"
/>

<div style={{'display':'flex', 'justifyContent':'center'}}>
  <a class="button button--active button--primary" href="https://github.com/CIROH-UA/ciroh-ua_website/issues/new?assignees=&labels=on-prem&projects=&template=blog-request.md">Blog Post Request Form</a>
</div>

## Requesting a product page on DocuHub
<StepsCards
  steps={contributeProductsDocsCards}
  containerId="add-product-steps"
/>

<div style={{'display':'flex', 'justifyContent':'center'}}>
  <a class="button button--active button--primary" href="https://github.com/CIROH-UA/ciroh-ua_website/issues/new?assignees=&labels=on-prem&projects=&template=product-request.md">Product Page Request Form</a>
</div>

## For developers
If you'd like to get more closely involved with DocuHub's development, please see the subpages below:

<div style={{'display':'flex', 'justifyContent':'center'}}>
  <a class="button button--active button--primary" href="/docs/contribute/repository" style={{'marginLeft':'1rem','marginRight':'1rem'}}>Working with the DocuHub repository</a>
  <a class="button button--active button--primary" href="/docs/contribute/technologies" style={{'marginLeft':'1rem','marginRight':'1rem'}}>Learn more about DocuHub technologies</a>
</div>
<div style={{'display':'flex', 'justifyContent':'center', 'marginTop':'1rem'}}>
  <a class="button button--active button--primary" href="/docs/contribute/blog" style={{'marginLeft':'1rem','marginRight':'1rem'}}>Adding blog posts to the DocuHub blog</a>
</div>

## Help and support
If you have any questions or issues contributing, please don't hesitate to reach out via Slack or email.

<a class="button button--active button--primary" href="/contact">Contact us</a>


