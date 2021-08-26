// Javascript object notation
// JSON

const user = { id: 11, name: 'Bipro Barai', job: 'actor' };

const stringFied = JSON.stringify(user);

//console.log(user);
console.log(stringFied);

const shop = {
    name: 'Alia Store',
    address: 'Ranbir road',
    profit: 1500,
    products: ['laptop', 'mobile', 'pepsi'],
    isExpensive: false,
    owner: {
        name: 'Alia vatt',
        profession: 'Actor'
    }
}

const stringiFied = JSON.stringify(shop); // It becomes string so we can not access element as like bhv object

//console.log(shop);

//console.log(stringiFied.name);

const converted = JSON.parse(stringiFied); // After converted parse we can access an element 
//console.log(converted);

