import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "2359e61ae6ece401e";

//Custom Hook
  const UseGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        // q means query
      ).then (res => res.json())
      .then (result  =>{
        setData(result)
      })
    };
      //convert into JSON after you get the results
      fetchData();
  }, [term]);
  //term is whenever someone types into the search bar
  //term is a data layer variable
  //whenever it changes, the useEffect fires
  //data layer gets a new term, fires off useEffect, will get all the search results
  return { data }
};

export default UseGoogleSearch;
