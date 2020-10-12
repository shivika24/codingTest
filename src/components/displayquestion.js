import React from 'react';
import Codingbody from './codingbody';
const Displayquestion = ({ label, ...props }) => {
    return (
        <div>
            <h1>{props.questions[0]?"Problem"+props.questions[0].sno+":- "+props.questions[0].heading:null}</h1>
            <section
                className="not-found-controller"
                dangerouslySetInnerHTML={{ __html: props.questions[0]?props.questions[0].question:"" }}
                />
                    <Codingbody question="solution1"/>
                    <h1>{props.questions[0]?"Problem"+props.questions[1].sno+":- "+props.questions[1].heading:null}</h1>
                <section
                className="not-found-controller"
                dangerouslySetInnerHTML={{ __html: props.questions[1]?props.questions[1].question:"" }}
                />

                    <Codingbody question="solution2"/>
        </div>  
    );
  };
export default Displayquestion;