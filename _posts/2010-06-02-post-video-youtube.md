---
layout: post
title: "Post: Video (YouTube)<br>发帖：视频内容（YouTube）"
categories:
  - Post Formats
tags:
  - Post Formats
last_modified_at: 2017-03-23T15:33:37-04:00
---

<div class="embed-responsive embed-responsive-16by9">
  <iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/l2Of1-d5E5o?controls=0&amp;" frameborder="0" allowfullscreen></iframe>
</div>


This post tests YouTube video embeds.<br>
此帖测试嵌入 YouTube 视频。

<div>
    <iframe src="//player.bilibili.com/player.html?aid=913396683&bvid=BV1tM4y1x7gZ&cid=1196242270&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Simply wrap embeds with a `<div>` element and the appropriate classes:<br>
只需用`<div>`元素和适当的 类 对嵌入内容进行包装即可：

```html
<!-- 16:9 aspect ratio -->
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>

<!-- 4:3 aspect ratio -->
<div class="embed-responsive embed-responsive-4by3">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>

<!-- responsive iframe. The framesize reduces proportionately when viewing in mobile -->
<div class="video-container">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>
```
