Now we have seen IDs and classes and it gives us a lot more power for the CSS.
We have also seen that we shouldn't abuse them.
Here are some examples of doing the same thing with our without classes and how to combines rules for multiple elements.

Let's imagine we have the following HTML code (you can see it in the withclass.html file in top left hand pane):

```html
<h1 class="myfont"> My nice title </h1>
<h2 class="myfont"> My nice subtitle </h2>
<p class="myfont"> My nice paragraph </p>
```

and this CSS

```css
.myfont {
  font-family: Verdana, Arial, sans-serif;
}
```

That works .. But do we really need a class for this ?

We could just do (you can see it in the withoutclasses.html file in the bottom left hand pane):

```html
<h1> My nice title </h1>
<h2> My nice subtitle </h2>
<p> My nice paragraph </p>
```

and

```css
h1 { font-family: Verdana, Arial, sans-serif; }
h2 { font-family: Verdana, Arial, sans-serif; }
p { font-family: Verdana, Arial, sans-serif; }
```

Both examples give the same visual result, the second example doesn't require us to put a class on every HTML element but there is a lot of duplicated code in there.
This would be better:

```css
h1, h2, p { font-family: Verdana, Arial, sans-serif; }
```

Here we say that we want this font-family on `h1`, `h2` and `p`.

The `,` in a CSS selector allows us to target multiple selectors at once.

So `h1, h2, p` means: put this style on `h1`, `h2` and `p`.

{Check It!|assessment}(test-2798805781)

|||guidance

## Solution :

```html
<!DOCTYPE html>
<html>
<head>
    <title>Without classes</title>
    <style>
      h1 { font-family: Verdana, Arial, sans-serif; }
      h2 { font-family: Verdana, Arial, sans-serif; }
      p { font-family: Verdana, Arial, sans-serif; }
      
      /* or even better */
      h1, h2, p { font-family: Verdana, Arial, sans-serif; }
      
      h1, h2 { font-weight:bold; }
      
      h2, p { color:gray; }
      
    </style>
</head>
<body>
  <h1> My nice title </h1>
  <h2> My nice subtitle </h2>
  <p> My nice paragraph </p>
</body>
</html>
```

