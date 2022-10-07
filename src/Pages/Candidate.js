import React from 'react';
import PhoneInput from "react-phone-number-input";
import { useEffect, useState } from "react";
import { render } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from './Form';
import Recruiter from './Recruiter';

function Candidate({formValue, formData, setFormData }) {

    const [form, setForm] = useState ({})
    const [errors, setErrors] = useState ({})

    const initialValues = {
        fname: "",
        mail: "",
        number: "",
        file: "",
        jobid: "",
        jobtitle: "",
        company: "",
        ffile: "",
      };
      const [formValues, setFormValues] = useState(initialValues);
      const [formErrors, setFormErrors] = useState({});
      const [isSubmit, setIsSubmit] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        console.log("hi" + setIsSubmit);
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
    
        if (!values.fname) {
          error.fname = "first name is required";
        }
        if (!values.mail) {
          error.mail = "email is required";
        } else if (!mailformat.test(values.email)) {
          error.mail = "this is not a valid email format";
        }
        if (!values.number) {
          error.number = "phone number is required";
        } else if (!values.phone.match(phoneno)) {
          error.number = "phone number is Invalid";
        }
        if (!values.file) {
            error.file = "File is required";
          }
        if (!values.jobid) {
          error.jobid = "job ID is required";
        }
        if (!values.jobtitle) {
          error.jobtitle = "job title is required";
        }
        if (!values.company) {
          error.company = "company name is required";
        }
        if (!values.ffile) {
            error.file = "File is required";
          }
        return error;
      };
    
      let hello;
    
      return isSubmit && Object.keys(formErrors).length === 0 ? (
        <Recruiter name={formValues} />

      ) : (
    
        <div className='card'>
            <div className='container1'>
                <div className='modal'>
                    <div className='modal-container'>
                        <br />
                        <h3>Candidate Details</h3>
                        <form onSubmit={handleSubmit}>
                            <div class="user-details">
                                <div class="input-box">
                                    <span class="details">Full Name</span>
                                    <input type="text"name='name' rules={{ required: true, }} id="fname" value={ formData.fname} onChange={(event) => setFormData({ ...formData, fname: event.target.value })} placeholder="olivia@untitledui.com" required />
                                </div>
                                <div class="input-box">
                                    <span class="details">Email</span>
                                    <input class="form_input" type="Email" rules={{ required: true, }} id="mail" value={formData.mail} onChange={(event) => setFormData({ ...formData, mail: event.target.value })} name="mail" placeholder="olivia@untitledui.com" />
                                </div>
                            </div>
                            <div class="user-details">
                                <div class="input-box">
                                    <span class="details">Phone Number</span>
                                    <input type="text" rules={{ required: true, }} id="number" value={formData.number} onChange={(event) => setFormData({ ...formData, number: event.target.value })} name="number" onkeyup="numberonly(this)" placeholder=" US +1(555) 000-0000" required />
                                </div>
                                <div class="input-box">
                                    <label> Resume </label>
                                    <input gutterButton className="file-upload" name='file' rules={{ required: true, }} id="file" onChange={(event) => setFormData({ ...formData, file: event.target.value })} type="file" accept="application/pdf,application/msword,
                                            application/vnd.openxmlformats-officedocument.wordprocessingml.document" required style={{ display: "none" }} />
                                    <label for="file">
                                        <div className="button">Upload</div>
                                        <p>{formData.file}</p>
                                    </label>
                                </div>
                            </div>
                            <br /><br />


                            <h3>Job Details</h3>
                            <div class="user-details">
                                <div class="input-box">
                                    <span class="details">Job ID</span>
                                    <input type="text" name='jobid' rules={{ required: true, }} id="jobid" value={formData.jobid} onChange={(event) => setFormData({ ...formData, jobid: event.target.value })} placeholder="olivia@untitledui.com" required />
                                </div>
                                <div class="input-box">
                                    <span class="details">Job title</span>
                                    <input type="text" name='jobtitle' rules={{ required: true, }} id="jobtitle" value={formData.jobtitle} onChange={(event) => setFormData({ ...formData, jobtitle: event.target.value })} placeholder="olivia@untitledui.com" required />
                                </div>
                            </div>
                            <div class="user-details">
                                <div class="input-box">
                                    <span class="details">Company</span>
                                    <input type="text" name='company' rules={{ required: true, }} id="company" value={formData.company} onChange={(event) => setFormData({ ...formData, company: event.target.value })} placeholder="olivia@untitledui.com" required />
                                </div>
                                <div class="input-box">
                                    <label> Job description</label>
                                    <input gutterButton className="file-upload" name='ffile' rules={{ required: true, }} id="ffile" onChange={(event) => setFormData({ ...formData, ffile: event.target.value })} type="file" accept="application/pdf,application/msword,
                                        application/vnd.openxmlformats-officedocument.wordprocessingml.document" required style={{ display: "none" }} />
                                    <label for="ffile">
                                        <div className="button">Upload</div>
                                        <p>{formData.ffile}</p>
                                    </label>
                                </div>
                            </div>
                            {/* <button>Next</button> */}
                            {/* This was for normal htlm validation */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Candidate;
