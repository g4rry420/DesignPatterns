const Pizza = function(type) {
  this.type = type;
};
Pizza.prototype.bake = function() {
  console.log(`Baking the ${this.type} pizza`);
  return this;
};
Pizza.prototype.cut = function() {
  console.log(`Cutting the ${this.type} pizza`);
  return this;
};
Pizza.prototype.box = function() {
  console.log(`Boxing the ${this.type} pizza`);
  return this;
};

export const CheesePizza = function(type) {
  Pizza.call(this, type);
};
CheesePizza.prototype = Object.create(Pizza.prototype);
CheesePizza.prototype.prepare = function() {
  console.log(`Preparing the ${this.type} pizza`);
  return this;
};

export const GreekPizza = function(type) {
  Pizza.call(this, type);
};
GreekPizza.prototype = Object.create(Pizza.prototype);
GreekPizza.prototype.prepare = function() {
  console.log(`Preparing the ${this.type} pizza`);
  return this;
};

export const PepproniPizza = function(type) {
  Pizza.call(this, type);
};
PepproniPizza.prototype = Object.create(Pizza.prototype);
PepproniPizza.prototype.prepare = function() {
  console.log(`Preparing the ${this.type} pizza`);
  return this;
};

export const ClamPizza = function(type) {
  Pizza.call(this, type);
};
ClamPizza.prototype = Object.create(Pizza.prototype);
ClamPizza.prototype.prepare = function() {
  console.log(`Preparing the ${this.type} pizza`);
  return this;
};

export const VeggiePizza = function(type) {
  Pizza.call(this, type);
};
VeggiePizza.prototype = Object.create(Pizza.prototype);
VeggiePizza.prototype.prepare = function() {
  console.log(`Preparing the ${this.type} pizza`);
  return this;
};
