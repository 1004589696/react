import React from 'react';
import {Link} from 'react-router-dom';
import css from './login.css'

class Login extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className={css.login}>
                登陆页
                <Link to="/">首页</Link>
            </div>
        )
    }
}

export default Login
