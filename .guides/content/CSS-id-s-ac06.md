Let's start with a concrete example :

```html
<ul id="nav">
  .. some li's ...
</ul>
```

You see that the `<ul>` had an attribute called `id` with a value of `"nav"`.
That's all you need to know in order to use ids in html.

To target them in you stylesheet you need to use the special `#` sign.

```css
#nav {
 .. some css properties ..
}
```

You may see a complete example on the left ... Feel free to play with it.

### In short :

1) In the html, add to your tag `id="idname"`.
2) In the css use the selectr the `#idname`.