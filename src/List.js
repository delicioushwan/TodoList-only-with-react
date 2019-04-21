import React from 'react'

export const List = (props) => {
    return(
        <div >
            <div className='list'
            onClick = {() => {
                return props.getList(props.data.index)
            }}>{props.data.list}</div>
        </div>
    )
}