import React from 'react';
import CountryTerm from "../CountryTerm/countryTern";
import ReactPaginate from "react-paginate"
import {Link} from 'react-router-dom';


class Countries extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            page:0,
            size:7
        }
    }

    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.countries.length / this.state.size);
        const countries = this.getCountries(offset,nextPageOffset);
        return(
            <div className={"container mm-4 mt-5"}>
                <div className={"row"}>
                    <div className={"table-responsive"}>
                        <table className={"table table-striped"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Name</th>
                                <th scope={"col"}>Continent</th>
                            </tr>
                            </thead>
                            <tbody>
                            {countries}
                            </tbody>
                        </table>
                    </div>
                    <div className="col mb-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <Link className={"btn btn-block btn-dark"} to={"/countries/add"}>Add new countries</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <ReactPaginate previousLabel={"back"}
                               nextLabel={"next"}
                               breakLabel={<a href="/#">...</a>}
                               breakClassName={"break-me"}
                               pageClassName={"ml-1"}
                               pageCount={pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={this.handlePageClick}
                               containerClassName={"pagination m-4 justify-content-center"}
                               activeClassName={"active"}/>
            </div>
        )
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        this.setState({
            page: selected
        })
    }

    getCountries = (offset,nextPageOffset) => {
        return this.props.countries.map((term,index)=>{
            return (
                <CountryTerm term={term} onDelete={this.props.onDelete} onEdit={this.props.onEdit}/>
            )
        }).filter((country,index) => {
            return index>=offset && index<nextPageOffset;
        });
    }
}

export default Countries;