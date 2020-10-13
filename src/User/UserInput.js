import React from 'react'

const UserInput = (props) => {

    const style = {
        background: 'pink'
      }

    return (
            <input style={style} type='text' onChange={props.change} value={props.username}/>
    )
}

export default UserInput;