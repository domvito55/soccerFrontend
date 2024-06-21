import React from 'react';
import axios from 'axios';

import './App.css';

import PlayerList from './Players/PlayerList';
import PlayerSingle from './Players/PlayerSingle';
import PlayerForm from './Players/PlayerForm';


class App extends React.Component{
  constructor(props){
    super(props);

    //This is equivalent to a repository in Angular. It is a way to store
    this.state = {
      players: [],
      currentPlayer: {}
    }

    //This binding is necessary to make `this` work in the callback
    //This is an an old appraoch, the new approach is to use arrow functions
    //because they do not have their own this. They inherit the this of the
    //enclosing scope.
    // this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
  }

  //This is a lifecycle method that is called after the component is rendered
  componentDidMount(){
    const URL = 'http://localhost:4000/players';

    //This is a promise based HTTP client for the browser and node.js
    axios.get(URL)
      .then((res) => {
        this.setState({
          players: res.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // This is the old approach to binding, the new approach is to use arrow functions
  // updateCurrentPlayer(player){
  //   this.setState({
  //     currentPlayer: player
  //   });
  // }

  // This is the new approach to binding
  updateCurrentPlayer = (player) => {
    this.setState({
      currentPlayer: player
    });
  }


//----------------------------------------------
  render(){
    return (
      <div className="container-fluid">
        <div className='row'>
          <nav>
            <div className="nav-wrapper blue darken-1">
              <a href="#!" className="brand-logo" style={{paddingLeft: "8px"}}>
                Soccer Management
              </a>
            </div>
          </nav>
        </div>
        <div className='row'>
          <div className='col s3'>
            <PlayerList
              players={this.state.players}
              updateCurrentPlayer={this.updateCurrentPlayer}
            /></div>
          <div className='col s9'>
            <PlayerSingle
              currentPlayer={this.state.currentPlayer}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col s12'><PlayerForm/></div>
        </div>
      </div>
    );
  }
}

export default App;
