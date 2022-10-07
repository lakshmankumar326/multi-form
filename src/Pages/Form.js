import React, { useState } from 'react';
import Candidate from './Candidate';
import Recruiter from './Recruiter';
import { BsArrowLeft, BsBell, BsQuestionCircle, BsFillPersonCheckFill } from "react-icons/bs";
// import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function Form() {

    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        fname: "",
        mail: "",
        number: "",
        file: "",
        jobid: "",
        jobtitle: "",
        company: "",
        ffile: "",
        ffname: "",
        mmail: "",
        nnumber: "",
        jjobid: "",
        jjobtitle: "",
        nnnumber: "",
    });

    const FormTitles = ["Candidate", "Recruiter"];

    const PageDisplay = () => {
        if (page === 0) {
            return <Candidate formData={formData} setFormData={setFormData} />;
        } else {
            return <Recruiter formData={formData} setFormData={setFormData} />;
        }
    };

    return (
        <div className='form'>
            {/* <div className='progressbar'>
                <div style={{ width: page === 0 ? "10%" : "100%" }}></div>
            </div> */}

            <div className='form-container'>
                <div className="navbar">
                    <div className="leftside">
                        <BsArrowLeft />
                        <p><b>Interview Information</b></p>
                    </div>
                    <div className="rightside">

                        <BsQuestionCircle />
                        <BsBell />
                        <BsFillPersonCheckFill />
                        <p><strong>Syed Imran</strong></p>
                        <p>Hire++ Admin</p>
                    </div>
                </div>
                <div className='header2'>
                    <h1>Interview information</h1>
                </div>

                <div className='body'>{PageDisplay()}</div>
                <div className='footer'>
                    <div className="leftside">
                        <button disabled={page == 0} onClick={() => { setPage((currPage) => currPage - 1) }}>Previous</button></div>
                    <div className="rightside">
                        <button onClick={() => {
                            if (page === FormTitles.length - 1) {
                                alert("THE DETAILS FILLED IN BOTH THE PAGES.");
                                alert('CANDIDATE DETAILS : ' + "Full Name :- " + formData.fname + ",  Email :- " + formData.mail + ",  Phone Number :- " + formData.number + ",  Resume :- " + formData.file + ";  JOB DETAILS : " + "Job ID :- " + formData.jobid + ",  Job Title :- " + formData.jobtitle + ",  Company :- " +  formData.company + ",  Job description :- " + formData.ffile + ".  { NOW WE ARE GOING TO FETCH RECRUITER DETAILS } ");
                                alert('RECRUITER DETAILS : ' + "Full Name :- " + formData.ffname + ",  Email :- " + formData.mmail + ",  Phone Number :- " + formData.nnumber + ";  INTERVIEWER DETAILS (1) : " + "Job ID :- " + formData.jjobid + ",  Job Title:- " + formData.jjobtitle + ",  Phone Number " +  formData.nnnumber + ". THANKYOU ");
                                console.log(formData);
                            } else {
                                setPage((currPage) => currPage + 1);
                            }
                        }}> {page === FormTitles.length - 1 ? "Finish" : "Next"} </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Form;
