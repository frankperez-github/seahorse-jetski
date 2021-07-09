import Image from 'next/image'
import Link from 'next/link'

export default function Layout(props){


    return(
        <div className="Layout">
            <header>
                
                <div className="header-div">
                    <div className="Header">
                        <div className="Logo1">
                            <Image  src="/logo1.1.png" width="232%" height="97%"/>
                        </div>
                        
                        <div className="Logo2">
                            <Image  src="/logo1.2.png" width="700%" height="120%"/>
                        </div>
                        
                    </div>
                    
                </div>
                
            </header>

            {props.children}

            <footer>

                <div className="Footer">
                    <div className="Phone">
                        <a className="Phone" href="tel: +17866639117">+1 (786) 6639117</a>
                    </div>
                    
                    <div className="footlog">

                        <div className="LogoFoot">
                            <Image src="/logo.svg" width="1000%" height="700%" />
                        </div>
                        
                    </div>

                    <div  className="Rightfoot">
                        
                        <div className="Followus">

                            <div className="largescript">
                                <Image src="/largescript.svg" width="100%" height="100%" />
                            </div>
                            
                            <p className="Follow">FOLLOW US</p>

                            
                            <div className="largescript">
                                <Image src="/largescript.svg" width="100%" height="100%" />
                            </div>

                        </div>
                    
                        <div className="Networks">

                            <a className="netlogo" href="https://m.facebook.com/seahorseblueinc/">
                                <div className="netlogo">
                                    <Image src="/facebook.svg" width="100%" height="100%"  />
                                </div>
                            </a>

                            <a className="netlogo" href="https://wa.me/7866639117">
                                <div className="netlogo">
                                    <Image src="/whatsapp.svg" width="100%" height="100%" />
                                </div>
                            </a>    

                            <a className="netlogo" href="https://instagram.com/seahorseblueinc?r=nametag">
                                <div className="netlogo">
                                    <Image src="/instagram.svg" width="100%" height="100%" />
                                </div>
                            </a>
                            
                        </div>

                    </div>

                </div>
   
            </footer>
        </div>
    );
}