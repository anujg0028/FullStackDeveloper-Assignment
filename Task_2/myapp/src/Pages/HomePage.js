import "./homePage.css"
import React, { useEffect, useState } from 'react'
import NoteBox from '../Component/NoteBoxArea/NoteBox';
import { toast } from "react-toastify";
import AddModal from "../Component/AddBoxModel/AddModal"
import axios from 'axios';

const HomePage = () => {

    const [cardData, setCardData] = useState([]);
    const [flag, setFlag] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);

    const notesData = async ()=>{
        try{
            let result = await axios.get('http://localhost:3001/user/getAll');
            console.log(result)
            return result.data;
        }
        catch(e)
        {
            return new Error("Network Error:  "+e);
        }
    }

    useEffect(()=>{
        try{
            const getData = async()=>{
                const result = await notesData();
                setCardData(result);
            }
            getData();  
        }
        catch(e)
        {
            toast.error("Something went wrong! Please refress the page")
        }
    },[flag])

    return (
        <div className="parentDiv">
            {modalOpen && <AddModal setModalOpen={setModalOpen} flag={flag} setFlag={setFlag} />}
            <div className="navBar">
                <h1>Notes</h1>
            </div>
            <div className="mainBody">
                <div className="addBtnArea">
                    <button className="addNoteBtn" onClick={()=>setModalOpen(true)}><span className="btnText">Take a note...</span></button>
                </div>
                <div className="noteArea">
                    {cardData.length > 0 && cardData.map((card,index)=>(
                        <NoteBox param={card} setFlag={setFlag} flag={flag} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
};

export default HomePage;