import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
<div>Navbar for sourses</div>
{children}
<div>Footer for courses</div>


    </div>
  )
}

export default layout