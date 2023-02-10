import React from 'react'
import Age from './Age';


class Welcome extends React.Component{

    static defaultProps = {
        name: 'Dan',
    };


    render() {
        return (
            <div>
                <p>Welcome {this.props.name}</p>
                {this.props.age ? <Age age={this.props.age}/> : <p>specify your age</p> }
                
           </div>
    )
}
}
export default Welcome