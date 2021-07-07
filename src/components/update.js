import {Button , Modal , Form} from 'react-bootstrap'
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import {updateUser} from '../actions'

const Update = ({id}) =>{
    const nameRef = useRef();
        const emailRef = useRef();
        const addressRef = useRef();
        const fileRef = useRef();

        const dispatch = useDispatch();
        const formData = new FormData();
        
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const handleUpdate = () =>{
            if(nameRef.current.value){
                formData.append("name",nameRef.current.value);
            }
            if(emailRef.current.value){
                formData.append("email",emailRef.current.value);
            }
            if(addressRef.current.value){
                formData.append("address",addressRef.current.value);
            }
            if(fileRef.current.files[0]){
                formData.append("userImage",fileRef.current.files[0]);
            }
            // else{
            //     alert("If You Wan't Update Close The Modal")
            // }
            
            
            
            //console.log(formData)

            dispatch(updateUser(id,formData))

            handleClose()
        }
    if(id){
        

        return( <>
        <Button variant="outline-info" className="me-5" onClick={handleShow} >Update</Button>

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header>
                <Modal.Title> Please Assign Your Data To Update </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form encType="multipart/form-data">
                    <Form.Group controlId="formGroupName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Name" ref={nameRef} />
                    </Form.Group>
                    <Form.Group controlId="formGroupAge">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" ref={emailRef} />
                    </Form.Group>
                    <Form.Group controlId="formGroupName">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Address" ref={addressRef} />
                    </Form.Group>
                    <Form.Group>
                        <Form.File id="exampleFormControlFile1" ref={fileRef} name="userImage" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleUpdate} >Submit Updates</Button>
            </Modal.Footer>
        </Modal>
        </>)
    }

    
}

export default Update