import React from 'react';
const Displayquestion = ({ label, ...props }) => {
    return (
        <div>
            <h1>{props.questions?"Problem"+props.questions.sno+":- "+props.questions.heading:null}</h1>
            <section
                className="not-found-controller"
                dangerouslySetInnerHTML={{ __html: props.questions?props.questions.question:"" }}
                />
        </div>  
    );
  };
export default Displayquestion;