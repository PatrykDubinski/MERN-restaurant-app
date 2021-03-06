import React, { useEffect, useState } from "react";
import "./BodyMenu.css";

import axios from "../../axios";

const BodyMenu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("/categories");

      setCategories(request.data);
    }

    fetchData();
  }, []);

  return (
    <>
      <h1 className="menuTitle">What's on the menu?</h1>
      <div className="bodyMenu">
        {categories.map((el) => {
          console.log(el);
          return (
            <div className="bodyMenu__menuItem" key={el.id}>
              <div className="bodyMenu__menuItem-top">
                <img src={el.imgUrl} alt={el.name} />
                <h2>{el.name}</h2>
              </div>
              <div className="bodyMenu__menuItem-bottom">
                <p>{el.descriptionENG}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BodyMenu;
