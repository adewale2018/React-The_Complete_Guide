import React, { Component } from 'react';
import Person from './Person';
import './App.css';

class App extends Component{
  state = {
    persons: [
      { id: "one1", name: "Qudus", age: 10, tech: "Back-end"},
      { id: "two2", name: "Adewale", age: 15, tech: "Front-end"},
      { id: "six6", name: "Kolawole", age: 20, tech: "Full-stack"}
    ],
    otherState: "Some other values",
    showPersons: false
  }

  handleClick =() => {
    this.setState({
      persons: [
        {name: "Qudus-Kunle", age: 10, tech: "Back-end"},
        {name: "Adewale-Saheed", age: 15, tech: "Front-end"},
        {name: "Kolawole-Nafiu", age: 20, tech: "Full-stack"}
      ]
    });
  }
  
  handleNameChange = (event, id) => {
    event.preventDefault();
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
 
    this.setState({ persons: persons })
  }

  handleToggle = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  handleDelete = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons})
  }
  render() {
    const style = {
      backgroundColor: "#fff",
      border: "1px solid steelblue",
      padding: "10px",
      borderRadius: "15px",
      color: "red",
      font: "inherit",
      outline: "none",
      cursor: "pointer",
      marginLeft: "1em"
    }
    let persons = null;
    if(this.state.showPersons)
    persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return(
            <Person 
            click={() => this.handleDelete(index)}
            name={person.name} 
            age={person.age} 
            tech={person.tech}
            key={person.id}
            changed={(event) => this.handleNameChange(event, person.id)}
          />
          )
        })}
      </div>
    )
    return(
      <div className="App">
        <h1>THIS IS PERSON'S COMPONENT</h1>
        <button 
            onClick={this.handleToggle}
            style={style}>Toggle Me!
        </button>
        <button 
            onClick={this.handleClick}
            style={style}>Click Me!
        </button>
        {persons}
      </div>
    )
  }

}
export default App;
