import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonText, IonRow, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import Header from '../components/Header';
import './History.css';

import CardDenuncia from '../components/CardDenuncia';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>

        <IonGrid>
          <IonRow className='ion-justify-content-center ion-padding'>
            <IonText className='title'><h1 className='ion-no-margin'>Seu histórico</h1></IonText>
          </IonRow>
        </IonGrid>
        <IonGrid>
          <IonRow className='ion-justify-content-center'>

            <CardDenuncia status="Enviada" identificador="124" data="02/05/2023"/>

          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
