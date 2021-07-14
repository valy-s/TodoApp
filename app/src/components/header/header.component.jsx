import DesktopImg from "../../assets/bg-desktop-dark.jpg";
import MobileImg from "../../assets/bg-mobile-dark.jpg";

import "./header.styles.scss"

const Header = () => (
    <div  className="header__container">
      <picture>
        <source media="(min-width:650px)" srcSet={DesktopImg} />
        <source media="(max-width:400px)" srcSet={MobileImg} />
        <img src={DesktopImg} alt="background" style={{width:"100%", height:"200px"}} />
    </picture> 
    <h1 className="header__title">TODO App</h1>
    </div>
)

export default Header;