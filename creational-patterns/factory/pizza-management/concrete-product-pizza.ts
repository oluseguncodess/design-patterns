import { Pizza } from "./product-pizza";

export class MargheritaPizza implements Pizza {
  getName(): string {
    return 'Margherrita Pizza'
  }

  prepare(): void {
    console.log("Preparing Margherita Pizza with tomato sauce and mozzarella");
  }
}

export class PepperoniPizza implements Pizza {
  getName(): string {
    return "Pepperoni Pizza";
  }

  prepare(): void {
    console.log("Preparing Pepperoni Pizza with tomato sauce, mozzarella, and pepperoni");
  }
}