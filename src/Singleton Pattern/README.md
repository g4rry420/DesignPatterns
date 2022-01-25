# Singleton Pattern
This pattern is used to create only single object in the global context. You might be wondering, aren't there are global variables for this ?
No, while declaring the global variables, they can be re-initialized. But, we want to be initialized only once.
Why and when should we use Singleton ?
Suppose, when a user logins in your application, you have some information about the user such as name, userId, email, etcetera. This information can be used in different areas of the app.
So, it makes sense to use Singleton object over here.
Pros:
- Your private global information is surely not modified.
- Resource Friendly - you are not wasting your memory by creating a new object.
- Flexibility - giving control to class or function by when to instantiate the object.
Cons:
- Doesn't follow Single Responsibility Principal, which states that a function or class should only have one job.
- It makes testing really hard.

## Reference

[Singleton](https://refactoring.guru/design-patterns/singleton)
[What are drawbacks or disadvantages of singleton pattern?](https://stackoverflow.com/questions/137975/what-are-drawbacks-or-disadvantages-of-singleton-pattern)
