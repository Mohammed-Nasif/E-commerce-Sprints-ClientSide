import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import CarouselComp from "./CarouselComp";
import Spinner from "./Spinner";

export default function ItemList() {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://e-shop-udacity-13.herokuapp.com/product/active")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }
        return res.json();
      })
      .then((items) => {
        setItems(items);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        setItems(null);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : error ? (
        <div>{error.message}</div>
      ) : (
        <div style={{ margin: "0 20px", padding: "0 0 10px" }}>
          <Box component="h3">Just arrive</Box>
          <CarouselComp list={items} />
        </div>
      )}
    </>
  );
}
