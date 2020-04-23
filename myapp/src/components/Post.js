import React from 'react'

function Post(props) {
    console.log(props)
    return (
        <h1> Post {props.match.params.id}</h1>
    )
}
export default Post
