import { IonPage, IonContent, IonGrid, IonRow, IonText, IonCard, IonCardHeader, IonCardContent, IonToolbar, IonButton } from '@ionic/react'
import './Notifications.css'
import Header from '../components/Header'
import CardNotification from '../components/CardNotification'

function Notifications() {
    return(
        <IonPage>
            <Header />

            <IonContent fullscreen>
                <IonGrid>
                    <IonRow className='ion-justify-content-center ion-padding'>
                        <IonText className='title'><h1 className='ion-no-margin'>Suas notificações</h1></IonText>
                    </IonRow>
                </IonGrid>
                <IonGrid>
                    <IonRow className='ion-justify-content-center'>
                        <CardNotification />
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default Notifications