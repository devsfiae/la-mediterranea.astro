import React, { useState } from 'react';
import Drinks from '../data/drinks.json';
import DropDownWrapper from './DropDownWrapper.astro';

const categories = [
    { label: "All", value: "all" },
    { label: "Fruity/Refreshing", value: "1" },
    { label: "Fruity/Sweet", value: "2" },
    { label: "Sweet/Creamy", value: "3" },
    { label: "Tart/Dry", value: "4" },
    { label: "Non-Alcoholic", value: "5" },
    { label: "Hot Drinks", value: "6" }
];

const DropDownDrink = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredDrinks = selectedCategory === "all"
        ? Drinks
        : Drinks.filter(drink => drink.subcategory_id === selectedCategory);

    const handleCategoryChange = (newCategory) => {
        setSelectedCategory(newCategory);
    };

    return (
        <div className="dropdown-drink-container">
            <DropDownWrapper
                options={categories}
                selectedValue={selectedCategory}
                onChange={handleCategoryChange}
            />

            <div className="card-container">
                {filteredDrinks.map((drink) => (
                    <div className="card" key={drink.item_id}>
                        <div className="card-header">
                            <h3 className="card-title">{drink.item_name}</h3>
                            <img
                                className="card-image"
                                src={drink.image_path || '/images/icons/no_picture.png'}
                                alt={drink.item_name}
                            />
                        </div>
                        <p>{drink.description}</p>
                        <div className="divider-gradient"></div>
                        <div className="card-price">
                            <strong>{drink.menu_price}</strong>
                        </div>
                        <p className="card-description">{drink.degree_name}</p>
                        <p className="card-description">{drink.volume} l</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DropDownDrink;