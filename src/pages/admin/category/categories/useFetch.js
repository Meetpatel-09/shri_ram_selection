import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState({});

  console.log("useFectch");
  useEffect(() => {
     let requestOptions = {
          method: 'GET',
          redirect: 'follow'
     };
     console.log("useEfect");
     fetch("http://127.0.0.1:5000/category")
         .then((res) => res.json())
         .then((data) => {
           console.log("data");
           console.log(data[0]);
           setData(data);
           // if (data["status"] === 201) {
           // }
         });
  }, [url]);

  return [data];
};

export default useFetch;