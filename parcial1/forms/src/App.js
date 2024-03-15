import React, { useState } from 'react';
import './App.css';
import { Form, Button } from 'react-bootstrap';

function App() {
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const [validationStates, setValidationStates] = useState({ emailState: true, passwordState: true });

  const handleEmailChange = (e) => {
    setFormValues({ ...formValues, email: e.target.value });
    validateEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setFormValues({ ...formValues, password: e.target.value });
    validatePassword(e.target.value);
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setValidationStates({ ...validationStates, emailState: re.test(email) });
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{9,}$/;
    setValidationStates({ ...validationStates, passwordState: re.test(password) });
  };

  const clickSubmit = () => {
    validateEmail(formValues.email);
  };

  const handleSelectChange = (e) => {
    setFormValues({ ...formValues, favoriteClass: e.target.value });
  };

  return (
    <div className="form-container">
      <Form>
        <Form.Group className="mb-6" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} value={formValues.email} className={validationStates.emailState ? '' : 'input-invalid'}/>
          { !validationStates.emailState && <Form.Text className="text-muted">Invalid email address.</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password} className={validationStates.passwordState ? '' : 'input-invalid'}/>
          { !validationStates.passwordState && <Form.Text className="text-muted">Your password should have numbers and letters and should be at least 9 char long</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Favorite Class</Form.Label>
          <Form.Select onChange={handleSelectChange}>
            <option value="1">ISIS3710</option>
            <option value="2">Programación con tecnologias web</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" onClick={clickSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;