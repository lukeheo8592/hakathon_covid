import React from 'react'
import { useState, useEffect } from 'react'
import { Button ,Card, ListGroup, ListGroupItem} from 'react-bootstrap'
const datas = require("./vaccine.json");

function Person(props){

    const [person, setPerson] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        // Update the document title using the browser API
       let sorted_data = null; 
       datas.forEach((data) =>{
           
        if(data.vaccine_no == props.id){
         

                sorted_data = data;
         
           
        }
       })
        setPerson(sorted_data);
        setLoading(false);
      
      },[props.id, props.sin_number]);
     
    return (
        <> 
        {console.log(person)}
{loading === true ? (<div>Loading Passport Data...</div>): person === null ? (<div>Unable to find Passport with id:{props.id}</div>) : person.vaccine.has_vaccine ===  false?(<Card>
        <Card.Body>
          <Card.Title>{person.name.first_name}{" "}{person.name.last_name}{" hasn't been vaccinated Covid-19 vaccine"}</Card.Title>
          <Card.Text>
          {"No covid-19 passport for somone has not been vaccinated"}
          </Card.Text>
        </Card.Body>
        </Card>)  : (
        <div>
        <Card style={{ width: '100%' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1605377347958-e8bd4c00ba1d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8dmFjY2luZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" style={{ height: '15rem', width: '100%' }} />
  <Card.Body>
    <Card.Title>Covid-19 Vaccine Passport</Card.Title>
    <Card.Text>
    {person.name.first_name}{" "}{person.name.last_name}{" has been vaccinated Covid-19 vaccine"}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Name: {person.name.first_name}{" "}{person.name.last_name}</ListGroupItem>
    <ListGroupItem>Birth date:    {person.birthdate}</ListGroupItem>
    <ListGroupItem>Vaccinated date:   {person.vaccine.date} </ListGroupItem>
    <ListGroupItem> Number of Covid-19 test:   {person.test.frequency} </ListGroupItem>
   {person.test.has_test === true ? <ListGroupItem>Result of test:   {person.test.result} </ListGroupItem>:""} 
  </ListGroup>
</Card>
        </div>
    )
    
}
</>)}
export default Person;