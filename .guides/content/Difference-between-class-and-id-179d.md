You may ask yourself :

## What is the difference between class and ID ?

This a normal question and people often get confused in the beginning about that.
We will try to give you the most important informations about it.

### 1) IDs are UNIQUE and classes are not.

What it means is that you cannot have :

```html
<p id="super_paragraph"> </p>
<p id="super_paragraph"> </p>
<p id="super_paragraph"> </p>
```

This is totally **forbidden** and there is no guarantee on how the browser will react to that, it might make the whole page simply fail. An ID is short for "identifier" and it has to be unique !

On the other end, you can have this and it's totally valid :

```html
<p class="super_paragraph"> </p>
<p class="super_paragraph"> </p>
<p class="super_paragraph"> </p>
```

This is totally legal and the browser will work perfectly with it.

### 2) IDs have a special browser meaning.

If you put at the end of an url an `#id` the browser, when it loads the page, will try to scroll the page to that element of the page if it exists.

So for example if you have `index.html` with this content :

```html
<p id="first_paragraph"> a lot of content ... </p>
<p id="second_paragraph"> a lot of content ... </p>
<p id="last_paragraph"> a lot of content ... </p>
```

And you type in the browser bar the url :  `http://mysupersite.com/index.html#last_paragraph`

The browser will scroll the page down until the element with `id="last_paragraph"` is displayed at the top ...


### 3) You can combine IDs and classes.

This is perfectly admissible :
```html
<ul id="nav" class="with-a-nice-class">
  .. This is ok ..
</ul>
```

It's also admissible to use multiple classes :
```html
<ul id="nav" class="class-1 class-2 class-3">
 .. This is also OK ..
</ul>
```

But it's **not** admissible or correct to use multiple IDs :
```html
<ul id="nav1 nav2">
 .. this is NOT OK ..
</ul>
```

### 4) CSS Doesn't care
Everything you can do with an ID , you can also do with a class.
CSS really doesn't care and any properties will work with both the ID and class. 
If something doesn't work as you want in CSS, don't try switching an ID for a class or vice-versa .. it will not change anything.

### 5) Javascript DOES care.
Javascript is counting on the fact that every ID in the document is unique. If you put multiple tags with the same ID , you will make a very important javascript function called ` document.getElementById() ` fail ! And thus most of the javascript code you use (your own code or libraries you use) will behave weirdly or simply fail.

This function is used to fetch an element from the page based on it's ID. It should and will return only ONE element. If there are many elements with the same ID, it's not guaranteed how this function will behave. There will be a full unit about javascript later so we will come back to this later.

We know it's a lot to take in but after using it for some time it will become natural as when to use IDs and when to use classes.