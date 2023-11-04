import React, {useState}  from 'react'


const PersonCard = (props) =>{
    const [age, setAge] = useState(props.age); 
    const handleAge = ()=>{
        setAge(age+1)
    };
    return(
        
        <div>
            <h2>{props.firstName} , {props.lastName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={handleAge}> Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    );
}


export default PersonCard;





