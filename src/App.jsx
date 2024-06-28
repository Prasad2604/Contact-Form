import ContactForm from "./ContactForm"
import React, { useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import DisplayForm from "./DisplayForm";



function App() {
  const [formDataArray, setFormDataArray] = useState([]);

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ContactForm  setFormDataArray={setFormDataArray} />}></Route>
        <Route path='/display' element={<DisplayForm formDataArray={formDataArray}/>}/>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
