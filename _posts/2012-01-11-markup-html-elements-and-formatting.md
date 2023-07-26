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

Definition List Title
: Definition list division.

Startup
: A startup company or startup is a company or temporary organization designed to search for a repeatable and scalable business model.

#dowork
: Coined by Rob Dyrdek and his personal body guard Christopher "Big Black" Boykins, "Do Work" works as a self motivator, to motivating your friends.

Do It Live
: I'll let Bill O'Reilly [explain](https://www.youtube.com/watch?v=O_HyZ5aW76c "We'll Do It Live") this one.

## Unordered Lists (Nested)

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

## Ordered List (Nested)

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

## Address element

<address>
  1 Infinite Loop<br /> Cupertino, CA 95014<br /> United States
</address>

## Anchor element (aka. Link)

This is an example of a [link](http://apple.com "Apple").

## Abbreviation element

The abbreviation CSS stands for "Cascading Style Sheets".

*[CSS]: Cascading Style Sheets

## Cite element

"Code is poetry." ---<cite>Automattic</cite>

## Code element

You will learn later on in these tests that `word-wrap: break-word;` will be your best friend.

## Strike element

This element will let you <strike>strikeout text</strike>.

## Emphasize element

The emphasize element should _italicize_ text.

## Insert element

This element should denote <ins>inserted</ins> text.

## Keyboard element

This scarcely known element emulates <kbd>keyboard text</kbd>, which is usually styled like the `<code>` element.

## Preformatted element

This element styles large blocks of code.

<pre>
.post-title {
	margin: 0 0 5px;
	font-weight: bold;
	font-size: 38px;
	line-height: 1.2;
	and here's a line of some really, really, really, really long text, just to see how the PRE element handles it and to find out how it overflows;
}
</pre>

## Quote element

<q>Developers, developers, developers&#8230;</q> &#8211;Steve Ballmer

## Strong element

This element shows **bold text**.

## Subscript element

Getting our science styling on with H<sub>2</sub>O, which should push the "2" down.

## Superscript element

Still sticking with science and Einstein's E = MC<sup>2</sup>, which should lift the 2 up.

## Variable element

This allows you to denote <var>variables</var>.
