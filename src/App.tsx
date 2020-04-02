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
      <Route path="/visitorlist" component={VisitorListContainer} />
      {/* <ProtectedRoute exact path="/visitorlist/:id" component={VisitorCardContainer} />
      <ProtectedRoute exact path="/crewlist" component={CrewListContainer} />
      <ProtectedRoute exact path="/crewdlist/:id" component={CrewDetailContainer} /> */}
    </Switch>
  );
});

export default App;
