import { useState } from "react";
import Select from "./components/Select";
import useCurrencyOptions from "./hooks/useCurrencyOptions";

function App() {
    const [from, setFrom] = useState('usd')
    const [to, setTo] = useState('php')
    const [convertedAmount, setConvertedAmount] = useState(0)
    const [amount, setAmount] = useState(0)

    const currencyInfo = useCurrencyOptions(from)
    const options = Object.keys(currencyInfo)

    const swap = () => {
        setFrom(to);
        setTo(from);
        setConvertedAmount(amount)
        setAmount(convertedAmount)
        console.log(from);
        
    };

    const convert = () => {
        const result = Math.floor(amount) * (currencyInfo[to])
        setConvertedAmount(result)
        console.log('click');
        console.log(result);
        console.log(from);
        console.log(to);
        
    }

    return (
        <div className="w-full flex justify-center items-center h-screen">
        
            {/* this div will contain the whole UI */}
            <div className="flex justify-center text-2xl font-bold flex-col items-center gap-1 border-1 w-1/2 rounded">
                <h1>Currency Converter</h1>
                {/* this div is the converter */}
                <div className="flex flex-col gap-1">
                    <Select 
                    label='From'
                    amount = {amount}
                    currencyOptions={options}
                    selectedCurrency={from}
                    onAmountChange={(amount) => setAmount(amount)}
                    onCurrencyChange={(currency) => setFrom(currency)}
                    />
                    <button className="border-1 p-1 rounded w-1/2 self-center"
                    onClick={swap}
                    >Swap</button>
                    <Select 
                    label='To' 
                    selectedCurrency={to}
                    amount = {convertedAmount}
                    currencyOptions={options}
                    onAmountChange={(amount) => setAmount(amount)}
                    onCurrencyChange={(currency) => setTo(currency)}
                    disabled={true}
                    />
                </div>
                <button type="submit" className="border-1 p-1 rounded w-2/3 m-1"
                onClick={convert}>Convert {from} to {to}</button>
            </div>
        </div>
    );
}

export default App;
