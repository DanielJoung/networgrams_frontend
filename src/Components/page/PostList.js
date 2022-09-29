// import React from 'react'

// function PostList(props) {
//     const lis = []

//     for(let i=0; i<props.posts.length; i++) {
//         let t = props.posts[i]
//         lis.push(<li key={t.id}>
//             <a id={t.id} href={'/read/'+ t.id} onClick={event=>{
//                 event.preventDefault()
//                 props.onChangeMode(Number(event.target.id))
//             }}>{t.title}</a></li>)
//     }
//     return(
//         <>
//             <div>
//                 {lis}
//             </div>
//         </>
//     )

// }

// export default PostList;