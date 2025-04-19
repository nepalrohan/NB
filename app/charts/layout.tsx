import React from 'react'

const layout = ({BarChart,HeatMap, LineChart}:{BarChart:React.ReactNode, HeatMap:React.ReactNode, LineChart:React.ReactNode}) => {
  return (
    <div>

        <div>{BarChart}</div>
        <div>{HeatMap}</div>
        <div>{LineChart}</div>

    </div>
  )
}

export default layout