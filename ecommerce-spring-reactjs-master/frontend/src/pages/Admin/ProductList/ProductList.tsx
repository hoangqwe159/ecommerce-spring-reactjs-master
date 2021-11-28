import React, { FC, useEffect, useState } from "react";
import { Route } from "react-router-dom";

import { Product } from "../../../types/types";
import PerfumeListComponent from "./ProductListComponent";
import ScrollButton from "../../../component/ScrollButton/ScrollButton";
import Spinner from "../../../component/Spinner/Spinner";

const ProductList: FC = () => {
  let [products, setProducts] = useState(null);
  // const products: Array<Product> = [
  //   {
  //     id: 1000,
  //     productName: "R312",
  //     year: 2000,
  //     country: "Vietnam",
  //     productCategory: "Mouse",
  //     description: "string",
  //     picturePath: "https://m.media-amazon.com/images/I/516NCsvHpmL.jpg",
  //     brand: "Razer",
  //     price: 100,
  //   },
  // ];

  useEffect(() => {
    //TODO fetch product
    const fetchData = async () => {
      fetch("https://simple-eccommerce-quangtran.herokuapp.com/products")
        .then((response) => response.json())
        .then((json) => {
          for (var i = 0; i < json.length; i++) {
            setProducts(json[i]);
            // products.push({
            //   id: json[i].id,
            //   productName: json[i].productName,
            //   year: json[i].year,
            //   country: json[i].country,
            //   productCategory: json[i].productCategory,
            //   description: json[i].description,
            //   picturePath: json[i].picturePath,
            //   brand: json[i].brand,
            //   price: json[i].price,
            // });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchData();
  }, []);

  const itemsPerPage = 24;
  const searchByData = [
    { label: "Product Name", value: "productName" },
    { label: "Category", value: "productCategory" },
    { label: "Manufacturer country", value: "country" },
    { label: "Brand", value: "brand" },
  ];

  if (typeof products !== "undefined") {
    return (
      <div className="container">
        <Spinner/>
      </div>
    );
    (" ");
  } else {
    return (
      <div className="container">
        <ScrollButton />
        <Route
          exact
          component={() => (
            <PerfumeListComponent
              data={products}
              itemsPerPage={itemsPerPage}
              searchByData={searchByData}
            />
          )}
        />
      </div>
    );
  }
};

export default ProductList;
