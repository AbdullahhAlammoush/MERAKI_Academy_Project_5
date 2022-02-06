import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const SearchBar = () => {
  const [Product_Name, setProduct_Name] = useState("");
  const [found, setFound] = useState([]);
  useEffect(searchFix("wwww"), []);
  const searchFix = (Product_Name) => {
    // console.log("inside search");
    axios
      .get(`http://localhost:5000/search/${Product_Name}`)
      .then((result) => {
        console.log(result.data);
        setFound(result.data.posts);
      })
      .catch((err) => {
        console.log(err.response);
        console.log(err);
      });
  };
  const searchFunc = () => {
    console.log("inside search");
    axios
      .get(`http://localhost:5000/search/${Product_Name}`)
      .then((result) => {
        console.log(result.data);
        setFound(result.data.posts);
      })
      .catch((err) => {
        console.log(err.response);
        console.log(err);
      });
  };

  return (
    <div>
      <label>
        <input
          placeholder="Search"
          type={"text"}
          onChange={(e) => {
            console.log(e);
            setProduct_Name(e.target.value);
          }}
        />
        <button
          onClick={() => {
            searchFunc();
            console.log(found);
          }}
        >
          Search
        </button>
      </label>
      {found.length ? (
        //length is not defined???
        //because when the array is empty the length method cant be use/read
        <div>
          {found &&
            found.map((elem) => {
              return (
                <div>
                  <h2>{elem.title}</h2>
                  <p>{elem.description}</p>
                  <h6>{elem.category}</h6>
                </div>
              );
            })}
        </div>
      ) : (
        <p>No items....</p>
      )}
    </div>
  );
};

export default SearchBar;

// to show the posts that was found during the search we will put a SVG search icon in the app component so when we click it it takes us to the seach copmponent
