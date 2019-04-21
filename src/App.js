import React, { Component } from 'react';
import './App.css';
import {Nav} from './Nav'
import {Display} from './Display'

class App extends Component {
  constructor(){
    super()
    this.state = {
      value :[],
      list : false,
      index : ''
    };
  }

  addList = (list) => {
    this.setState(
      {
        value : [
          ...this.state.value,
          {
            'list' : list,
            'todo' : []    
          }
        ]
      })
  }

  addIndex = (index) => {
    this.setState(
      {
        value : [
          ...this.state.value,
          {
            'index' : index,
                    }
        ]
      })

  }

  changeListValue = (getlist) => {
    this.setState({
      index : getlist
    })
  }

  addToDo = (todos,index) => {
    this.setState(state => {
      const newValue = [
          ...state.value
      ];
      
      newValue[index] =
      {
        ...state.value[index],
          todo : [...state.value[index].todo,
          { value : todos,
            search : false,
            complete : false
          }]
      };
      return {
          value: newValue
      };
    })
  }

  completeTodo = (index,todoindex) => {
    this.setState((state) =>{
      const newValue = [
          ...state.value
      ];
      newValue[index].todo[todoindex] =
      { ...state.value[index].todo[todoindex],
        complete : !newValue[index].todo[todoindex].complete
      };

      return {
          value: newValue
      }; 
    })
  }

  searchtodo = (index,todoindex) => {
    this.setState((state) => {
      state.list = true

      const newValue = [
          ...state.value
      ];
      
      newValue[index].todo[todoindex] =
      { ...state.value[index].todo[todoindex],
        search : !newValue[index].todo[todoindex].search
      };

      return {
          value: newValue
      }; 
    })
  }

  searchEnd = (index,todoindex) => {
    this.setState((state) => {
      state.list = false
      const newValue = [
        ...state.value
    ];
    
    newValue[index].todo[todoindex] =
    { ...state.value[index].todo[todoindex],
      search : false
    };

    return {
        value: newValue
    }; 

    })
  }

  render() {
    return (
      <div className="App">
      <Nav input={this.addList} end = {this.searchEnd} Data = {this.state} getList = {this.changeListValue} getIndex = {this.addIndex} search = {this.searchtodo}/>
      <Display Data = {this.state} input = {this.addToDo} complete = {this.completeTodo}/>
      </div>
    );
  }
}

export default App;
