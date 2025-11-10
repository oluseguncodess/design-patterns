import { Pizza } from "./product-pizza";

export abstract class PizzaStore {
  // factory method
  protected abstract createPizza(type: string): Pizza

  orderPizza(type: string) {
    const pizza = this.createPizza(type)
    pizza.prepare();
    console.log(`Serving ${pizza.getName()}`);
    return pizza;
  }
}