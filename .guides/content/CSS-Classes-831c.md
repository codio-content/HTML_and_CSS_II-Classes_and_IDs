Let's imagine we have 3 paragraphs of texts and we want the middle one to look differently, it should look like a "quote" with a bigger font size, a lighter color and a small shift on the right.

How can we achieve that using CSS ?

With what we have learned until now it's virtually impossible.
When we target a paragraph using for example this CSS :

```css
p {
  font-size : 12px;
  font-family : Arial, sans-serif;
}
```

I will target ALL the paragraphs in the document, and there is now way, using this method, to say that the second paragraph should be different.

That's where CSS classes come into play !

A css class is used to define a class of styles. All the html tags that have this class will receive the style defined by this class,

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

The first part, we know, is assigning to the p tags, a certain font size and font family.

The two other ones `.my-first-class` and `.my-second-class` are both classes and we can recognise them as such because they both start with `.` (a dot).

So to define a css class you should start with a dot `.` followed by the actual class name.

Now how do we apply a certain class to an html tag ?

It's simple, just add `class="my-first-class"` or `class="my-second-class` to the tag.

On the top left `example.html`, we have a html document that would use it all. Feel free to play with, you can see the result in the bottom left window.

### In short :

1) On the html side we add an attribute `class="classname"`

2) In the css we use the selector `.classname`
