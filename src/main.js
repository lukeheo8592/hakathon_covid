/*********************************************************************************
* WEB422 – Assignment 3
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: __Geunhyeok Heo________ Student ID: ___136873197_____ Date: ____2021-02-24__
*
*
********************************************************************************/
import React from 'react'
import { Form, Button} from 'react-bootstrap'
import './App.css'

import {useState} from 'react';
import { useHistory } from "react-router-dom";



function Main() {
  let history = useHistory();
  const [searchString, setSearchString] = useState("")
  function handleSubmit(e){

   
    e.preventDefault();
    history.push(`/person/${searchString}`);
  }
    return (
      <>
      <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Vaccination Number</Form.Label>
        <Form.Control type="text" placeholder="Enter Vaccination number" className="mr-sm-2" value={searchString}
   onChange={(e) => setSearchString(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your Vaccination number with anyone else.
        </Form.Text>
      </Form.Group>
    
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" required />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
    )
}

export default Main
