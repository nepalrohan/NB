import Link from 'next/link'
import React from 'react'



interface Blog{
  id:number
  title:string
}
const blogList:Blog[] =[
  {id:1, title:"React update available"},
  {id:2, title:"next update available"},
  {id:3, title:"python update available"},
  {id:4, title:"Go lang update available"},

]


const BLOGSPAGE = () => {
  return (
    <div>
      

      <h3>BLogs List is here</h3>

{
  blogList?.map((item:Blog, index:number)=>{
    return (
      <>
      <Link key={index} href={`/blogs/${item.id}`}>{item.title}</Link>
      </>
    )
  })
}


    </div>
  )
}

export default BLOGSPAGE