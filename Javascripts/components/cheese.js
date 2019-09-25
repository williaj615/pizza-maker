import utilities from "../Javascripts/helpers/utilities.js.js";

const printCheeseOptions = () => {
    const domString = 'cheese';
    utilities.printToDom('cheese-counter', domString);
};

export default {printCheeseOptions}