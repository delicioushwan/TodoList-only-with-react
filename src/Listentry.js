import React from 'react'

export const ListEntry = (props) => {

    return (
        <ul>
            <li onClick = {() => {
                props.complete(props.index,props.todoindex)
                }}>
                {props.data.value}
            </li>
        </ul>
    )
}