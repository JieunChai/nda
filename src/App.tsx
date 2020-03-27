import React from 'react';
import { Route, Switch } from 'react-router';
// import { useSelector } from 'react-redux';
// import path from 'path';
// import { RootState } from 'modules';
import { History } from 'history';
import { LoginContainer } from 'containers/LogInContainer';

interface Props {
  history: History;
}

const App: React.FC<Props> = (({ history }) => {
  
  // const user = useSelector((state: RootState) => state.base.user);

  // React.useEffect( () => {
    
  //   if(history.location.pathname === '/') {
  //     if(user) {
  //       const location = path.join('/')
  //       history.push(location);
  //     } else {
  //       const location = './login';
  //       history.push(location);
  //     }
  //   }
  // }, [history, user] );

  return (
    <>
    <Switch>
      <Route exact path="/" component={LoginContainer} />
      {/* <Route exact path="/visitorlist" component={VisitorContainer} />
      <Route exact path="/visitordetail/:id" component={VisitorDetailPage} />
      <Route exact path="/crewlist" component={CrewContainer} />
      <Route exact path="/crewdetail/:id" component={CrewDetailPage} /> */}
    </Switch>
    </>
  );
});

export default App;