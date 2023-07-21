# Hydeout

Hydeout updates the original [Hyde](https://github.com/poole/hyde)
theme for [Jekyll](http://jekyllrb.com) 3.x and 4.x and adds new functionality.<br>
Hydeout 是一个适用于 Jeklyy 3.x 和 4.x  的主题样式，已更新并添加了一些新的功能

![Desktop](/_screenshots/1.png?raw=true)
<img alt="Mobile home page" src="/_screenshots/2.png?raw=true" width="300px" />
<img alt="Mobile post page" src="/_screenshots/3.png?raw=true" width="300px" />

### Usage <br> 用法

Hydeout is available as the `jekyll-theme-hydeout` Ruby Gem.
Add `gem "jekyll-theme-hydeout", "~> 4.1"` to your Gemfile and run
`bundle install`.<br>
Hydeout 可作为 Ruby gem 使用，名称为 `jekyll-theme-hydeout` 。
（Ruby 是一种开源的面向对象程序设计的服务器端脚本语言，gem 是 Ruby 的包管理器。
类似 Python 的 pip ， Node.js 的 npm ）
将 `gem "jekyll-theme-hydeout", "~> 4.1"` 添加到你的 gemfile 并运行
` bundle install ` 指令

If you're installing on Github pages, you may also have to add
`remote_theme: fongandrew/hydeout` to your `_config.yml`. [See the Github
instructions for more details.](https://help.github.com/articles/adding-a-jekyll-theme-to-your-github-pages-site/)
<br>
如果在 Github 页面上安装，可能还需要在你的  `_config.yml` 中添加下列一行代码
`remote_theme: fongandrew/hydeout`
更详细的信息请参考链接


Hydeout uses pagination, so if you have an `index.md`, you'll need to swap
it with an `index.html` that uses the `index` layout:<br>
Hydeout 使用分页组件，因此如果你有一个 `index.md`，你需要将它替换成 ` index.html ` 并使用 "index" 布局：

```
---
layout: index
title: Home
---
```

You'll also need to add a setting to `_config.yml` telling Jekyll how many posts
to include per page (e.g. `paginate: 5`).<br>
你还需要在 `_config.yml` 中添加一个设置，告诉 Jekyll 每页要包含多少篇文章（例如`paginate: 5`）。


### Keep It Simple <br> 保持简单

In keeping with the original Hyde theme, Hydeout aims to keep the overall
design lightweight and plugin-free. JavaScript is currently limited only
to Disqus and Google Analytics (and is only loaded if you provide configuration
variables).
<br>
为了与最初的 Hyde 主题保持一致，Hydeout 致力于保持整体轻量级和无插件设计。
JavaScript 目前仅限于用于 Disqus（一个好用的博客评论平台） 和 Google Analytics（只有在提供配置变量的情况下才会加载变量）。

Hydeout makes heavy use of Flexbox in its CSS. If Flexbox is not available,
the CSS degrades into a single column layout.<br>
Hydeout 在 CSS 中大量使用了 Flexbox（弹性盒子布局）。如果没有 Flexbox ，CSS 就会退化为单列布局。


### Customization <br> 定制

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
Define your own variables, then import in Hydeout's SCSS, like so:
<br>
要覆盖这些变量，请创建自己的 `assets/css/main.scss` 文件。
定义你自己的变量，然后像这样导入 Hydeout 的 SCSS：


```scss
---
# Jekyll needs front matter for SCSS files
---

$sidebar-bg-color: #ac4142;
$link-color: #ac4142;
$sidebar-sticky: false;
@import "hydeout";
```

See the [_variables](_sass/hydeout/_variables.scss) file for other variables
you can override.
有关可以覆盖的其它变量，请参考链接。


You can see the full set of partials you can replace in the
[`_includes`](_includes) folder, but there are a few worth noting:
<br>
你可以在(_includes)文件夹中查看可以替换的全部变量，但有几个值得注意：



* `_includes/copyright.html` - Insert your own copyright here.<br>
  插入你自己的版权信息页面

* `_includes/custom-head.html` - Insert custom head tags (e.g. to load your
  own stylesheets)<br>
  插入你的自定义标题标签（例如：加载你自己的样式表）

* `_includes/custom-foot.html` - Insert custom elements at the end of the
  body (e.g. for custom JS)<br>
  在 body 末尾插入自定义元素（例如：自定义的 JS 代码）

* `_includes/custom-nav-links.html` - Additional nav links to insert at the
  end of the list of links in the sidebar.<br>
  在 侧边栏 链接列表的末尾，插入额外的导航链接。
  

  Pro-tip: The `nav`s in the sidebar are flexboxes. Use the `order` property
  to order your links.<br>
  专业提示：侧边栏中的 ` nav ` 是（弹性盒子）。使用 `order` 属性来排列链接。


* `_includes/custom-icon-links.html`- Additional icon links to insert at the
  end of the icon links at the bottom of the sidebar. You can use the `order`
  property to re-order.<br>
  在 侧边栏 底部图标链接的末尾插入附加的图标链接。您可以使用 `order` 属性重新排序。



* `_includes/favicons.html` - Replace references to `favicon.ico` and
  `favicon.png` with your own favicons references.<br>
  替换 `favicon.ico` 和 `favicon.png` 使用你自己的图标。


* `_includes/font-includes.html` - The Abril Fatface font used for the site
  title is loaded here. If you're overriding that font in the CSS, be sure
  to also remove the font load reference here.<br>
  网站标题使用的 Abril Fatface 字体在此加载。如果在 CSS 中覆盖该字体，请确保
  同时删除此处的字体加载引用。


### New Features <br> 新特性

* Hydeout adds a new tags page (accessible in the sidebar). Just create a
  new page with the tags layout:，<br>
  Hydeout 添加了一个新的标签页（可在侧边栏访问）。只需创建一个标签布局的新页面：

  ```
  ---
  layout: tags
  title: Tags
  ---
  ```

* Hydeout adds a new "category" layout for dedicated category pages.
  Category pages are automatically added to the sidebar. All other pages
  must have `sidebar_link: true` in their front matter to show up in
  the sidebar. To create a category page, use the `category` layout"
  <br>
  Hydeout 为专门的分类页面添加了新的 "ctegory" 布局。分类页面会自动添加到侧边栏。
  所有其他页面必须在其 前言部分（front matter）使用 `sidebar_link: true` 才能显示在侧边栏中。
  要创建分类页面，请使用 `category` 布局"

  ```
  ---
  layout: category
  title: My Category
  ---

  Description of "My Category"
  ```

* You can control how pages are sorted by using the `sidebar_sort_order`
  parameter in the front matter. This works for both category and non-category
  pages, although non-category pages will always come first. Take a look at
  [`_includes/sidebar-nav-links.html`](./_includes/sidebar-nav-links.html) if
  you want to customize this behavior.<br>
  您可以在 前言部分（front matter）中写上 `sidebar_sort_order` 参数来控制页面的排序方式。
  这对 分类 和 非分类 页面都有效，但 非类别 页面 总是排在前面。如果你想自定义这些行为可参考链接
 
  
  ```
  ---
  layout: page
  title: My page
  sidebar_sort_order: 123
  ---

  Some content.
  一些内容

  ```

* A simple redirect-to-Google search is available. Just create a page with
  the `search` layout.<br>
  可进行简单的重定向到谷歌搜索。只需创建一个 ` search ` 布局页面。

  ```
  ---
  layout: search
  title: Google Search
  ---
  ```

* Disqus integration is ready out of the box. Just add the following to
  your config file:<br>
  Disqus（一个好用的博客评论平台）集成开箱即用。只需在配置文件添下以下代码：


  ```yaml
  disqus:
    shortname: my-disqus-shortname
  ```

  If you don't want Disqus or want to use something else, override
  `comments.html`.<br>
  如果您不使用 Disqus 或想使用其他软件，请覆盖 `comments.html`。

* For Google Analytics support, define a `google_analytics` variable with
  your property ID in your config file.<br>
  若要支持 Google Analytics，请在配置文件中定义一个带有属性 ID 的 `google_analytics` 变量。

There's also a bunch of minor tweaks and adjustments throughout the
theme. Hope this works for you!<br>
此外，整个主题还有许多细微的调整。希望这对你有用！