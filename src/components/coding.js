import React,{useEffect,useState} from 'react';  
import {Formik} from 'formik';
import Codingbody from './codingbody';
import {apifetch,getQuestions} from './apifunction';
import * as Yup from 'yup';    
import Displayquestion from './displayquestion';
import error from './messages.js';
import Submitbtn from './submitbutton'
import Studentcredentials from './studentcredentials';
import './coding.css'
import {Editor} from '@tinymce/tinymce-react';
import styled from 'styled-components'
const StyledErrorMessage = styled.div`
color: red;
border-color: red;
float: left;
border: 0;
font-size: 14px;
margin: 3px 0 5px;
width: 100%;
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const validate = {
    name: Yup.string()
      .matches(
        /^[a-z\d\-_\s]+$/i,
      error.ALPHA_NUMERIC
      )
      .max(15, error.FIRSTNAME_ERROR)
      .required(error.REQUIRED),
    email: Yup.string()
      .email(error.INVALID_EMAIL)
      .required(error.REQUIRED),
    solution1: Yup.string()
      .required(error.REQUIRED)
      .max(2000, error.CHARACTER_COUNT),
    solution2: Yup.string()
      .required(error.REQUIRED)
      .max(2000,error.CHARACTER_COUNT),
  }
const Coding = ({ label, ...props }) => {
  const [questions,setQuestions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/solutions/getQuestions", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
        })
      .then(res=> res.json())
        .then(res => {
          setQuestions(res.questions);      
        })
  },[]);
    return (
      <div className="content">    
        <div className="alert alert-danger" id="alert">
        <strong>Alert!!</strong>Test Is Already Submitted From This Email Id..
        </div>
      <center><h1 id="submitHead">Thanks For Submitting the Test!!!</h1></center>    
    <Formik
    initialValues= {{
      name:'',
      email:'',
      solution1:'',
      solution2:''
    }}
    validationSchema={Yup.object(validate)}
    onSubmit={values => {
      const data={
        name:values.name,
        email:values.email,
        solution1:values.solution1,
        solution2:values.solution2,
      }
      console.log(data)
      apifetch(data);
    }}
    >
        {formik => (
                    <form
                       onSubmit={formik.handleSubmit}
                       method="POST"
                       id="b1"
                    >
                      <Studentcredentials/>
                      <Displayquestion questions={questions[0]}/>
                      <Codingbody question="solution1"/>
  
                      <Displayquestion questions={questions[1]}/>
                      <Codingbody question="solution2"/>
                      <Submitbtn/>                      
                   </form>                 
              )}
       </Formik>
      </div>
    );
  };
export default Coding;