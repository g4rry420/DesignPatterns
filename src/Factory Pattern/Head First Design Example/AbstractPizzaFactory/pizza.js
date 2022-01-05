export const Pizza = function() {
  this.name = "";
  this.dough = "";
  this.sauce = "";
  this.toppings = [];
};
Pizza.prototype.prepare = function() {
  throw new Error("Abstract method!");
};
Pizza.prototype.bake = function() {
  console.log(`Baking the ${this.name} for 25 mins at 350`);
  return this;
};
Pizza.prototype.cut = function() {
  console.log(`Cutting the ${this.name} into diagnal slices`);
  return this;
};
Pizza.prototype.box = function() {
  console.log(`Boxing the ${this.name}`);
  return this;
};
Pizza.prototype.getName = function() {
  return this.name;
};
Pizza.prototype.setName = function(name) {
  this.name = name;
};
