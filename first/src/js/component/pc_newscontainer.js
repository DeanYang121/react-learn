import React from 'react';
import { Row, Col,Tabs,Carousel } from 'antd';
import PcNewsBlock from "./pc_news_block";
import PcNewImageBlock from "./pc_news_image_block";

const TabPane = Tabs.TabPane;

export default class PcNewContainer extends React.Component{

    render(){

        const settings = {
            dots:true,
            infinite:true,
            speed:500,
            slidersToShow:1,
            autoplay:true
        };
        
        return(
            <div>
                <Row>
                    <Col span={2}> </Col>
                    <Col span={20} class="container"> 
                        <div class="leftContainer">
                            <div class="carousel">
                                <Carousel {...settings}>
                                    <div><img src="./src/images/carouse_1.jpg" alt=""/></div>
                                    <div><img src="./src/images/carouse_2.jpg" alt=""/></div>
                                    <div><img src="./src/images/carouse_3.jpg" alt=""/></div>
                                    <div><img src="./src/images/carouse_4.png" alt=""/></div>
                                </Carousel>
                            </div>
                            <PcNewImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWdith="112px" />
                        </div>
                        <Tabs class="tabs_news" >
                            <TabPane tab="头条新闻" key="1">
                                <PcNewsBlock title="头条新闻" type="top" width="100%" bordered="false" />
                            </TabPane>
                            <TabPane tab="国际" key="2">
                                <PcNewsBlock title="国际新闻" type="guoji" width="100%" bordered="false" />
                            </TabPane>
                        </Tabs>
                        <div>
                        <PcNewImageBlock count={8} type="guonei" width="100%" cartTitle="国内新闻" imageWdith="132px" />
                        <PcNewImageBlock count={16} type="yule" width="100%" cartTitle="娱乐新闻" imageWdith="132px" />
                        </div>
                    </Col>
                    <Col span={2}> </Col>
                </Row>
            </div>
        );
    };

}