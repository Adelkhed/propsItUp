import React from 'react'

export class LoginFormC extends React.Component{
    state={
        email: '',
        passWord:''
    };
    handleEmail = (e) =>{
        this.setState({
            email : e.target.value,
           
        });
    };
    handlePassWord = (e) =>{
        this.setState({
            
            passWord : e.target.value,
        });
    };
    render(){
        return <div>
                    <h2>Class Example</h2>
                    <input value={this.state.email} onChange={this.handleEmail} placeholder='Email'/>
                    <br/>
                    <input value={this.state.passWord} onChange={this.handlePassWord} placeholder='PassWord'/>
        </div>
    }
}

export function LoginFormF(){
    const[email,setEmail]=React.useState('');
    const[passWord,setPassWord]=React.useState('');
    function handleEmail(e) {
        setEmail( e.target.value);
       
        };
        function handlePassWord(e) {
            
            setPassWord(e.target.value);
            };
      
  
    return <div>

                    <h2>Function Example</h2>
                    <input value={email} onChange={handleEmail} placeholder='Email'/> <br/>
                    <input value={passWord} onChange={handlePassWord} placeholder='PassWord'/>
    </div>
}