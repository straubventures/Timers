import React from 'react'

class MCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {minutes: 0};
    }

    clear(){
        this.setState(state => ({
            minutes: 0
        }));
    }

    tick() {
        this.setState(state => ({
            minutes: state.minutes + 1
            })
        )
    }

    componentDidMount(){
        this.interval = setInterval(() => this.tick(), 60000)
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    
        render() {
            if (this.state.seconds == 60) {
                this.setState({seconds: 0})
            }
            return(
                <div>Minutes: {this.state.minutes}
                <button onClick={() => this.clear()}>Clear</button>
                    </div>
                
            );
        }


}

export default MCounter;
