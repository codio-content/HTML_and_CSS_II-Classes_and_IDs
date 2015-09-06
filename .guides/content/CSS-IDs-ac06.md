Let's start with a concrete example :

```html
<ul id="nav">
  .. some li's ...
</ul>
```

You see that the `<ul>` had an attribute called `id` with a value of `"nav"`.
That's all you need to know in order to use IDs in HTML.

To target them in your stylesheet you need to use the special `#` sign.

```css
#nav {
 .. some css properties ..
}
```

You can see a complete example on the left ... Feel free to play with it.

### In short :

1) In the HTML, add to your tag `id="idname"`.
2) In the CSS use the selector `#idname`.


{Check It!|assessment}(test-3243473890)


|||guidance

## solution

**example.html :**

```html
<!DOCTYPE html>
<html>
<head>
  <title> Example class</title>
  <link type="text/css" rel="stylesheet" href="style.css">
</head>
<body>
  <ul id="nav">
    <li> first item </li>
    <li> second item </li>
    <li> third item </li>
    <p id="content">
      Any text here
    </p>
    <p id="footer">
      Any text here
    </p>
  </ul>
</body>
</html>
```

**style.css :**

```css
 #nav {
   color:red;
 }

#footer {
  font-size:80%;
  color:gray;
}
```

|||

