import React from 'react'
import './UserOutput.css'

const UserOutput = (props) => {
    return (
        <div className='Output'>
            <p>
                This is my first paragraph by {props.username}.
            </p>
            <p>
                This is my second paragraph.
            </p>
        </div>
    )
}

export default UserOutput;