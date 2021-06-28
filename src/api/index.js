export const fetchBooks = async () =>{
    const endpoint = "https://openlibrary.org/works/OL45883W";

    const response = await fetch(endpoint);
    const data = await response.json();

    return data;
};

export default fetchBooks;


