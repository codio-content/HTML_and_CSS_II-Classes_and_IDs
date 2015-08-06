### 2) When to use what ?

In general : 

Use an id when you want to be able to refer to a specific element of the page, examples are : `#header`, `#navbar`, `#footer`, `#sidebar`. So an element that is unique in the page and has a specific place and functionality.

And use classes when you want to reuse styles on multiple elements, common examples of classes are : `highlight`, `external-link`, `quote`, `normal-text`, `huge-text``

||| info
 It is generally recommanded to :
 1) Not use any class or id if it's not necessary.
 
 For example, don't do :
 
 ```html
 <a href="http://codio.com" class="link"> my link </a>
 ```
 
 We already know it's a link, because it's a `<a>` tag so adding a `link` class is not necessary. You might want to add a `class="external-link"` on links that go outside of your website, so you can style them differently and your visitors will understand that they are leaving your website when clicking on those. But don't put a class `link` on all your `<a>` tags, you don't need it and can style them using the `a` as selector.
 
 2) Use classes first and try to avoid ids, except for really unique functional parts.
 
 So don't do :
 
 <table>
 <tr> <th>html</th> <th>css</th></tr>
 <tr> <td>
 
 ```html
  <p id="paragraph1"> ... </p>
  <p id="paragraph2"> ... </p>
  <p id="paragraph3"> ... </p>
 ```
 
 </td> <td>
 
 ```css
   #paragraph1 { .. some styling .. }
   #paragraph3 { .. the same styling .. }
   #paragraph2 { .. different style .. }
 ```
 
 </td></tr>
 </table>
 
 If you will apply the same style on paragraph1 and paragraph3 and a special style on paragraph2 .. then just do :
 
 <table>
 <tr> <th>html</th> <th>css</th></tr>
 <tr> <td>
 
 ```html
 <p> ... </p>
 <p class="special-paragraph"> ... </p>
 <p> ... </p>
 ```
 
 </td> <td>
 
 ```css
   p { .. some styling .. }
   .special-paragraph { .. different style .. }
 ```
 
 </td></tr>
 </table>


|||