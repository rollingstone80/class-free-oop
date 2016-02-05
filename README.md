Description
________________________

Short snippets of code to exemplify class free OOP with JavaScript. I know this can be controversial, but I finally realized that in so many situations we can avoid the use of classes altogether and use objects directly. Actually, we often don't even need inheritance either, which can be simulated by using different techniques. No time wasted on taxonomy, classification or type checking. Just focus on what an object can do and move on.

In the first example "movie-object.html", the object is extremely streamlined and when I need added functionality, I simply call methods defined in other objects, to act as "parent-like" objects.

I sacrifice encapsulation, but I achieve:
- better memory management (no copying of methods on each object instance)
- no use of prototypal inheritance, convoluted when we want our object to inherit methods from multiple objects
- no pollution of global scope 

Tested in Chrome v48.



Credits
________________________

Inspired by the absolute genius that is Douglas Crockford
