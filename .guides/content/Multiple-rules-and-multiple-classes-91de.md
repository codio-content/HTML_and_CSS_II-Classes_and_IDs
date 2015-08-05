Here we will see how to use multiple classes in order to achieve what we want.

First example : box-red and box-blue

Let says we want to have to style of boxes around our content some content has red boxes and some other content we will have blue boxes.
The most naive way of doing this would be :

```html
<p class="box-red"> I'm in a red box </p>
<p class="box-blue"> I'm in a blue box </p>
```

With the following css :

```css
.box-red {
  background-color:#e2a5a5;
  padding:20px;
  border:2px solid #960606;
  color:#960606;
}

.box-blue {
  background-color:#a5a8e2;
  padding:20px;
  border:2px solid #080696;
  color:#080696;
}
```

With a result looking like this :

![](.guides/img/illu1.png)

This is working and doesn't seem bad, but imagine we have a third color "green" on our website and we also have 3 text-alignments left, middle, center ..

Using this technique we would end up with the following classes :

`.box-red-left`, `.box-red-center`, `.box-red-right`, `.box-blue-left`, `.box-blue-center`, `.box-blue-right`, `.box-green-left`, `.box-green-center`, `.box-green-right`

That's a lot of css classes and a lot of repetitions, moreover it's not very "maintainable" .. What happends if the designer decides to change the shade of a color ?

Here is a better way to do it, using multiple css classe :

```html
<p class="box red left"> I'm in a red box on the left </p>
<p class="box blue center"> I'm in a red box in the center </p>
<p class="box green right"> I'm in a green box on the right </p>
```
With the css :
```css
.box {
  padding:20px;
  border-width:2px;
  border-style:solid;
}
.red {
  color:#960606;
  background-color:#e2a5a5;
  border-color:#960606;   
}
.blue {
  color:#080696;
  background-color:#a5a8e2;
  border-color:#080696;
}
.green {
   color:#069625;
   background-color:#a7e2a5;
   border-color:#069625;
}
.left { text-align:left; }
.right { text-align:right; }
.center { text-align:center; }
```



