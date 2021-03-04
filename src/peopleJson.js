import { useState, useEffect } from 'react'
import { Card,Button , Pagination} from 'react-bootstrap'
const data =require("./vaccine.json");


function PeopleJson(){

    const [page, setPage] = useState(1)
    const [people, setPeople] = useState(null)

    useEffect(() => {
    // Update the document title using the browser API
    let start;
    if( page === 1){
        start =0;
    }else{
        start = (page-1)*7;
    }
    setPeople(data.splice(start,7));
    
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
        <div>  <br/></div>
        <Card>
        <Card.Body>
          <Card.Title>People List(Raw JSON)</Card.Title>
          <Card.Text>
           It will show vaccinated and unvaccinated people on the list {"(RAW JSON)"}
          </Card.Text>
        </Card.Body>
       
      </Card>
      <div>  <br/></div>
{JSON.stringify(people)}
 
<div>  <br/></div>
        <Pagination>
 <Pagination.Prev onClick={previousPage}/>
 <Pagination.Item onClick={()=>{setPage(page === 1 ? 1 : page === 2 ? 1 : page -2)}}>{page === 1 ? 1 : page === 2 ? 1 : page -2 }</Pagination.Item>
 <Pagination.Item onClick={()=>{setPage(page ===1 ? 2 : page === 2 ? 2: page -1)}}>{page ===1 ? 2 : page === 2 ? 2: page -1}</Pagination.Item>
 <Pagination.Item onClick={()=>{setPage(page ===1 ? 3 : page === 2 ? 3: page)}}>{page ===1 ? 3 : page === 2 ? 3: page}</Pagination.Item>
 <Pagination.Item onClick={()=>{setPage(page ===1 ? 4 : page === 2 ? 4: page +1)}}>{page ===1 ? 4 : page === 2 ? 4: page +1}</Pagination.Item>
 <Pagination.Item onClick={()=>{setPage(page ===1 ? 5 : page === 2 ? 5: page +2)}}>{page ===1 ? 5 : page === 2 ? 5: page +2}</Pagination.Item>
 <Pagination.Next onClick={nextPage}/>
</Pagination>


        </>
           
        )

}

export default PeopleJson;