Let's imagine we have 3 paragraphs of texts and we want the middle one to look different, it should look like a "quote" with a bigger font size, a lighter color and a small shift on the right.

How can we achieve it using CSS ?

With what we have learned until now it's virtually impossible.
When we target a paragraph using this CSS :

```css
p {
  font-size : 12px;
  font-family : Arial, sans-serif;
}
```

It will target ALL the paragraphs in the document, and there is no way, using this method, to say that the second paragraph should be different.

That's where CSS classes come into play !

A CSS class is used to define a "group" of styles. All the HTML tags that have this class will receive the style defined by it.

So we have for example :

```css
p {
  font-size : 12px;
  font-family : Arial, sans-serif;
}
.my-first-class {
  color:red;
}
.my-second-class {
  color:blue;
}
```

The first part, we know, is assigning to all the p tags, a certain font size and font family.

The two other ones `.my-first-class` and `.my-second-class` are both classes and we can recognise them as such because they both start with `.` (a dot).

So to define a CSS class you should start with a dot `.` followed by the actual class name.

Now, how do we apply a certain class to an HTML tag ?

It's simple, just add `class="my-first-class"` or `class="my-second-class` to the tag.

On the top left, we have a HTML document `example.html` that is using it all. Feel free to play with it, you can see the result in the bottom left window.

### In short :

1) On the HTML side we add an attribute `class="classname"`

2) In the CSS we use the selector `.classname`
