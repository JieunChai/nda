import React, { useEffect, useState } from 'react';
import LogIn from 'components/Login/LogIn';
import { useDispatch, useSelector } from 'react-redux';
import { BaseActions } from 'actions/base';
import { RootState } from 'reducers';
import { History } from 'history';

interface Props {
  history: History
}

const LoginContainer: React.FC<Props> = ({ history }) => {

  const dispatch = useDispatch();
  
  const user = useSelector((state: RootState) => state.base.user);
  
  const [state, setState] = useState({userId: '', pw: ''});
  
  const onValueChange = (e: any) => {
    const { name, value } = e.target;
    setState((prevState: any) => ({ ...prevState, [name]: value}));
  };

  const onClickLogin = () => {
    dispatch(BaseActions.getToken({userId: state.userId, pw: state.pw}));
    dispatch(BaseActions.setUser(user));

  useEffect(() => {
    if(user) {
      history.push('/visitorlist') 
    }
  }, [user]);

  console.log(user, "로그인여부확인");

  return <LogIn 
    onValueChange={onValueChange}
    onClickLogin={onClickLogin}
    />
  };
};

export default LoginContainer;