import React from "react";
import {Card} from "react-bootstrap"; 

class Kontak extends React.Component{
    render(){
        return(
            <div>
                <br/>
                <Card border="dark" style={{ width: '50rem'}} align="center">
                <Card.Header>KONTAK</Card.Header>
                <Card.Body>
                <Card.Text>
                    Selamat Datang di Kontak
                </Card.Text>
                </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Kontak; 