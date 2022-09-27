import React from 'react'

function WritePost(props){
    return (
        <>
        <form onSubmit={event => {
            event.preventDefault();
            const title = event.target.title.value;
            const body = event.target.body.value;
            props.onCreate(title,body)

        }}>
            <p><input type="text" name="title" placeholder='title'/></p>
            <p><textarea name='body' placeholder='body'></textarea></p>
            <p><input type="submit" value="Create"></input></p>
        </form>
    </>

    )
}

export default WritePost