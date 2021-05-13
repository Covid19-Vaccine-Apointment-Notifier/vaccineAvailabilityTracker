import React, { useContext, useState, useEffect } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Public/Home/home";
import { getCookie, checkRoute } from "./utils";
import { Context } from "./globalState/Store";
import Loader from "./funtionals/Loader";

const Routes = (props) => {
    return (
      <Switch location={location}>
        <Route
          exact
          path="/"
          key="home"
          render={(location) =>
              <Home
              location={location}
              key="home"
              loggedInUser={user.fetchLoggedInUser.data}
            />
          }
        />

        <Route path="/*" render={() => <div> Not found </div>} />
      </Switch>
    );
};

export default Routes;
