import {useField } from 'formik';
import React from 'react';
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
const Label1 = styled.label`
float:left;
margin: 7px 4% 5px 0;
text-transform: capitalize;
min-width: 80px;  
`;
const Input = styled.input`

`;

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        
        <Label1><b>{label}:</b></Label1>
        <Input className="form-control" {...field} {...props}/>
        {meta.touched && meta.error ? (
          <StyledErrorMessage className="errors">{meta.error}</StyledErrorMessage>
        ) : null}
      </>
    );
  };
export default MyTextInput;