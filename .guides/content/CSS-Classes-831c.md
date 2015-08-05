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

The first part, we know, it's assigning to the p tags, a certain font size and font family.

The two other ones `.my-first-class` and `.my-second-class` are both class and we can recognise them as such because they both start with `.` (a dot).

So to define a css class you should start with a dot `.` followed by the actual class name.

Now how do we apply a certain class to an html tag ?

It's simple, just add `class="my-first-class"` or `class="my-second-class`.

So here is an example of html that would use it all :

```html
<p> Here is my first pargraph of text.</p>

<p class="my-first-class"> This paragraph has "my-first-class" as a class and so should appear in read</p>

<p class="my-second-class"> This paragraph has "my-second-class" as a class and so should appear in blue</p>
```


The resulting html should appear like this :

<div style="border:1px solid #c7d5f6; padding:10px 20px;">

<p style="font-size : 12px; font-family:Arial, sans-serif;"> Here is my first paragraph of text.</p>

<p style="font-size : 12px; font-family:Arial, sans-serif; color:red;"> This paragraph as "my-first-class" as a class and so should appear in read</p>

<p style="font-size : 12px; font-family:Arial, sans-serif; color:blue;"> This paragraphs as "my-second-class" as a class and so should appear in blue</p>

</div>

So basically we and an attribute to the html tag which is called "class" and has the classname as its value !

In the next section we will use all this to do our quote example !



  

