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

The answer is : orange ! (and the reason is NOT because it is the last declaration in the file ...)

But why ?

Let's study the rules that will allow us to understand this ..

## CSS precedence
When the browser needs to resolve what styles to apply to a given HTML element, it uses a set of CSS precedence rules. Given these rules, the browser can determine what styles to apply. The rules are:

1) !important after CSS properties.
2) Specificity of CSS rule selectors.
3) Sequence of declaration.

The **!important** value appended to a CSS property value is an automatic win. It overrides even inline styles from the markup. The only way an !important value can be overridden is with another !important rule declared later in the CSS and with equal or great specificity value otherwise.

Exemple :

```css
p {
  color:red !important;
}
```

This will win over any other rule. It is advised to NEVER used !important as there are other ways to achieve the same result and this cannot be overriden in any way later. Now if we don't use !important we are left with the specificity in order to know which rule will win over other rules.


## CSS specificity

Specificity is the means by which a browser decides which CSS property values are the most relevant to an element and therefore will be applied. Specificity is only based on the matching rules which are composed of css selectors of different sorts.

The specificity is a 4-tuple (A,B,C,D) :

![](.guides/img/illu19.png)

Here are some examples, in order of increasing strength.

![](.guides/img/illu23.png)
![](.guides/img/illu22.png)
![](.guides/img/illu21.png)
![](.guides/img/illu20.png)


The more left a value is the more "specific" it is and thus it will win over less specific values.

### How do we calculate specificity ?

So it's a tuple like (A,B,C,D) where the values of A,B,C,D are calculated like this :

* Count 1 if the declaration is from is a 'style' attribute (inline style) rather than a rule with a selector, 0 otherwise (= A)
* Count the number of IDs in the selector (= B)
* Count the number of Classes, attributes and pseudo-classes in the selector (= C)
* Count the number of Element names and pseudo-elements in the selector (= D)

Or seen visually :

![](.guides/img/illu24.png)

### Concrete examples

Here are the specificity values calculated for our example in the beginning of this section, along with the respecitve selectors.

![](.guides/img/illu25.png)
![](.guides/img/illu26.png)
![](.guides/img/illu27.png)
![](.guides/img/illu28.png)

And this does answer our question on why the color orange would be applied to our li in this case !

(Calculated using this great tool : http://specificity.keegan.st/ )







