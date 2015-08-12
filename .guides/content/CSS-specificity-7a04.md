CSS Specificity is the mean by which a browser decides which CSS property values are the most relevant to an element and therefore will be applied.

Specificity is only based on the matching rules which are composed of css selectors of different sorts.

The specificity is a 4-tuple (A,B,C,D) :

![](.guides/img/illu19.png)

Here are some examples, in order of increasing strength.

(0,0,0,1)
(0,0,0,2)
(0,0,1,0)
(0,0,1,4)
(0,0,3,0)
(0,1,0,0)
(0,1,0,1)
(0,2,0,0)
(1,0,2,0)
(1,0,2,1)

So :
A '1' in A will always be stronger than any value in B, C or D.
A '1' in B will always be stronger than any value in C or D.
A '1' in C will always be stronger thant any value in D.

If there is an equality, for example in A, then the one with the biggest in B will win.

### How do we calculate specificity ?

Specificity is a tuple like (A,B,C,D) where the values of A,B,C,D are calculated like this :

* Count 1 if the declaration is from is a 'style' attribute (inline style) rather than a rule with a selector, 0 otherwise (= A)
* Count the number of IDs in the selector (= B)
* Count the number of Classes, attributes and pseudo-classes in the selector (= C)
* Count the number of Element names and pseudo-elements in the selector (= D)

Or seen visually :

![](.guides/img/illu24.png)

### Concrete examples

There is an automatic specificity calculator in the bottom left window.

In the top text field, where it's written `#nav-header li.selected`, you can enter any css selector you'd like and it will calculate the specificity underneath it.

Try playing a bit with it you can enter any css selector you'd like. You can also click on the selectors underneath to open new windows with those, so you can compare them.

- [li](open_preview 17-specificity/ex1.html panel=1)
- [li.myelement](open_preview 17-specificity/ex2.html panel=1)
- [#mylist li](open_preview 17-specificity/ex3.html panel=1)
- [#mylist li.myelement](open_preview 17-specificity/ex4.html panel=1)


So which one is the strongest ? That explains why the color of our li is orange ...