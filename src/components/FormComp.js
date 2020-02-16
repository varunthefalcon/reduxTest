import React, { Component, Fragment } from 'react'
import { FormGroup, Label, Input, Form } from 'reactstrap'
import { connect } from 'react-redux'
import { FormOnChange } from '../redux/actionCreators/tempAction'
class FormComp extends Component {

    handleFieldChange = (e) => {
        const { name, value } = e.target
        this.props.FormOnChange({ [name]: value })
    }

    render() {
        console.log(this.props)
        const { title, description, author } = this.props.form
        return (
            <Fragment>
                <Form>
                    <FormGroup>
                        <Label for="postTitle">Title</Label>
                        <Input defaultValue={title} onChange={this.handleFieldChange} type="text" name="title" id="postTitle" placeholder="Enter Title here... " />
                    </FormGroup>
                    <FormGroup>
                        <Label for="postAuthor">Author</Label>
                        <Input defaultValue={author} onChange={this.handleFieldChange} type="text" name="author" id="postAuthor" placeholder="Enter Author here... " />
                    </FormGroup>
                    <FormGroup>
                        <Label for="postDescription">Description</Label>
                        <Input defaultValue={description} onChange={this.handleFieldChange} type="text" name="description" id="postDescription" placeholder="Enter Description here... " />
                    </FormGroup>
                </Form>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        form: { ...state.formHandlingReducer }
    }
}

export default connect(mapStateToProps, { FormOnChange })(FormComp)