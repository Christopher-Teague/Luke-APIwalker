import React from 'react';
import { useState } from 'react';

const Form = (props) => {

    const {history} = props;

    ///// did not need \\\\\
    // const [route, setRoute] = useState("/")
    const [type, setType] = useState("")
    const [id, setId] = useState("")
    
    // console.log(type)
    // console.log(id)

    const newRoute = e => {

        e.preventDefault();
        history.push("/" + type + "/" + id);

        ///// Didn't work \\\\\ 
        // setRoute("/" + type + "/" + id)
        // console.log(route)
        // history.push(route);
    }

    return (
        <div>
            <form onSubmit={ newRoute }>
                <p>Search for: </p>
                <select onChange={e => setType(e.target.value)} >
                    <option value="err">Please Select</option>
                    <option value="people">Person</option>
                    <option value="planets">Planet</option>
                </select>
                <input onChange={e => setId(e.target.value)} type="number" min={1} />
                <button>Search</button>
            </form>
        </div>
    )
};

export default Form;
