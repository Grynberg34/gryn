import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../scss/stack.scss";
import Menu from './Menu';

function Stack() {

    return (
        <div id='stack'>
            <Container fluid>
                <Row>
                    <Col md={2}>
                        <Menu />
                    </Col>
                    <Col md={3}></Col>
                    <Col md={4}>
                        <div className="stack">
                            
                            <p className='stack__text'>Abaixo, você encontra todas as tecnologias com as quais trabalhamos nos nossos projetos, no Back-End e no Front-End. A escolha de quais tecnologias serão utilizadas se dá a partir da avaliação das necessidades de cada cliente.</p>

                            <p className='stack__text'>O resultado disso é um produto moldado de acordo com as particularidades de cada marca e projeto, tanto do ponto de vista estrutural como visual. Com isso, fugimos de resultados previsíveis ou limitados tecnicamente, como acontece com plataformas como Wordpress e Wix. </p>

                            <Container fluid>
                                <Row>
                                    <Col md={6}>
                                        <h1 className='stack__title'>Back-End</h1>
                                        <Container fluid>
                                            <Row>
                                                <Col md={6}>
                                                    <img className='stack__img' src="/images/stack/javascript.jpeg" alt="" />
                                                    <h2 className='stack__name'>Javascript</h2>
                                                </Col>
                                                <Col md={6}>
                                                    <img className='stack__img' src="/images/stack/node.png" alt="" />
                                                    <h2 className='stack__name'>Node.js</h2>
                                                </Col>
                                                <Col md={6}>
                                                    <img className='stack__img' src="/images/stack/express.png" alt="" />
                                                    <h2 className='stack__name'>Express</h2>
                                                </Col>
                                                <Col md={6}>
                                                    <img className='stack__img' src="/images/stack/mysql.png" alt="" />
                                                    <h2 className='stack__name'>MySQL</h2>
                                                </Col>
                                                <Col md={6}>
                                                    <img className='stack__img' src="/images/stack/sequelize.png" alt="" />
                                                    <h2 className='stack__name'>Sequelize</h2>
                                                </Col>
                                                <Col md={6}>
                                                    <img className='stack__img' src="/images/stack/analytics.jpg" alt="" />
                                                    <h2 className='stack__name'>Analytics</h2>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                    <Col md={6}>
                                        <h1 className='stack__title'>Front-End</h1>
                                        <Container fluid>
                                            <Row>
                                            <Col md={6}>
                                                    <img className='stack__img' src="/images/stack/html.png" alt="" />
                                                    <h2 className='stack__name'>HTML5</h2>
                                                </Col>
                                                <Col md={6}>
                                                    <img className='stack__img' src="/images/stack/css.png" alt="" />
                                                    <h2 className='stack__name'>CSS</h2>
                                                </Col>
                                                <Col md={6}>
                                                    <img className='stack__img' src="/images/stack/react.png" alt="" />
                                                    <h2 className='stack__name'>React</h2>
                                                </Col>
                                                <Col md={6}>
                                                    <img className='stack__img' src="/images/stack/vue.png" alt="" />
                                                    <h2 className='stack__name'>Vue</h2>
                                                </Col>
                                                <Col md={6}>
                                                    <img className='stack__img' src="/images/stack/redux.png" alt="" />
                                                    <h2 className='stack__name'>Redux</h2>
                                                </Col>
                                                <Col md={6}>
                                                    <img className='stack__img' src="/images/stack/bootstrap.png" alt="" />
                                                    <h2 className='stack__name'>Bootstrap</h2>
                                                </Col>
                                                <Col md={6}>
                                                    <img className='stack__img' src="/images/stack/sass.png" alt="" />
                                                    <h2 className='stack__name'>SASS</h2>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                </Row>
                            </Container>

                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
  
}


export default Stack