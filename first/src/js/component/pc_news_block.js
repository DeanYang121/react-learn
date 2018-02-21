import React from 'react';
import {Card} from 'antd';
import {Router,Route,Link,Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import fetchJsonp from 'fetch-jsonp';
const customHistory = createBrowserHistory();


export default class PcNewBlock extends React.Component{

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
            <li key={index}>
                <Link to={`details/${newsItem.uniquekey}`}  target="_blank">
                {newsItem.title}
                </Link> 
            </li>
        ))
        :
        "没有获取到任何信息...";

        return(
            <div class="topNewsList">
                <Card>
                    <ul>
                    {newList}{this.props.title}
                    </ul>
                </Card>
            </div>
        );
    };
}