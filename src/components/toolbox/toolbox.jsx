import React, {PropTypes} from 'react';

import IconZoomPlus from 'react-icons/lib/ti/zoom-in';
import IconZoomMinus from 'react-icons/lib/ti/zoom-out';
import IconComment from 'react-icons/lib/fa/comment';

import {MODE_ZOOMING_IN, MODE_ZOOMING_OUT, MODE_ADDING_COMMENT} from '../../constants/modes';

import ToolboxButton from './toolbox-button';


const STYLE = {
    
    position: 'absolute',
    bottom: '10px',
    right: '0px',
    padding: "10px 10px 0px 10px"

};

export default function Toolbox({enterCommentMode}) {

    return (
        <div style={{...STYLE}}>



            <ToolboxButton /*active={[MODE_ZOOMING_IN].includes(mode)}*/ tooltip={"Zoom in"}>
                <IconZoomPlus />
            </ToolboxButton>

            <ToolboxButton /*active={}*/ tooltip={"Zoom Out"}>
                <IconZoomMinus />
            </ToolboxButton>

            <ToolboxButton /*active={[MODE_ADDING_COMMENT].includes(mode)}*/ tooltip={"Aggiungi Commento"}
                           onClick={enterCommentMode}>
                <IconComment />
            </ToolboxButton>



        </div>
    )
}

Toolbox.propTypes = {
    enterCommentMode: PropTypes.func.isRequired
};

/*
Toolbar.contextTypes = {
    azioni: PropTypes.object.isRequired
 };
 
 */