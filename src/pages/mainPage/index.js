import React, {Component} from "react";
import './index.scss'

import Header from "../../components/header";
import MainBody from "../../components/main-body";

class MainPage extends Component {
    render() {
        return(
            <div className='main-page'>
                <Header />
                <MainBody />
            </div>
        )
    }
}
export default MainPage;
