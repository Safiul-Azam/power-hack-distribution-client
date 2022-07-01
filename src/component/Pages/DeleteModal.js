import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';

const DeleteModal = ({deleteBillInfo, setDeleteBillInfo,refetch }) => {
    const handleClose = ()=> setDeleteBillInfo(null)
    const {_id} = deleteBillInfo
    const handleConfirmDelete = ()=>{
        fetch(`https://kinder-donair-83694.herokuapp.com/delete-billing/${_id}`,{
            method:'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount === 1){
                toast.success('Deleted bill info successfully')
                refetch()
                setDeleteBillInfo(null)
            }
        })
    }
    return (
            <>
                <Modal
                    show={deleteBillInfo}
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