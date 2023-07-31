---
layout: post
title: "Post: Future Date<br>发帖：未来发布"
date: 9999-12-31
categories:
  - Post
last_modified_at: 2017-03-09T12:45:25-05:00
---

This post lives in the future and is dated {{ page.date | date: "%c" }}. It should only appear when Jekyll builds your project with the `--future` flag.
这篇文章将会在未来某个指定的日期为 {{ page.date | date: "%c" }} 发布。此功能的前提是只有使用了 "Jekyll -future " 参数时才会有效。

```bash
jekyll build --future
```