import { Duck } from './ducks'; //general class
import * as Ducks from './ducks'; //subclasses

//make some ducks
let mallard = new Ducks.MallardDuck(); //example

let ducks:Duck[] = [];
ducks.push(mallard);
ducks.push(new Ducks.RedheadDuck());
ducks.push(new Ducks.TealDuck());

// can also make a new constructor pattern, keeping the flybehavior private
// ducks.push(new Ducks.TealDuck(new Ducks.CanFlyBehavior()));

// because fly behavior was public, we can change it at runtime
ducks[3].flyBehavior = new Ducks.CanFlyBehavior();

//have them all act!
ducks.forEach( (duck:Duck) => {
  console.log(duck.display());
  duck.quack();
  duck.fly();
});