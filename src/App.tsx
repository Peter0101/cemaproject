import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { notifications, alarm, home, warning, person, alertCircle } from 'ionicons/icons';
import Home from './pages/Home';
import Create from './pages/Create';
import History from './pages/History';
import Notifications from './pages/Notifications'
import Login from './pages/Login'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import './App.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/history">
            <History />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/notifications">
            <Notifications />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" className='tabbar'>

          <IonTabButton tab="home" href="/home">
          <IonIcon aria-hidden="true" icon={home}/>
          </IonTabButton>

          <IonTabButton tab="history" href="/history">
            <IonIcon aria-hidden="true" icon={alarm}/>
          </IonTabButton>

          <IonTabButton className="complaint" tab="create" href="/create">
            <IonIcon className="complaintIcon" aria-hidden="true" icon={alertCircle}/>
          </IonTabButton>

          <IonTabButton tab="notifications" href="/notifications">
            <IonIcon aria-hidden="true" icon={notifications}/>
          </IonTabButton>

          <IonTabButton tab="tab5" href="/tab3">
            <IonIcon aria-hidden="true" icon={person}/>
          </IonTabButton>

        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
