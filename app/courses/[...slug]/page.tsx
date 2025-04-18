import React from 'react'

const CourseDetails =async  ({params}:{params:Promise<{slug:string[]}>}) => {
    const {slug} = await params;
  return (
    <div>CourseDetails</div>
  )
}

export default CourseDetails