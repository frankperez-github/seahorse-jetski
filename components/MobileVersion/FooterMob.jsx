import Image from 'next/image'
import ReviewMob from './ReviewMob'

export default function FooterMob(){

    function ShowMessage(){
        document.getElementById("ReviewPh").style.display="none"
        document.getElementById("MessagePh").style.display="block"
    }
    function ShowReview(){
        document.getElementById("ReviewPh").style.display="block"
        document.getElementById("MessagePh").style.display="none"
    }

    return(
        <div className="FifthViewMob">
            <ReviewMob />
            <div className="Footerph">

                <div className="Footerphone">

                    <div className="logofootph">
                        <Image src="/logo.svg" width="1000%" height="1000%" />
                    </div>

                    
                
                    <div  className="RightfootPh">
                                
                        <div className="Followus">

                            <div className="largescript">
                                <Image src="/largescript.svg" width="100%" height="100%" />
                            </div>
                            
                            <p className="FollowPh">FOLLOW US</p>

                            
                            <div className="largescript">
                                <Image src="/largescript.svg" width="100%" height="100%" />
                            </div>

                        </div>
                    
                        <div className="Networks">

                            <a className="netlogoMob" href="https://m.facebook.com/seahorseblueinc/">
                                <div className="netlogoMob">
                                    <Image src="/facebook.svg" width="100%" height="100%"  />
                                </div>
                            </a>

                            <a className="netlogoMob" href="https://wa.me/7866639117">
                                <div className="netlogoMob">
                                    <Image src="/whatsapp.svg" width="100%" height="100%" />
                                </div>
                            </a>    

                            <a className="netlogoMob" href="https://instagram.com/seahorseblueinc?r=nametag">
                                <div className="netlogoMob">
                                    <Image src="/instagram.svg" width="100%" height="100%" />
                                </div>
                            </a>
                            
                        </div>
                        
                        <div className="PhonePh">
                            <a className="Phone" href="tel: +17866639117">+1 (786) 6639117</a>
                        </div>

                    </div>

                </div>    
                            
                    
            </div>
        </div>    
    );
}