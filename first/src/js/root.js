import React from 'react';
import ReactDOM from 'react-dom';
// import {Router,Route,hashHistory} from 'react-router';
import {Router,Route,Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';
import PcIndex from "./component/pc_index";
import MobileIndex from './component/mobile_index';
import PcNewDetails from './component/pc_news_details';

const customHistory = createBrowserHistory();

// {/* <Router history={customHistory}>
// <Switch>
//     <Route path="/" component={PcIndex}></Route>
//     <Route path="/details/:uniquekey" component={PcNewDetails}></Route>
// </Switch>
// </Router> */}

export default class Root extends React.Component{
    
    render(){
        return(
            <div>
                <MediaQuery query='(min-device-width: 1224px)'>

                 <PcIndex/>
                </MediaQuery>
                <MediaQuery query='(max-device-width: 1224px)'>
                 <MobileIndex/>
                </MediaQuery>
           </div>
        );
    };

}

ReactDOM.render(<Root/>,document.getElementById('mainContainer'));
