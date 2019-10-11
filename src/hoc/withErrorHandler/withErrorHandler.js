import React,{Component} from 'react'

import Aux from '../Aux/Aux'
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent,axios) => {

    return class extends Component {

        state = {error:null}
        componentDidCatch(error, errorInfo) {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error:null})
                return req;
            })

            this.respInterceptor = axios.interceptors.response.use(resp => (resp), error=>{
                this.setState({error:error})
            })
        }

        errorConfirmedHandler = () => {
            this.setState({error:null})
        }
        componentWillUnmount() {
            console.log("Will Unmount")
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.response.eject(this.respInterceptor)
        }

        render() {
            return (
                <Aux>
                    <Modal show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        Something didn't work -
                        {this.state.error?this.state.error.message:null}
                    </Modal>
                    <WrappedComponent{...this.props}/>
                </Aux>
            )
        }

    }
}
export default withErrorHandler;
