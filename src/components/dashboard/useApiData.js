import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function useApiData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let token = localStorage.getItem("token");
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/menu`, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await res.json();
        const menuArray = jsonData.message;
        setData(menuArray);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchData();
  }, []);

  return {data};
}
export default useApiData;
