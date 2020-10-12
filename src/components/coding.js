import React,{useEffect,useState} from 'react';  
import {Formik} from 'formik';
import {apifetch,getQuestions} from './apifunction';
import * as Yup from 'yup';    
import Displayquestion from './displayquestion';
import error from './messages.js';
import Submitbtn from './submitbutton'
import Studentcredentials from './studentcredentials';
import './coding.css'

const validate = {
    name: Yup.string()
      .max(15, error.FIRSTNAME_ERROR)
      .required(error.REQUIRED),
    email: Yup.string()
      .email(error.INVALID_EMAIL)
      .required(error.REQUIRED),
    solution1: Yup.string()
      .required(error.REQUIRED),
    solution2: Yup.string()
      .required(error.REQUIRED),
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
                      <Displayquestion questions={questions}/>
                      <Submitbtn/>                      
                   </form>                 
              )}
       </Formik>
      </div>
    );
  };
export default Coding;