import React from "react";
import MyTextInput from './textInput';



function Studentcredentials() {
    return (
        <div className="form-group">
            <MyTextInput
                type="text"
                placeholder="name"
                name="name"  
                label="name"                        
            />
            <MyTextInput
                type="email"
                placeholder="email"
                name="email"  
                label="email"                        
            />
        </div>
    );
}
export default Studentcredentials;