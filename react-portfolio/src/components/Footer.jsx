import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


 function Footer() {
    return (<Footer>
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    <Image src="C:\Users\jacja\bootcamp\React-Portfolio\react-portfolio\src\assets\lap.jpg" rounded />
                </Col>
                <Col xs={6} md={4}>
                    <Image src="" roundedCircle />
                </Col>
                <Col xs={6} md={4}>
                    <Image src="" thumbnail />
                </Col>
            </Row>
        </Container>

    </Footer>
    );
}

export default Footer;