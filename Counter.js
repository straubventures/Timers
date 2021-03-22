import React from 'react'


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {seconds: 0};
    }

    clear(){
        this.setState(state => ({
            seconds: 0
        }));
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1
            })
        )
    }

    componentDidMount(){
        this.interval = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    
        render() {
            if (this.state.seconds >= 60) {
                this.setState({seconds: 0})
            }
            return(
                <div>Seconds: {this.state.seconds}
                <button onClick={() => this.clear()}>Clear</button>
                    </div>
                
            );
        }

}

export default Counter;
