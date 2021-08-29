import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Loader from '../shared/components/Loader';
import Header from '../client/Header';
import { routes } from './routes';
import PublicPage from './PublicRoute';
import PrivetPage from './PrivetRoute';
import { getCurrentUser } from '../redux/auth/auth-operations';
import { fetchAllTasks, getCards } from '../redux/cards/cards-operations';

const AuthPage = lazy(() => import('../client/pages/AuthPage'));
const CardsPage = lazy(() => import('../client/pages/CardsPage'));
const NotFoundPage = lazy(() => import('../client/pages/NotFoundPage'));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
    dispatch(fetchAllTasks());
    dispatch(getCards());
  }, [dispatch]);

  const { auth, cards } = routes;

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Header />
        <Switch>
          <PublicPage
            exact
            path={auth}
            restricted
            component={AuthPage}
            redirectTo={cards}
          />
          <PrivetPage
            exact
            path={cards}
            redirectTo={auth}
            component={CardsPage}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
