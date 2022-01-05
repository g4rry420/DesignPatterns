export const Pizza = function(type) {
  this.name = "";
  this.dough = "";
  this.sauce = "";
  this.toppings = []; 
  this.type = type;
};
Pizza.prototype.bake = function() {
  console.log(`Baking the ${this.type} pizza for 25 mins at 350`);
  return this;
};
Pizza.prototype.cut = function() {
  console.log(`Cutting the ${this.type} pizza into diagnal slices`);
  return this;
};
Pizza.prototype.box = function() {
  console.log(`Boxing the ${this.type} pizza`);
  return this;
};
