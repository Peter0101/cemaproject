import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonText, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonToolbar, IonButton } from '@ionic/react'
import './CardNotification.css'

function CardNotification() {
    return(
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Semana contra o bullying</IonCardTitle>
                <IonRow />
            </IonCardHeader>
            <IonCardContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            #ÉDaMinhaContaSim
                        </IonCol>
                        <IonCol>
                            09/05/2023
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonCardContent>
        </IonCard>
    )
}

export default CardNotification