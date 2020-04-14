import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { LoginContainer } from 'containers/LogInContainer';
import { VisitorListContainer } from 'containers/VisitorListContainer';
import { RootState } from 'reducers';
import { History } from 'history';
import { useSelector } from 'react-redux';

interface Props {
  history: History;
}

const App: React.FC<Props> = (({history}) => {  
  const user = useSelector ( (state: RootState) => state.base.user);

  useEffect(() => {
    if(history.location.pathname === '/'){
      if(user){
        history.push('/visitorlist');
      }else{
        history.push('/');
      }
    }
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={LoginContainer} />
      <Route path="/visitorlist" component={VisitorListContainer} />
      {/* <Route exact path="/visitorlist/:id" component={VisitorCardContainer} />
      <Route exact path="/crewlist" component={CrewListContainer} />
      <Route exact path="/crewdlist/:id" component={CrewDetailContainer} /> */}
    </Switch>
  );
});

export default App;
