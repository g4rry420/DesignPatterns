# Observable Pattern

From [Wikipedia](https://en.wikipedia.org/wiki/Observer_pattern), The observer pattern is a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.

Observable Pattern provides a one to many relationship between the main object (known as The Subject) and rest of it dependents (known as The Observables) where if some new data gets updated to the subject then rest of its observables are notified with the new information.

For example: When we subscribe to someone's newsletter, then we become the observable and publisher becomes the subject, so whenever publisher publishes the new content we get updated with it.

However, there are two ways to communicate data between the observables and subject.
1. Push model
2. Pull model

In push model, the subject sends all the updated data to all the observables even if some observers don't need some of the data. </br>
Merit: Lower coupling (dependency of object on each other) between the subjects and the observables. </br>
Demerit: Less flexibility :- Maybe some observers don't need all the data.

In the pull model, whenever there is new data available to the subject, subject notifies all the observables that something new is here and then all the observables made another query to the subject about which data they want. </br>
Merit: More Flexibility. </br>
Demerit: High Coupling. </br>

## Reference
[How to Use the Observable Pattern in JavaScript - Eric Fuller](https://webdevstudios.com/2019/02/19/observable-pattern-in-javascript/) </br>
[Push, pull mechanism in observer pattern](https://stackoverflow.com/questions/34706186/push-pull-mechanism-observer-pattern)
