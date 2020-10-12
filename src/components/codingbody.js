import React from "react";
import MyTextarea from  './mytextarea';

//textarea to write solutions
function Codingbody(props) {
    return (
        <div className="form-group">
            <MyTextarea
                type="text"
                placeholder="Enter Solution"
                name={props.question}  
                label={props.question}                        
            />
        </div>
    );
}
export default Codingbody;