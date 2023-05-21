// @ts-nocheck

import {useState, useEffect} from 'react'
import {IonPage, IonContent, IonGrid, IonRow, IonTextarea, IonButton, IonText} from '@ionic/react'
import Header from '../components/Header'
import './Login.css'

import {login} from '../Api.js'

function Login() {

    const sendLogin = () => {
        const credentials = {
            email: document.getElementsByClassName('emailTextArea').value,
            password: document.getElementsByClassName('passwordTextArea').value
        }

        login(credentials, (done, err) => {
            if(done) {
                return true
            }

            if(err) {
                return err
            }
        })
    }
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
                        <IonTextarea placeholder='Email' className='textarea emailTextArea ion-margin-horizontal' />
                    </IonRow>
                    <IonRow className='textAreaBox ion-justify-content-center ion-margin'>
                        <IonTextarea placeholder='Senha' className='textarea passwordTextArea ion-margin-horizontal' />
                    </IonRow>
                    <IonRow className='ion-justify-content-center'>
                        <IonButton className='loginButton' onClick={sendLogin}>Login</IonButton>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default Login