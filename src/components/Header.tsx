import './Header.css';
import { IonImg, IonGrid, IonRow, IonHeader, IonToolbar } from '@ionic/react'


function Header() {
  return (
    <IonHeader style={{backgroundColor: 'transparent'}} className='ion-no-border'>
      <IonToolbar className='toolbar ion-no-padding'>
      <IonGrid className='ion-no-padding'>
        <IonRow className='ion-justify-content-center'>
          <IonImg src='/public/logo.png' style={{width: '50vw'}}></IonImg>
        </IonRow>
        <IonRow style={{borderBottom: '0.2vh solid #26348B', marginLeft: '5vw', marginRight: '5vw'}}/>
      </IonGrid>
      </IonToolbar>
    </IonHeader>
  )
};

export default Header;
