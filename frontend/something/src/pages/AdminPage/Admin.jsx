import React, { useState } from 'react';
import axios from 'axios';
import './Admin.css'; // Importing CSS file

function Admin() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        size: '',
        color: '',
        image: '',
        selling: ''
    });

    const [file, setFile] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('name', formData.name);
        data.append('description', formData.description);
        data.append('price', formData.price);
        data.append('category', formData.category);
        data.append('size', formData.size);
        data.append('color', formData.color);
        data.append('image', file);

        try {
            const response = await axios.post('http://localhost:5001/api/products/', data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            console.log('Product created:', response.data);
        } catch (err) {
            console.error('Error creating product:', err);
        }
    };

    return (
        <div className="admin-container">
            <h1>Create Product</h1>
            <form className="product-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Product Description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                />
                <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                >
                    <option value="">Select Category</option>
                    <option value="clothes">Clothes</option>
                    <option value="accessories">Accessories</option>
                </select>
                <select
                    name="size"
                    value={formData.size}
                    onChange={handleInputChange}
                    required
                >
                    <option value="">Select Size</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                <input
                    type="text"
                    name="color"
                    placeholder="Color"
                    value={formData.color}
                    onChange={handleInputChange}
                    required
                />
                <input type="file" onChange={handleFileChange} required />
                <button type="submit">Create Product</button>
            </form>
        </div>
    );
}

export default Admin;
