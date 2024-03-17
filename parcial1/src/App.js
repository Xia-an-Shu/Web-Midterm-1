import React, { useState } from 'react';
import './App.css';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { FormattedMessage } from "react-intl";

function App() {

  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({ login: '', password: '' });
  const [validationStates, setValidationStates] = useState({ credentialState: true });

  const handlePasswordChange = (e) => {
    setFormValues({ ...formValues, password: e.target.value });
  };

  const handleUserChange = (e) => {
    setFormValues({ ...formValues, login: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValues)
    });

    const data = await response.json();

    if (response.status === 200) {
      // Handle successful login
      console.log(data.message);
      navigate('/carlist');
    } else if (response.status === 401) {
      // Handle unsuccessful login
      console.log(data.message);
      setValidationStates({ credentialState: false });
    }
  };


  const cancelButton = () => {
    setFormValues({ user: '', password: '' });
    setValidationStates({ credentialState: true });
  }

  return (
    
    <div className='app'>

        <div className='title'>TuSegundazo.com</div>

        <hr className="hr-line-first" />  

        <img src={process.env.PUBLIC_URL + "/images/banner.png"} alt="logo" className="logo" />

        <hr className="hr-line" />

        <div className="title-sesion">
          <FormattedMessage id="Inicio de sesión"/>
        </div>

        <div className="form-container">
          <Form>

            <Form.Group className="mb-6" controlId="formBasicUser">
              <Form.Label>
                <FormattedMessage id="Nombre de usuario"/>
              </Form.Label>
              <Form.Control type="user" value={formValues.user } onChange={handleUserChange} className={validationStates.credentialState ? 'form-space' : 'form-space input-invalid'}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                <FormattedMessage id="Contraseña"/>
              </Form.Label>
              <Form.Control type="password" onChange={handlePasswordChange} value={formValues.password} className={validationStates.credentialState ? 'form-space' : 'form-space input-invalid'}/>
            </Form.Group>

            <div className="button-container">

              <Button variant="primary" className='start-buttons' onClick={handleSubmit}>
                <FormattedMessage id="Ingresar"/>
              </Button>

              <Button variant="primary" className='button-cancel start-buttons' onClick={cancelButton}>
                <FormattedMessage id="Cancelar"/>
              </Button>

            </div>

            <Form.Group className="mb-3" >

              { !validationStates.credentialState && 

              <div className="auth-error">
                <FormattedMessage id="Error de autenticacion. Revise sus credenciales"/>
              </div>
              
              }

            </Form.Group>

          </Form>
        </div>

        <div className="footer">
          Contact us: +57 3102105253 - info@tusegundazo.com - @tusegundazo
        </div>

    </div>
  );
}

export default App;
