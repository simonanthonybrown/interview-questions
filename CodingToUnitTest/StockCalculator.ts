export class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet(): string {
    return "Hello, " + this.greeting;
  }
}

interface StockFetch {
  GetStock(productId: number): number;
}

export class InventoryRepo implements StockFetch {
  public GetStock(productId: number): number {
    //This would actually call something like a DB to get the actual stock level
    let stockLevel: number = Math.round(Math.random() * 120)
    console.log(`Stock level for ${productId}: ${stockLevel}.`)
    return stockLevel
  }
}

export class Calculator {
  private readonly privInventoryRepo: InventoryRepo;
  
  constructor(inventoryRepo: StockFetch) {
    this.privInventoryRepo = inventoryRepo;
  }

  public GrossTotal(price: number, quantity: number) {
    return price * quantity;
  }

  vatRate = 1.2;

  public NetTotal(price: number, quantity: number) {
    if(price < 0 || quantity < 0) {
      throw new TypeError("Price and quantity inputs must be positive integers.")
    } else {
    return this.GrossTotal(price, quantity) * this.vatRate;
    }
  }

  public BulkBuyDiscount(quantity: number): number {
    if (quantity < 100)
      //No discount
      return 1;

    if (quantity < 1000)
      //10 percent
      return 0.9;

    //a generous 20 percent
    return 0.8;
  }

  public IsStockRunningLow(productId: number): boolean {
    var currentStock = this.privInventoryRepo.GetStock(productId);
    return currentStock < 10;
  }

  public LowStockMultipler(productId: number): number {
    if (this.IsStockRunningLow(productId)) {
      //add five percent if stock is running low
      return 1.05;
    }
    return 1;
  }

  public FinalTotal(
    productId: number,
    price: number,
    quantity: number,
    calculateWithVat: boolean
  ): number {
    var intialTotal = calculateWithVat
      ? this.NetTotal(price, quantity)
      : this.GrossTotal(price, quantity);

    return (
      intialTotal *
      this.LowStockMultipler(quantity) *
      this.BulkBuyDiscount(quantity)
    );
  }

  public IsStockAvailable(productId: number, quantity: number): boolean {
    if (productId === 0 && quantity === 0) {
      console.log("No stock currently availble for productID:", productId)
      return false;
    } else {
      console.log("Stock currently available for productID:", productId)
      return true;
    }
  }
}
