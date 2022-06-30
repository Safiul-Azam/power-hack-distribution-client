import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';

const DeleteModal = ({show, setShow,refetch }) => {
    const handleClose = ()=> setShow(null)
    const {_id} = show
    const handleConfirmDelete = ()=>{
        fetch(`http://localhost:5000/delete-billing/${_id}`,{
            method:'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount === 1){
                toast.success('Deleted bill info successfully')
                refetch()
                setShow(null)
            }
        })
    }
    return (
            <>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Do you want to delete your billing information</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Button onClick={handleConfirmDelete}>Confirm Delete</Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Body>
                </Modal>
            </>
    );
};

export default DeleteModal;