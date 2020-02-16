
import React, { Component, Fragment, } from 'react'
import { Table, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { getPosts, ModalOpen, rowDelete } from '../redux/actionCreators/tempAction'

export class TableComp extends Component {

    componentDidMount() {
        this.props.getPosts()
    }
    handleDelete = (data) => {
        if (window.confirm('Are you sure to delete')) {
            this.props.rowDelete(data)
        }
    }
    render() {
        console.log(this.props)
        const { myPropFromRedux, ModalOpen } = this.props
        return (
            <div style={{ padding: '10px 15px' }} >
                <Table hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Description</th>
                            <th >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myPropFromRedux.map((data, e) => <Fragment key={e}>
                                <tr>
                                    <th scope="row">{e + 1}</th>
                                    <td>{data.title} </td>
                                    <td>{data.author} </td>
                                    <td>{data.description} </td>
                                    <td>
                                        <Button onClick={() => ModalOpen(data)} >Edit</Button>
                                        <Button style={{ marginLeft: '20px' }} onClick={() => this.handleDelete(data)} color="danger">Delete</Button>
                                    </td>
                                </tr>
                            </Fragment>)
                        }

                    </tbody>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        myPropFromRedux: store.postsListReducer
    }
}

export default connect(mapStateToProps, { getPosts, ModalOpen, rowDelete })(TableComp)
