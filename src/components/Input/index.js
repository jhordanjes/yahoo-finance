import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useField } from '@unform/core';
import { Container } from './styles';

function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, error, registerField } = useField(name);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  },[fieldName, registerField]);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  },[]);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  },[]);

  return (
    <Container isFocused={isFocused} isFilled={isFilled} isErrored={!!error}>
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={inputRef}
        {...rest}
      />
      {error && <span>{error}</span>}
    </Container>
  )
}

export default Input;
