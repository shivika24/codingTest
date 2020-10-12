import React from "react";
import styled from 'styled-components'
const Button = styled.button`
background-color: #3174bc;
color: white;
height:50px;
width:120px;
`;
function Submitbutton(props) {
    return (
        <div className="form-group">
        <Button className="btn mainbtn" type="submit" data-toggle="modal" data-target="#exampleModal" id="btn">
            Submit
        </Button>

        {/* modal to display response */}
        <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
       <div className="modal-content">
           <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Response</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>
       <div className="modal-body" id="modal-body">
        <p>Resolve the errors</p>
       </div>
       <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-dismiss="modal" id="myBtn">Ok</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
}
export default Submitbutton;