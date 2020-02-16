import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { submitAction, ModalClose } from '../redux/actionCreators/tempAction'
class Popup extends Component {

    modalSubmitFunc = () => {
        const { submitAction, formData } = this.props
        submitAction(formData)
    }

    render() {
        const { isModalOpen, children, ModalClose } = this.props
        return (
            <div>
                <Modal isOpen={isModalOpen} toggle={ModalClose} >
                    <ModalHeader toggle={ModalClose}>Add / edit post</ModalHeader>
                    <ModalBody>
                        {children}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.modalSubmitFunc}>Submit</Button>
                        <Button color="secondary" onClick={ModalClose}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        formData: { ...state.formHandlingReducer },
        isModalOpen: state.modalHandlingReducer.isModalOpen
    }
}

export default connect(mapStateToProps, { submitAction, ModalClose })(Popup);