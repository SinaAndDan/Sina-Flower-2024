import Product from "../components/Cart/Cart";

const products = [
  { id: "1", name: "Product 1", price: 29.99 },
  { id: "2", name: "Product 2", price: 39.99 },
  { id: "3", name: "Product 3", price: 49.99 },
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <div>
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
