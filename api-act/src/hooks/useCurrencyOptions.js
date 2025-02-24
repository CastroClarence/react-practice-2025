import { useEffect, useState } from "react";

function useCurrencyOptions (currency){
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then(response => response.json())
        .then(data => setData(data[currency]))
        .catch(error => console.error(error));
    }, [currency])
    
    return data

}

export default useCurrencyOptions;