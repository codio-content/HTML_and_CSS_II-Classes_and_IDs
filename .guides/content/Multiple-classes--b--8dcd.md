In the top left hand pane, in `example2.html` you can see a better way to do it, using multiple CSS classes .. and you can see the result underneath it.

Basically we try to use one class per category of properties, we have 3 classes for the colors : `red`, `blue` and `green`. We have a class called `box` and 3 classes for the alignment : `left`, `right` and `center`. By combining these classes we can achieve what we want.

Now if the designer wants to change the shade of the red color, we just have to change the `.red` class and it will be applied everywhere .. That's much more maintainable. Moreover there is absolutely zero repetitions.

In case you didn't know there is a big principle in development called **DRY** which means: **D**ont **R**epeat **Y**ourself! We will not go into details here but let's say that the DRY principle will help you with the maintenance, testing, debugging and evolution of any software system.
