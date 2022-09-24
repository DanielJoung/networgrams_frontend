import React, {Component} from 'react'
import {useState} from 'react'


function Header(props) {
    return(
        <>
            <h1><a href="/" onClick={(event)=> {
                event.preventDefault()
                props.onChangeMode()
            }}>{props.title}</a></h1>
        </>
        
    )
}

function ListPost(props) {
    const lis = []

    for(let i=0; i<props.posts.length; i++) {
        let t = props.posts[i]
        lis.push(<li key={t.id}>
            <a id={t.id} href={'/read/'+ t.id} onClick={event=>{
                event.preventDefault()
                props.onChangeMode(Number(event.target.id))
            }}>{t.title}</a></li>)
    }
    return(
        <>
            <div>
                {lis}
            </div>
        </>
    )

}

function Article(props) {
    return (
      <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  
    )
  }

function PostView() {
    const [mode, setMode] = useState('WELCOME')
    const [id, setId] = useState(null)

    const posts = [
        {id:1,  title: "My First Post", body: "This is my first post."},    
        {id:2,  title: "My Second Post", body: "This is my second post."},    
        {id:3,  title: "My Third Post", body: "This is my third post."}    
    ]

    let content = null;
    if(mode === 'WELCOME') {
        content = <Article title="Welcome" body="WELCOME, HOME"></Article>
    } else if(mode === 'READ') {
        let title, body = null
        for(let i=0; i<posts.length; i++) {
            if(posts[i].id === id) {
                title = posts[i].title
                body = posts[i].body
            }
        }
        content = <Article title={title} body={body}></Article>
    }
    return(
        <>
            <Header title="MyPost" onChangeMode={()=>{
                setMode ('WELCOME')
            }}></Header>
            <ListPost posts={posts} onChangeMode={(_id)=>{
                setMode ('READ')
                setId(_id)
            }}></ListPost>
            {content}
        </>
  
    )
}

export default PostView;