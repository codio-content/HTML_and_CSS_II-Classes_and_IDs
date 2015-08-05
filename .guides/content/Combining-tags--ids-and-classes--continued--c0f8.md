So we want the nav to look differently at the top and the bottom of the page. We need to be able to put a different style for the top nav with `id="header-nav"` and the bottom nav with `id="footer-nav"`.

So we need to target the descendants of `#header-nav` and the ones of `#footer-nav`.

There are two ways in css to target the descendants :

1) Descendant selector syntax
2) Children selector syntax

### 1) Descendant selector syntax.

In css, if we want to target the descendants, it's pretty simple, just use a space sign : ` `.

So if we want to target the li that are descendants of #header-nav, just write :

```css
#header-nav li {
  /* this will target all the li's that
     are descendants of #header-nav */
}
```

Let's say we have this html :

```html
<ul id="header-nav">
  <li> item1 
    <ul>
    <li> subitem 1</li>
    <li> subitem 2</li>
    </ul>
  </li>
  <li class="selected"> item2 </li>
  <li> item3 </li>
</ul>

<ul id="footer-nav">
  <li> item1 
    <ul>
    <li> subitem 1</li>
    <li> subitem 2</li>
    </ul>
  </li>
  <li> item2 </li>
  <li class="selected"> item3 </li>
</ul>
```

And if we use the selector `#header-nav li`, on the html above, the following elements will be targeted (the ones in green) :

![](.guides/img/illu6.png)


### 2) Descendant selector syntax.

Now if we only one to target the children of an element, we use the sign `>`

So if we want to target the li's that are the children of #header-nav we will write :

```css
#header-nav > li {
  /* this will target all the li's that
     are children of #header-nav */
}
```

So if we visualize the result, based on the above html, the target elements would be (the ones in green) :

![](.guides/img/illu7.png)

Did you notice that the two li's at the bottom are not selected as they are not direct children ?

## More examples :

Now this works for anything, not only ids followed by tags.

Considering we have the html from the above example again, here are some css selectors and what would matched :

<table>
<tr> <th width="30%">selector</th> <th>matches</th> </tr>
<tr> <td>

`ul li`

</td> <td> 

![](.guides/img/illu8.png) 

</td> </tr>
<tr> <td> 

`ul > li` 

</td> <td> 

![](.guides/img/illu9.png) 

</td> </tr>
<tr> <td> 

`ul` 

</td> <td> 

![](.guides/img/illu10.png) 

</td> </tr>
<tr> <td> 

`body ul`

</td> <td> 

![](.guides/img/illu11.png)

</td> </tr>
<tr> <td> 

`body > ul` 

</td> <td> 

![](.guides/img/illu12.png) 

</td> </tr>
<tr> <td> 

`ul li ul` 

</td> <td> 

![](.guides/img/illu13.png) 

</td> </tr>
<tr> <td> 

`ul li ul li` 

</td> <td> 

![](.guides/img/illu14.png)

</td> </tr>
<tr> <td> 

`#header-nav li`

</td> <td> 

![](.guides/img/illu15.png)

</td> </tr>
<tr> <td> 

`.selected`

</td> <td> 

![](.guides/img/illu16.png) 

</td> </tr>
<tr> <td>

`#header-nav .selected`

</td> <td> 

![](.guides/img/illu17.png) 

</td> </tr>
<tr> <td> 

`#footer-nav .selected` 

</td> <td> 

![](.guides/img/illu18.png) 

</td> </tr>

</table>
