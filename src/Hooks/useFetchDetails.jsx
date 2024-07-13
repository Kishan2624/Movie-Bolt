import axios from "axios";
import { useState, useEffect } from "react";

const useFetchDetails = (endpoint) => {
  const [data, setData] = useState(null); // Initialize as null

  const fetchData = async () => {
    try {
      const response = await axios(endpoint);
      setData(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    setData(null); // Clear previous data
    if (endpoint) { // Check if endpoint is defined
      fetchData();
    }
  }, [endpoint]);

  return { data };
};

export default useFetchDetails;
