import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import MainContent from './components/Main/MainContent';
import Persons from './components/Main/Persons';
import Albums from './components/Main/Albums/Albums';
import Stories from './components/Main/Stories/Stories';
import Services from './components/Main/Services';
import Learn from './components/Main/Learn';
import DownloadPhoto from './components/Main/Albums/DownloadPhoto';
import Detail from './components/Main/Stories/Detail';
import AddStory from './components/Main/Stories/AddStory';

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={ MainContent } />
        <Route exact path='/persons/' component={ Persons } />
        <Route exact path='/albums/' component={ Albums } />
        <Route exact path='/albums/add' component={ DownloadPhoto } />
        <Route exact path='/stories/' component={ Stories } />
        <Route exact path='/stories/1' component={ Detail} />
        <Route exact path='/stories/add' component={ AddStory } />
        <Route exact path='/services/' component={ Services } />
        <Route exact path='/learn/' component={ Learn } />
      </Switch>
    );
  }
}
