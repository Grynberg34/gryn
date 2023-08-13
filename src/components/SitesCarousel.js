import "../scss/carousel.scss";
import Carousel from 'react-bootstrap/Carousel';
import { connect } from 'react-redux';
import { store } from '../store';
import { GetSites } from '../actions';

function SitesCarousel(props) {

    var sites = props.sites;

    if (sites === null) {
      store.dispatch(GetSites())
  
      return (
        <div></div>
      )
  
    } else {        
        return (
          <div className="carousel">
            <Carousel controls={true} indicators={false}>
        
                { sites.map( (site) => 
                    <Carousel.Item key={site.id} className="carousel__item">
                        {site.link !== ""? <a href={site.link} target="_blank" rel="noreferrer" className="carousel__item__link">clique para acessar</a>: null }

                        <a href={site.link} target="_blank" rel="noreferrer"><img className="carousel__item__img" src={site.imagem} alt="" /></a>
                        <h1 className="carousel__item__title">{site.nome}</h1>
                        <div className="carousel__caption">
                            <h2 className="carousel__caption__item"><strong>desenvolvimento web:</strong>  {site.ficha.Dev} | <strong>web design:</strong> {site.ficha.Design} | <strong>identidade visual:</strong> {site.ficha.Identidade}</h2>
                        </div>        

                    </Carousel.Item>
                )}
        
            </Carousel>
          </div>
        )
    }

  
}

function mapStateToProps(state) {
    return {
        sites: state.sites
    }
}
  
export default connect(
    mapStateToProps
)(SitesCarousel);