import axios from "../custom-axios/axios";

const BookService = {

    fetchCountries: () => {
        return axios.get("/countries")
    },
    fetchAuthors: () => {
        return axios.get("/authors")
    },
    fetchBooks: () => {
        return axios.get("/books")
    },
    fetchCategories: () => {
        return axios.get('/books/categories');
    },
    getCountry: (id) => {
        return axios.get(`/countries/${id}`)
    },
    addCountry: (name,continent) => {
        return axios.post("/countries/add",
            {
                "name":name,
                "continent":continent
            });
    },
    editCountry: (id,name,continent) => {
        return axios.put(`/countries/edit/${id}` , {
            "name":name,
            "continent":continent
        });
    },
    deleteCountry: (id) => {
        return axios.delete(`/countries/delete/${id}`)
    },

    getAuthor: (id) => {
        return axios.get(`/authors/${id}`)
    },

    addAuthor: (name,surname,country) => {
        return axios.post("/authors/add",{
            "name":name,
            "surname":surname,
            "country":country
        });
    },

    editAuthor: (id,name,surname,country) => {
        return axios.put(`/authors/edit/${id}`,{
            "name":name,
            "surname":surname,
            "country":country
        });
    },

    deleteAuthor: (id) => {
        return axios.delete(`/authors/delete/${id}`);
    },

    getBook: (id) => {
        return axios.get(`/books/${id}`)
    },

    addBook: (name,category,author,availableCopies) => {
        return axios.post("/books/add",{
            "name":name,
            "category":category,
            "author":author,
            "availableCopies":availableCopies
        })
    },

    editBook: (id,name,category,author,availableCopies) => {
        return axios.put(`/books/edit/${id}`,{
            "name":name,
            "category":category,
            "author":author,
            "availableCopies":availableCopies
        });
    },

    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`)
    },

    markAsTaken: (id) => {
        return axios.post(`books/markTaken/${id}`)
    }
}

export default BookService;