A *descendant* in HTML is a tag which is "inside" another tag. 

In *any* HTML page *all* the other tags are descendants of the `<html>` tag.

## Simple example

If we have :

```html
<ul>
  <li> ... </li>
  <li> ... </li>
  <li> ... </li>
</ul>
```

The `<li>` tags are *descendants* of the `<ul>` tags.

## Seeing it another way

Consider we have the HTML file `example1.html` in the top left hand pane.

Look at the bottom left hand pane, the green tags are the descendants of the body tag.

Now [Click here](close_all panel=1; open_preview 13-descendants-and-children/example2.html panel=1) to see the descendants of the ul tag.


## Children vs Descendants
There is a dinstinction to me made about descendants. There is a special kind of descendants which is called *child* or *children*.

|||definition
A direct descendant is a child.
A child is always also a descendant.
But descendants are not always children.
|||

In the file `example1.html` :

`<h1>`, `<h2>`, `<p>`, `<ul>`, `<li>` are descendants of `<body>`. 
[Click here to see them](close_all panel=1; open_preview 13-descendants-and-children/example3.html panel=1)

`<h1>`, `<h2>`, `<p>`, `<ul>`  are children of `<body>`. 
[Click here to see them](close_all panel=1; open_preview 13-descendants-and-children/example4.html panel=1)

But `<li>` tags are not children of `<body>`.

The vocabulary and logic is the same as for human descendants and children.

Now that we understand the concept of *descandant* let's go to the next section to continue combining IDs, classes and tags in CSS selectors.

PS : In all the examples above you can change HTML code and then refresh the bottom left window in order to see how it changes the tree structure ...