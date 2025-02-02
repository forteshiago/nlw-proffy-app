import React from "react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import backIcon from "../../assets/images/icons/back.svg";

import "./styles.css";

interface PageHeaderProps {
    title: string; // se for ?: significa que não é obrigatorio, é preciso deixar um default
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="voltar" />
                </Link>
                <img src={logoImg} alt="logo proffy" />
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>
                {props.children}
            </div>
        </header>
    );
}

export default PageHeader;