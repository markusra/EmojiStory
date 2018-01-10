import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Welcome from './containers/Welcome/index'
import EmojiStory from './containers/EmojiStory/index'
import NotFound from './containers/NotFound/index'

const Main = () => (
    <Switch>
      <Route exact path='/' component={Welcome}/>
      <Route exact path='/emojistory' component={EmojiStory}/>
      <Route component={NotFound} />
    </Switch>
)

export default Main