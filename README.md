# Wide World Travel Guides

### Part 1: Using a controller

## Requirements

For this project you need to use Angular to list a collection of travel guides in the DOM.
Build an application that has one view, and one controller that will be responsible for retrieving the data and exposing it for use in the view. The view needs to list all book titles, which type of book it is, and the price for the book.

Add the follow data to `guides.json`. You will need to display all three pieces of information about each book, in any format you choose.

```
{
  "guides": [{
    "type": "city",
    "title": "Paris on $10 a Day",
    "price": 18.99
  }, {
    "type": "city",
    "title": "Venice: Canals and Stuff",
    "price": 14.50
  }, {
    "type": "city",
    "title": "Visiting Hoboken: Why?",
    "price": 1.25
  }, {
    "type": "country",
    "title": "Touring Brazil's Empty Olympic Stadiums",
    "price": 13.50
  }, {
    "type": "country",
    "title": "'Murica: Only Commies Travel Abroad",
    "price": 20.00
  }, {
    "type": "country",
    "title": "Australia: Every Animal Here Can Kill You",
    "price": 18.00
  }, {
    "type": "region",
    "title": "Backpacking Europe on Two Showers a Week",
    "price": 12.48
  }, {
    "type": "region",
    "title": "Rainforests of Cental America",
    "price": 15.00
  }, {
    "type": "region",
    "title": "The Evil Genius Guide to Taking over the Tri City Area",
    "price": 13.49
  }]
}
```

## Instructions

Fetch your data using an http call that returns a promise. Save the returned data as a property of the `$scope` object and loop through it to display the guidebook info to the user.

Here's a list of some things to include in your app in the appropriate spots:
+ Directives:
    + `ng-app="<your module name>"`
    + `ng-controller="bookCtrl"`
    + `ng-repeat="book in books"`
+ A call to the data folder for `guides.json` using `$http`
+ Use the `$q` service to wrap your http call in a promise
+ `$scope.books = <your array of guide books data>`
