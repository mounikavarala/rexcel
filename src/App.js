import React, { Component } from 'react'
import './index.css'
import Dimensions from './components/dimensions/Dimensions'
// import CustomHeader from "./components/header/CustomHeader";
// import CustomForm from "./components/Form/CustomForm";



export class App extends Component {


  constructor(props) {
     super(props);
    window.addEventListener("DOMContentLoaded", function () {
      document.getElementsByTagName('button')[0].click();
    });
  }



  insertRowHeader(table, cols) {
    let headerRow = table.insertRow(0);

    for (let i = 0; i < cols + 1; i++) {
      headerRow.innerHTML = headerRow.innerHTML + (`<th class='header-cell' id='col-header-cell-${i}'>
                            <span class='header-content'> Col-${i}</span>
                        </th>`);
    }

  }


  createTextFieldInsideCell(cell, rowNumber, colNumber) {
    let div = document.createElement('div')
    div.class = "cell";
    div.id = `cell_${rowNumber}_${colNumber}`;
    let input = document.createElement('input');
    input.name = `input_${rowNumber}_${colNumber}`;
    input.class = "cell-input";
    // input.setAttribute("data-row-num", rowNumber);
    // input.setAttribute("data-col-num", colNumber);
    input.id = `input_${rowNumber}_${colNumber}`;
    input.onfocus = function (evt) {
      document.getElementById("cell-in-focus").textContent = `Row # ${rowNumber}, Col # ${colNumber}`;
      document.getElementById('formula-text-area').value = evt.target.value;
    };

    input.onkeypress = function (evt) {
      console.log("onkeypress", evt);
      document.getElementById('formula-text-area').value = evt.target.value + evt.key;
    };

    div.appendChild(input);

    cell.appendChild(div);
  }


  createColsInsideRow(row, rowNumber, cols) {
    row.innerHTML = `<th class='header-cell' id='row-header-cell-${rowNumber}'>
                        <span class='header-content'> Row-${rowNumber}</span>
                    </th>`;
    for (let i = 1; i < cols + 1; i++) {
      let cell = row.insertCell(i);
      this.createTextFieldInsideCell(cell, rowNumber, i);
    }
  }

  

 

  renderTable(rows, cols) {

    let table = document.getElementById("book1");

    table.innerHTML = "";

    this.insertRowHeader(table, cols);

    for (let i = 0; i < rows; i++) {
      let row = table.insertRow(i + 1);
      this.createColsInsideRow(row, i, cols);
    }

  }

  renderExcel(evt) {

    evt.preventDefault();

    console.log("Clearing the old table");

    let r = +evt.target.numOfRows.value;

    let c = +evt.target.numOfCols.value;


    this.renderTable(r, c);

  }

  

  render() {


    return (

      <div className="App">
        <Dimensions name="excel-dimensions" title={"Enter your dimensions"}
          submitFn={this.renderExcel.bind(this)}>


        </Dimensions>



        {/* <CustomHeader text={"Excel in RxJS"}></CustomHeader>
              <CustomForm>
                <div>
                  <div className="rows">
                    <span>Text1  </span>
                    <span><input type="text" required={true} name="numOfRows" /></span>
                  </div>
                  <div className="rows">
                    <span>Text2  </span>
                    <span><input type="text" required={true} name="numOfRows" /></span>
                  </div>
                  <div>
                    <button type="submit"> Submit </button>

                  </div>

                </div>
              </CustomForm> */}


      </div>
    )
  }
}


export default App