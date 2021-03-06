import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createTheme } from "@material-ui/core/styles";
import { StylesProvider, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { store } from "./redux/store";
import { MainLayout } from "./components/layout/MainLayout/MainLayout";
import { Header } from "./components/layout/Header/Header";
import { Homepage } from "./components/views/Homepage/Homepage";
import { Post } from "./components/views/Post/Post";
import { PostEdit } from "./components/views/PostEdit/PostEdit";
import { PostAdd } from "./components/views/PostAdd/PostAdd";
import { NotFound } from "./components/views/NotFound/NotFound";
import { YourPosts } from "./components/views/YourPosts/YourPosts";

const theme = createTheme({
  palette: {
    primary: { main: "#2B4C6F" },
  },
});

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/login" component={Header} />
              <Route exact path="/post/add" component={PostAdd} />
              <Route exact path="/post/:id" component={Post} />
              <Route exact path="/post/:id/edit" component={PostEdit} />
              <Route exact path="/yourposts" component={YourPosts} />
              <Route path="*" component={NotFound} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export { App };
