If we have multiple styles that could apply to an element.
How do we know which ones will be applied and in what order ?

For example, if we have this html :

```html
<ul id="mylist">
  <li class="myelement"> blabla </li>
</ul>
````

And the following set of css rules :

```css
li {
  color:red;
}

li.myelement {
  color:green;
}

#mylist li {
  color:blue; 
}

#mylist li.myelement {
  color:orange;
}
```

What color will be the li in the end ?
red or green or blue or orange ?

The answer is : orange ! (and the reason is NOT because it is the last declaration to appear in the css file ...)

You can the see the code in the top left window and the result of it in the bottom left window...

But why then ?

Let's study the rules that will allow us to understand this ..

## CSS precedence
When the browser find multiple declaration conflicting for the same css property (as our example above) It needs to determine which one will "win".

For that it uses a set of CSS precedence rules, the rules are in order:

1) !important after CSS property.
2) Specificity of CSS rule selectors.
3) Sequence of declaration.

So if there is an **!important** value appended to a CSS property it's an automatic win. (The only way an !important value can be overridden is with another !important rule declared later in the CSS and with equal or greater specificity value otherwise)

Exemple of using !important :

```css
p {
  color:red !important;
}
```

This will win over any other rule. It is advised to NEVER used !important as there are other ways to achieve the same result and this cannot be overriden in any way later. 

So after the browser checked if there is an !important, it will calculate the specificity of the selector containing the conflicting property and then choose the property whose selector has the highest specificity. If 2 selectors or more have exactly the same specificity the browser will select the one that was the last in the css file.

Let see in the next section how to calculate the css specificity ...







