import React from 'react';
import { postAction } from '@/axios';
import { withRouter } from 'react-router-dom';
import { message } from 'antd';
import styles from './index.module.less';

class LoginPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:""
        }
    }

    loginIn = () => {
        const { username, password } = this.state;
        if(username === ""){
            message.warning("用户名不能为空");
            return false;
        }
        if(password === ""){
            message.warning("密码不能为空");
            return false;
        }
        postAction('/bigdata/auth/login',{username,password,rememberMe:"0"},1,1).then(res => {
            if(res.success){
                window.localStorage.setItem("loginStatus","true");
                // window.localStorage.setItem("leftMenuList",JSON.stringify(res.obj.menus))//将左侧菜单数据写入localstrage
                window.location.reload();
            }else{
                message.error(res.obj)
            }
        })
    }
	
    render(){
        return (
            <div className={styles.bgContainer}>
                <div className={styles.loginContiner}>
                    <img alt="中南财经政法大学logo" src={require('./logo.png')}/>
                    <p className={styles.title}>大数据应用与分析平台</p>
                    <div className={styles.form}>
                        <p>用户名</p>
                        <input autoComplete="new-password" onChange={(e)=>{this.setState({username:e.target.value})}}/>
                        <p>密码</p>
                        <input type="password" autoComplete="new-password" onChange={(e)=>{this.setState({password:e.target.value})}}/>
                    </div>
                    <div style={{clear:"both"}}></div>
                    <div onClick={this.loginIn} className={styles.submit}>登录</div>
                    <div style={{clear:"both"}}></div>
                    <p className={styles.copyRight}>版权所有 Copyright &copy; 2019 中南财经政法大学</p>
                </div>
            </div>
            
        )
    }
		
}

export default withRouter(LoginPage)
