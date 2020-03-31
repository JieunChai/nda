import React from 'react';
import { Route, Switch } from 'react-router';
import { LoginContainer } from 'containers/LogInContainer';
import { VisitorListContainer } from 'containers/VisitorListContainer';
import { ProtectedRoute } from 'containers/ProtectedRoute';

interface Props {}

const App: React.FC<Props> = (() => {
  
  return (
    <Switch>
      <Route exact path="/" component={LoginContainer} />
      <ProtectedRoute exact path="/visitorlist" component={VisitorListContainer} />
      {/* <ProtectedRoute exact path="/visitordetail/:id" component={VisitorDetailPage} />
      <ProtectedRoute exact path="/crewlist" component={CrewContainer} />
      <ProtectedRoute exact path="/crewdetail/:id" component={CrewDetailPage} /> */}
    </Switch>
  );
});

export default App;