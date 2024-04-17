import "./noteBox.css"
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { toast } from "react-toastify";

const NoteBox = ({ param, setFlag, flag }) => {

    const handleDeleteCard = async (id) => {
        try{
            await axios.delete(`http://localhost:3001/user/delete/${id}`)
            setFlag(!flag)
        }
        catch(e){
            toast.error("Something went wrong please try again")
        }
    }

    return (
        <div className={param.message.length > 20 ? "outerDivLarge" : "outerDivSmall"}>
            <div className="headingArea">
                <h3>{param.heading}</h3>
            </div>
            <div className="message">
                <p>{param.message}</p>
            </div>
            <div className="timeAndDelete">
                <p id="date">{param.createdAt}</p>
                <Button className='deleteBtn' onClick={()=>handleDeleteCard(param.id)} startIcon={<DeleteIcon />} size="small"></Button>
            </div>
        </div>
    )
};

export default NoteBox;