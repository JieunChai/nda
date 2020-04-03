import jwt from 'jsonwebtoken';
import { refreshAPI, userAPI } from 'api/agent';
import { authHeader } from 'helpers/authHeader';
import { userRequest, userSuccess, userFailure, refreshRequest, refreshSuccess, refreshFailure, userLogout } from 'modules/base';

export const requestMiddleware = (store: any) => (next: any) => (action: any) => {
  if(typeof (action) === 'function') {
    return next(action);
  }
  if (
    action.type.includes('TOKEN')
  ) {
    return next(action);
  }

  const storage = JSON.parse(localStorage.getItem('user') || '{}');
  const { access, refresh } = storage;
  const accessToken: any = jwt.decode(access);
  const refreshToken: any = jwt.decode(refresh);

  if (refreshToken && Date.now() >= refreshToken.exp * 1000) {
    next(userLogout());
  }
  
  if (accessToken && Date.now() >= accessToken.exp * 1000) {
    const getAccessToken = async () => {
      next(refreshRequest());
      await refreshAPI({ refresh })
        .then(res => {
          next(refreshSuccess(res.data));
        }).catch(err => {
          next(refreshFailure(err));
        })
      next(userRequest());
      await userAPI({ headers: { ...authHeader() } })
        .then(res => {
          next(userSuccess(res.data));
        }).catch(err => {
          next(userFailure(err));
      });
    };
    getAccessToken();
  } else {
    const currentUser = store.getState().base.user;
    if (!currentUser) {
      next(userRequest());
      userAPI({ headers: { ...authHeader() } })
        .then(res => {
          next(userSuccess(res.data));
        }).catch(err => {
          next(userFailure(err));
      })
    }
  };
  return next(action);
}