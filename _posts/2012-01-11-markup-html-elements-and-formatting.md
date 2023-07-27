---
layout: post
title: "Markup: HTML Elements and Formatting<br>标记：HTML 元素和格式"
sub_title: "The common elements<br>通用元素"
categories:
  - Markup
elements:
  - content
  - css
  - formatting
  - html
  - markup
last_modified_at: 2017-03-09T10:55:59-05:00
---

A variety of common HTML elements to demonstrate the theme's stylesheet and verify they have been styled appropriately.<br>
各种常见的 HTML 元素，用于演示主题的样式表，并验证它们的样式是否恰当。

# Header one 一级标题

## Header two 二级标题

### Header three 三级标题

#### Header four 四级标题

##### Header five 五级标题

###### Header six 六级标题

## Blockquotes
<br> 引用块

Single line blockquote:
<br>单行引用

> Stay hungry. Stay foolish.

Multi line blockquote with a cite reference:
<br>多行引用标签 cite 通常表示对某个参考文献的引用，比如书籍或者杂志的标题。

> People think focus means saying yes to the thing you've got to focus on. But that's not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick carefully. I'm actually as proud of the things we haven't done as the things I have done. Innovation is saying no to 1,000 things.<br>
人们认为，专注意味着对你必须专注的事情说 "是"。但根本不是这个意思。它意味着对其他上百个好主意说 "不"。你必须仔细挑选。实际上，我为我们没有做过的事情和我做过的事情感到骄傲。创新就是对一千件事说 "不"。

<cite>Steve Jobs 史蒂夫 乔布斯</cite> --- Apple Worldwide Developers' Conference,苹果全球开发者大会 1997
{: .small}

## Tables <br> 表格

| Employee         | Salary |                                                              |
| --------         | ------ | ------------------------------------------------------------ |
| [John Doe](#)    | $1     | Because that's all Steve Jobs needed for a salary.           |
| [Jane Doe](#)    | $100K  | For all the blogging she does.                               |
| [Fred Bloggs](#) | $100M  | Pictures are worth a thousand words, right? So Jane × 1,000. |
| [Jane Bloggs](#) | $100B  | With hair like that?! Enough said.                           |

| Header1 | Header2 | Header3 |
|:--------|:-------:|--------:|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|-----------------------------|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|=============================|
| Foot1   | Foot2   | Foot3   |

## Definition Lists <br> 定义列表

Definition List Title 定义表头标题
: Definition list division. 定义单元格

Startup 创业
: A startup company or startup is a company or temporary organization designed to search for a repeatable and scalable business model.<br>创业公司或初创企业是指旨在寻找可重复、可扩展商业模式的公司或临时组织。

#dowork 工作
: Coined by Rob Dyrdek and his personal body guard Christopher "Big Black" Boykins, "Do Work" works as a self motivator, to motivating your friends.<br>由罗布-迪尔代克和他的贴身保镖克里斯托弗-"大黑"-博伊金斯共同提出的 "干得漂亮"，既可以激励自己，也可以激励朋友。

Do It Live 直播
: I'll let Bill O'Reilly [explain](https://www.youtube.com/watch?v=O_HyZ5aW76c "We'll Do It Live") this one.<br>我会让比尔-奥赖利 解释 "我们直播" 这个问题。

## Unordered Lists (Nested)<br>无序列表（嵌套）

  * List item one
      * List item one
          * List item one
          * List item two
          * List item three
          * List item four
      * List item two
      * List item three
      * List item four
  * List item two
  * List item three
  * List item four

## Ordered List (Nested)<br>有序列表（嵌套）

  1. List item one
      1. List item one
          1. List item one
          2. List item two
          3. List item three
          4. List item four
      2. List item two
      3. List item three
      4. List item four
  2. List item two
  3. List item three
  4. List item four

## Address element 地址元素

<address>
  1 Infinite Loop<br /> Cupertino, CA 95014<br /> United States
</address>

## Anchor element (aka. Link)<br> 锚元素（又称链接）

This is an example of a [link](http://apple.com "Apple").<br>
这是个链接的例子。

## Abbreviation element<br>缩写元素

The abbreviation CSS stands for "Cascading Style Sheets".<br>
CSS 是 "层叠样式表 "的缩写。

*[CSS]: Cascading Style Sheets

## Cite element<br>引用元素

"Code is poetry." ---<cite>Automattic</cite><br>
“代码如诗” ———— 自动化

## Code element<br>代码元素

You will learn later on in these tests that `word-wrap: break-word;` will be your best friend.<br>
在稍后的测试中，您将了解到 "word-wrap: break-word; "将是您最好的朋友。


## Strike element <br> 删除线元素

This element will let you <strike>strikeout text</strike>.<br>
这个元素让你显示删除线

## Emphasize element <br> 强调元素

The emphasize element should _italicize_ text.<br>
强调元素使文本大写。

## Insert element<br>插入元素

This element should denote <ins>inserted</ins> text.<br>
该元素应表示<ins>插入</ins>文本。

## Keyboard element<br>键盘元素

This scarcely known element emulates <kbd>keyboard text</kbd>, which is usually styled like the `<code>` element.<br>
这个鲜为人知的元素模拟键盘文本，其样式通常与 `<code>` 元素相似。

## Preformatted element<br>预格式化元素

This element styles large blocks of code.<br>
该元素为大型 代码块 设置样式。

<pre>
.post-title {
	margin: 0 0 5px;
	font-weight: bold;
	font-size: 38px;
	line-height: 1.2;
	and here's a line of some really, really, really, really long text, just to see how the PRE element handles it and to find out how it overflows;
}
</pre>

## Quote element <br> 引用元素

<q>Developers, developers, developers&#8230;</q> &#8211;Steve Ballmer

## Strong element <br> 加粗元素

This element shows **bold text**.<br>
这个元素会显示加粗效果

## Subscript element<br>下标元素

Getting our science styling on with H<sub>2</sub>O, which should push the "2" down.<br>
这样就可以表现科学样式，这样就能把 2 设为下标。

## Superscript element<br>上标元素

Still sticking with science and Einstein's E = MC<sup>2</sup>, which should lift the 2 up.<br>
还是坚持科学和爱因斯坦的公式，这样就可以把 2 设为上标。

## Variable element <br> 变量元素

This allows you to denote <var>variables</var>.<br>
这样你就可以表示变量