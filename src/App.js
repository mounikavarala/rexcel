import React, { Component } from 'react'
import './index.css'

import Mou from './components/dimensions/Dimensions'


export class App extends Component {
  render() {
    return (
      <div className="App">

        <Mou name="excel-dimensions" title={"Dimensions for the Excel"} 
        submitFn={function () {

          // Function to Render the Excel
        }}>
         
        </Mou>


      </div>
    )
  }
}


export default App