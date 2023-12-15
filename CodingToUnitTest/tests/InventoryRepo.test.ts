import { describe } from "node:test";
import { InventoryRepo } from "../StockCalculator";

describe("InventoryRepo", () => {
    
    // Instantiate class
    const inventoryrepo = new InventoryRepo();
    
    // Test GetStock() method returns a number
    test("InventoryRepo returns a number", () => {
        expect(typeof inventoryrepo.GetStock(5)).toBe("number");
    });

    // This test is purely to aid with learning creation of a mock method
    test("Test mock implementation of InventoryRepo", () => {
        let newInventory = new InventoryRepo()
        let getStockSpy = jest.spyOn(newInventory, "GetStock").mockImplementation(() => 5);

        expect(newInventory.GetStock(10)).toBe(5);
        getStockSpy.mockClear();
    });
})
