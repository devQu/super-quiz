import React, { Component } from 'react';
import classes from './Layout.module.css';
import Menu from '../Navigation/Menu/Menu';
import Drawer from '../Navigation/Drawer/Drawer';

class Layout extends Component {

    state = {
        menu: false
    }

    onMenuToggle = () => {
        this.setState({ menu: !this.state.menu })
    }
    
    onObscureHandler = () => {
        this.setState({ menu: false })
    }

    render() {
        return (
            <div className={classes.Layout}>
                <Drawer onObscureHandler={this.onObscureHandler} isOpen={this.state.menu} />
                <Menu onToggle={this.onMenuToggle} isOpen={this.state.menu} />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;