export const fetchSearch = async (url) => {
    
    const req = await fetch(url);
        
    const data = await req.json();

    return data;

}
