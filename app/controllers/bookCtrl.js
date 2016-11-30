"use strict";

app.controller('bookCtrl', ($scope) => {
  $scope.title = "Angular Book List";

  $scope.books = [];
// console.log("books init: ");

  let setBooks = (bookArr) => {
// console.log("setBooks called with: ", bookArr);
    $scope.books = bookArr.guides;
// console.log("$scope.books: ", $scope.books);
  };
// console.log("setBooks defined: ");

  $scope.loadBooks = () => {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '../data/guides.json',
      })
      .done(function(results) {
        resolve(results);
// console.log("success", results);
        // setBooks(results.guides);
        // return results.guides;
      })
      .fail(function() {
        console.log("error");
      })
      .always(function() {
        console.log("complete");
      });
    });
  };
  
  $scope.loadBooks()
  .then((data) => {
    setBooks(data);
console.log("books: ", $scope.books);
    $scope.$apply();
  });


});