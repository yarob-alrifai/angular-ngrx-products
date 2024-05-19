// Define an interface for a Product
export interface Product {
  id: string;            // Unique identifier for the product
  addedOn: string;       // Date when the product was added
  name: string;          // Name of the product
  category: string;      // Category to which the product belongs
  description: string;   // Description of the product
  imageUrl: string;      // URL of the product's image
  price: number;         // Price of the product
  quantity: number;      // Quantity of the product available in stock
}

// Define an interface for the ProductState
export interface ProductState {
  products: Product[];   // Array of products
  loading: boolean;      // Loading status to indicate if products are being fetched
  error: any;            // Error information if any operation fails
}
