export const handleOnclick = (e, setWeather) => {

    setWeather(e.target.innerText.split(",")[0])

}

export const handleOnchange = (e, setInputValue, inputValue, setSelectWeather) => {

    setInputValue(e.target.value);
    if(inputValue !== "" )setSelectWeather(inputValue);

}

export const handleSubmit = (e, inputValue, setSelectWeather) => {

    e.preventDefault();
    if(inputValue !== "" )setSelectWeather(inputValue);

}