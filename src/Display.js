import React from 'react';
import { ListEntry } from './Listentry';

export const Display = (props) => {
    let target = props.Data.value[props.Data.index]
    return (
        
    <div id="Display">
    <div id="todotag">
        할일<input id='DisplayInput' 
                onKeyPress = {
                    (e) =>{
                        if(e.key === 'Enter' && e.target.value !== '' && props.Data.index !== ''){
                            props.input(e.target.value,props.Data.index)
                            e.target.value = ''
                        }else{
                            if(e.key === 'Enter' && e.target.value !== '' && props.Data.index === ''){
                                e.target.value = ''
                            }
                        }
                    }
                }
            ></input>
    </div>
    <div id='entrylist'>
        {props.Data.list ? 
            props.Data.value.map((value) =>{
                return value.todo.map((todo12,index)=>{
                    if(todo12.search){

                        return <ListEntry data = {todo12} key = {index}/>
                    }else{
                    }
                })
            })
            :
            target ? 
                target.todo.map((data,index) => {
                    if(!data.complete){
                        return <ListEntry data = {data} key = {index} todoindex = {index} complete = {props.complete} index = {props.Data.index}/>
                    }
                })
                : ''
            }  
    </div>
    </div>
    )
}