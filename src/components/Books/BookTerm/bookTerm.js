import React from 'react';
import {Link} from 'react-router-dom';

const bookTerm = (props) => {

    const availableFunc = () => {
        if(props.term.availableCopies > 0)
            return  <td className={"text-success"}>Available</td>
        else return <td className={"text-danger"}>Not Available</td>
    }
    const available = availableFunc();
    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.category}</td>
            <td>{props.term.author.name + " "+props.term.author.surname}</td>
            {available}
            <td className={"text-right"}>
                <a title={"MarkTaken"} className={"btn btn-primary mr-1"}
                   onClick={()=>props.onMarkTaken(props.term.id)} >
                    Mark as Taken
                </a>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
                <Link className={"btn btn-info ml-2"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/books/${props.term.id}/edit`}>
                    Edit
                </Link>
            </td>
        </tr>
    )
}

export default bookTerm;