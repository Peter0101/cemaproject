import React from 'react';
import { IonCard, IonGrid, IonCol, IonRow, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonText, IonButton } from '@ionic/react'
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
      <IonCardContent>
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
          <IonRow>
            <IonCol>
              <IonText className='complaintDescription'>A sua denúncia foi enviada e logo entrará em análise</IonText>
            </IonCol>
            <IonCol>
              <IonButton>Ler denúncia</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  )
};

export default cardenuncia;
