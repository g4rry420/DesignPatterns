// Your task is to modify the code such that there is an option to add multiple customizations to a single superhero object.

class SuperHero {
  constructor(name,power) {
    this.name = name;
    this.power = power;
  }
}

class SuperHeroWithSword extends SuperHero{
  constructor(name,power){
    super(name,power);
    this.sword = true;
  }
  hasSword(){
    return `${this.name}'s power is ${this.power}, and he also has a sword now.`;
  }
}

class SuperHeroWithSuperSpeed extends SuperHero{
  constructor(name,power){
    super(name,power);
    this.superSpeed = true;
  }
  hasSuperSpeed(){
    return `${this.name}'s power is ${this.power}, and he also has the super speed now.`;
  }
}


class SuperHeroWithSpeedandSword extends SuperHero{
  constructor(name,power){
    super(name,power);
    this.speedAndSword = true;
  }
  hasSpeedAndSword(){
    return `${this.name}'s power is ${this.power}, and he also has both super speed and a sword now.`;
  }
}

const superhero1 = new SuperHeroWithSword("Fire Man", "Fire");
console.log(superhero1.hasSword());

const superhero2 = new SuperHeroWithSuperSpeed("Fire Man", "Fire");
console.log(superhero2.hasSuperSpeed());

const superhero3 = new SuperHeroWithSpeedandSword("Ice Man", "Ice");
console.log(superhero3.hasSpeedAndSword());
