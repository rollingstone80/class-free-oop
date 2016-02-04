Description
________________________

Short snippet of code to give an example of class free OOP with JavaScript.

I know this can be controversial, but I finally realized that in so many situations we can avoid the use of classes altogether and use objects directly. Actually, we often don't even need inheritance either, which can be simulated by calling methods defined in "parent" or "super" objects. Note that we're not actually achieving inheritance or creating relationships between objects here. Quite simply, we can do without.

What we achieve is:
- better memory management (no copying of methods on each object instance)
- no use of prototypal inheritance, convoluted when we want our object to inherit methods from multiple objects
- no pollution of global scope 
- no time wasted on taxonomy, classification or type checking
- just focus on what an object can do and move on

Tested in Chrome v48.



Credits
________________________

Inspired by the absolute genius that is Douglas Crockford
