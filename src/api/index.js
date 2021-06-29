export const fetchBooks = async () =>{
    const endpoint = "http://openlibrary.org/search.json?title=the+lord+of+the+rings";

    const response = await fetch(endpoint);
    const data = await response.json();

    return data;
};

export default fetchBooks;


