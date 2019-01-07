const FormView = require('./views/form_view.js');
const PrimeChecker = require('./models/prime_checker.js');
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const resultView = new ResultView();
resultView.bindEvents();

const numberChecker = new PrimeChecker();
numberChecker.bindEvents();

const formView = new FormView();
formView.bindEvents();
});
