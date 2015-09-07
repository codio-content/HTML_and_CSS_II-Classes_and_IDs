If we have multiple styles that could apply to an element, how do we know which ones will be applied and in what order?

For example, if we have this HTML:

```html
<ul id="mylist">
  <li class="myelement"> blabla </li>
</ul>
````

And the following set of CSS rules:

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

What color will be the `li` in the browser?
red, green, blue or orange?

The answer is : orange!.

And the reason is NOT because it is the last declaration to appear in the CSS file ...

But why then?

In order to answer this question we need to learn more about the CSS precedence rules that will allow us to understand this ...

## CSS precedence
When the browser finds multiple declaration conflicting for the same CSS property (as in our example above) it needs to determine which one will be chosen.

For that it uses a set of CSS precedence rules. Here is a diagram that explains it :

![](.guides/img/Precedence.png)


It has 3 important steps :

1) !important at end of CSS property.

So if there is an `!important` value appended to a CSS property it's an automatic win^(1)^

Example of using `!important`:

```css
li {
  color:red !important;
}
```

This will win over any other rule. It is advised to avoid using `!important` as there are other ways to achieve the same result and this cannot be overriden in any way later.

2) Specificity of CSS rule selectors.

If no `!important` is found, the browser will calculate the specificity of the selector and then choose the property whose selector has the highest specificity. We will see in the next section how to calculate the CSS specificity.

3) Sequence of declaration.

If 2 selectors or more have exactly the same specificity the browser will select the one that was declared the last in the CSS file.

---

(1) : The only way an !important value can be overridden is with another `!important` rule declared later in the CSS and with equal or greater specificity value otherwise

{Check It!|assessment}(multiple-choice-3955022808)





