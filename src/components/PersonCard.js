import React, { Component } from 'react';
//class component
// class PersonCard extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             clickage: props.age
//         }
//     }
//     render(){
//         const { lastName, firstName, hairColor} = this.props;
//         const ageUp = () => this.setState({clickage: this.state.clickage +1})
//         return(
//             <div>
//                 <h1>{lastName}, {firstName} </h1>
//                 <p>Age: {this.state.clickage}</p>
//                 <p>Hair Color: {hairColor} </p>
//                 <button onClick={ageUp}>Birthday Button for {firstName} {lastName}</button>
//             </div>
//         )
//     }
// }

// export default PersonCard;

//functional Component
const PersonCardComponent = props => {
    return(
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
        </div>
    )
}
export default PersonCardComponent