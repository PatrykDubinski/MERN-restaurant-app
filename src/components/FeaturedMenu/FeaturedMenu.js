import React, { useEffect, useState } from "react";
import "./FeaturedMenu.css";

import axios from "../../axios";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const FeaturedMenu = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/meals");

      setMeals(
        req.data
          .map((el) => {
            if (el.mealId % 2 === 0) {
              return el;
            }
          })
          .filter((item) => {
            if (item) {
              return item;
            }
          })
          .splice(9)
      );
    }

    fetchData();
  }, []);

  console.log(meals);

  return (
    <div className="featuredMenu">
      <h1>Loved by you, made by us</h1>
      <div className="featuredMenu__wrapper">
        {meals.map((meal) => (
          <div className="featuredMenu__item" key={meal.mealId}>
            <div className="image">
              <img src={meal.imgUrl} alt="Food" />
              <div className="featuredMenu__item-content">
                <SearchIcon className="icon" />
                <ShoppingBasketIcon className="icon" />
              </div>
            </div>
            <h2>{meal.mealName}</h2>
            <p>{meal.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedMenu;
