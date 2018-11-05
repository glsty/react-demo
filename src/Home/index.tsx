import React from 'react';
import { inject,observer } from 'mobx-react';
import {Link} from 'react-router-dom';
import { Input, Row, Col } from 'antd';
import {HomeStore} from './store'
import'./style.css'

interface Props {}

interface InjectProps extends Props {
    HomeStore: HomeStore
  }

@inject( 'HomeStore' )

@observer

class Home extends React.Component<Props, any> {

    get Inject () {
        return this.props as InjectProps
    }

  private actions = () => {
      const { HomeStore } = this.Inject;
      HomeStore.changeVal()
       // this.props.HomeStore.changeVal();
    }
    state = {
        val: ''
    }
    changeCont = (e) => {
        this.setState({ 
            val: e.target.value
        })
    }
    render() {
        const {HomeStore} = this.Inject
        return (
            <div className="container">
                <Row>
                    <Col span={8}>
                        <Input onChange={this.changeCont} size="small" placeholder="请输入响应内容" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p onClick={this.actions}>点一下看效果</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>{HomeStore.title}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>{this.state.val}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/me">跳转</Link>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Home;

