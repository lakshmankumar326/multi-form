import React from 'react';
import { useState, useEffect } from "react";
import ReactModal, { Modal } from "react-modal";
import Candidate from './Candidate';


function Recruiter({ formData, setFormData, props }) { 
    const initialValues = {
      ffname: "",
      mmail: "",
      nnumber: "",
      jjobid: "",
      jjobtitle: "",
      nnnumber: "",
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
      setModalIsOpen(true);
      //console.log("hi" + setIsSubmitA);
    };
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
    }, [formErrors]);
    const validate = (values) => {
      const error = {};
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      var phoneno = /^\d{13}$/;
  
      if (!values.ffname) {
        error.ffname = "first name is required";
      }
      if (!values.mmail) {
        error.mmail = "mail is required";
      } else if (!mailformat.test(values.mmail)) {
        error.mmail = "this is not a valid email format";
      }
      if (!values.nnumber) {
        error.nnumber = "phone number is required";
      } else if (!values.nnumber.match(phoneno)) {
        error.nnumber = "phone number is Invalid";
      }
      if (!values.jjobid) {
        error.jjobid = "job ID is required";
      }
      if (!values.jjobtitle) {
        error.jjobtitle = "job title is required";
      }
      if (!values.nnnumber) {
        error.nnnumber = "company name is required";
      }
  
      return error;
    };
  
    return isSubmit && Object.keys(formErrors).length === 0 ? (
      <ReactModal isOpen={modalIsOpen}>
        <div className="modal-body">
          <h2>Form Submitted Successfully</h2>
          <div className="user-info-modal">
            <div className="Recruiter-info">
              <div className="info-datails">
                <h3>Recruiter info</h3>
                <h4>{formValues.firstname}</h4>
                <h4>{formValues.email}</h4>
                <h4>{formValues.phone}</h4>
              </div>
              <div className="info-details">
                <h3>candidate info</h3>
                <p>{props.name.firstname}</p>
                <p>{props.name.email}</p>
                <p>{props.name.phone}</p>
                <p>{props.name.jobId}</p>
                <p>{props.name.jobTitle}</p>
                <p>{props.name.company}</p>
              </div>
            </div>
          </div>
        </div>
      </ReactModal>
    ) : (
    
        <div className='card'>
            <div className='container1'>
                <div className='modal'>
                    <div className='modal-container'>
                        <br />
                        <h3>Recruiter Details</h3>
                        <form>
                            <div class="user-details">
                                <div class="input-box">
                                    <span class="details">Full Name</span>
                                    <input type="text" name='ffname' rules={{ required: true, }} id="ffname" value={formData.ffname} onChange={(event) => setFormData({ ...formData, ffname: event.target.value })} placeholder="olivia@untitledui.com" required  error={true} />
                                </div>
                                <div class="input-box">
                                    <span class="details">Email</span>
                                    <input class="form_input" type="Email" rules={{ required: true, }} id="mmail" value={formData.mmail} onChange={(event) => setFormData({ ...formData, mmail: event.target.value })} name="mmail" placeholder="olivia@untitledui.com" />
                                </div>
                            </div>
                            <div class="user-details">
                                <div class="input-box">
                                    <span class="details">Phone Number</span>
                                    <input type="text" rules={{ required: true, }} id="nnumber" value={formData.nnumber} onChange={(event) => setFormData({ ...formData, nnumber: event.target.value })} name="nnumber" onkeyup="numberonly(this)" placeholder=" US +1(555) 000-0000" required />
                                </div>
                            </div>
                            <br /><br />


                            <h3>Interview Details (1) </h3>
                            <div class="user-details">
                                <div class="input-box">
                                    <span class="details">Job ID</span>
                                    <input type="text" name='jjobid' rules={{ required: true, }} id="jjobid" value={formData.jjobid} onChange={(event) => setFormData({ ...formData, jjobid: event.target.value })} placeholder="olivia@untitledui.com" required />
                                </div>
                                <div class="input-box">
                                    <span class="details">Job title</span>
                                    <input type="text" name='jjobtitle' rules={{ required: true, }} id="jjobtitle" value={formData.jjobtitle} onChange={(event) => setFormData({ ...formData, jjobtitle: event.target.value })} placeholder="olivia@untitledui.com" required />
                                </div>
                            </div>
                            <div class="user-details">
                                <div class="input-box">
                                    <span class="details">Phone Number</span>
                                    <input type="text" rules={{ required: true, }} id="nnnumber" value={formData.nnnumber} onChange={(event) => setFormData({ ...formData, nnnumber: event.target.value })} name="nnnumber" onkeyup="numberonly(this)" placeholder=" US +1(555) 000-0000" required />
                                </div>
                            </div>
                            {/* <button>Next</button> */}
                            {/* This was for normal htlm validation  */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

    
};

export default Recruiter;
