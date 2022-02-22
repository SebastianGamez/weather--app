export const showList = (loaded, data, handleOnclick, setWeather) => {

    if (loaded){
        
        return (data.map(data => <button className="results__list animate__animated animate__flash" onClick={ (e) => handleOnclick(e, setWeather) } key={data.name}>{data.name}</button> ))

    }

}