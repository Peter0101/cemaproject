// @ts-nocheck
import {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import { IonContent, IonCard, IonLabel, IonCardHeader, IonCardSubtitle, IonCardTitle, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonText } from '@ionic/react';
import Header from '../components/Header';
import './Home.css';

import {connect} from '../Api.js'

const Tab1: React.FC = () => {
  const history = useHistory()

  const user = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    connect((done, err) => {
      if(done) {
        return
      }
      if(err) {
        history.push('/login')
      }
    })
  }, [])
  return (
    <IonPage>
      
      <Header />

 
      <IonContent fullscreen>
      <IonGrid>
        <IonRow className='ion-justify-content-center ion-padding'>
          <IonText className='titulo'><h1 className='ion-no-margin' style={{fontWeight: '500'}}>Bom dia, {user.user.details.name}!</h1></IonText>
        </IonRow>
        <IonRow className='ion-justify-content-center'>
        <IonText className='titulosecundario'><h5 className='ion-no-margin'>Últimas notícias</h5></IonText>
        </IonRow>
      </IonGrid>
      
      <IonGrid>
        <IonRow>
          <IonCard className='newsCard ion-margin'>
            <img src="public/news/bullying.png" />
            <IonCardHeader>
            <IonCardSubtitle>#ÉDaMinhaContaSim</IonCardSubtitle>
              <IonCardTitle>Semana contra o Bullying</IonCardTitle>
            </IonCardHeader>
          </IonCard>
        </IonRow>
      
      

      <IonCard className='newsCard ion-margin'>
        <img src="public/news/familia.png" />
        <IonCardHeader>
        <IonCardSubtitle>Conheça as medidas do nosso colégio</IonCardSubtitle>
          <IonCardTitle>Família, Escola e Comunidade</IonCardTitle>
        </IonCardHeader>
      </IonCard>

      </IonGrid>

      </IonContent>
      
    </IonPage>
  );
};

export default Tab1;
