export async function fetchEvents(searchTerm){
    let url = 'https://api.fastforex.io/fetch-all?api_key=c91489fd86-2d3109a8f3-s98zbt'
    if(searchTerm){
        url += '?search=' + searchTerm
    }
    const res = await fetch(url);
    if(!res.ok){
        const error = new Error('custom error message');
        error.code = res.status;
        error.info = await res.json();
        throw error;
    }

    const data = await res.json();
    return data;
}