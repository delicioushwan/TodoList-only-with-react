import React from 'react';
import { Search } from './Search'
import { List } from './List'

export const Nav = (props) =>{

    return(
    <div id="Nav">
        <Search Data = {props.Data} search = {props.search}/>
        <button onClick={() =>{
            props.Data.value.forEach((val,index)=>{
                val.todo.forEach((todo,index1)=>{
                    props.end(index,index1)
                })
            })
        }

        }>SeachEnd!</button>
        <div>
            <div id='listtext'>LIST!</div>
            <div id='listitems'>
                {props.Data.value.map((data,index) => {
                    data.index = index
                    return <List data ={data} key = {index} index = {index} getList = {props.getList} getIndex = {props.getIndex}/>
                })}
            </div>
        </div>
        <div id="addbox">
            <span> List ADD !!</span>
            <input id='listinput' 
            onKeyPress = {(e) => {
                if(e.key ==='Enter' && e.target.value !== ''){
                    props.input(e.target.value)
                    e.target.value = ''
                }
            }
            }></input>
        </div>
    </div>
    )
}
