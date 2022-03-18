import React from "react";
import {Card} from "react-bootstrap"; 

class TentangSaya extends React.Component{
    render(){
        return(
            <div>
                <br/>
                <Card border="dark" style={{ width: '50rem'}} align="center">
                <Card.Header>TENTANG SAYA</Card.Header>
                <Card.Body>
                <Card.Text>
                    Selamat Datang di Tentang Saya
                </Card.Text>
                </Card.Body>
                </Card>
            </div>
        );
    }
}

export default TentangSaya;