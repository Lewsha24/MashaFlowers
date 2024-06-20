import {NavLink} from "react-router-dom";
import {Nav} from "react-bootstrap";


const Header = () => {
    return (
        <header>
            <ul className="navbar mtb-2">
                <NavLink to="catalog"><li className="header-category">КАТАЛОГ</li></NavLink>
                 <NavLink to="about"><li className="header-category">О НАС</li></NavLink>
                <NavLink to=""
                         style={{
                             textDecoration: 'none',
                             color: 'black'
                         }}
                ><li className="header-logo">Art Flora</li>
                </NavLink>
                <NavLink to="delivery"><li className="header-category">ДОСТАВКА</li></NavLink>
                <NavLink to="feedback"><li className="header-category">ОТЗЫВЫ</li></NavLink>
            </ul>
                <ul className="navbar gread c-white mb-3">
                    <li className="sale">SALE 10%</li>
                    <li className="sale">SALE 10%</li>
                    <li className="sale">SALE 10%</li>
                    <li className="sale">SALE 10%</li>
                    <li className="sale">SALE 10%</li>
                </ul>
        </header>
    )
}

export default Header