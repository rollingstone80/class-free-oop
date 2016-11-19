## Description

Short snippets of code to exemplify class free OOP with Javascript. I know this is controversial, but I realized that in so many situations we can avoid the use of classes altogether and use objects directly. Actually, we often don't even need inheritance either, which can be simulated by using different techniques. No time wasted on taxonomy, classification or type checking. Just focus on what an object can do and move on.

In the first example "movie-object.html", the object is extremely streamlined and when I need added functionality, I simply call methods defined in other objects, to act as "parent-like" objects.

I sacrifice encapsulation, but I achieve:
- better memory management (no copying of methods on each object instance)
- no use of prototypal inheritance, convoluted when we want our object to inherit methods from multiple objects
- no pollution of global scope 

In the second example "movie-object-v2.html", I actually copy the methods from the parent to the child object (this could be repeated with multiple parent objects). Encapsulation is preserved, but at a significant performance cost: initializing 1 million objects in the second example takes on average 4x the time it takes in the first example (~800ms compared to ~200ms).

Bottom line... there is no such thing as a free dinner. If you have to deal with a huge number of objects, keep them lean! Or go prototypal.

Tested in Chrome v48.

## Credits

Inspired by the absolute genius that is Douglas Crockford
