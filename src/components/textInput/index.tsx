import React, { FC, ChangeEvent, useEffect, useState, useLayoutEffect } from 'react';

interface IProps {
  onChange?: (value: string) => void;
  onSubmit?: () => void;
}

const TextInput: FC<IProps> = ({ onChange, onSubmit }) => {
  useEffect(() => {
    console.log('TextInput RENDER');
  });

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.value);
    console.log(event.target.value);
  };

  const onSubmitHandler = () => {
    onSubmit && onSubmit();
  };
  return (
    <>
      <input placeholder='Search for any IP address' type='text' onChange={onChangeHandler} />
      <button onClick={onSubmitHandler}>Send</button>
    </>
  );
};

export default TextInput;
