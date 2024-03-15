import React, { useState } from 'react';
import './App.css';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const credentials = {
    "user": "test",
    "password": "test"
  }

  const [formValues, setFormValues] = useState({ user: '', password: '' });
  const [validationStates, setValidationStates] = useState({ credentialState: true });

  const handlePasswordChange = (e) => {
    setFormValues({ ...formValues, password: e.target.value });
  };

  const handleUserChange = (e) => {
    setFormValues({ ...formValues, user: e.target.value });
  }

  const validatePassword = (user, password) => {
    // Check if user and password are both correct
    console.log(user, password, credentials.user, credentials.password);
    if (user === credentials.user && password === credentials.password) {
      // Navigate to /carlist
      navigate('/carlist');
    } else {
      // Set the validation state to false
      setValidationStates({ ...validationStates, credentialState: false });
    }
  };

  const clickSubmit = () => {
    validatePassword(formValues.user, formValues.password);
  };

  const cancelButton = () => {
    setFormValues({ user: '', password: '' });
    setValidationStates({ credentialState: true });
  }

  return (
    
    <div className='app'>
        <div className='title'>TuSegundazo.com</div>

        <img src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="logo" className="logo" />

        <hr className="hr-line" />

        <div className="title-sesion">
          Inicio de sesion
        </div>

        <div className="form-container">
          <Form>

            <Form.Group className="mb-6" controlId="formBasicUser">
              <Form.Label>Nombre de usuario</Form.Label>
              <Form.Control type="user" value={formValues.user } onChange={handleUserChange} className={validationStates.credentialState ? '' : 'input-invalid'}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" onChange={handlePasswordChange} value={formValues.password} className={validationStates.credentialState ? '' : 'input-invalid'}/>
            </Form.Group>

            <div className="button-container">

              <Button variant="primary" onClick={clickSubmit}>
                Ingresar
              </Button>

              <Button variant="primary" className='button-cancel' onClick={cancelButton}>
                Cancelar
              </Button>

            </div>

            <Form.Group className="mb-3" >

              { !validationStates.credentialState && <div className="auth-error">Error de autenticacion. Revise sus credenciales</div>}

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
