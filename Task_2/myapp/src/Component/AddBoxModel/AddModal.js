import React, { useState, useEffect } from "react";
import "./addModal.css";
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import { toast } from "react-toastify";
import axios from 'axios';

function AddModal({ setModalOpen, flag, setFlag }) {

    const [btnloading, setBtnLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [heading, setHeading] = useState('');

    const handleSubmit = async()=>{
        try{
            setModalOpen(false);
            const data = {
                heading: heading,
                message: message.toString()
            }
            console.log(data)
            await axios.post("http://localhost:3001/user/upload",data);
            toast.success("Note Added Successfully");
            setFlag(!flag);
        }
        catch(e){
            toast.error("Something went wrong");
        }
    }

    return (
        <div className="addNewModalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <div className="modal-title">
                        <span>Add Note</span>
                    </div>
                    <button
                        className="crossButton"
                        onClick={() => {
                            setModalOpen(false);
                        }}
                        disabled={btnloading}
                    >
                        X
                    </button>
                </div>
                <div className="formClass">
                    <div className="heading">
                        <TextField
                            fullWidth
                            label="Enter note heading"
                            id="fullWidth"
                            value={heading}
                            onChange={(e) => setHeading(e.target.value)}
                        />
                    </div>
                    <div className="message">
                        <TextField
                            fullWidth
                            className='messageTextField'
                            id="outlined-multiline-static"
                            label="Enter your message"
                            multiline
                            rows={10}
                            onChange={(e) => setMessage(e.target.value)}
                            defaultValue=""
                        />
                    </div>
                </div>
                <div className='majorButton'>
                    <Button onClick={()=>handleSubmit()}>ADD</Button>
                    <Button className="remove" onClick={() => setModalOpen(false)}>CANCEL</Button>
                </div>
            </div>
        </div>
    );
}

export default AddModal;









