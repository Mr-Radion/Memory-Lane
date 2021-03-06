import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import {
  Home,
  Landing,
  UserAuthorization,
  // Album,
  UserAlbums,
  AddPerson,
  EditPerson,
  AlbumItem,
  Photo,
  DownloadPhoto,
  Persons,
  Person,
  Profile,
  UserRegistration,
  UserRegistrationCompleting,
  UserFullName,
  Stories,
  StoryNew,
  StoryView,
  // Services,
  // Learn,
  PageNotFound,
  SearchResult,
} from "./Main.jsx";

export default class Routers extends Component {
  render() {
    const {
      // isAuthorized,
      sessionID,
      // hasFullName
    } = this.props;

    return (
      <>
        {(sessionID ) && (
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route
              exact
              path="/search/:query"
              render={(props) => (
                <SearchResult key={props.match.params.query} />
              )}
            />
            <Route exact path="/persons/" component={Persons} />
            <Route exact path="/albums/" component={UserAlbums} />
            <Route exact path="/albums/:id" component={AlbumItem} />
            <Route exact path="/photo/add/" component={DownloadPhoto} />
            <Route exact path="/photo/:id" component={Photo} />
            <Route exact path="/stories/" component={Stories} />
            <Route exact path="/stories/add/" component={StoryNew} />
            <Route path="/stories/:id" component={StoryView} />
            <Route exact path="/profile/" component={Profile} />
            <Route exact path="/persons/:id" component={Person} /> 
            <Route exact path="/addperson" component={AddPerson} /> 
            <Route exact path="/persons/edit/:id" component={EditPerson} />

            {/* 
            <Route exact path="/services/" component={Services} />
            <Route exact path="/learn/" component={Learn} />
            */}

            <Route exact path="/">
              <Redirect to="/home" />
              <Route path="/home" component={Home} />
            </Route>
            <Route path="*" component={PageNotFound} />
          </Switch>
        )}
        {(!sessionID ) && (
          <Switch>
            <Route exact path="/auth/" component={UserAuthorization} />
            <Route exact path="/register/" component={UserRegistration} />
            <Route exact path="/userfullname/" component={UserFullName} />
            <Route
              exact
              path="/check/auth-email/"
              component={UserRegistrationCompleting}
            />
            {/* <Route exact path="/funnel/" component={Funnel} /> */}
            <Route exact path="/" component={Landing} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        )}
      </>
    );
  }
}
