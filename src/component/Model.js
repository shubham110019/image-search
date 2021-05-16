import React, { Component } from 'react'

export default class Model extends Component {
    render() {
        return (
            <>

                <div ClassName="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div ClassName="modal-dialog">
                        <div ClassName="modal-content">
                            <div ClassName="modal-header">
                                <h5 ClassName="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" ClassName="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div ClassName="modal-body">
                                ...
                            </div>
                            <div ClassName="modal-footer">
                                <button type="button" ClassName="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" ClassName="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
