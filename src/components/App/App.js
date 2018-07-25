import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starList: [
        {
          name: 'Nunki',
          diameter: 132
        },
        {
          name: 'Menkar',
          diameter: 109
        }, {
          name: 'Polaris',
          diameter: 90
        }],
        newStar: {
          name: '',
          diameter: ''
        }

    }
  }
handleChangeFor = (propertyName) => {
  return (event => {
    this.setState ({
      newStar: {
      ...this.state.newStar,
      [propertyName]: event.target.value
      }
    })
  })
}

handleSubmit = event =>{
  event.preventDefault();
  console.log(this.state);
  this.setState({
    starList: [
      ...this.state.starList,
      this.state.newStar
    ],
    newStar: {
      name: '',
      diameter: ''
    }
  })
  
}

  render() {

    let starListItemArray = this.state.starList.map((star, index) => {
      return <li key={index}>The Star "{star.name}" is {star.diameter} million kilometers in diameter.</li>
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.newStar.name} type="text" onChange={this.handleChangeFor('name')}/>
          <input value={this.state.newStar.diameter} type="text" onChange={this.handleChangeFor('diameter')}/>
          <input type="submit" value="Submit"/>
        </form>
        <ul className="App-intro">
          {starListItemArray}
        </ul>
      </div>
    );
  }
}

export default App;
