import React from 'react';
import {useHistory} from 'react-router-dom';

const BookAdd = (props)=> {
    const history = useHistory();
    const [formData,updateFormData] = React.useState({
        name:"",
        category:0,
        author:1,
        availableCopies:0
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()

        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;
        const category = formData.category;
        const author = formData.author;
        const availableCopies = formData.availableCopies
        props.onAddBook(name,category,author,availableCopies);
        history.push("/books");
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Book name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               placeholder="book name"
                               onChange={handleChange}
                        />
                    </div>


                    <div className="form-group">
                        <label>Author</label>
                        <select name="author" className="form-control" onChange={handleChange}>
                            {props.authors.map((term) =>
                                <option value={term.id}>{term.name + " " +term.surname}</option>
                            )}
                        </select>
                        <small id="authorhelp" className="form-text text-danger">If the author of the
                            book  isn't in the list you can add it manualy from  <a href={"/authors/add"}>here</a>.</small>
                    </div>


                    <div className={"form-group"}>
                        <label htmlFor="category">Category</label>
                        <select name="category" className={"form-control"} onChange={handleChange}>
                            <option value="0">NOVEL</option>
                            <option value="1">THRILER</option>
                            <option value="2">HISTORY</option>
                            <option value="3">FANTASY</option>
                            <option value="4">BIOGRAPHY</option>
                            <option value="5">CLASSICS</option>
                            <option value="6">DRAMA</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="availableCopies">Available Copies</label>
                        <input type="text"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               placeholder="available copies"
                               onChange={handleChange}
                        />

                    </div>

                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default BookAdd;