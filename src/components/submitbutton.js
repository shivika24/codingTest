import React from "react";
import styled from 'styled-components'
const Button = styled.button`
background-color: #3174bc;
color: white;
height:40px;
width:120px;
`;
function Submitbutton(props) {
    return (
        <div className="form-group text-center">
        <Button className="btn mainbtn" type="submit"  id="btn">
            Submit
        </Button>
        </div>
    );
}
export default Submitbutton;