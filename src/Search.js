import React from 'react'

export const Search = (props) => {
    
    return(
        <div id="Search">
        <span>Search   </span>

        <input 
        onKeyPress={
            (e) =>{
                let value = e.target.value
                if(e.key === 'Enter'){
                    console.log('---------------------',props)
                    props.Data.value.forEach((Li,index1) => {
                        Li.todo.forEach((todo,index) => {
                            if(todo.value.indexOf(value) > -1){
                                props.search(index1,index)
                            }
                        })
                    })    
                }
            }
        } 
        ></input>
        </div>
    )
}