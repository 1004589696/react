import React from 'react';
import {Link} from 'react-router-dom';
import css from './home.css'

class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className={css.home}>
               主页
                <Link to="/login">登陆页</Link>
            </div>
        )
    }
}

export default Home
