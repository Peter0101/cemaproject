import { IonButton, IonContent, IonIcon, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonCardContent, IonCard, IonCheckbox, IonTextarea, IonGrid, IonRow, IonRadioGroup, IonRadio } from '@ionic/react';
import Header from '../components/Header';
import './Create.css';
import { send } from 'ionicons/icons';

const Tab2: React.FC = () => {
  return (
    <IonPage>
          <Header />

      <IonContent fullscreen>

        <IonGrid>
          <IonRow className='ion-justify-content-center ion-padding'>
            <IonText className='title'><h1 className='ion-no-margin'>Criar denúncia</h1></IonText>
          </IonRow>
          <IonRow className='ion-justify-content-center'>
            <IonText className='titulosecundario'><h6>Deseja criar uma denúncia anônima?</h6></IonText>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow className='ion-justify-content-center'>
            <IonToolbar className='privateChoiceBox'>
              <IonRadioGroup>
                <IonRadio className='ion-float-left ion-margin-start'>Sim</IonRadio>
                <IonRadio className='ion-float-right ion-margin-end'>Não</IonRadio>
              </IonRadioGroup>
            </IonToolbar>
          </IonRow>
          <IonRow className='textAreaBox ion-margin'>
            <IonTextarea className="textArea ion-margin-horizontal" placeholder="Escreva a sua denúncia" autoGrow={false}></IonTextarea>
          </IonRow>
          <IonRow className='ion-justify-content-center ion-padding-bottom'>
            <IonButton className='sendButton'>
              Enviar
            </IonButton>
          </IonRow>
          <IonRow className='ion-justify-content-center'>
            <IonText style={{ color: '#26348B' }} className='tituloterciario'>Seus dados (nome, série, IP, etc) estarão seguros e não serão usados para outros fins diferentes da análise da denúncia e tomada de medidas cabíveis.</IonText>
          </IonRow>
        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
