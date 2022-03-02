import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { Dashboard } from "../../pages/Dashboard";
import { Catalog } from "../../pages/Catalog";
import { Collection } from "../../pages/Collection";
import { Library } from "../../pages/Library";
import { CollectionView } from "../../pages/CollectionView";
import { useNavigation, prefixRoute } from "../../utils/utils.routing";
import { ROUTES } from "../../constants";

export const Routes = () => {
  useNavigation();

  return (
    <Switch>
      <Route exact path={prefixRoute(ROUTES.Dashboard)} component={Dashboard} />
      <Route exact path={prefixRoute(ROUTES.Catalog)} component={Catalog} />
      <Route exact path={prefixRoute(ROUTES.Collection)} component={Collection} />
      <Route exact path={prefixRoute(ROUTES.Library)} component={Library} />
      <Route exact path={prefixRoute(ROUTES.CollectionView)} component={CollectionView} />
    </Switch>
  );
};
