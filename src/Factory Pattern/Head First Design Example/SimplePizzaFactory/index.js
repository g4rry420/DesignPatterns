import { SimplePizzaFactory } from "./simplePizzaFactory.js";
import { PizzaStore } from "./pizzaStore.js";

const Main = function() {
  let pizza = null;
  const factory = new SimplePizzaFactory();
  const store = new PizzaStore(factory);

  pizza = store.orderPizza("clam");
  console.log(`Your order for ${pizza.type} pizzza is ready. Enjoy!!`);

  pizza = store.orderPizza("veggie");
  console.log(`Your order for ${pizza.type} pizzza is ready. Enjoy!!`);

};
Main();
