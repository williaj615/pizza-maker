import utilities from "../helpers/utilities.js"

const cheeses = [
    {id: "cheese1", name: 'swiss', price: 50},
    {id: "cheese1", name: 'yellow', price: 50},
    {id: "cheese1", name: 'white', price: 50},
    {id: "cheese1", name: 'green', price: 50}
]

const printCheeseOptions = () => {
    let domString = '';
    for (let i = 0; i < cheeses.length; i++) {
     domString += `<div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="${cheeses[i].id}">
    <label class="form-check-label" for="${cheeses[i].id}">${cheeses[i].name}</label>
  </div>`;
    }
    utilities.printToDom('cheese-counter', domString);
};

export default {printCheeseOptions}