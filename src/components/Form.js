import React from 'react';

const Form = (props) =>{
    return(
        <div>
            <form>
                <input type = "text" name = "city" placeholder = "Choose a City"/>
                <input type = "text" name = "country" placeholder = "Choose a Country"/>
                <button>Get Weather</button>
            </form>
        </div>
    )
}

export default Form;