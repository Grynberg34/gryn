import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../scss/app.scss";
import SitesCarousel from './SitesCarousel';
import Menu from './Menu';


function App() {

    return (
        <div id='home'>
            <Container fluid>
                <Row>
                    <Col md={2}>
                        <Menu />
                    </Col>
                    <Col md={1}></Col>
                    <Col md={8}>
                        <div className="home">
                            <SitesCarousel />
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
  
}


export default App