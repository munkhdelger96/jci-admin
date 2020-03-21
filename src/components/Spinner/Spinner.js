import * as React from 'react'
import '../Spinner/spinner.css'

const Spinner = () => (
  <div
    style={{
      display: 'block',
      position: 'absolute',
      zIndex: 1031,
      top: "150%",
      left: "40%"
  
    }}
  >
    <div
      style={{
        // animation: '400ms linear infinite spinner',
        // borderBottom: '2px solid transparent',
        // borderLeft: '2px solid #29d',
        // borderRadius: '50%',
        // borderRight: '2px solid transparent',
        // borderTop: '2px solid #29d',
        // boxSizing: 'border-box',
        // height: 180,
        // width: 180,
        border: "16px solid #f3f3f3", /* Light grey */
        borderTop: "16px solid #3498db", /* Blue */
        borderRadius: "50%",
        width: 120,
        height: 120,
        animation: "500ms linear infinite spinner"
      }}
    />
  </div>
)

export default Spinner
