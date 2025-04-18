import React from 'react'

const BlogDetailPage = async ({params}:{params:Promise<{id:number}>}) => {

    const id = (await params).id;
  return (

    <div>BlogDetailPage for blog of id: {id}</div>
  )
}

export default BlogDetailPage