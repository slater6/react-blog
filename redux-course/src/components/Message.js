import React from 'react'

const Message = (props) => (
    props.message 
        ? <span className='message'>{props.message}</span>
        : null
)

export default Message;