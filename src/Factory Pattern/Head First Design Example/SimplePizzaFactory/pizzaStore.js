export const PizzaStore = function(factory) {
  this.factory = factory;

  this.orderPizza = function(type = "cheese") {
    const pizza = this.factory.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  };
};

