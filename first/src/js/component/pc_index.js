import React from 'react';
import PcHeader from './pc_header';
import PcFooter from './pc_footer';
import PcNewContainer from './pc_newscontainer';


export default class PcIndex extends React.Component{
    
    
    render(){
        return(
            <div>
                <PcHeader/>
                <PcNewContainer></PcNewContainer>
                <PcFooter/>
            </div>
        );
    };

}