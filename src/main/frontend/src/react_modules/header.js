import React from "react";
import {ReactComponent as Logo} from '../logo.svg';


class Header extends React.Component{

    render() {
        const style = {
            color: "white",
            backgroundColor: "rgba(0,255,255, 0.25)",
            padding: "10px",
            fontFamily: "Arial",
            height: "40px",
        };
        return(
            <div style={style}>
                <Logo onClick ={() => window.location.replace('/')}  ></Logo>
            </div>
        )
    }

}

export default Header;