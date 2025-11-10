import { NYPizzaStore } from "./concrete-creator";
import { ChicagoPizzaStore } from "./concrete-creator";

// Create instances of pizza stores
const nyStore = new NYPizzaStore();
const chicagoStore = new ChicagoPizzaStore();

// Order pizzas
console.log("Ordering from NY Store:");
nyStore.orderPizza("margherita");

console.log("\nOrdering from Chicago Store:");
chicagoStore.orderPizza("pepperoni");