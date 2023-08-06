import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { refreshCurrentUser } from "./redux/authorization/auth-operations";
import { selectRefreshStatus } from "./redux/authorization/auth-selectors";
import { Container } from "./App.styled";
import { AppBar } from "./components/AppBar/AppBar";
import { WelcomePage, RegistryPage, LoginPage, ContactsPage } from "./pages";
import { PrivateRoute } from "./components/PrivateRoute";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { useAppDispatch, useAppSelector } from "./hooks/redux";

export function App() {
  const dispatch = useAppDispatch();
  const isRefreshing = useAppSelector(selectRefreshStatus);

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Container>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route
              index
              element={<RestrictedRoute element={<WelcomePage />} />}
            />
            <Route
              path="registry"
              element={<RestrictedRoute element={<RegistryPage />} />}
            />
            <Route
              path="login"
              element={<RestrictedRoute element={<LoginPage />} />}
            />
            <Route
              path="contacts"
              element={<PrivateRoute element={<ContactsPage />} />}
            />
          </Route>
        </Routes>
      </Container>
    )
  );
}
