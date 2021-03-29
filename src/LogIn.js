import React from 'react'
import { Form, Button, Container, Navbar, Row, Col, Modal } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"
import logo from './Logo.png'

// style={{ width: '800px'}}

// Firebase
import { useCollectionData, where } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

if (firebase.apps.length === 0) {
    firebase.initializeApp({
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        databaseUrl: process.env.REACT_APP_DATABASE_URL,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_APP_ID
    })
}
// const firebaseApp=firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore()
const auth = firebase.auth()


export default function LogIn() {
    
    const { register, handleSubmit } = useForm()
    const [signupShow, Showsignupform] = useState(false)
    const [records, setRecords] = useState([])
    //    const (log, handlelogin) = userForm()
    // onSubmit={handlelogin(onSubmit)}


    // Firebase stuff
    const userRef = firestore.collection('user');
    const query = userRef;
    const [data] = useCollectionData(query, { idField: 'id' });

    console.log("REACT_APP_PROJECT_ID", process.env.REACT_APP_PROJECT_ID)
    useEffect(() => {
        if (data) {
            let records = data.map(d => {
                <Adddata
                    data={d}
                />
            })
            setRecords(records)
        }

    }, [data])

    
    const state = {
        button: 1
    };

    // Different function in two submit button 
    const Submit = async (data) => {
        let userData = {
            emal: data.emal,
            pwd: data.pwd
        }
        console.log('onSubmit', userData)
        if (state.button === 1) {
            console.log("SIGN IN", userData);
        }
        if (state.button === 2) {
            console.log("SIGN UP", userData);
            // Refresh the page
            window.location.reload()
        }
    }


    return (

        <Container >
            <Form class="form-row align-items-center" onSubmit={handleSubmit(Submit)} >
                <Row><Col><Header /></Col></Row>
                <div class="form-group">
                    <label class="font-weight-bold " for="email">Email</label>
                    <div>
                        <input class="form-control" type="email" name="emal" id="emal" placeholder="Your email" ref={register({ required: true })} ></input>
                    </div>
                </div>
                <div class="form-group">
                    <label class="font-weight-bold" for="password">Password</label>
                    <div>
                        <input class="form-control" type="password" name="pwd" id="pwd" placeholder="Your password" ref={register({ required: true })} ></input>
                    </div>
                </div>
                <Form.Group>
                    <Button variant="primary" type="submit" value="login" onClick={() => (state.button = 1)}>    Log In</Button>
                </Form.Group>
                <Navbar>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text> Don’t have an account? </Navbar.Text>
                        <Button onClick={() => Showsignupform(true)}> Sign up</Button>
                    </Navbar.Collapse>
                </Navbar>
            </Form>

            <Modal show={signupShow} onHide={() => Showsignupform(false)} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="model-header" >
                        Sign Up
                </Modal.Title>
                </Modal.Header>
                <Container>
                    <Form class="form-row align-items-center" onSubmit={handleSubmit(Submit)} >
                        <div class="form-group">
                            <label class="control-label col-sm-2 font-weight-bold" for="email">Email</label>
                            <div class="col-sm-10">
                                <input class="form-control" type="email" name="emal" id="emal" placeholder="Your email" ref={register({ required: true })} ></input>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-2 font-weight-bold" for="password">Password</label>
                            <div class="col-sm-10">
                                <input class="form-control" type="password" name="pwd" id="pwd" placeholder="Your password" ref={register({ required: true })} ></input>
                            </div>
                        </div>
                        <Form.Row className="col-md-10 center">
                            <Form.Group>
                                <Button variant="primary" type="submit" value="signup" onClick={() => (state.button = 2)}> Sign Up </Button>
                            </Form.Group></Form.Row>
                        <Navbar></Navbar>
                    </Form>
                </Container>
            </Modal>
        </Container>
    )

}
function Header() {
    // Import result is the URL of your image and sizing it 
    return (
        <img src={logo} class="rounded mx-auto d-block" style={{ width: '400px', height: '300px' }} alt="Logo" />)
}

function Adddata(props) {
    let d = props.data
}