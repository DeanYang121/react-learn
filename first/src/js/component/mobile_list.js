import React from 'react';
import {Row,Col} from 'antd';
import {Router,Route,Link,Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import fetchJsonp from 'fetch-jsonp';
const customHistory = createBrowserHistory();


export default class MobileList extends React.Component{

    constructor(){
        super();
        this.state = {
            news:''
        };
    };

    componentWillMount(){
        // var myFetchOptions = {
        //     method:'GET',
        //     credentials: 'include',
        //     headers:{Accept: 'application/json',},
        //     jsonCallbackFunction:'showLocation'
        // };
        //console.log('http://v.juhe.cn/toutiao/index?type='+this.props.type+'&key=0dadfa31b9f8ae617a0443fe532a112e');
        // fetch('http://v.juhe.cn/toutiao/index?type='+this.props.type+'&key=0dadfa31b9f8ae617a0443fe532a112e',
        // myFetchOptions).then(response=>response.json()).then(json=>this.setState({news:json}));

        // fetchJsonp('http://v.juhe.cn/toutiao/index?type='+this.props.type+'&key=0dadfa31b9f8ae617a0443fe532a112e',
        // myFetchOptions).then(function(response){console.log(response.status)});
        // console.log("this.state.news"+this.state.news);
    };

    render(){

        const {news} = this.state;
        const newList = news.length
        ?
        news.map((newsItem,Index)=>(
            <section key="{index}" className="m_article list-item specil_section clearfix">
                <Link to={'details/${newsItem.uniquekey}'}>
                    <div className="m_article_img">
                        <img src={newsItem.thumbnail_pic_s} alt={newsItem.title}/>
                    </div>
                    <div className="m_article_info">
                        <div className="m_article_title">
                            <span>{newsItem.title}</span>
                        </div>
                        <div className="m_article_desc clearfix">
                            <div className="m_article_desc_l">
                                <span className="m_article_channel">{newsItem.realtype}</span>
                                <span className="m_article_time">{newsItem.date}</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </section>
        ))
        :
        "没有获取到任何信息...";

        return(
            <div>
                <Row>
                    <Col span={24}>
                    {newList}
                    </Col>
                </Row>
            </div>
        );
    };
}