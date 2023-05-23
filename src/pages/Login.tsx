// @ts-nocheck
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { IonPage, IonContent, IonImg, IonGrid, IonRow, IonTextarea, IonLabel, IonButton, IonText } from '@ionic/react'
import Header from '../components/Header'
import './Login.css'

import { login, connect } from '../Api.js'

function Login() {
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')

    const history = useHistory()

    useEffect(() => {
        connect((done, err) => {
            if (done) {
                history.push('/home')
            }
            if (err) {
                return
            }
        })
    }, [])

    const sendLogin = () => {
        const credentials = {
            email: emailValue,
            password: passwordValue
        }

        login(credentials, (done, err) => {
            if (done) {
                history.push('/home')
                return true
            }
            if (err) {
                console.log(err)
                return err
            }
        })
    }

    const register = () => {
        history.push('/register')
    }
    return (
        <IonPage>
            <IonContent fullscreen>

                <IonRow className='ion-justify-content-center'>
                    <IonImg src='/public/logo.png' style={{ width: '50vw' }}></IonImg>
                </IonRow>

                <IonGrid>
                    <IonRow className='ion-justify-content-center ion-padding'>
                        <IonText><h1 className='title ion-no-margin'>Login</h1></IonText>
                    </IonRow>
                </IonGrid>
                <IonGrid>
                    <IonRow className='textAreaBox ion-justify-content-center ion-margin'>
                        <IonTextarea placeholder='Email' value={emailValue} onIonChange={e => { setEmailValue(e.detail.value) }} className='ion-margin-horizontal' />
                    </IonRow>
                    <IonRow className='textAreaBox ion-justify-content-center ion-margin'>
                        <IonTextarea placeholder='Senha' value={passwordValue} onIonChange={e => { setPasswordValue(e.detail.value) }} className='ion-margin-horizontal' />
                    </IonRow>
                    <IonRow className='ion-justify-content-center'>
                        <IonButton className='loginButton' onClick={sendLogin}>Login</IonButton>
                    </IonRow>
                    <IonRow className='ion-justify-content-center ion-padding'>
                        <IonLabel className='registerButton' onClick={register}>Nao possui uma conta? Registre-se</IonLabel>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default Login