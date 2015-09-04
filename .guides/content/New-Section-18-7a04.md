## CSS specificity

Specificity is the means by which a browser decides which CSS property values are the most relevant to an element and therefore will be applied. Specificity is only based on the matching rules which are composed of CSS selectors of different sorts.

The specificity is a 4-tuple (A,B,C,D) :

![](.guides/img/illu19.png)

Here are some examples, in order of increasing strength.

![](.guides/img/illu23.png)
![](.guides/img/illu22.png)
![](.guides/img/illu21.png)
![](.guides/img/illu20.png)


The more left a value is the more "specific" it is and thus it will win over less specific values.

### How do we calculate specificity ?

Specificity is a tuple like (A,B,C,D) where the values of A,B,C,D are calculated like this :

* Count 1 if the declaration is from is a 'style' attribute (inline style) rather than a rule with a selector, 0 otherwise (= A)
* Count the number of IDs in the selector (= B)
* Count the number of Classes, attributes and pseudo-classes in the selector (= C)
* Count the number of Element names and pseudo-elements in the selector (= D)

Or seen visually :

![](.guides/img/illu24.png)

### Concrete examples

Here are the specificity values calculated for our example in the beginning of this section, along with the respective selectors.

![](.guides/img/illu25.png)
![](.guides/img/illu26.png)
![](.guides/img/illu27.png)
![](.guides/img/illu28.png)

And this does answer our question on why the color orange would be applied to our li in this case !

(Specificity values calculated using this great tool : http://specificity.keegan.st/)