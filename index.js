var customerName = "bob";
function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
  return customerName;
}
function setBestCustomer(){
  bestCustomer = 'not bob'
}
function overwriteBestCustomer(){
  bestCustomer = 'maybe bob'
}
var leastFavoriteCustomer = 'bob';
function leastFavoriteCustomer(){
  leastFavoriteCustomer = 'tim';
}