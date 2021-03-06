import React, { useState } from 'react'
import { AppContext } from '../App'

function Items(props) {
    let [status, SetStatus] = useState(false);
    const { getId, getStatus } = React.useContext(AppContext)
    function checkBoxStatus(e) {
        SetStatus(e.target.checked)
        getStatus(props.id, status)
        console.log(status)

    }


    return (
        <li>
            <span>{props.text}</span>
            <span onClick={getId.bind(this, props.id)}>&nbps;X</span>
            <span>
                <input type="checkbox" onChange={checkBoxStatus} />
            </span>
        </li>
    )
}

export default Items;