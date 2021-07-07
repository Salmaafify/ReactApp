import {getUserDetails , clearDetails} from '../actions'
import { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Update from './update';
import Delete from './delete';

class UserDetails extends Component{
    render(){
        return(
            <div className="m-2 border border-2 p-2">{this.renderDetails(this.props)}</div>
        )
    }

    /////////////////////////////////////////////////////////////////////////////////
    renderDetails({ userDetails }) {
        if (userDetails) {
            return (
                <>
                    <h2 className="text-center">{userDetails.name}</h2>
                    <img className="w-50 rounded-circle d-block m-auto"
                        src={`http://localhost:4000/${userDetails.userImage}`} style={{height:250}} />
                    
                    <h2 className="text-center">{userDetails.email}</h2>
                    <h2 className="text-center">{userDetails.address}</h2>


                    <Update id={this.props.match.params.id} key={this.props.match.params.id} />

                    <Delete id={this.props.match.params.id} />
                     
                </>
            )
        }
        return <p className="text-danger">
            no details available.
        </p>
    }

    /////////////////////////////////////////////////////////////////////////////////

    componentDidMount(){
        this.props.getUserDetails(this.props.match.params.id)
    }
}

export default  connect(
    (state) =>{
        return {userDetails: state.UsersReducers.details}
    },
    (dispatch)=>{
        return bindActionCreators({ getUserDetails , clearDetails},dispatch)
    }
)(UserDetails)