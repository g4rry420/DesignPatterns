# Factory Pattern


Factory Pattern is a creational pattern that helps subclasses to decide which class to instanticate, i.e, it usually helps us in the scenarios where one class and its methods can be introduced in the new class but the type of the object in it is different.

For eg: Suppose, you have a local shipping company which ships another company's manufatures goods through road transportation (trucks). Now, as your business grows, you have a offer to ships goods to the oversee countries. In your current code, there are already methods which does the work such as estimatedTimeToDeliver, amountOfProductsOnTruck, operartingTruckEmployee, etcetera.

Now, for your shipping logic, you can also duplicate this code and work around it. But, what if in the future, you want to add a air support for your business for faster deliveries of good. Duplicating the code as such again and again is going to be costly, for your business, as you be maintaining the same code in the three different places.

So, here comes the rescue of our Factory pattern, which will create a common creator class - Vehicle (in our case) and will let the subclasses (Product classes) to decide which vehicle are they shipping the goods based on the required business logic.

Pros:
- Allows you to hide implementation of an application seam ie, offers loose coupling
- It follows the Single Responsibility Principle, ie, if you want to make add or delete a method from Vehicle class, you be maintaining it only on the one side.
- It also follows Open/Closed Principle. 

Cons:
- The code may become more complicated since you need to introduce a lot of new subclasses to implement the pattern.

## Reference
[Factory Pattern](https://refactoring.guru/design-patterns/factory-method) </br>
[Factory Method Design Pattern](https://sourcemaking.com/design_patterns/factory_method) </br>
[JavaScript Design Patterns Part 1: The Factory Pattern](https://medium.com/@thebabscraig/javascript-design-patterns-part-1-the-factory-pattern-5f135e881192) </br>
