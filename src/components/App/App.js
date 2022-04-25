import logo from '../../logo.svg';
import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import Countries from "../Countries/CountryList/countries";
import Header from '../Header/header';
import CountryAdd from "../Countries/CountryAdd/countryAdd";
import CountryEdit from "../Countries/CountryEdit/countryEdit";
import BookService from "../../repository/bookRepository";
import Categories from "../Categories/categories";
import Authors from "../Authors/AuthorList/authors"
import AuthorAdd from "../Authors/AuthorAdd/authorAdd";
import AuthorEdit from "../Authors/AuthorEdit/authorEdit";
import Books from "../Books/BookList/books";
import BookAdd from "../Books/BookAdd/bookAdd";
import BookEdit from "../Books/BookEdit/bookEdit";


class App extends Component {

    constructor(props) {
        super(props);
        this.state={
            countries:[],
            authors:[],
            books:[],
            categories: [],
            selectedCountry:{},
            selectedAuthor:{},
            selectedBook:{},

        }
    }

    render() {
        return(
            <Router>
                <Header/>
                <main>
                    <div className="container">

                        <Route path={"/categories"} exact render={()=>
                            <Categories categories={this.state.categories}/>
                        }/>


                        <Route path={"/books/add"} exact render={()=>
                            <BookAdd authors={this.state.authors}
                                     categories={this.state.categories}
                                     onAddBook={this.addBook}/>
                        }/>

                        <Route path={"/books/edit/:id"} exact render={()=>
                            <BookEdit authors={this.state.authors}
                                      categories={this.state.categories}
                                      book={this.state.selectedBook}
                                      onEditBook={this.editBook}/>
                        }/>

                        <Route path={"/books"} exact render={()=>

                            <Books books = {this.state.books}
                                   onEdit={this.getBook}
                                   onDelete={this.deleteBook}
                                   onMarkTaken={this.markBook}/>
                        }/>

                        <Route path={"/"} exact render={() =>
                            <Books books={this.state.books}
                                   onDelete={this.deleteBook}
                                   onEdit={this.getBook}
                                   onMarkTaken={this.markBook}
                            />}
                        />

                        <Route path={"/authors/edit/:id"} exact render={() =>
                            <AuthorEdit onEditAuthor={this.editAuthor}
                                        countries={this.state.countries}
                                        author={this.state.selectedAuthor}/>}/>

                        <Route path={"/authors/add"} exact render={()=>
                            <AuthorAdd countries={this.state.countries}
                                       onAddAuthor={this.addAuthor}/>
                        }/>

                        <Route path={"/authors"} exact render={()=>
                            <Authors authors={this.state.authors}
                                     onEdit={this.getAuthor}
                                     onDelete={this.deleteAuthor}/>
                        }/>


                        <Route path={"/countries/add"} exact render={() =>
                            <CountryAdd onAddCountry={this.addCountry}/>}/>

                        <Route path={"/countries/edit/:id"} exact render={() =>
                            <CountryEdit onEditCountry={this.editCountry}
                                         country={this.state.selectedCountry}/>}/>

                        <Route path={"/countries"} exact render={() =>
                            <Countries countries={this.state.countries}
                                       onDelete={this.deleteCountry}
                                       onEdit = {this.getCountry}
                            />}/>

                        <Redirect to={"/"}/>
                    </div>
                </main>
            </Router>

        )
    }

    componentDidMount() {
        this.loadCountries();
        this.loadAuthors();
        this.loadBooks();
        this.loadCategories();
    }

    loadCountries = () => {
        BookService.fetchCountries()
            .then((data)=>{
                this.setState({
                    countries:data.data
                })
            });
    }

    loadAuthors = () => {
        BookService.fetchAuthors()
            .then((data)=>{
                this.setState({
                    authors:data.data
                })
            })
    }

    deleteCountry = (id) => {
        BookService.deleteCountry(id)
            .then(()=>{
                this.loadCountries();
            });
    }

    editCountry = (id,name,continent) => {
        BookService.editCountry(id, name, continent)
            .then(()=> {
                this.loadCountries();
            })
    }

    getCountry = (id) => {
        BookService.getCountry(id)
            .then((data)=>{
                this.setState({selectedCountry:data.data})
            })
    }

    addCountry = (name,continent) => {
        BookService.addCountry(name,continent)
            .then(()=>{
                this.loadCountries();
            })
    }

    getAuthor = (id) => {
        BookService.getAuthor(id)
            .then((data)=>{
                this.setState({
                    selectedAuthor:data.data
                })
            })
    }

    deleteAuthor = (id) => {
        BookService.deleteAuthor(id)
            .then(()=>{
                this.loadAuthors()
            })
    }

    editAuthor = (id,name,surname,country) => {
        BookService.editAuthor(id,name,surname,country)
            .then(()=>{
                this.loadAuthors();
            })
    }

    addAuthor = (name,surname,country) => {
        BookService.addAuthor(name,surname,country)
            .then(()=>this.loadAuthors())
    }

    loadCategories = () => {
        BookService.fetchCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            });
    }

    loadBooks = () => {
        BookService.fetchBooks()
            .then((data)=>{
                console.log(data.data)
                this.setState({
                    books:data.data
                })
            })
    }

    getBook = (id) => {
        BookService.getBook(id)
            .then((data)=> {
                this.setState({
                    selectedBook:data.data
                })
            })
    }

    addBook = (name,category,author,availableCopies) => {
        BookService.addBook(name,category,author,availableCopies)
            .then(()=>{
                this.loadBooks()
            })
    }

    editBook = (id,name,category,author,availableCopies) => {
        BookService.editBook(id,name,category,author,availableCopies)
            .then(()=>{
                this.loadBooks();
            })
    }

    deleteBook = (id) => {
        BookService.deleteBook(id).then(()=>{
            this.loadBooks();
        })
    }

    markBook = (id) => {
        BookService.markAsTaken(id).then((data)=>{
            console.log(data.data)
            alert(data.data)
            this.loadBooks();
        })
    }

}

export default App;
