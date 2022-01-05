// import { NYPizzaFactory, CaliPizzaFactory, ChicagoPizzaFactory } from "./factory.js";
import { NyStylePizzaStore, ChicagoStylePizzaStore } from "./pizzaStore.js";

const Main = function() {
  let pizza = null;
  const nyStore = new NyStylePizzaStore();
  const chicagoStore = new ChicagoStylePizzaStore();

  pizza = nyStore.orderPizza("clam");
  console.log(`Your order for ${pizza.name} is ready. Enjoy!!`);
  console.log(pizza);

  pizza = chicagoStore.orderPizza("cheese");
  console.log(`Your order for ${pizza.name} is ready. Enjoy!!`);
  console.log(pizza);

};
Main();
