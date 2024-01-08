import {Col} from "react-bootstrap";
import Image from 'react-bootstrap/Image';

export  default  function Img() {
    return(
        <div>
            <Col xs={2} md={12}>
                <Image src="src/assets/pic.jpg" roundedCircle
                       style={{width:'100px'}}
                />
            </Col>
        </div>
    )
}