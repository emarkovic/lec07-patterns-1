interface FlyBehavior {
  fly():void;
}

export class CanFlyBehavior implements FlyBehavior {
  fly():void {
    console.log("flies away");
  }  
}

export class NoFlyBehavior implements FlyBehavior {
  fly():void {} ;
}

let behavior:FlyBehavior = new CanFlyBehavior();
behavior.fly();

interface QuackBehavior {
  quack();
}

//use "represents" when commenting classes
/**
 * A class that represents a Duck.
 * Intended to be extended to specific ducks.
 */
//abstract classes are halfway between a class and an interface, "starter pack"
export abstract class Duck {
  // protected flyBehavior:FlyBehavior;

  //this is something we can now change for specific duck;
  public flyBehavior:FlyBehavior;

  /**
   * Has the duck make a sound.
   */
  quack() {
    console.log("quack!");
  }

  /**
   * Has the duck swim.
   * @param {number} distance How far to swim.
   */
  swim(distance:number) {
    //prints a message about swimming
    console.log("Swims the "+distance+"m duckstyle.") 
  }

  /**
   * Gets the duck's description.
   * @return {string} The description of the duck.
   */
  abstract display():string;

  fly() {
    this.flyBehavior.fly();
  }
}

export class RedheadDuck extends Duck {
  
  constructor () {
    super();
    this.flyBehavior = new CanFlyBehavior();
  
  }
  display() {
    return "Looks like a RedHead";
  }
}


export class MallardDuck extends Duck {
  display() {
    return "Looks like a Mallard";
  } 
}


export class TealDuck extends Duck {
  display() {
    return "Looks like a Teal";
  }
}


export class RubberDuck extends Duck {

  constructor() {
    super();
    this.flyBehavior = new NoFlyBehavior();
  }

  quack() {
    console.log('squeek!')
  }

  display() {
    return "A rubber ducky!"
  }  

  fly() {}
}

export class DecoyDuck extends Duck {
  
  constructor() {
    super();
    this.flyBehavior = new NoFlyBehavior();
  }

  quack() {};
  
  fly() {};

  display() {
    return "Looks like a duck but does nothing.";
  }
}