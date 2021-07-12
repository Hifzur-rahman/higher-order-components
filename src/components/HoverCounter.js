import React from "react";
import withCounter from './withCounter'

class HoverCounter extends React.Component {


    render() { 
        const {count, incrementCount} = this.props
        return ( 
           <h2 onMouseOver={incrementCount}>
              {this.props.name} Hovered {count} times
           </h2>
         );
    }
}
 
export default withCounter(HoverCounter);
