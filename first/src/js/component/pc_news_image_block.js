import React from 'react';
import {Card} from 'antd';
import {Router,Route,Link,Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import fetchJsonp from 'fetch-jsonp';
const customHistory = createBrowserHistory();


export default class PcNewImageBlock extends React.Component{

    constructor(){
        super();
        this.state = {
            news:''
        };
    };

    componentWillMount(){
        var myFetchOptions = {
            method:'GET',
            credentials: 'include',
            headers:{Accept: 'application/json',},
            jsonCallbackFunction:'showLocation'
        };
        //console.log('http://v.juhe.cn/toutiao/index?type='+this.props.type+'&key=0dadfa31b9f8ae617a0443fe532a112e');
        // fetch('http://v.juhe.cn/toutiao/index?type='+this.props.type+'&key=0dadfa31b9f8ae617a0443fe532a112e',
        // myFetchOptions).then(response=>response.json()).then(json=>this.setState({news:json}));

        // fetchJsonp('http://v.juhe.cn/toutiao/index?type='+this.props.type+'&key=0dadfa31b9f8ae617a0443fe532a112e',
        // myFetchOptions).then(function(response){console.log(response.status)});
        // console.log("this.state.news"+this.state.news);
    };

    render(){

        const styleImage = {
            display:"block",
            width:this.props.imageWdith,
            height:"90px"
        };
        const styeH3 = {

            width: this.props.imageWdith,
            whiteSpace:"nowrap",
            overflow:"hidden",
            textOverflow:"ellipsis"
        };
        const {news} = this.state;
        const newList = news.length
        ?
        news.map((newsItem,Index)=>(
            <div key={index} class="imageblock">
                <Link to={'details/${newsItem.uniquekey}'} target="_blank"> 
                    <div class="custom-image">
                        <img alt="新闻" style="styleImage" src={newsItem.thumbnail_pic_s} />          
                    </div>
                    <div class="custom-card">
                        <h3 style={styeH3}>{newsItem.title}</h3>
                        <p>{newsItem.author_name}</p>
                    </div>
                </Link>
            </div>
        ))
        :
        "没有获取到任何信息...";

        return(
            <div class="topNewsList">
                <Card title={this.props.cartTitle} bordered={true} style={{width:this.props.width,"marginTop":"250px","float":"left"}}>
                    <ul>
                    {newList}{this.props.cartTitle}    
                    </ul>
                </Card>
            </div>
        );
    };
}