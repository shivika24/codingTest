import React from "react";
import './coding.css';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
//app header
import styled from 'styled-components'
const Img= styled.img`
height:200px;
`;
function Appheader() {
    return (
        <React.Fragment>
            <header className="App-header">
            <Link to="/"><Img src="https://marketplace.magento.com/media/customer/MAG005503595/mm_avatar.png" alt="logo image"/></Link>
            </header>
        </React.Fragment>
    );
}
export default Appheader;