import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon,Tabs,message,Form,Input,Button,Checkbox,Modal } from 'antd';

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;

class PcHeader extends React.Component{
    
    constructor(){
        super();
        this.state = {
            current: "top",
            modalVisible:false,
            action: 'login',
            hasLogined:false,
            userNickName:'',
            userId: 0,
        };
    };

    setModalVisible(value){
        this.setState({modalVisible: value});
    };

    handleClick(e){
        if(e.key == "register"){
            this.setState({current: 'register'});
            this.setModalVisible(true);
        }
        else{
            {
                this.setState({current:e.key})
            }
        }
    };

    handleCancel(e){
        this.setState({
            modalVisible:false,
        });
    };

    handleSubmit(e){
        //页面开始向API提交数据
        e.preventDefault();
        var myFetchOption = {
            method: 'GET'
        };
        var formData = this.props.form.getFieldsValue();
        console.log(formData);
        //类似ajax的异步请求工具fetch
        // fetch('').then(response=>response.json()).then(json=>{
        //     this.setState({userNickName:json.userNickName,userId:json.userId});

        // });
        // message.success("请求成功！") //成功fetch之后可以
        // this.setModalVisible(false);
    };

    render(){

        let{ getFieldProps } = this.props.form;
        const userShow = this.state.hasLogined 
        ? 
        <Menu.Item key="layout" class="register">
        <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
        &nbsp;&nbsp
        <Link target="_blank">
            <Button type="dashed" htmlType="button">个人中心</Button>
        </Link>
        &nbsp;&nbsp
        <Button type="ghost" htmlType="button">退出</Button>
        </Menu.Item>
        :
        <Menu.Item key="register" class="register">
            <Icon type="appstore"/>注册/登录
        </Menu.Item>;

        return(
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" class="logo">
                            <img src="./src/images/logo.png" alt="logo"/>
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                    <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
                        <Menu.Item key="top">
                        <Icon type="appstore" />头条
                        </Menu.Item>
                        <Menu.Item key="shehui">
                        <Icon type="appstore" />社会
                        </Menu.Item>
                        <Menu.Item key="国内">
                        <Icon type="appstore" />国内
                        </Menu.Item>
                        <Menu.Item key="guoji">
                        <Icon type="appstore" />国际
                        </Menu.Item>
                        <Menu.Item key="yule">
                        <Icon type="appstore" />娱乐
                        </Menu.Item>
                        <Menu.Item key="tiyu">
                        <Icon type="appstore" />体育
                        </Menu.Item>
                        <Menu.Item key="keji">
                        <Icon type="appstore" />科技
                        </Menu.Item>
                        <Menu.Item key="shishang">
                        <Icon type="appstore" />时尚
                        </Menu.Item>
                        {userShow}
                    </Menu>
                <Modal title="用户中心" wrapClassName="Vertical-center-modal" visible={this.state.modalVisible}
                onCancle={()=>this.setModalVisible(false)} onCancel={this.handleCancel.bind(this)}  onOk={()=>this.setModalVisible(false)} okText="关闭" cancelText="取消">
                   <Tabs type="card">
                        <TabPane tab="注册" key="2">
                            <Form horizontal="true" onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem lable="账户">
                                    <Input placeholder="请输入你的账号" {...getFieldProps('r_username')}/>
                                </FormItem>
                                <FormItem lable="密码">
                                    <Input type="password" placeholder="请输入你的密码" {...getFieldProps('r_password')}/>
                                </FormItem>
                                <FormItem lable="确认密码">
                                    <Input type="password"  placeholder="请再次输入你的账号" {...getFieldProps('r_comfirmpassword')}/>
                                </FormItem>
                                <Button type="primary" htmlType="submit">注册</Button>
                            </Form>
                        </TabPane>
                   </Tabs> 
                </Modal>

                    </Col>
                    <Col span={2}> </Col>
                </Row>
            </header>
        );
    };

}

export default PcHeader = Form.create({})(PcHeader);