A *descendant* in HTML is a tag which is "inside" another tag.

So for example any tag in our page is a descendant of the `<html>`
 tag and of the `<body>`tag.
 
If we have :

```html
<ul>
  <li> ... </li>
  <li> ... </li>
  <li> ... </li>
</ul>
```

The `<li>` tags are *descendant* of the `<ul>` tags.

If we want to visualise this differently, in the next image, the green tags are the "descendants" of the body tag.

![](.guides/img/illu4.png)

And in this one, the green tags are the descendants of the ul tags.

![](.guides/img/illu5.png)

||| info
### Children vs Descendants
There is a dinstinction to me made about descendants. There is a special kind of descendants which is called "children".

A direct descendant is a child.
A child is always also a descendant.
But not all descendants are children.

In the exemple with the descendants of the body tag :

![](.guides/img/illu4.png)

`<h1>`, `<h2>`, `<p>`, `<ul>`, `<li>` are descendants of `<body>`.

`<h1>`, `<h2>`, `<p>`, `<ul>`  are children of `body`.

But `<li>` tags are not children of `body`.

The vocabulary and logic is the same as for human descendants and children :)
|||