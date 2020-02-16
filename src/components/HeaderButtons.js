import React, { Component, } from 'react'
import { Input, InputGroup, InputGroupAddon, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { ModalOpen, getPosts } from '../redux/actionCreators/tempAction'

export class HeaderButtons extends Component {
    state = {
        query: ''
    }

    handleQueryChange = (e) => {
        const query = e.target.value
        this.setState({ query }, () => this.props.getPosts(query))
    }

    performSearch = () => {
        const { query } = this.state
        this.props.getPosts(query)
    }

    performReset = () => {
        this.setState({ query: '' }, this.props.getPosts)
    }
    render() {
        const { ModalOpen, } = this.props
        const { query } = this.state
        return (
            <div style={{ padding: '15px 10px', width: '100%' }} >
                <InputGroup>
                    <Input placeholder='Enter text here' name="query" id="query" value={query} onChange={this.handleQueryChange} />
                    <InputGroupAddon addonType="append">
                        <Button onClick={this.performSearch}>Search</Button>
                        <Button onClick={this.performReset} style={{ marginLeft: '10px' }} >Reset</Button>
                    </InputGroupAddon>
                    <Button onClick={() => ModalOpen()} style={{ marginLeft: '30px' }} >Add post</Button>
                </InputGroup>
            </div>
        )
    }
}

export default connect(null, { ModalOpen, getPosts })(HeaderButtons)
