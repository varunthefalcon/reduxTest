import React, { Component } from 'react';
import MyNavBar from './components/Navbar';
import HeaderButtons from './components/HeaderButtons';
import TableComp from './components/TableComp';
import Popup from './components/Popup';
import FormComp from './components/FormComp';


export class App extends Component {

  render() {
    console.log(process.env)
    return (
      <div>
        <MyNavBar />
        <HeaderButtons />
        <TableComp />
        <Popup>
          <FormComp />
        </Popup>
      </div>
    )
  }
}

export default App
