import { MargheritaPizza, PepperoniPizza } from "./concrete-product-pizza";
import { PizzaStore } from "./creator-pizza";
import { Pizza } from "./product-pizza";

export class NYPizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza {
    switch (type) {
      case 'margherita':
        return new MargheritaPizza();
      case 'pepperoni':
        return new PepperoniPizza();
      default:
        throw new Error("Unknown pizza type");
    }
  }
}

export class ChicagoPizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza {
    switch (type) {
      case 'margherita':
        return new MargheritaPizza();
      case 'pepperoni':
        return new PepperoniPizza();
      default:
        throw new Error("Unknown pizza type");
    }
  }
}