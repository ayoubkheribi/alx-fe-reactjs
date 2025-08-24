import { useState } from 'react'
import './App.css'
import RegistrationForm from './components/RegistrationForm'
import FormikForm from './components/formikForm'

function App() {

  return (
    <div>
      <h1>Form Handling in React</h1>
      <div>
        <RegistrationForm />
        <FormikForm />
      </div>
    </div>
  )
}

export default App
