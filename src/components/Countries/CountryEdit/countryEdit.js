import React from 'react';
import {useHistory} from 'react-router-dom';

const CountryEdit = (props)=> {
    const history = useHistory();
    const [formData,updateFormData] = React.useState({
        name:"",
        continent: ""
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),

        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== "" ? formData.name : props.country.name;
        const continent = formData.continent !== "" ? formData.continent : props.country.continent;
        props.onEditCountry(props.country.id,name,continent);
        history.push("/countries");
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Country name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               placeholder={props.country.name}
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="continent">Country continent</label>
                        <input type="text"
                               className="form-control"
                               id="continent"
                               name="continent"
                               placeholder={props.country.continent}
                               onChange={handleChange}
                        />
                    </div>

                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CountryEdit;