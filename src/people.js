import { useState, useEffect } from 'react'
import { Button ,Card, Table, Pagination} from 'react-bootstrap'
const data =require("./vaccine.json");


function People(){

    const [page, setPage] = useState(1)
    const [people, setPeople] = useState(null)

    useEffect(() => {
    // Update the document title using the browser API
    let start;
    if( page === 1){
        start =0;
    }else{
        start = (page-1)*8;
    }
    setPeople(data.splice(start,8));
  },[page]);

    function previousPage() {
        if (page > 1) {
            setPage(page - 1)
            
        }
    }

    function nextPage(){
    
            setPage(page + 1)
        
    }
    return (<>
  <Button variant="primary" onClick={ event =>  window.location.href='/people'}>Arranged data</Button>{' '}
  <Button variant="secondary" onClick={ event =>  window.location.href='/peopleJson'}>JSON data</Button>{' '}
  
  
        {people === null ? (<div> Loading data...</div>) : people.length === 0 ?( <div>No data</div>):(
            <div>
                <br/>
        <Card>
        <Card.Body>
          <Card.Title>People List</Card.Title>
          <Card.Text>
           It will show vaccinated and unvaccinated people on the list, click vaccinated people and you can see the Digital health Passport
          </Card.Text>
        </Card.Body>
       
      </Card>
      <br/>
        <Table hover>
                        <thead>
                            <tr>
                                <th>Vaccination number</th>
                                <th>Name</th>
                                <th>Address city + address street</th>
                                <th>gender</th>
                                <th>vaccinated or not</th>
                                <th>covid test</th>
                            </tr>
                        </thead>
                        <tbody>
                              
                            {people ? people.map((person) => (
                                <tr key={person.vaccine_no} onClick={event =>  window.location.href=`/person/${person.vaccine_no}`}>
                                    <td>{person.vaccine_no}</td>
                                    <td>{person.name.first_name} {person.name.last_name}</td>
                                    <td>{person.address.city}{`  , `}{person.address.street}</td>
                                    <td>{person.gender}</td>
                                    <td>{person.vaccine.has_vaccine === true ? (<div>{`     `} Yes</div>) : (<div>  {`     `}     No</div>)}</td>
                                    <td>{person.test.has_test === true ? (<div>{`     `} Yes</div>) : (<div>  {`     `}     No</div>)}</td>
                                </tr> 
                            )):  <tr>
                                <td colSpan="4">Loading Restaurants...</td>
                           
                           </tr> } 
                        </tbody>
                    </Table>
        
        <Pagination>
 <Pagination.Prev onClick={previousPage}/>
 <Pagination.Item onClick={()=>{setPage(page === 1 ? 1 : page === 2 ? 1 : page -2)}}>{page === 1 ? 1 : page === 2 ? 1 : page -2 }</Pagination.Item>
 <Pagination.Item onClick={()=>{setPage(page ===1 ? 2 : page === 2 ? 2: page -1)}}>{page ===1 ? 2 : page === 2 ? 2: page -1}</Pagination.Item>
 <Pagination.Item onClick={()=>{setPage(page ===1 ? 3 : page === 2 ? 3: page)}}>{page ===1 ? 3 : page === 2 ? 3: page}</Pagination.Item>
 <Pagination.Item onClick={()=>{setPage(page ===1 ? 4 : page === 2 ? 4: page +1)}}>{page ===1 ? 4 : page === 2 ? 4: page +1}</Pagination.Item>
 <Pagination.Item onClick={()=>{setPage(page ===1 ? 5 : page === 2 ? 5: page +2)}}>{page ===1 ? 5 : page === 2 ? 5: page +2}</Pagination.Item>
 <Pagination.Next onClick={nextPage}/>
</Pagination>
      </div>)
        }
        </>
        )}





export default People