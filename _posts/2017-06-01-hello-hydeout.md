---
layout: post
title: Hello Hydeout<br>你好，Hydeout
excerpt_separator:  <!--more-->
---

Hydeout updates the original [Hyde](https://github.com/poole/hyde)
theme for [Jekyll](http://jekyllrb.com) 3.x and 4.x and adds new functionality.<br>
Hydeout 是一个适用于 Jeklyy 3.x 和 4.x 的主题样式，已更新并添加了一些新的功能

### Keep It Simple <br>保持简单

In keeping with the original Hyde theme, Hydeout aims to keep the overall
design lightweight and plugin-free. JavaScript is currently limited only
to Disqus and Google Analytics (and is only loaded if you provide configuration
variables).<br>
为了与最初的 Hyde 主题保持一致，Hydeout 致力于保持整体轻量级和无插件设计。 JavaScript 目前仅限于用于 Disqus（一个好用的博客评论平台） 和 Google Analytics（只有在提供配置变量的情况下才会加载变量）。

Hydeout makes heavy use of Flexbox in its CSS. If Flexbox is not available,
the CSS degrades into a single column layout.<br>
Hydeout 在 CSS 中大量使用了 Flexbox（浮动的盒模型）。如果没有 Flexbox CSS 就会退化为单列布局。

### Customization <br>定制

Hydeout replaces Hyde's class-based theming with the use
of the following SASS variables:<br>
Hydeout 使用以下 SASS 变量取代了 Hyde 基于类的主题设计

```scss
$sidebar-bg-color: #202020 !default;
$sidebar-fg-color: white !default;
$sidebar-sticky: true !default;
$layout-reverse: false !default;
$link-color: #268bd2 !default;
```

To override these variables, create your own `assets/css/main.scss` file.
Define your own variables, then import in Hydeout's SCSS, like so:<br>
要覆盖这些变量，请创建自己的 assets/css/main.scss 文件。 定义你自己的变量，然后像这样导入 Hydeout 的 SCSS：

```
---
# Jekyll needs front matter for SCSS files
---

$sidebar-bg-color: #ac4142;
$link-color: #ac4142;
$sidebar-sticky: false;
@import "hydeout";
```

See the [_variables](https://github.com/fongandrew/hydeout/blob/master/_sass/hydeout/_variables.scss) file for other variables
you can override.<br>
有关可以覆盖的其它变量，请参考链接。

You can also insert custom head tags (e.g. to load your own stylesheets) by
defining your own `_includes/custom-head.html` or insert tags at the end
of the body (e.g. for custom JS) by defining your own
`_includes/custom-foot.html`.<br>
您还可以插入自定义头部标签（例如加载自己的样式表），方法是
定义自己的 `_includes/custom-head.html`，或在正文末尾插入标签（例如自定义的 JS）
`includes/custom-foot.html`。

### New Features <br>新特性

* Hydeout also adds a new tags page (accessible in the sidebar) and a new
  "category" layout for dedicated category pages.<br>
  Hydeout 还增加了一个新的标签页面（可在侧边栏访问）和一个新的
  "类别 "布局。

* Category pages are automatically added to the sidebar. All other pages
  must have `sidebar_link: true` in their front matter to show up in
  the sidebar.<br>
  分类页面会自动添加到侧边栏。所有其他页面必须在前言部分设置 `sidebar_link: true` 才能在侧边栏中显示。


* A simple redirect-to-Google search is available. If you want to use
  Google Custom Search or Algolia or something with more involved,
  override the `search.html`.<br>
  可使用简单的重定向到谷歌搜索。如果您想使用谷歌自定义搜索或 Algolia 或其他更复杂的搜索、请覆盖 `search.html`。

* Disqus integration is ready out of the box. Just add the following to
  your config file:<br>
  Disqus 集成开箱即用。只需在配置文件中添加如下代码：

  ```yaml
  disqus:
    shortname: my-disqus-shortname
  ```

  If you don't want Disqus or want to use something else, override
  `comments.html`.<br>
  如果您不使用 Disqus 或想使用其他软件，请覆盖 `comments.html`

* For Google Analytics support, define a `google_analytics` variable with
  your property ID in your config file.<br>
  要支持 Google Analytics，请在配置文件中定义一个带有你的ID的变量。

There's also a bunch of minor tweaks and adjustments throughout the
theme. Hope this works for you!<br>
此外，整个主题还有许多细微的调整。希望这对你有用！
