# Decorator Pattern

From [Wikipedia](https://en.wikipedia.org/wiki/Observer_pattern), Decorator pattern is a design pattern that allows behavior to be added to an individual object, dynamically, without affecting the behavior of other objects from the same class. The decorator pattern is often useful for adhering to the Single Responsibility Principle, as it allows functionality to be divided between classes with unique areas of concern. Decorator use can be more efficient than subclassing, because an object's behavior can be augmented without defining an entirely new object.

A decorator is an object which adds additional functionality or properties to another object dynamically. It follows the Open-Closed Principle which stats that the classes should be open to extension but should be closed for modifications. </br>
To exemplify, imagine you just brought a brand new mobile phone. However, carrying around a new phone in its current form feels risky. What if you drop it ? What if it gets scratched ? What if you only want to carry your phone with you and nothing else ?
The solution to these problems is to buy a phone case with card slots. The phone case is a decorator to your phone which doesn't change it core functionality but extends the a particluar usage of it.

A decorator to the your object or class acts as a same way and provides more functionality to your objects without recompiling source code.

Merits: 
- High flexibility of code
- Expansion of classes without inheritance

Demerits:
- It might be difficult to track the functionality when our base class uses multiple decorators.
- If you overuse multiple wrapped decorator, it causes multiple layers of the decorator chain and can be hard to track functionality of each of the decorators.

## Reference
[Understanding JavaScript Decorator Pattern](https://www.dottedsquirrel.com/understanding-javascript-decorator-patterns/) </br>
[What is the Decorator Pattern](https://www.educative.io/collection/page/5429798910296064/5725579815944192/5660180910964736) </br>
[How to implement a decorator design pattern in NodeJS](https://medium.com/@melik.karapetyan1996/how-to-implement-a-decorator-design-pattern-in-nodejs-a1f98cfd8a1e) </br>
[Javascript Decorator Pattern](https://www.codementor.io/@faizanhaider/javascript-decorator-pattern-9wr03qb20) </br>
