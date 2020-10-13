import React from 'react'

function UserOutput(props) {
    return (
        <div>
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