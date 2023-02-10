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
                {this.props.age >= 18 ?
                    <Age age={this.props.age} />
                    : <p>too young</p>}
                
            </div>
    )
}
}
export default Welcome