import React  from "react";
import withCounter from './withCounter'

class CickCounter extends React.Component {


    render() { 
        const {count, incrementCount} = this.props
        return ( 
            <button
             onClick={incrementCount}>
               {this.props.name}  Clicked {count} times
            </button>
         );
    }
}
 
export default withCounter(CickCounter);
