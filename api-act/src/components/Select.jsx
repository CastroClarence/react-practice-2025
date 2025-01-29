import React from 'react'




function Select(
    {
        label = 'Label',
        currencyOptions = [],
        disabled = false,
        selectedCurrency = "php",
        amount,
        onCurrencyChange,
        onAmountChange,
    }
) {

  return (
    <>
    <div className='flex flex-col gap-1 border-1 p-2 rounded'>
        <div className='flex justify-between'>
            <span>{label}:</span>
            <select 
            className='border-1 rounded p-1'
            value={selectedCurrency}
            onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value)}}
            >
                {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
        </div>
        <div>
            <input type="number" name="num" id="num" className='border-1 rounded p-1' 
            placeholder='Amount' defaultValue={amount} disabled={disabled} value= {Math.floor(amount)}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            />
        </div>
    </div>
    </>
  )
}

export default Select
