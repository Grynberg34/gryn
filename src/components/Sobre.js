import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../scss/sobre.scss";
import Menu from './Menu';

function Sobre() {

    return (
        <div id='sobre'>
            <Container fluid>
                <Row>
                    <Col md={2}>
                        <Menu />
                    </Col>
                    <Col md={2}></Col>
                    <Col md={4}>
                        <div className="sobre">
                            
                            <div className="sobre__header">
                                <h1 className="sobre__header__title">Sobre</h1>
                                <p className='sobre__header__text'>
                                    A gryn (CNPJ 51.795.860/0001-08) é uma empresa com sede em Belo Horizonte que atua desde 2020 na área de Desenvolvimento Web, atendendo clientes de diversas regiões do país.
                                </p>
                                <p className='sobre__header__text'>
                                    Trabalhamos com as tecnologias mais estabelecidas no mercado de Desenvolvimento Web, buscando trazer para nossos clientes o resultado esperado de forma eficiente e confiável.
                                </p>
                            </div>


                            <div className="sobre__content">
                                <h1 className="sobre__content__title">Oferecemos os seguintes serviços:</h1>
                                <h2 className='sobre__content__text'>- Desenvolvimento de websites responsivos</h2>
                                <h2 className='sobre__content__text'>- Desenvolvimento de APIs</h2>
                                <h2 className='sobre__content__text'>- Integração com Google Analytics</h2>
                            </div>

                            <div className="sobre__content">
                                <h1 className="sobre__content__title">Emitimos nota fiscal para os serviços oferecidos. Nossa empresa tem os seguintes CNAEs cadastrados:</h1>
                                <h2 className='sobre__content__text'>- 6201-5/01 - Desenvolvimento de softwares sob encomenda</h2>
                                <h2 className='sobre__content__text'>- 6202-3/00 - Desenvolvimento de softwares customizáveis</h2>
                                <h2 className='sobre__content__text'>- 6203-1/00 - Desenvolvimento de softwares não customizáveis</h2>
                                <h2 className='sobre__content__text'>- 6201-5/01 - Desenvolvimento de programas de computador sob encomenda</h2>
                                <h2 className='sobre__content__text'>- 6201-5/02 - Web design</h2>
                            </div>


                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
  
}


export default Sobre