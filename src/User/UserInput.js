import React from 'react'

function UserInput(props) {
    
    const style = {
        background: 'pink'
      }

    return (
        <div>
            <input style={style} type='text' onChange={props.change} value={props.username}/>
        </div>
    )
}

export default UserInput;