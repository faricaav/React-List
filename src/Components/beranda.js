import React from 'react';
import {Card} from 'react-bootstrap'; 

class Beranda extends React.Component{
    render(){
        return(
            <div>
                <br/>
                <Card border="dark" style={{ width: '50rem'}} align="center">
                <Card.Header>BERANDA</Card.Header>
                <Card.Body>
                <Card.Text>
                    Selamat Datang di Beranda
                </Card.Text>
                </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Beranda; 