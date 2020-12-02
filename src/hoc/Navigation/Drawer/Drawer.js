import React, {Component} from 'react';
import classes from './Drawer.module.css';
import Obscur from '../../../components/UI/Obscur/Obscur';

class Drawer extends Component {

    point = [1,2,3]

    render() {

        let cls = [classes.Drawer]
        if (!this.props.isOpen) {
            cls.push(classes.close)
        }

        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.point.map((item, index) => {
                            return (
                            <li key={index}>
                                <a>{item}</a>
                            </li>
                            )
                        })}
                    </ul>
                </nav>
                {this.props.isOpen ? <Obscur onObscure={this.props.onObscureHandler} /> : null }
            </React.Fragment>
        )
    }
}

export default Drawer;