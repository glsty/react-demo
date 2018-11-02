import React from 'react';
import { inject,observer } from 'mobx-react';
import {Link} from 'react-router-dom'

@inject( 'HomeStore' )
@observer

class Home extends React.Component {

    actions = () => {
        this.props.HomeStore.changeVal();
    }
    render() {
        return (
            <div>
                <p onClick={this.actions}>点一下看效果</p>
                <p>{this.props.HomeStore.title}</p>
                <Link to="/me">跳转</Link>
            </div>
        );
    }
}

export default Home;
