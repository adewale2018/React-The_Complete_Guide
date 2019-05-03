// import React, { Component } from 'react';
// import Person from './Person';
// import './App.css';

// class App extends Component{
//   state = {
//     persons: [
//       {name: "Qudus", age: 10, tech: "Back-end"},
//       {name: "Adewale", age: 15, tech: "Front-end"},
//       {name: "Kolawole", age: 20, tech: "Full-stack"}
//     ],
//     otherState: "Some other values",
//     showPersons: false
//   }
//   handleClick =() => {
//     this.setState({
//       persons: [
//         {name: "Qudus-Kunle", age: 10, tech: "Back-end"},
//         {name: "Adewale-Saheed", age: 15, tech: "Front-end"},
//         {name: "Kolawole-Nafiu", age: 20, tech: "Full-stack"}
//       ]
//     })
//   }
//   handleChange = (event) => {
//     event.preventDefault();
//     this.setState({
//       persons: [
//         {name: "Carlos", age: 10, tech: "Back-end"},
//         {name: event.target.value, age: 15, tech: "Front-end"},
//         {name: "Funky", age: 20, tech: "Full-stack"}
//       ]
//     })
//   }
//   handleToggle = () => {
//     const doesShow = this.state.showPersons;
//     this.setState({ showPersons: !doesShow })
//   }
//   render() {
//     const style = {
//       backgroundColor: "#fff",
//       border: "1px solid steelblue",
//       padding: "10px",
//       borderRadius: "15px",
//       color: "red",
//       font: "inherit",
//       outline: "none",
//       cursor: "pointer"
//     }
//     return(
//       <div className="App">
//         <h1>THIS IS PERSON'S COMPONENT</h1>
//         <button 
//             onClick={this.handleToggle}
//             style={style}>Switch Name
//         </button>
//         { this.state.showPersons ? 
//           <div>
//             <Person 
//               name={this.state.persons[0].name} 
//               age={this.state.persons[0].age} 
//               tech={this.state.persons[0].tech}
//             />
//             <Person 
//               name={this.state.persons[1].name} 
//               age={this.state.persons[1].age} 
//               tech={this.state.persons[1].tech}
//               changed={this.handleChange}
//             />
//             <Person 
//               name={this.state.persons[2].name} 
//               age={this.state.persons[2].age} 
//               tech={this.state.persons[2].tech}
//             />
//           </div> : null
//       }
//       </div>
//     )
//   }

// }
// export default App;
