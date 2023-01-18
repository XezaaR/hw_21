(()=>{
class Product{
    #id;
    title;
    manufacture;
    price;
    constructor(title,manufacture,price) {
        if (!title || !manufacture || !price) {
            console.error("All fields are required: title, manufacture and price")
        }else if (typeof price !== "number") {
            console.error("Price must be a number.")
        }
        else {
            this.#id = (Math.random()*1000);
            this.title = title;
            this.manufacture = manufacture;
            this.price = price;
        }
    }
}
class Milk extends Product{
    fat;
    constructor(title,manufacture,price,fat) {
        super(title,manufacture,price);
        this.fat = fat;
    }
}
class Chocolate extends Product{
    kind;
    constructor(title,manufacture,price,kind) {
        super(title,manufacture,price);
        this.kind = kind;
    }
}
class Wine extends Product{
    alcohol;
    constructor(title,manufacture,price,alcohol) {
        super(title,manufacture,price);
        this.alcohol = alcohol;
    }
}
class Store{
    products;

    constructor() {
        this.products = [];
    }
    add(product) {
        if (!this.products.includes(product)) {
            this.products.push(product);
        }
    }
    getAll() {
        return this.products;
    }
    getByType(type) {
        return this.products.filter(product => product.constructor.name === type);
    }
}
    let store = new Store();

    let milk = new Milk("Milk1", "Dairy", 2.5, 0.5);
    let chocolate = new Chocolate("Chocolate1", "Nestle", 5.0, "Dark");
    let wine = new Wine("Wine1", "France", 15.0, 12.5);

    store.add(milk);
    store.add(chocolate);
    store.add(wine);

    console.log("All products in store: ", store.getAll());
    console.log("Milk products in store: ", store.getByType("Milk"));
    console.log("Chocolate products in store: ", store.getByType("Chocolate"));
    console.log("Wine products in store: ", store.getByType("Wine"));
})();