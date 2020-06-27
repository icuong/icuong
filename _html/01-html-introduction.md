---
title: "HTML Introduction"
permalink: /html/html-introduction/
excerpt: "HTML is stands for Hyper Text Markup Language, it's not a programming language, it's a markup language for creating Web pages..."
last_modified_at: 2020-06-26
redirect_from:
  - /theme-setup/
toc: true
---



## What is HTML?

HTML is stands for Hyper Text Markup Language, it's not a programming language, it's a markup language for creating Web pages
- HTML describes the structure of a Web page
- HTML consists of a series of elements
- HTML elements tell the browser how to display the content

**Note: HTML elements** are represented by tags. The elements used to "markup" to annotate text, images, and other content for display in a Web browser.
{: .notice--warning}

## What is HTML5?

HTML5 is a new version of the language HTML, with new elements, attributes, and behaviors, and a larger set of technologies that allows the building of more diverse and powerful Web sites and applications
From now, we'll to write code is the standard that defines in HTML5

## A simple example of HTML document

```html
<!DOCTYPE html>
<html>
<head>
	<title>Page Title</title>
</head>
<body>
	<h1>My First Heading</h1>
	<p>My first paragraph.</p>
</body>
</html>
```

{% capture notice-2 %}
**Example Explained**
* `<!DOCTYPE html>` : defines this document to be HTML5
* `<html>` : the element is the root element of an HTML page
* `<head>` : the element contains meta information about the document
* `<title>` : the element specifies a title for the document
* `<body>` : the element contains the visible page content
* `<h1>` : the element defines a large heading
* `<p>` : the element defines a paragraph
{% endcapture %}

<div class="notice">
	{{ notice-2 | markdownify }}
</div>

## HTML Tags

HTML tags are element names surrounded by angle brackets
```html
<tagname>content goes here...</tagname>
```

- HTML tags normally come in pair like `<p>` and `</p>`
- The first tag in a pair is the **start tag** (or **opening tag**), the second tag is the **end tag** (or **closing tag**)
- The end tag is written like the start tag, but with a **forward slash** ('/') inserted before the tag name

## HTML Elements

An HTML element is defined by a **start tag**, some **content**, and an **end tag**
```html
<tagname>content goes here...</tagname>
```

The HTML element is **everything** from the start tag to the end tag:
```html
<h1>This is a heading.</h1>
<p>This is a paragraph.</p>
```

| Start tag | Element Content      | End tag |
| --------         | ------------- | ------- |
| `<h1>`    | This is a heading.   | `</h1>` |
| `<p>`     | This is a paragraph. | `</p>`  |
| `<br>`    | *none*               | *none*  |
| `<hr>`    | *none*               | *none*  |

**Note:** Some HTML elements have no content (like the `<br>` element). These elements are called empty elements. Empty elements do not have an end tag!
{: .notice--warning}

**Note:** Tags in HTML are case-insensitive. This means they can be written in uppercase or lowercase.
For example, a `<title>` tag could be written as `<title>`, `<TITLE>`, `<Title>`, `<TiTlE>`, etc., 
and it will work. However, it is best practicle to write all tags in lowercase for consistency, readability, and other reasons.
{: .notice--warning}

## Web Browsers

The most used browsers are Chrome, Edge, Firefox, Safari. The purpose of a web browser is to read HTML documents and display them for you

We will be use Chrome browser to display the web page for you.

The browser does not display the HTML tags, but uses them to determine how to display the document