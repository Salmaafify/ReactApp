import { Navbar, Button, Modal, Form  } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react';
import {addNewUser} from '../actions'
import { useDispatch } from 'react-redux';
const NavBar = () => {
    const [validated, setValidated] = useState(false);
    const [hidden , setHidden] = useState(false)
    const [hidden2 , setHidden2] = useState(false)
    const [hidden3 , setHidden3] = useState(false)
    const nameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const fileRef = useRef();

    const dispatch = useDispatch();
    const formData = new FormData();

     
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = (event) =>{
        // console.log(nameRef.current.value)
        // console.log(emailRef.current.value)
        // console.log(addressRef.current.value)
        // console.log(fileRef.current.files[0])

       if(validated === true){
        formData.append("name",nameRef.current.value);
        formData.append("email",emailRef.current.value);
         
            formData.append("address",addressRef.current.value);
        
        
            formData.append("userImage",fileRef.current.files[0]);
        
        

        dispatch(addNewUser(formData))
        handleClose();
       }
        
    }
    const handleName = ()=>{
        if(nameRef.current.value.length>=3 && nameRef.current.value.length <=8 && nameRef.current.value.match(/^[A-Za-z]+$/g)){
           setValidated(true)
           setHidden(true)

         }
        else{
            setValidated(false)
            setHidden(false)
        }    
    }
    const handleEmail =()=>{
        if(emailRef.current.value.match(/\w+@\w+\.\w+/g)){
            setValidated(true)
           setHidden2(true)

         }
        else{
            setValidated(false)
            setHidden2(false)
        }    
    }
    return (<>
        <Navbar bg="dark" variant="dark" className="d-flex justify-content-between mb-5">
            <Link to="/" style={{ textDecoration: "none" }}><Navbar.Brand className="ms-5">Home</Navbar.Brand></Link>
            <Button variant="outline-info" className="me-5" onClick={handleShow} >Register</Button>
        </Navbar>

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header>
                <Modal.Title> Please Assign Your Data To Register </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form encType="multipart/form-data" noValidate validated={validated} >
                    <Form.Group controlId="formGroupName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Name" ref={nameRef} required isInvalid onChange={handleName} />
                        <Form.Control.Feedback type="invalid" hidden = {hidden}>
                         Please Choose a Valid Name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formGroupAge">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" ref={emailRef} required isInvalid onChange={handleEmail} />
                        <Form.Control.Feedback type="invalid" hidden={hidden2}>
                         Please Choose a Valid Email.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formGroupName">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Address" ref={addressRef}/>
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
                <Button variant="primary" onClick={handleSubmit} >Submit</Button>
            </Modal.Footer>
        </Modal>
    </>)
}

export default NavBar