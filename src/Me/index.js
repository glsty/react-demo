import React from 'react'
import { inject, observer } from 'mobx-react'

@inject('MeStore')

@observer

class Me extends React.Component {

    render () {
        return (
            <div>
                <p>这是我的页面</p>
            </div>
        )
    }
}
export default Me;