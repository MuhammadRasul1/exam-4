import { useEffect, useState } from "react";
import request from "../services/httpRequest";

export const useRequest = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    request.get(import.meta.env.VITE_BASE_URL).then((data) => setData(data.data));
  }, [url]);

  return { data };
};
