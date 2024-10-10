import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Product() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/products'); // Замените на ваш API
                setProducts(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching products');
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="product-container">
            <h1>Products</h1>
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <h2>{product.name}</h2>
                        <img src={product.imageUrl} alt={product.name} />
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product;
