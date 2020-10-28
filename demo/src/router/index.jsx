import React from "react";
import { Route } from "react-router-dom";
import Routers from "./config";

export default React.memo(() => (
  <>
    {
      Routers.map(route => (
        <Route path={route.path} component={route.component}></Route>
      ))
    }
  </>
)
)