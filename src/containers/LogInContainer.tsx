import React from 'react';
import LogIn from 'components/Login/LogIn';
import useInputs from '../hooks/useInputs';
import { useDispatch } from 'react-redux';
import { getToken } from '../modules/base';

interface Props {
  
}

const LoginContainer : React.FC<Props> = () => {

  const dispatch = useDispatch();

  const [inputs, onChange] = useInputs({
    userId: "",
    pw: "",
  });

  const onClickLogin = () => {
    dispatch(getToken(inputs.userId, inputs.pw));
  };

  return <LogIn 
    userId={inputs.userId}
    pw={inputs.pw}
    onChange={onChange}
    onClickLogin={onClickLogin}
    />
}

export { LoginContainer };