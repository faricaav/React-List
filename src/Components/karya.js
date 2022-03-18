import React from "react";
import {Card} from "react-bootstrap";

class Karya extends React.Component{
    render(){
        return(
            <div>
                <br/>
                <Card border="dark" style={{ width: '50rem'}} align="center">
                <Card.Header>KARYA</Card.Header>
                <Card.Body>
                <Card.Text>
                    Selamat Datang di Karya
                </Card.Text>
                </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Karya;