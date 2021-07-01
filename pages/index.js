import Head from 'next/head'
import PrincipalView from '../components/DeskVersion/PrincipalView'
import Secondview from '../components/DeskVersion/SecondView'
import ThirdView from '../components/DeskVersion/ThirdView'
import FourthView from '../components/DeskVersion/FourthView'
import FifthView from '../components/DeskVersion/FifthView'
import HeaderMob from '../components/MobileVersion/HeaderMob'
import PrincipalViewMob from '../components/MobileVersion/PrincipalViewMob'
import SecondViewMob from '../components/MobileVersion/SecondViewMob'
import ThirdViewMob from '../components/MobileVersion/ThirdViewMob'
import FooterMob from '../components/MobileVersion/FooterMob'


export default function Home() {
  return (
    <div >
      <Head>
        <title>SeaHorse Blue Inc</title>
        <meta name="Sea Horse Blue Inc" content="Generated using create next app by Frank Pérez and Adrian Valdés" />
        <link rel="icon" href="/logo.ico" />
      </Head>


      <main>
        <PrincipalView />
        <Secondview />
        <ThirdView />
        <FourthView />
        <FifthView />

        <HeaderMob />
        <PrincipalViewMob />
        <SecondViewMob />
        <ThirdViewMob />
        <FooterMob />
      </main>
    
      
    </div>
  )
}
