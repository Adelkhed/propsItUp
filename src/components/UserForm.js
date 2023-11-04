import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstname, setUserFirstName] = useState("");
    const [lastname, setUserLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setConfirmPassword] = useState("");  
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // create a javascript object to hold all of the values
        const newUser = { 
            firstname,
            lastname, 
            email, 
            password ,
            confirmpassword
        };
        
        console.log("Welcome", newUser);
        setUserFirstName("");
        setUserLastName("");
    	setEmail("");
    	setPassword("");
        setConfirmPassword("");
       
    };
   

    
    return(
      <div>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name : </label> 
                <input type="text" onChange={ (e) => setUserFirstName(e.target.value) } value={ firstname }  />
            </div>
            <div>
                <label>Last Name : </label> 
                <input type="text" onChange={ (e) => setUserLastName(e.target.value) } value={ lastname }  />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } value={ email } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } value={ password } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } value={ confirmpassword } />
            </div>
            <input type="submit" value="Create User" />
        </form>
        <div>
            <div>FirstName: {firstname}</div>
            <div>LastName: {lastname}</div>
            <div>Email Address: {email}</div>
            <div>Password: {password}</div>
            <div>Confirm Password: {confirmpassword}</div>
        </div>
    
    </div>
    );
};
    
export default UserForm;
