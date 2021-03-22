import React from 'react'


class MCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hours: 0};
    }

    clear(){
        this.setState(state => ({
            hours: 0
        }));
    }

    tick() {
        this.setState(state => ({
            hours: state.hours + 1
            })
        )
    }

    componentDidMount(){
        this.interval = setInterval(() => this.tick(), 1440000)
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    
        render() {
            if (this.state.seconds >= 24) {
                this.setState({seconds: 0})
            }
            return(
                <div>Hours: {this.state.hours}
                <button onClick={() => this.clear()}>Clear</button>
                    </div>
                
            );
        }


}

export default MCounter;
