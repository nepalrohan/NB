import React from 'react'

const page = async ({params}:{params:Promise<{reviewid:number}>}) => {

  const reviewid = (await params).reviewid;
  return (
    <div>Review for reviewId:{reviewid}  </div>
  )
}

export default page