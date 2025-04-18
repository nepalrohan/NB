import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react'
type props = {params:Promise<{id:number}>}

export async function generateMetadata({params}:props):Promise<Metadata>{

  const blogId = (await params).id;
  return {
    title:`Title of blog ${blogId}`,
    description:`Description for the blog of id ${blogId}`
  }

}



const BlogDetailPage = async ({params}:props) => {

    const id = (await params).id;
  return (

    <div>BlogDetailPage for blog of id: {id}
    
    <h4>   <Link href={`/blogs/${id}/review/${id}`}>Show comment</Link></h4></div>
  )
}

export default BlogDetailPage

