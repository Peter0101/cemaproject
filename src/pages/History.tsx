// @ts-nocheck
import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonText, IonRow, IonModal, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton } from '@ionic/react';
import Header from '../components/Header';
import './History.css';

import CardDenuncia from '../components/CardDenuncia';

import {connect, get} from '../Api.js'

const Tab3: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalText, setModalText] = useState('')
  const [data, setData] = useState([])
  const history = useHistory()

  const user = JSON.parse(localStorage.getItem('user'))
  
  useEffect(() => {
    connect((done, err) => {
      if(done) {
        
      }
      if(err) {
        history.push('/login')
      }
    })
    readComplaints()
  }, [])

  function readComplaints() {
    get('/read', (done, err) => {
      if(done) {
        setData(done.data)
      }
      if(err) {
        console.log(err)
      }
    })
  }

  function showModal(text) {
    setModalText(text)
    setModalOpen(true)
  }

  function closeModal() {
    setModalText('')
    setModalOpen(false)
  }

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>

        <IonGrid>
          <IonRow className='ion-justify-content-center ion-padding'>
            <IonText className='title'><h1 className='ion-no-margin'>Seu histórico</h1></IonText>
          </IonRow>
        </IonGrid>
        <IonGrid>
          <IonRow className='ion-justify-content-center'>
          {data.reverse().map((item, index) => (
              <CardDenuncia key={index} status={item.status} identificador={item._id} data={new Date(item.date).toLocaleDateString()} openBody={() => {showModal(item.body)}}/>
            ))}

          </IonRow>
        </IonGrid>
        <IonModal isOpen={modalOpen} onDidDismiss={closeModal}>
          <IonHeader className='modal header'>
            <IonText className='title ion-justify-content-center flex'><h1 className='ion-no-margin'>Denúncia</h1></IonText>
          </IonHeader>
          <IonContent>
            {modalText}
            <IonButton onClick={closeModal}>Fechar</IonButton>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
