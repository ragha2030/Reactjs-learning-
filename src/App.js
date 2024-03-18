import React,  { Component }  from 'react';
import './App.css';
import  Greet   from './components/Greet';
import  Welcome  from './components/Welcome'; 
import  Hello from './components/Hello' 
import Message from './components/Message'
class App extends Component {
  render () {
    return (
      <div className="App">
        <Message />
        {/* <Greet name="lufy" heroName="rubber">
          <p>
            This is for children
          </p>
        </Greet>
        <Greet name="zoro" heroName="swordsman"/>
        <button>Action</button>
        <Greet name="Nami" heroName="thief"/>
        <Welcome name="lufy" heroName="rubber"/>
        <Welcome name="zoro" heroName="swordsman"/>
        <Welcome name="nami" heroName="thief"/>
        <Hello /> */}
      </div>
    );
  }
}


export default App;
