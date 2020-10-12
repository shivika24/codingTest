import {useField } from 'formik';
import React from 'react';
import styled from 'styled-components'
const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: "red";
  width: 400px;
  &:before {
    content: "❌ ";
    font-size: 20px;
  }
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