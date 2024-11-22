import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Header.css';

const Header = () => {
  const [selectedItems, setSelectedItems] = useState({});
  const navigate = useNavigate(); // Initialize navigate function

  const handleCheckboxChange = (category, item) => {
    setSelectedItems(prevState => {
      const updatedCategory = prevState[category] || [];
      if (updatedCategory.includes(item)) {
        return { ...prevState, [category]: updatedCategory.filter(i => i !== item) };
      } else {
        return { ...prevState, [category]: [...updatedCategory, item] };
      }
    });
  };

  const handleScrollToMenu = () => {
    window.scrollTo({ top: 550, behavior: 'smooth' });
  };

  const handleItemClick = (category, item) => {
    // Navigate to the detailed page with the item details passed via state
    const itemDetails = {
      category,
      item,
      description: `This is a detailed description for ${item} in the ${category} category.`,
      image: `/images/${item}.jpg`, // Just an example image path
    };

    // Navigate to the "details" page and pass the details
    navigate('/details', { state: itemDetails });
  };

  const renderDropdown = (category, items, links) => (
    <div className="dropdown">
      <button className="dropdown-btn">{category}</button>
      <div className="dropdown-content">
        {items.map((item, index) => (
          <a 
            key={index}
            href={links[item]} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="dropdown-item"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
  

  return (
    <div className='header'>
      <div className="header-left">
        <div className="header-contents">
          <h1>Craving it? We'll bring it to your door!</h1>
          <p>Top Quality food at you doorstep in minutes <br /> We also provide recipes on the right .</p>
        </div>
        <div className='arrange-button'>
          <button onClick={handleScrollToMenu}>Start Ordering</button>
        </div>
      </div>

      <div className="header-right">
      <div className="dropdown-container">
  
{renderDropdown('Appetizers', ['Spring Rolls', 'Bruschetta', 'Stuffed Mushrooms'], {
    'Spring Rolls': 'https://www.spicebangla.com/vegetable-spring-roll-recipe/',
    'Bruschetta': 'https://cookieandkate.com/tomato-basil-bruschetta-recipe/',
    'Stuffed Mushrooms': 'https://www.allrecipes.com/recipe/15184/mouth-watering-stuffed-mushrooms/'
})}
{renderDropdown('Main Courses', ['Grilled Chicken', 'Pasta Primavera', 'Vegetable Stir Fry'], {
    'Grilled Chicken': 'https://www.budgetbytes.com/grilled-chicken/',
    'Pasta Primavera': 'https://www.recipetineats.com/pasta-primavera/',
    'Vegetable Stir Fry': 'https://www.allrecipes.com/recipe/24712/ginger-veggie-stir-fry/'
})}
{renderDropdown('Desserts', ['Chocolate Cake', 'Cheesecake', 'Fruit Tart'], {
    'Chocolate Cake': 'https://www.allrecipes.com/recipe/17981/one-bowl-chocolate-cake-iii/',
    'Cheesecake': 'https://www.allrecipes.com/recipe/222588/strawberry-cheesecake/',
    'Fruit Tart': 'https://www.allrecipes.com/recipe/273046/white-chocolate-cream-cheese-fruit-tart/'
})}
{renderDropdown('Beverages', ['Mojito', 'Lemonade', 'Iced Tea'], {
    'Mojito': 'https://www.allrecipes.com/recipe/152219/cuban-mojito/',
    'Lemonade': 'https://www.allrecipes.com/recipe/54083/brazilian-lemonade/',
    'Iced Tea': 'https://www.allrecipes.com/recipe/181891/sweet-lime-iced-tea/'
})}
{renderDropdown('Snacks', ['Chips and Salsa', 'Popcorn', 'Cheese Platter'], {
    'Chips and Salsa': 'https://www.allrecipes.com/recipe/26692/annies-fruit-salsa-and-cinnamon-chips/',
    'Popcorn': 'https://www.allrecipes.com/recipe/160595/chocolate-popcorn/',
    'Cheese Platter': 'https://eleftheriacheese.com/product-category/cheese-platters-and-boards/cheese-platters/?srsltid=AfmBOoo_m-KZJ8cPD2XDv06pETIwS5lJpdY4go-m8MiVKhnTnIgEqowo'
})}
{renderDropdown('Drinks', ['Cocktail', 'Mocktail', 'Smoothie'], {
    'Cocktail': 'https://www.bbcgoodfood.com/recipes/collection/cocktail-recipes',
    'Mocktail': 'https://www.bbcgoodfood.com/recipes/collection/non-alcoholic-cocktail-recipes',
    'Smoothie': 'https://www.allrecipes.com/recipe/265537/zucchini-smoothie/'
})}
</div>
</div>
    </div>
  );
};

export default Header;
