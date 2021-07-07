import {deleteUser} from '../actions'
import {Modal,Button} from 'react-bootstrap'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
const Delete = ({id}) =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()

    const handleDelete = ()=>{
        dispatch(deleteUser(id))

        handleClose()
    }
    return(
        <>
        <Button variant="primary" onClick={handleShow}>
        Delete
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           Please Confirm By OK If You Really Want To Delete This User
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Link to="/">
           <Button variant="primary" onClick={handleDelete}>OK</Button>
           </Link>
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default Delete