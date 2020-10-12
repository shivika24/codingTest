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

const MyTextarea = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <textarea className="form-control" {...field} {...props} rows="20"/>
        {meta.touched && meta.error ? (
        <StyledErrorMessage className="errors">{meta.error}</StyledErrorMessage>
        ) : null}
      </>
    );
  };
export default MyTextarea;