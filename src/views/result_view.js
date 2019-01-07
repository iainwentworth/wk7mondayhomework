const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(){

};

ResultView.prototype.bindEvents = function(){
  PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
    const resultOfCheck = event.detail;
    this.displayResult(resultOfCheck);
  })
}

ResultView.prototype.displayResult = function(result){
const resultElement = document.querySelector('#result');
resultElement.textContent = `Number is a prime number: ${result}`;
}

module.exports = ResultView;
