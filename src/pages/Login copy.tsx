import {IonPage, IonContent, IonGrid, IonRow, IonTextarea, IonButton, IonText} from '@ionic/react'
import Header from '../components/Header'
import 'Login.css'

function Login() {
    return(
        <IonPage>
            <IonContent fullscreen>
                <Header />

                <IonGrid>
                    <IonRow>
                        <IonText><h1>Login</h1></IonText>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}