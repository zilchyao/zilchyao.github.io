---
layout: post
title: "Antidisestablishmentarianism"
categories:
  - Edge Case
tags:
  - content
  - css
  - edge case
  - html
  - layout
  - title
last_modified_at: 2017-03-09T14:10:02-05:00
---

This post title has a long word that could potentially overflow the content area.<br>
这个帖子的标题包含一个很长的单词，可能会溢出内容区域。


A few things to check for:<br>
需要检查的一些事项：


  * Non-breaking text in the title should have no adverse effects on layout or functionality.<br>标题中的非分隔符文本应该不会对布局或功能产生不利影响。
  * Check the browser window / tab title.<br>
    检查浏览器窗口/选项卡标题。

The following CSS property will help you support non-breaking text.<br>
以下 CSS 属性可帮助您支持非分隔文本。

```css
word-wrap: break-word;
```