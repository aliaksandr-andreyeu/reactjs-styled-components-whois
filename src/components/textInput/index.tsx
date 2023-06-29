import React, { FC, FormEvent, ChangeEvent } from 'react';
import { TextInputStyle } from './styles';

interface IProps {
  onChange?: (value: string) => void;
  onSubmit?: () => void;
}

const TextInput: FC<IProps> = ({ onChange, onSubmit }) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.value);
  };

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    onSubmit && onSubmit();
  };
  return (
    <TextInputStyle>
      <form onSubmit={onSubmitHandler}>
        <input placeholder='Search for any IP address' type='text' onChange={onChangeHandler} />
        <button onClick={onSubmitHandler}>Send</button>
      </form>
    </TextInputStyle>
  );
};

export default TextInput;
