Let's have a look at the `index.html` and `style.css` on the top left and the preview of the result on the bottom left.

It's all nice and almost what we want to achieve. But, First we would like to have the nav in the top look different than the nav in the bottom. And secondly we would like the `.selected` class to behave differently when it's applied to the nav or to the h2 or to the p.

How can we achieve this ?
We need to learn how to combine the css selectors in order to target elements more precisely.

### 1) Targeting specific elements that have a certain class :

Because we want the `.selected` class to look different when it's applied to a `h2`, a `p` or a `li`, we need to learn to combine tags and classes in a selector in order to apply a different style in these case.

It's quite simple :

The rule is : `tagname` `.` `classname`.

In this case it would look like this :

```css

.selected {
   /* this style would only be applied to 
      any tag with class="selected" */
}

h2.selected {
  /* this style would only be applied to 
      a <h2> with class="selected" */
}

p.selected {
  /* this style would only be applied to 
      a <p> with class="selected" */
}

li.selected {
  /* this style would only be applied to 
      a <li> with class="selected" */
}

```

**Attention** : Their must be no space before or after the `.` or the meaning would be different and it wouldn't work as expected.




### 2) Other ways of combining ids, tags and classes in a selector :

Because we want the nav to look differently at the top and the bottom of the page. We need to be able to put a different style for the top nav with `id="header-nav"` and the bottom nav with `id="footer-nav"`

More specifically we want the bottom nav to be very small and not with a gray background.

For that we need to be able to target the `li` and `.selected`  when they are in the `#header-nav` or when they are in the `#footer-nav``

For that we need to understand the concepts of *descendant*. Let's head to the next section for that.

 




