As we said before, we want the nav to look differently at the top and the bottom of the page. We need to be able to put a different style for the top nav with `id="header-nav"` and the bottom nav with `id="footer-nav"`.

We need to target the descendants of `#header-nav` and the ones of `#footer-nav` independantly.

There are two ways in CSS to target the descendants:

1) Descendant selector syntax.
2) Children selector syntax.

### 1) Descendant selector syntax.

In CSS, if we want to target the descendants, it's pretty simple, just use a space sign : ` `.

So if we want to target the `li` that are descendants of `#header-nav`, we just need to write:

```css
#header-nav li {
  /* this will target all the li's that
     are descendants of #header-nav */
}
```

Let's say we have the HTML which is in the top left window, and if we use the selector `#header-nav li` on it. You can see in the bottom left window the elements that would be targeted (the ones in green).


### 2) Children selector syntax.

Now, if we only one to target the children of an element, we use the sign `>`

So if we want to target the `li`'s that are the children of `#header-nav` we will write:

```css
#header-nav > li {
  /* this will target all the li's that
     are children of #header-nav */
}
```

To visualize the elements that would be selected (in green again), [click here](open_preview 14-combining-tags-ids-classes/example2.html panel=1).

Did you notice that the two `li`'s at the bottom are not selected as they are not direct children ?

## More examples :

Now this syntax works for anything, not only IDs followed by tags.

Go into the bottom left window, scroll a bit up and click "Options", the options panel for the tree view will open.
Change the textbox value to whatever CSS selector you want and then click the "Show tree" button see how it affects which boxes are target by the selector or not ?

(You might want to click the little arrow icon on the top left of the preview pane.It will become fullscreen and you will have more space to play).

You can try these different values :

- `ul li`
- `ul > li` 
- `ul` 
- `body ul`
- `body > ul` 
- `ul li ul` 
- `ul li ul li` 
- `#header-nav li`
- `.selected`
- `#header-nav .selected`
- `#footer-nav .selected` 

Do you notice that some give the same results, for example : `ul` and `body ul`. And also that using the descendants syntax we can target very precisely what we want ?
