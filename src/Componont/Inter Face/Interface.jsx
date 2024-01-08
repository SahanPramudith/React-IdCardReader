import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'
import lankaNIC from "lanka-nic";
import Row from 'react-bootstrap/Row';
import Img from "../Img/img.jsx";



export default function Inter() {
    const [data, setData] = useState('');
    const [updated, setUpdated] = useState(data);
    const [gendar, setGendar] = useState('');
    const [db, setDb] = useState('');

   // const lankaNIC = require("lanka-nic");
   const { dateOfBirth, gender } = lankaNIC.getInfoFromNIC(data);



   const handleChange = (val) => {
    setData(val.target.value);
   
  };
    console.log(data);
  
 const handleClick=()=>{

     setGendar(gender.toUpperCase());
     setDb(dateOfBirth.toLocaleDateString().split('T')[0]);
     console.log( "new print : = "+updated);
     console.log( gendar);
     console.log( db);

    
  }



 const onclick = () => {
     setData('')
     setGendar('')
     setDb('')


 }


    return(
        <div>
        <Card className="text-center" >
            <Card.Header style={{fontSize:35,fontWeight:'bold',backgroundColor:'black',color:'white',borderBlockColor:'aliceblue',}}>NIC Card Reder</Card.Header>
            <Card.Body >
                <Card.Title style={{display:'flex',justifyContent:'center' ,} }>
                <Card style={{ width: '20rem' ,borderRadius: '50px',borderRightColor:"red",borderLeftColor:"green",borderTopColor:"greenyellow",borderBottomColor:"blue",}}>
                <Card.Body >
                    <Card.Text  style={{}}>
                        <Img/>

                        <Form.Label htmlFor="inputPassword5" style={{color:'red'}}>Input Nic Number:</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={handleChange}
                                placeholder={'input nic number'}
                                value={data}
                            />
                            <Form.Text id="passwordHelpBlock" muted>
                               <br/>
                               <h6>Gender: {gendar}</h6>
                               <h6>Date of Birth: {db}</h6>
                            </Form.Text>
                    </Card.Text>
                    <Button onClick={handleClick} variant="primary">Submit</Button>
                    <br/><br/>
                    <Button onClick={onclick} variant="primary">Clear</Button>
                </Card.Body>
                </Card>
                </Card.Title>
                <Card.Text>
        
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
        
        </div>
    )
    
}