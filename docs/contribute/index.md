---
sidebar_position: 1
title: "Contributing to CIROH DocuHub"
description: "Find out how to contribute information to DocuHub."
tags: [CIROH, DocuHub, Contribute, Blog]
---

# Contributing to CIROH DocuHub

Thank you for your interest in contributing to CIROH's DocuHub, our technical documentation site! Whether you're commenting on project information or submitting a pull request, we appreciate all kinds of contributions. This guide will help you understand the process of contributing code to the CIROH DocuHub.

Our website is constructed using [Docusaurus](https://docusaurus.io/), a modern static website generator.

import { contributeSimpleDocsCards,contributeBlogsDocsCards,contributeProductsDocsCards } from './cardContent'
import StepsCards from "@site/src/components/StepsCards.js"
import Link from '@docusaurus/Link'

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
  <Link class="button button--active button--primary" to="https://github.com/CIROH-UA/ciroh-ua_website/blob/main/.github/ISSUE_TEMPLATE/docuhub-blog-post.md">Blog Post Request Form</Link>
</div>

## Requesting a product page on DocuHub
<StepsCards
  steps={contributeProductsDocsCards}
  containerId="add-product-steps"
/>

<div style={{'display':'flex', 'justifyContent':'center'}}>
  <Link class="button button--active button--primary" to="https://github.com/CIROH-UA/ciroh-ua_website/issues/new?assignees=&labels=on-prem&projects=&template=product-request.md">Product Page Request Form</Link>
</div>

## For developers
If you'd like to get more closely involved with DocuHub's development, please see the subpages below:

<div style={{'display':'flex', 'justifyContent':'center', 'flexWrap':'wrap'}}>
  <Link class="button button--active button--primary" to="/docs/contribute/repository" style={{'margin':'0.7rem'}}>Working with the DocuHub repository</Link>
  <Link class="button button--active button--primary" to="/docs/contribute/technologies" style={{'margin':'0.7rem'}}>Learn more about DocuHub technologies</Link>
  <Link class="button button--active button--primary" to="/docs/contribute/blog" style={{'margin':'0.7rem'}}>Adding blog posts to the DocuHub blog</Link>
</div>

## Help and support
If you have any questions or issues contributing, please don't hesitate to reach out via Slack or email.

<Link class="button button--active button--primary" to="/contact">Contact us</Link>


