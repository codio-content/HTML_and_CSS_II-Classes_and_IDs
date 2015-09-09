## What is the difference between ID and class ?

This a normal question and people often get confused in the begining about that.
We will try to give you the most important informations about it.

### 1) IDs are UNIQUE and classes are not.

What it means is that you cannot have :

```html
<p id="super_paragraph"> </p>
<p id="super_paragraph"> </p>
<p id="super_paragraph"> </p>
```

This is totally **forbidden** and there is no guarantee on how the browser will react to that, it might make the whole page simply fail. An ID is short for "identifier" and it has to be unique !

On the other end you can have this and it's totally valid :

```html
<p class="super_paragraph"> </p>
<p class="super_paragraph"> </p>
<p class="super_paragraph"> </p>
```

This is totally legal and the browser will work perfectly with it.

### 2) When to use what ?

In general : 

Use an ID when you want to be able to refer to a specific element of the page, examples are : `#header`, `#navbar`, `#footer`, `#sidebar`. So an element that is unique in the page and has a specific place and functionality.

And use classes when you want to reuse styles on multiple elements, common examples of classes are : `highlight`, `external-link`, `quote`, `normal-text`, `huge-text``

||| info
 It is generally recommanded to :
 1) Not use any class or ID if it's not necessary.
 
 For example, don't do :
 
 ```html
 <a href="http://codio.com" class="link"> my link </a>
 ```
 
 We already know it's a link, because it's a `<a>` tag so adding a `link` class is not necessary. You might want to add a `class="external-link"` on links that go outside of your website, so you can style them differently and your visitors will understand that they are leaving your website when clicking on those. But don't put a class `link` on all your `<a>` tags, you don't need it and can style them using the `a` as selector.
 
 2) Use classes first and try to avoid IDs, except for really unique functional parts.
 
 So don't do :
 
 <table>
 <tr> <th>HTML</th> <th>CSS</th></tr>
 <tr> <td>
 
 ```html
  <p id="paragraph1"> ... </p>
  <p id="paragraph2"> ... </p>
  <p id="paragraph3"> ... </p>
 ```
 
 </td> <td>
 
 ```css
   #paragraph1 { .. some styling .. }
   #paragraph3 { .. the same styling .. }
   #paragraph2 { .. different style .. }
 ```
 
 </td></tr>
 </table>
 
 If you will apply the same style on paragraph1 and paragraph3 and a special style on paragraph2 .. then just do :
 
 <table>
 <tr> <th>HTML</th> <th>CSS</th></tr>
 <tr> <td>
 
 ```html
 <p> ... </p>
 <p class="special-paragraph"> ... </p>
 <p> ... </p>
 ```
 
 </td> <td>
 
 ```css
   p { .. some styling .. }
   .special-paragraph { .. different style .. }
 ```
 
 </td></tr>
 </table>


|||

### 2) IDs have a special browser meaning.

If you put at the end of an url an `#id` the browser will try to scroll the page to that element of the page if it exists.

So for example if you have `index.html` with this content :

```html
<p id="first_paragraph"> a lot of content ... </p>
<p id="second_paragraph"> a lot of content ... </p>
<p id="last_paragraph"> a lot of content ... </p>
```

And you type in the browser bar the url :  `http://mysupersite.com/index.html#last_paragraph`

The browser will scroll the page down until the element with `id="last_paragraph"` is the first thing displayed on the page ...


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

But it's **not** correct to use multiple IDs :
```html
<ul id="nav1 nav2">
 .. this is NOT OK ..
</ul>
```


### 4) CSS Doesn't care
Everything you can do with an ID , you can also do with a class.
CSS really doesn't care and any properties will work with both the ID and class. 
If something doesn't work as you want in CSS, don't try switching and ID for a class or vice-versa .. it will not change anything.

### 5) Javascript DOES care.
Javascript is counting on the fact that every ID in the document is unique. If you put multiple tags with the same ID , you will make a very important javascript function called ` document.getElementById() ` fail ! And thus most of the javascript code you use (your own code or libraries you use) will behave weird or simply fail.

This function is used to fetch an element from the page based on it's ID. It should and will return only ONE element, if there are many elements with the same ID, it's not guaranteed how this function will behave. There will be complete sections about javascript so we will come back to this later.

We know it's a lot to take in but after using it for some time it will become natural as when to use IDs and when to use classes.