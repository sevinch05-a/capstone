import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Product.css';

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // State for new product inputs
  const [newProduct, setNewProduct] = useState({
    name: '',
    imageUrl: '',
    description: '',
    price: '',
  });
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState('');

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/products'); // Your API endpoint
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Handle form input change for new product
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  // Handle form submit to add a new product
  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/products', newProduct); // POST request to your API
      setSubmitSuccess('Product added successfully!');
      setSubmitError('');

      // Add the new product to the products list
      setProducts([...products, response.data]);

      // Clear input fields
      setNewProduct({
        name: '',
        imageUrl: '',
        description: '',
        price: '',
      });
    } catch (err) {
      setSubmitError('Error adding product');
      setSubmitSuccess('');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="product-container">
      <h1>Products</h1>

      {/* Display the list of products */}
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <img src={product.imageUrl} alt={product.name} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>

      {/* Form for adding a new product */}
      <div className="add-product">
        <h2>Add a New Product</h2>
        <form onSubmit={handleAddProduct}>
          <div className="inputBox">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="inputBox">
            <input
              type="text"
              name="imageUrl"
              placeholder="Image URL"
              value={newProduct.imageUrl}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="inputBox">
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={newProduct.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="inputBox">
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={newProduct.price}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="inputBox">
            <input type="submit" value="Add Product" id="btn" />
          </div>
        </form>

        {/* Show success or error message */}
        {submitError && <p className="error">{submitError}</p>}
        {submitSuccess && <p className="success">{submitSuccess}</p>}
      </div>
    </div>
  );
}

export default Product;






























// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Product.css'

// function Product() {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5001/api/products'); // Замените на ваш API
//                 setProducts(response.data);
//                 setLoading(false);
//             } catch (err) {
//                 setError('Error fetching products');
//                 setLoading(false);
//             }
//         };

//         fetchProducts();
//     }, []);

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>{error}</div>;

//     return (
//         <div className="product-container">
//             <h1>Products</h1>
//             <div className="product-list">
//                 {products.map(product => (
//                     <div key={product.id} className="product-card">
//                         <h2>{product.name}</h2>
//                         <img src={product.imageUrl} alt={product.name} />
//                         <p>{product.description}</p>
//                         <p>Price: ${product.price}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Product;
 