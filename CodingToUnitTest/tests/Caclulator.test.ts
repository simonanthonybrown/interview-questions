import { describe } from "node:test";
import { Calculator, InventoryRepo } from "../StockCalculator";

describe("Calculator", ()=> {
// All tests for the class "Calculator" in the StockCalculator.ts file
    const newInventoryRepo = new InventoryRepo()
    const calculator = new Calculator(newInventoryRepo);

    describe("GrossTotal", () => {
        // Test GrossTotal() method calculation functions correctly
        test("GrossTotal([5], [8]) returns 40", () => {
            expect(calculator.GrossTotal(5, 8)).toBe(40);
        });
    });

    describe("NetTotal", () => {
        // Test NetTotal() method calculation functions correctly
        test("NetTotal([80], [64]) returns 6144", () => {
            expect(calculator.NetTotal(80, 64)).toBe(6144);
        });

        /* Test NetTotal with a mocked false input from GrossTotal
        and check method was called correctly*/
        test("NetTotal with negative quantity", () => {
            const netTotalSpy = jest.spyOn(calculator, "NetTotal");

            expect(() => {
                calculator.NetTotal(80, -50);
            }).toThrow(TypeError);

            expect(() => {
                calculator.NetTotal(80, -50);
            }).toThrow("Price and quantity inputs must be positive integers.");

            expect(netTotalSpy).toHaveBeenCalledWith(80, -50);

            // Restore mock
            netTotalSpy.mockClear();
        });
    });

    describe("BulkBuyDiscount", () => {
        // Test BulkBuyDiscount returns expected figure in each instance
        
        // Expect no discount with purchase of 50 units
        test("BulkBuyDiscount[50] returns 1", () => {
            let result = calculator.BulkBuyDiscount(50);
            expect(result).toBe(1);
        });

        // Expect 10% discount with purchace of 800 units
        test("BulkBuyDiscount[800] returns 0.9", () => {
            let result = calculator.BulkBuyDiscount(800);
            expect(result).toBe(0.9);
        });

        
        const bigOrders = [1100, 5000, 8000, 1000];
        // Expect 20% discount with any purchace figure above 1000
        test.each(bigOrders)(
            "Test multiple order numbers equalling or over 1000",
            (fixture) => expect(calculator.BulkBuyDiscount(fixture)).toBe(0.8)
        );
    });

    describe("IsStockRunningLow", () => {
    // Test that IsStockRunningLow is performing as expected

        test("Returns 'true' if stock lower than 10", () => {
            // Mock IsStockRunningLow so that stock level is always below 10
            const mockStockRunningLow = jest.fn((productId) => {
                let currentStock = productId - 4
                return currentStock < 10;
            })
            expect(mockStockRunningLow(10)).toBe(true);
            mockStockRunningLow.mockClear();
        });

        test("Returns 'false' if stock above 10", () => {
            // Mock IsStockRunningLow so that stock level is always above 10
            const mockStockRunningLow = jest.fn((productId) => {
                let currentStock = productId + 4
                return currentStock < 10;
            })
            expect(mockStockRunningLow(10)).toBe(false);
            mockStockRunningLow.mockClear();
        });
    });
});