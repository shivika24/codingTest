import React from 'react';
import Codingbody from './codingbody';
const Displayquestion = ({ label, ...props }) => {
    return (
        <div>
            <h1>{props.questions[0]?"Que"+props.questions[0].sno+":- "+props.questions[0].heading:null}</h1>
                       <p><span>{props.questions[0]?props.questions[0].question:null}</span></p>
                      <Codingbody question="solution1"/>
                      <h1>{props.questions[1]?"Que"+props.questions[1].sno+":- "+props.questions[1].heading:null}</h1>
                      <p><span>{props.questions[1]?props.questions[1].question:null}</span></p>
                      <Codingbody question="solution2"/>
        </div>  
    );
  };
export default Displayquestion;