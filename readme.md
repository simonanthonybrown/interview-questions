# Simon Brown Code Submission

Hello to whoever may be reading this. I started learning JavaScript on the 08/12/23, moved on to TypeScript on 13/12/23 and have now done my best to refactor the StockCalculator.ts file and write some unit tests for the class methods it details. I focused purely on the TypeScript file and have removed all other files from this repo for simplicity.

The learning curve moving from Python to JS then TS has been a big one, especially considering the package management, the strict typing of objects and parameters, and the move away from tabbed structure being the key to having your code run properly. There is an endless amount within these languages that I am yet to learn, but I've really enjoyed getting to grips with the basics.

Below I've briefly detailed the changes I made to StockCalculator.ts and why, as well as explaining my methods for the unit tests I've written.

Please reach out to me at simonbrown@kubrickgroup.com if you have any questions or wish for me to go over anything in this repo.

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

## The Tests

I wanted to write the tests as I had done before in Python, and that was by structuring them within a test folder, isolated from the rest of the repo. I would then call in the code to be tested as modules to help keep things tidy.

I read through the Jest documentation to get it set up, though I was initially testing purely in JavaScript, so later had to change the test files to TypeScript and properly configure Jest to function correctly with the TS files. 

I found [this](https://dev.to/dstrekelj/how-to-write-unit-tests-in-javascript-with-jest-2e83) article particularly helpful and it served as the basis for most of my unit testing.

Once I was familiar with what the code did I worked my way from the top down to test as many class methods as I could.

### Greeter Class

- It took a while to figure out how to properly import modules in TypeScript, but Google prevailed
- I created an example 'sanity check' just to see how the Jest framwork functioned
- Wrote 'greeter' check to ensure that the method returned the expected string when "world" is passed in as the message parameter
- Wrapped the test in a describe block in case I wanted to add any tests at a later date and still use the greeter constant I had created

### InventoryRepo Class

- Wrote "InventoryRepo returns a number" to check that InventoryRepo returns a number when called
- Included a test here to learn how to mock a method properly, something I was hoping to implement with some of the later class methods which I didn't get to. By using a jest.spyOn() method I was able to create a mock implementation of the method and have it always return 5, regardless of the input. I was then able to test that this functioned correctly with the 'expected' and 'toBe' syntax

### Calculator Class

- Created variables to contain new instances of both the Calculator class and the InventoryRepo class for use in any following tests
- Wrapped all tests related to the same method within a describe block to help break up the code logically
- Simple test on GrossTotal() and NetTotal() to show calculation working correctly
-  ERROR CATCHING - factored in a TypeError catch in NetTotal() so that a negative integer for the price or quantity parameter will throw a TypeError and return a useful message. This kind of error catching should be implemented accross any method accepting integer parameters that should not be negative. The tests here show that the error works, as an entered quantity of -50 triggers the code to throw up a TypeError. Would add to all code if given more time.
-  Two more simple tests on BulkBuyDiscount, was particularly excited to learn about how to use 'Fixtures' which allowed me to pass in an array of parameters into the same test without having to repeat the test code for every separate entry (as seen in 'Test multiple order numbers equalling or over 1000')

### IsStockRunningLow

- Had particular trouble writing tests for this piece of code as it referenced the this.privInventoryRepo which at the time I didn't have working correctly
- Decided instead to completely mock the method and test that the logic was sound, which it turns out it was. A currentStock of below 10 will return 'true', and vice versa
- Added a final test to check if IsStockRunningLow functioned as expected, and it did once I had added the instance of the new InventoryRepo on line 6. Before then I was only calling a new instance of Calculator which left this.privInventoryRepo undefined within the class, so the call to the method was not functioning

## Final Thoughts

This was a challenging and fun way to get my teeth into two new langauges and a new testing framework. In an ideal scenario I would add more tests to really improve the code coverage and spend more time getting familiar with npm and how to set up TypeScript environments to make set up repeatable and stress-free. I am however pleased with what I was able to achieve in the time given.