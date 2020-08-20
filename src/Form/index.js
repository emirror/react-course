import React, { useRef } from 'react';

function Form(props) {
    // let [todo, setTodo] = useState(""); // [state value, seeter lastest value]

    const inputVal = useRef(null)

    function onSubmitHandler(e) {
        e.preventDefault()
        console.log(inputVal.current.value)
        if (inputVal.current.value.trim() != "") {
            props.onSubmit(inputVal.current.value);
            inputVal.current.value = "";
        }

    }
    return (
        <div>
            <h1>Form</h1>
            <form>
                <input type="text"
                    defaultValue=""
                    placeholder="Type your Task"
                    ref={inputVal} />
                <button onClick={onSubmitHandler}>Add</button>
            </form>

        </div>
    )

}

export default Form