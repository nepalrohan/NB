import Link from 'next/link'
import React from 'react'

const HeatMap = () => {
  return (
    <div className='w-40 h-40 bg-green-400'>HeatMap
    
    <button><Link href='/charts/pie-chart'>Pie-Chart</Link></button>
    </div>
  )
}

export default HeatMap