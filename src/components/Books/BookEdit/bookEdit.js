import React from 'react';
import {useHistory} from 'react-router-dom';

const BookEdit = (props)=> {
    console.log(props.book.category)
    const history = useHistory();
    const arr=["NOVEL","THRILLER","HISTORY","FANTASY","BIOGRAPHY","CLASSICS","DRAMA"];
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
        const name = formData.name !== "" ? formData.name : props.book.name;

        const category = formData.category !== 0 ? formData.category : arr.indexOf(props.book.category);

        const author = formData.author !== 1 ? formData.author : props.book.author.id;
        const availableCopies = formData.availableCopies !== 0 ? formData.availableCopies : props.book.availableCopies;
        props.onEditBook(props.book.id,name,category,author,availableCopies);
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
                               placeholder= {props.book.name}
                               onChange={handleChange}
                        />
                    </div>


                    <div className="form-group">
                        <label htmlFor={"author"}>Author</label>
                        <select id={"author"} name="author" className="form-control" onChange={handleChange}>
                            {props.authors.map((term) => {
                                    if(props.book.author !== undefined && props.book.author.id===term.id)
                                        return  <option selected={props.book.author.id} value={props.book.author.id}>{term.name+" "+term.surname}</option>
                                    else return <option value={term.id}>{term.name +" "+term.surname}</option>
                                }

                            )}
                        </select>
                        <small id="authorhelp" className="form-text text-danger">Other <a href={"/authors/add"}>country</a>.</small>
                    </div>


                    <div className={"form-group"}>
                        <label htmlFor="category">Category</label>
                        <select id={"category"} name="category" className={"form-control"} onChange={handleChange}>
                            <option value="-1" selected disabled>Click Here</option>
                            <option value="0">NOVEL</option>
                            <option value="1">THRILLER</option>
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
                               placeholder={props.book.availableCopies}
                               onChange={handleChange}
                        />

                    </div>

                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )


}


export default BookEdit;