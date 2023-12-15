## Refactoring Notes

### General
- Removed Mocha elements and "lodash" requirement as I planned to implement Jest instead of Mocha for testing

### Greeter Class
- Added export statements to three main classes so that they could be accessed by the test files and Jest
- Added number type to return value of greet() method

### StockFetch Interface
- Renamed 'IInvetoryRepo' to 'StockFetch', I found the convention to be confusing

### InverntoryRepo Class
- Created stockLevel variable to return rather than returning the equation directly
- Added a console log to give some useful information about the stock level found for productId

### Calculator Class
- Renamed '_inventoryRepo' to 'privInventoryRepo' as naming convention was confusing to me
- Renamed all instances of the parameter 'quantitiy' as it was mis-spelled 'quanity'
- Added TypeError catch in NetTotal function as a result of unit testing for negative integers being added as parameters - NOTE: this style of error handling should be added to all Calculator methods in future, didn't have time to implement this time.
- Renamed 'StockRunningLowMultiplier' to 'LowStockMultiplier' due to being a little too wordy
- Implemented simple logic for the 'IsStockAvailable' method as it was not yet complete

## Unit Testing with Jest

All packages to be installed can be found in "package.josn". Please make sure to run `npm --save-dev <package-name>` in your local environment before attempting to run these unit tests.

I have included the node_modules folder in this zip file for ease, but if you'd rather start the environment fresh on your machine, feel free to delete this file and run your own package installations.



## Running the tests

Navigate into the ./InterviewQuestions/CodingToUnitTest/tests folder and use `npm run` to activate a Jest test run.