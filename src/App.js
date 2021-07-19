import React, {  lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import MembersProvider from "./context/MembersContext";

function App() {
  const MembersPage = lazy(() => import("./pages/MembersPage/MembersPage"));
  const TimelinePage = lazy(() => import("./pages/TimelinePage/TimelinePage"));
  const MemberDetailsPage = lazy(() =>
    import("./pages/MemberDetailsPage/MemberDetailsPage")
  );
  return (
    <Router>
      <Layout>
        <MembersProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route name="timeline" exact path="/">
                <TimelinePage />
              </Route>
              <Route name="members" path="/members">
                <MembersPage />
              </Route>
              <Route name="memberDetails" path="/member/:id">
                <MemberDetailsPage />
              </Route>
            </Switch>
          </Suspense>
        </MembersProvider>
      </Layout>
    </Router>
  );
}

export default App;
