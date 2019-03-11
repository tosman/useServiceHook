import React from "react";
import axios from "axios";

export default function useService({ url }) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  async function fetchData(url) {
    setLoading(true);
    try{
        const data = await axios.get(url);
        setData(data.data.message);
    } catch (e){ 
        throw e;
    }
    setLoading(false);
  }

  React.useEffect(() => {
    fetchData(url);
  }, [url]);

  return [loading, data];
}
