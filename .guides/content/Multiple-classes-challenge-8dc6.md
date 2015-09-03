{Check It!|assessment}(test-2363988777)

|||guidance

### Solution

**index.html :**

```
<!DOCTYPE html>
<html>
<head>
  <title>Multiple classes challenge</title>
  <link type="text/css" rel="stylesheet" href="style.css">
</head>
<body>
  <p class="normal orange left"> Some content </p>
  <p class="big blue center"> Some other content</p>
  <p class="big orange right"> And a last one</p>
</body>
</html>
````


**style.css :**

```css
.normal { font-size:12px; }
.big { font-size:18px; }
.orange { color:orange; }
.blue { color:blue; }
.left { text-align:left; }
.center {text-align:center; }
.right { text-align:right; }
```

|||


|||info
### Hint

If you can't pass the challenge :

1) Go to the previous sections and be sure to understand why and how we separated a CSS class `.box-red-left` into 3 different classes `.box`, `.red` and `.left` and what CSS properties goes into each of those classes.

2) If you still can't make it analyse the class names on the left, for example : 
`.normal-orange-center` and think how it should be split into 3 classes like `.normal` , `.orange`, `.center` and then don't forget to also change the `index.html` file to reflect the changes you made into the CSS.

|||

