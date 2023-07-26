---
title: "Markup: Syntax Highlighting"<br>标记：语法高亮
layout: post
excerpt: "Post displaying the various ways one can highlight code blocks with Jekyll. Some options include standard Markdown, GitHub Flavored Markdown, and Jekyll's `{% highlight %}` tag."<br>
帖子展示了使用 Jekyll 高亮代码块的各种方法。其中包括标准 Markdown、GitHub Flavored Markdown 和 Jekyll 的 `{% highlight %}` 标签。

last_modified_at: 2012-02-05T10:27:01-05:00
tags:
  - code
  - syntax highlighting
---

Syntax highlighting is a feature that displays source code, in different colors and fonts according to the category of terms. This feature facilitates writing in a structured language such as a programming language or a markup language as both structures and syntax errors are visually distinct. Highlighting does not affect the meaning of the text itself; it is intended only for human readers.[^1]<br>
语法高亮是一种根据术语类别以不同颜色和字体显示源代码的功能。由于结构和语法错误在视觉上一目了然，因此该功能有助于使用结构化语言（如编程语言或标记语言）进行写作。高亮显示并不影响文本本身的含义；它只供人类读者使用[^1]。


[^1]: <http://en.wikipedia.org/wiki/Syntax_highlighting>

## GFM Code Blocks<br>通用公平机制（GitHub Flavored Markdown）代码块

GitHub Flavored Markdown [fenced code blocks](https://help.github.com/articles/creating-and-highlighting-code-blocks/) are supported by default with Jekyll. You may need to update your `_config.yml` file to enable them if you're using an older version.<br>
Jekyll 默认支持 GitHub Flavored Markdown 。如果您使用的是旧版本，可能需要更新 `_config.yml` 文件以启用它们。


```yaml
kramdown:
  input: GFM
```

Here's an example of a CSS code snippet written in GFM:<br>
下面是一个用 GFM 编写的 CSS 代码片段示例：

```css
#container {
  float: left;
  margin: 0 -240px 0 0;
  width: 100%;
}
```

Yet another code snippet for demonstration purposes:<br>
另一个用于演示的代码片段：

```ruby
module Jekyll
  class TagIndex < Page
    def initialize(site, base, dir, tag)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'
      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'tag_index.html')
      self.data['tag'] = tag
      tag_title_prefix = site.config['tag_title_prefix'] || 'Tagged: '
      tag_title_suffix = site.config['tag_title_suffix'] || '&#8211;'
      self.data['title'] = "#{tag_title_prefix}#{tag}"
      self.data['description'] = "An archive of posts tagged #{tag}."
    end
  end
end
```

## Jekyll Highlight Liquid Tag<br>Jekyll 高亮 Liquid 语言标签

Jekyll also has built-in support for syntax highlighting of code snippets using either Rouge or Pygments, using a dedicated Liquid tag as follows:<br>
Jekyll 还内置了使用 Rouge 或 Pygments 的代码片段语法高亮支持，使用专用的 Liquid 标签如下：


```liquid
{% raw %}{% highlight scss %}
.highlight {
  margin: 0;
  padding: 1em;
  font-family: $monospace;
  font-size: $type-size-7;
  line-height: 1.8;
}
{% endhighlight %}{% endraw %}
```

And the output will look like this:<br>
输出的结果如下所示：

{% highlight scss %}
.highlight {
  margin: 0;
  padding: 1em;
  font-family: $monospace;
  font-size: $type-size-7;
  line-height: 1.8;
}
{% endhighlight %}

Here's an example of a code snippet using the Liquid tag and `linenos` enabled.<br>
下面是一个使用 Liquid 标签并启用`linenos`的代码片段示例。


{% highlight html linenos %}
{% raw %}<nav class="pagination" role="navigation">
  {% if page.previous %}
    <a href="{{ site.url }}{{ page.previous.url }}" class="btn" title="{{ page.previous.title }}">Previous article</a>
  {% endif %}
  {% if page.next %}
    <a href="{{ site.url }}{{ page.next.url }}" class="btn" title="{{ page.next.title }}">Next article</a>
  {% endif %}
</nav><!-- /.pagination -->{% endraw %}
{% endhighlight %}

## Code Blocks in Lists<br>列表中的代码块

Indentation matters. Be sure the indent of the code block aligns with the first non-space character after the list item marker (e.g., `1.`). Usually this will mean indenting 3 spaces instead of 4.<br>
缩进很重要。确保代码块的缩进与列表项标记（例如，`1.`）后的第一个非空格字符对齐。通常这意味着缩进 3 个空格而不是 4 个空格。


1. Do step 1.
2. Now do this:

   ```ruby
   def print_hi(name)
     puts "Hi, #{name}"
   end
   print_hi('Tom')
   #=> prints 'Hi, Tom' to STDOUT.
   ```

3. Now you can do this.

## GitHub Gist Embed <br> GitHub Gist 嵌入

GitHub Gist embeds can also be used:<br>
GitHub Gist 嵌入仍然是可用的：

```html
<script src="https://gist.github.com/mmistakes/77c68fbb07731a456805a7b473f47841.js"></script>
```

Which outputs as:
其输出为：
<script src="https://gist.github.com/mmistakes/77c68fbb07731a456805a7b473f47841.js"></script>
