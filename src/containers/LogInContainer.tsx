import React, { useEffect } from 'react';
import LogIn from 'components/Login/LogIn';
import useInputs from '../hooks/useInputs';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from '../modules/base';
import { RootState } from '../modules/index';
import { history } from '../helpers/store';

interface Props {
  
}

const LoginContainer : React.FC<Props> = () => {

  const dispatch = useDispatch();
  const base = useSelector((state: RootState) => state.base);

  const { isLoggedIn } = base;

  const [inputs, onChange] = useInputs({
    userId: '',
    pw: '',
  });

  const onClickLogin = () => {
    dispatch(getToken(inputs.userId, inputs.pw));
  };

  useEffect(() => {
    if(isLoggedIn) {
      history.push('/visitorlist');
    }
  }, [isLoggedIn])

  return <LogIn 
    userId={inputs.userId}
    pw={inputs.pw}
    onChange={onChange}
    onClickLogin={onClickLogin}
    />
}

export { LoginContainer };