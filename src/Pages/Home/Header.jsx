import React from "react";
import { Link } from "react-router-dom";
class HomeHeader extends React.Component {
    render() {
        const isLoged = localStorage.getItem('token');
        return (
            <header>
                <div className="header">
                    <div className="main__heading">Sumex Investment Bank</div>
                    <div className="sub__heading color__wheat">Experience the future of banking</div>
                    <div className="btn">
                        <Link to="/signup"> <button className="login-button"><span>Sign up</span></button></Link>
                        <Link to={isLoged ? "/user" : "/signin"}> <button className="join-button"><span>Sign In</span></button></Link>
                    </div>
                </div>
                <div className="liq"></div>
            </header>
        )
    }
}

export default HomeHeader;