import React, { useState } from 'react';
import './Add.css';
import { assets, url } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {
    const [image, setImage] = useState(null); // Changed `false` to `null` for better clarity
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Non Veg" // Default category
    });

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        if (!image) {
            toast.error('Please select an image.');
            return;
        }

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", Number(data.price));
        formData.append("category", data.category);
        formData.append("image", image);

        try {
            const response = await axios.post(`${url}/api/food/add`, formData);
            if (response.data.success) {
                toast.success(response.data.message);
                setData({
                    name: "",
                    description: "",
                    price: "",
                    category: "Non Veg" // Reset to default category
                });
                setImage(null); // Clear the image
            } else {
                toast.error(response.data.message || "Failed to add product.");
            }
        } catch (error) {
            toast.error('An error occurred while adding the product. Please try again.');
        }
    };

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                {/* Image Upload Section */}
                <div className='add-img-upload flex-col'>
                    <p>Upload Image</p>
                    <input
                        type="file"
                        accept="image/*"
                        id="image"
                        hidden
                        onChange={(e) => {
                            setImage(e.target.files[0]);
                            e.target.value = ''; // Reset file input
                        }}
                    />
                    <label htmlFor="image">
                        <img
                            src={!image ? assets.upload_area : URL.createObjectURL(image)}
                            alt="Upload preview"
                        />
                    </label>
                </div>

                {/* Product Name Input */}
                <div className='add-product-name flex-col'>
                    <p>Product Name</p>
                    <input
                        name='name'
                        type="text"
                        placeholder='Type here'
                        value={data.name}
                        onChange={onChangeHandler}
                        required
                    />
                </div>

                {/* Product Description Input */}
                <div className='add-product-description flex-col'>
                    <p>Product Description</p>
                    <textarea
                        name='description'
                        rows={6}
                        placeholder='Write content here'
                        value={data.description}
                        onChange={onChangeHandler}
                        required
                    />
                </div>

                {/* Category and Price Inputs */}
                <div className='add-category-price'>
                    <div className='add-category flex-col'>
                        <p>Product Category</p>
                        <select
                            name='category'
                            value={data.category}
                            onChange={onChangeHandler}
                        >
                            <option value="Non Veg">Non Veg</option>
                            <option value="Traditional">Traditional</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure Veg">Pure Veg</option>
                            <option value="Italian">Italian</option>
                            <option value="Chinese">Chinese</option>
                        </select>
                    </div>
                    <div className='add-price flex-col'>
                        <p>Product Price</p>
                        <input
                            type="number"
                            name='price'
                            placeholder='25'
                            value={data.price}
                            onChange={onChangeHandler}
                            required
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button type='submit' className='add-btn'>ADD</button>
            </form>
        </div>
    );
};

export default Add;
