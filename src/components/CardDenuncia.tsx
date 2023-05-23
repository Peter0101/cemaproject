import React from 'react';
import { IonCard, IonGrid, IonCol, IonRow, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonText, IonButton, IonIcon } from '@ionic/react'
import { chevronUpOutline } from 'ionicons/icons'
import './cardenuncia.css';


interface ContainerProps {
  status: string;
  identificador: string;
  data: string;
}

function cardenuncia(props: ContainerProps) {
  return (
    <IonCard>
      <IonCardHeader className='header'>
        <IonCardTitle>Denúncia #{props.identificador}</IonCardTitle>
        <IonRow className="borda"/>
      </IonCardHeader>
      <IonCardContent className='ion-padding-horizontal'>
        <IonGrid className='ion-no-margin'>
          <IonRow>
          <IonCol className='ion-no-padding'>
            <IonCardSubtitle className='statustitle'>Status:</IonCardSubtitle>
            <IonCardSubtitle className='StatusDenuncia'>{props.status}</IonCardSubtitle>
          </IonCol>
          <IonCol className='ion-no-padding'>
            <IonCardSubtitle className='ion-no-padding ion-float-right datadenuncia'>{props.data}</IonCardSubtitle>
          </IonCol>
          </IonRow>
          <IonRow className='ion-padding-top'>
            <IonCol className='ion-no-padding'>
              <IonText className='complaintDescription'>A sua denúncia foi enviada e logo entrará em análise</IonText>
            </IonCol>
            <IonCol className='seeButtonBox ion-no-padding'>
              <IonButton fill='clear' size='small' id="readdenuncia" className='seeButton ion-no-padding'>
                <IonIcon slot='start' icon={chevronUpOutline} className='seeButtonIcon'/>
                Ler denúncia
                </IonButton>
                
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
      

  )
};

/*
<IonAlert
      trigger="readdenuncia"
      header="Alert"
      subHeader="Important message"
      message="This is an alert!"
      buttons={['OK']}
      ></IonAlert>
*/

export default cardenuncia;
