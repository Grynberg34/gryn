import "../scss/menu.scss";
import { Link, useLocation } from "react-router-dom";

function Menu() {

    var location = useLocation();
    var path = location.pathname;

    return (
        <div className="menu">
            <Link to="/"><img className="menu__logo slit-in-diagonal-1" src="/images/logo/logo (verde medio).png" alt="" /></Link>
            <div className="menu__list">
                <Link className={path === "/"? "menu__list__item menu__active fade-in-tl": "menu__list__item fade-in-tl" } to="/">gryn</Link>
                <Link className={path === "/stack"? "menu__list__item menu__active fade-in-tl": "menu__list__item fade-in-tl" } to="/stack">stack</Link>
                <Link className={path === "/sobre"? "menu__list__item menu__active fade-in-tl": "menu__list__item fade-in-tl" } to="/sobre">sobre</Link>
            </div>
        </div>
    )
  
}


export default Menu