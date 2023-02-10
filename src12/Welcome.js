import React from 'react'


class Welcome extends React.Component{

    static defaultProps = {
        name: 'Dan',
    };


    render() {
        return (
            <div>
                <p>Welcome {this.props.name}</p>
                <p>Your age is {this.props.age }</p>
           </div>
    )
}
}
export default Welcome