import React,  { Component }  from 'react';
import './App.css';
import  Greet   from './components/Greet';
import  Welcome  from './components/Welcome'; 
import  Hello from './components/Hello' 
import Message from './components/Message'
import Counter from './components/Counter';
import Functionclick from './components/Functionclick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
class App extends Component {
  render () {
    return (
      <div className="App">
        <NameList />
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <Functionclick />
        <ClassClick />
        <Counter />
        <Message />
        <Greet name="lufy" heroName="rubber">
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
