import { useState } from "react";

function Login() {
    const initialState = {
        email: '',
        password: ''
    }
    const [currentFormState, setCurrentFormState] = useState(initialState);
    // With React hooks, it will only ever use EITHER the setCurrentFormState or
    // the passed in initialState but never both to set the value of currentFormState
    // Think about this like a ternary they built in to see if something exists.
    const prevState = {
        email: currentFormState.email,
        password: currentFormState.password
    }
    // console.log(currentFormState)

    function handleSubmit(event) {
        // Prevent reloading because that defeats the purpose of React
        event.preventDefault();
        // Reset form to the initial state of empty strings
        console.log(`My final submitted form state is ${currentFormState}`);
        setCurrentFormState(initialState);
        // eventually this would also probably send some post request
    }
    
    console.log(currentFormState)
    function handleChange(event) {
        // Update the state to whatever it now is
        setCurrentFormState({...prevState, [event.target.id]: event.target})
    }

    return(
        <> 
            <h1>Login here!</h1>
            <form onSubmit={handleSubmit} >
                <label htmlFor="email">Email:</label>
                <input 
                    id="email"
                    type="text"
                    onChange={handleChange}
                    value={currentFormState.email}
                />
                <label htmlFor="password">Password:</label>
                <input 
                    id="password"
                    type="password"
                    onChange={handleChange}
                    value={currentFormState.password}
                />
                <button type="submit">Login!</button>
            </form>
        </>
    )
}

export default Login;