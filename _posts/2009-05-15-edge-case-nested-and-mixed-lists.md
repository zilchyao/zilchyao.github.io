---
layout: post
title: "Edge Case: Nested and Mixed Lists<br>小问题：嵌套列表和混合列表"
categories:
  - Edge Case
tags:
  - content
  - css
  - edge case
  - lists
  - markup
last_modified_at: 2017-03-09T14:25:52-05:00
---

Nested and mixed lists are an interesting beast. It's a corner case to make sure that lists within lists do not break the ordered list numbering order and list styles go deep enough.<br>
嵌套列表 和 混合列表是一种有趣的怪兽。要确保列表中的列表不会破坏有序列表的编号顺序，并且列表样式足够深入，这是一个棘手的问题。


## Ordered -- Unordered -- Ordered<br>
有编号 -- 无编号 -- 有编号

1. ordered item
2. ordered item
  * **unordered**
  * **unordered**
    1. ordered item
    2. ordered item
3. ordered item
4. ordered item

## Ordered -- Unordered -- Unordered<br>
有编号 -- 无编号 -- 无编号

1. ordered item
2. ordered item
  * **unordered**
  * **unordered**
    * unordered item
    * unordered item
3. ordered item
4. ordered item

## Unordered -- Ordered -- Unordered<br>
无编号 -- 有编号 -- 无编号

* unordered item
* unordered item
  1. ordered
  2. ordered
    * unordered item
    * unordered item
* unordered item
* unordered item

## Unordered -- Unordered -- Ordered<br>
无编号 -- 无编号 -- 有编号

* unordered item
* unordered item
  * unordered
  * unordered
    1. **ordered item**
    2. **ordered item**
* unordered item
* unordered item