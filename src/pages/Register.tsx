// @ts-nocheck
import {useState, useEffect} from 'react'
import {IonPage, IonContent, IonGrid, IonInput, IonRow, IonTextarea, IonButton, IonText, IonSelect, IonSelectOption} from '@ionic/react'
import Header from '../components/Header'
import './Register.css'

import {register} from '../Api.js'

function Register() {
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [nameValue, setNameValue] = useState('')
    const [ageValue, setAgeValue] = useState()
    const [levelValue, setLevelValue] = useState('')

    const sendRegister = () => {
        const data = {
            email: emailValue,
            password: passwordValue,
            name: nameValue,
            age: ageValue,
            level: levelValue
        }

        register(data, (done, err) => {
            if(done) {
                return
            }
            if(err) {
                console.log(err)
            }
        })
    }
    return(
        <IonPage>
            <IonContent fullscreen>
                <Header />

                <IonGrid>
                    <IonRow className='ion-justify-content-center ion-padding'>
                        <IonText><h1 className='title ion-no-margin'>Criar conta</h1></IonText>
                    </IonRow>
                </IonGrid>
                <IonGrid>
                    <IonRow className='textAreaBox ion-justify-content-center ion-margin'>
                        <IonInput  placeholder='Email' type="email"  value={emailValue} onIonChange={e => {setEmailValue(e.detail.value)}} className='ion-margin-horizontal' />
                    </IonRow>
                    <IonRow className='textAreaBox ion-justify-content-center ion-margin'>
                        <IonInput placeholder='Senha' type="password" value={passwordValue} onIonChange={e => {setPasswordValue(e.detail.value)}} className='ion-margin-horizontal' />
                    </IonRow>
                    <IonRow className='textAreaBox ion-justify-content-center ion-margin'>
                        <IonTextarea placeholder='Nome*' value={nameValue} onIonChange={e => {setNameValue(e.detail.value)}} className='ion-margin-horizontal' />
                    </IonRow>
                    <IonRow className='textAreaBox ion-justify-content-center ion-margin'>
                        <IonInput placeholder='Idade*' type="number" value={ageValue} onIonChange={e => {setAgeValue(e.detail.value)}} className='ion-margin-horizontal' />
                    </IonRow>
                    <IonRow className='textAreaBox ion-justify-content-center ion-margin'>
                        <IonSelect placeholder='Nível*' interface='popover' onIonChange={e => {setLevelValue(e.detail.value)}} className='ion-margin-horizontal'>
                            <IonSelectOption value='INF'>Educação Infantil</IonSelectOption>
                            <IonSelectOption value='EFI'>Ensino Fundamental I</IonSelectOption>
                            <IonSelectOption value='EFII'>Ensino Fundamental II</IonSelectOption>
                            <IonSelectOption value='EM'>Ensino Médio</IonSelectOption>
                        </IonSelect>
                    </IonRow>
                    <IonRow className='ion-justify-content-center'>
                        <IonButton className='loginButton' onClick={sendRegister}>Criar conta</IonButton>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default Register