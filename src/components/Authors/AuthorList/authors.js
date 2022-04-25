import React from "react";
import AuthorTerm from "../AuthorTerm/authorTerm"
import {Link} from "react-router-dom";

class Authors extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const authors = this.getAuthors();
        return (
            <div className={"container mm-4 mt-5"}>
                <div className={"row"}>
                    <div className={"table-responsive"}>
                        <table className={"table table-striped"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Name</th>
                                <th scope={"col"}>Surname</th>
                                <th scope={"col"}>Country</th>
                            </tr>
                            </thead>
                            <tbody>
                            {authors}
                            </tbody>
                        </table>
                    </div>
                    <Link className={"btn btn-block btn-dark"} to={"/authors/add"}>Add new Author</Link>
                </div>
            </div>
        )
    }

    getAuthors = () => {
        return this.props.authors.map((term,index)=>{
            return (
                <AuthorTerm term={term} onDelete={this.props.onDelete} onEdit={this.props.onEdit}/>
            )
        });
    }
}

export default Authors;