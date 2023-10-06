import React, { useState, useEffect } from "react";
// import axios from "axios";
import { useAxios } from "./hooks/useAxios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import { useGeceModu } from "./hooks/useGeceModu";

const App = () => {
  // const [coinData, setCoinData] = useState([]);
  const [geceModu, setGeceModu] = useGeceModu(false);
  const [coinData, err, loading, getData] = useAxios(
    "get",
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
  );

  useEffect(() => {
    getData();
    // axios
    //   .get(
    //     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
    //   )
    //   .then((res) => setCoinData(res.data))
    //   .catch((err) => console.log(err));
  }, []);
  return (
    <div className={geceModu ? "dark-mode App" : "App"}>
      <Navbar geceModu={geceModu} setGeceModu={setGeceModu} />
      {loading ? "loading" : <Charts coinData={coinData} />}
    </div>
  );
};

export default App;
