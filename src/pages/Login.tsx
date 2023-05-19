import {IonPage, IonContent, IonGrid, IonRow, IonTextarea, IonButton, IonText} from '@ionic/react'
import Header from '../components/Header'
import './Login.css'

function Login() {
    return(
        <IonPage>
            <IonContent fullscreen>
                <Header />

                <IonGrid>
                    <IonRow className='ion-justify-content-center ion-padding'>
                        <IonText><h1 className='ion-no-margin'>Login</h1></IonText>
                    </IonRow>
                </IonGrid>
                <IonGrid>
                    <IonRow className='textAreaBox ion-justify-content-center ion-margin'>
                        <IonTextarea placeholder='Email' className='textarea ion-margin-horizontal' />
                    </IonRow>
                    <IonRow className='textAreaBox ion-justify-content-center ion-margin'>
                        <IonTextarea placeholder='Senha' className='textarea ion-margin-horizontal' />
                    </IonRow>
                    <IonRow className='ion-justify-content-center'>
                        <IonButton className='loginButton'>Login</IonButton>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default Login