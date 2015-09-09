Here we will see how to use multiple classes in order to achieve what we want.

### First example : `box-red` and `box-blue`

Let's say we want some of our content to be in red boxes and some other content to be in blue boxes.

The most naive way of doing this would be as you can see in the `example1.html` file in the top left hand pane, and the result will look like you see in the preview pane underneath it.

This is working and doesn't seem too bad, but imagine we have a third color "green" on our website and we also have 3 text alignments "left", "center", "right" ...

Using this technique we would end up with the following classes :

`.box-red-left`, `.box-red-center`, `.box-red-right`, `.box-blue-left`, `.box-blue-center`, `.box-blue-right`, `.box-green-left`, `.box-green-center`, `.box-green-right`

That's a lot of CSS classes and a lot of repetitions in the CSS, moreover it's not very "maintainable" .. What happens if the designer decides to change the shade of the colors ? We have to go and modify so many CSS classes ...

Let's head to the next section to see a better way of doing it.