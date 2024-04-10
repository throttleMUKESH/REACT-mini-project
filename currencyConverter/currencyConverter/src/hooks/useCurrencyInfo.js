import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {
    const [data, setData] = useState({}) // here empty obj coz prevent to crash
    useEffect(() => {
        fetch(`https://open.er-api.com/v6/latest?base=USD&symbols=EUR,GBP&apikey=${a4ddd92c86d70e6b0d955640}`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]) )
        console.log(data);
        console.log(res)
    }, [currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;

//https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json