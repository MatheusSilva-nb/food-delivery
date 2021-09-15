import React from 'react';
import { Appbar, Menu } from 'react-native-paper';
import { headerStyle } from './header.style';

export const HeaderComponent = (props: HeaderComponentParams) => {

    return (
        <Appbar style={headerStyle.bar}>
            {
                props.hasBackButton ?
                <Appbar.BackAction />
                :
                <Menu
                    visible={false}
                    onDismiss={() => {}}
                    anchor={
                        <Appbar.Action
                            icon="menu"
                            color={headerStyle.menu.color}/>
                    }>

                </Menu>
            }
            <Appbar.Content title={props.title} />
        </Appbar>
    )

}

interface HeaderComponentParams {
    hasBackButton? : boolean;
    title: string;
}