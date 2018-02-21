import React from 'react';
import {Row,Col} from 'antd';
import PcHeader from './pc_header';
import PcFooter from './pc_footer';

export default class PcNewDetails extends React.Component{
    
    constructor(){
        super();
        this.state={
            newItem:' '
        };
    };
    
    componentDidMount(){
        var myFetchOption = {
            method: 'GET'
        };

        // fetchJsonp('http://v.juhe.cn/toutiao/index?type='+this.props.type+'&key=0dadfa31b9f8ae617a0443fe532a112e',
        // myFetchOptions).then(function(response){console.log(response.status)});
        //doucument.title = this.state.newsItem.title+"-React News |React 驱动的新闻平台" 
        // console.log("this.state.news"+this.state.news);
    };

    createMarkUP(){
        return {__html:this.state.newsItem.pagecontent}
    };

    render(){
        return(
            
            <div>
            <PcHeader/>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} className="container">
                        <div class="articleContainer" dangerouslySetInnerHTML={this.createMarkUP()}></div>
                    </Col>
                    <Col span={6}> </Col>
                    <Col span={2}> </Col>
                </Row>
            <PcFooter/>
            </div>
        );
    };
}

