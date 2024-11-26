---
title: Welcome DocuHub's Blog
description: This is first post on DocuHub about Blog.
slug: Welcome-DocuHub-Blog
# authors: apatel
authors:
  - name: Arpita Patel
    url: https://github.com/arpita0911patel
    image_url: https://avatars.githubusercontent.com/u/54657?v=4
tags: [blog, docuhub, nextgen, ciroh]
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---

# How to write a new Blog?

## Adding posts

### What file name to use?

DocuHub will extract a YYYY-MM-DD date from many patterns such as `YYYY-MM-DD-my-blog-post-title.md` or `YYYY/MM/DD/my-blog-post-title.md`. This enables you to easily group blog posts by year, by month, or to use a flat structure.
<!-- truncate -->
### Example (with Metadata/Front matter)

To publish in the blog, create a Markdown file within the blog directory.
For example, create a file at `/blog/2019-09-05-hello-docuhub.md`

e.g.

```
---
title: Welcome DocuHub
description: This is my first post on DocuHub.
slug: welcome-DocuHub
authors:
  - name: John Doe
    title: Co-creator of Product 1
    url: <Youe github product or external article link>
    image_url: <Author pic url>
  - name: Jane Doe
    title: Co-creator of Product 2
    url: <Youe github product or external article link>
    image_url: <Author pic url>
tags: [hello, docuhub, nextgen]
hide_table_of_contents: false
---

Welcome to this blog. This blog is created with [**DocuHub 2**](https://docs.ciroh.org/).

<!-- truncate -->

This is my first post on DocuHub.

A whole bunch of exploration to follow.
```

## What is Metadata/Front Matter

The front matter is useful to add more metadata to your blog post, for example, author information, but Docusaurus will be able to infer all necessary metadata without the front matter.

Front matter is provided at the very top of the file, enclosed by three dashes ---. The content is parsed as YAML.

```
---
title: My Doc Title
more_data:
  - Can be provided
  - as: objects
    or: arrays
---
```

