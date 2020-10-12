import {useField } from 'formik';
import React from 'react';
import styled from 'styled-components'
const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: -1%;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;
const Label1 = styled.label`
float:left;
margin-right:4%  
`;
const Input = styled.input`
width:50%; 
`;

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        
        <Label1><b>{label}:</b></Label1>
        <Input className="form-control" {...field} {...props}/><br/>
        {meta.touched && meta.error ? (
          <StyledErrorMessage className="errors">{meta.error}</StyledErrorMessage>
        ) : null}
      </>
    );
  };
export default MyTextInput;