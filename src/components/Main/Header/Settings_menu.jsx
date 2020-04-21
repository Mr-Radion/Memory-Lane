import React, { Component } from 'react';
import { ReactComponent as IconSettingsMenu } from './svg/settings_menu.svg';
import styled from 'styled-components';

export default class SettingsMenu extends Component {
    render() {
        return (
                <SettingsMenuWrapper>
                    <button className='button__setting'>
                        <IconSettingsMenu />
                    </button>
                </SettingsMenuWrapper>
        )
    }
}

const SettingsMenuWrapper = styled.div`

    .button__setting {
        border: none;
        outline: none;
        cursor: pointer;
        background-color: #fff;
        background: 50% no-repeat;
        opacity: 0.5;
        width: 48x;
        padding: 0;
    }

    .button__setting:hover {
        opacity: 1;        
    }

`;