import { describe } from "node:test";
import { Greeter} from "../StockCalculator";

// Sanity check to make sure Jest is working correctly
test("Sanity check", () => {
    expect(true).toBe(true);
});

describe("Greeter", () => {
    // Create new instance of class
    const greeter = new Greeter("world");
    test("Greeter function works", () => {
        // Test that calling the class and greet method gives correct output
        expect(greeter.greet()).toBe("Hello, world");
    })
})
