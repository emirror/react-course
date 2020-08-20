import React, { useState } from 'react'
import { AppContext } from '../App'

function DoneItems(props) {
    let [status, SetStatus] = useState(false);

    const { getStatus } = React.useContext(AppContext)
    
    function checkBoxStatus(e) {
        SetStatus(e.target.Done)
        getStatus(props.id, status)
        console.log(status)

    }
    return (
        <li>
            <span>{props.text}</span>
            <span>
                <input type="checkbox" onChange={checkBoxStatus} defaultChecked/>
            </span>
        </li>
    )
}



export default DoneItems;