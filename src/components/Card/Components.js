import React from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Content from "../Content/Content";

class Component extends  React.Component {
    constructor () {
    super ();
    this.state = {
        isLoading: true
    }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({isLoading: false})
        }, 5000)
    }

render () {
    const{isLoading} = this.state
return <div>{isLoading ? <LoadingSpinner /> : <Content />}</div>;
}
}

export default Component