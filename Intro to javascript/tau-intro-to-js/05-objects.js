const cookie = {
  name: 'Chocolate Chip',
  isGlutenFree: false,
  '+yummy': true,
  eatCookie: function () {
    console.log('I am eating ' + this.name);
  },
};
console.log(cookie);
console.log(cookie.name);
cookie.eatCookie();
// cookie.name = 'party biscuit';
// cookie.isGlutenFree = true;
console.log(cookie);

console.log(cookie['+yummy']);

class Cookie {
  constructor(name, isGlutenFree) {
    this.name = name;
    this.isGlutenFree = isGlutenFree;
  }
  eatCookie() {
    console.log('I am enjoying ' + this.name);
  }
}
const myCookie = new Cookie('sooper', false);

console.log(myCookie);
console.log(myCookie.name);
console.log(myCookie['name']);
myCookie.eatCookie();
