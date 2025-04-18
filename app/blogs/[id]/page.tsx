import Link from 'next/link';
import React from 'react'

const BlogDetailPage = async ({params}:{params:Promise<{id:number}>}) => {

    const id = (await params).id;
  return (

    <div>BlogDetailPage for blog of id: {id}
    
    <h4>   <Link href={`/blogs/${id}/review/${id}`}>Show comment</Link></h4></div>
  )
}

export default BlogDetailPage