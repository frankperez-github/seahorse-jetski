import Image from 'next/image'

export default function HeaderMob(){
    return(
    <div className="Headerphone">
                    
        <div className="hdrlog1">
            <Image src="/logo1.1.png" width="2000%" height="870%" />
        </div>            
        
        <div className="hdrlog2">
            <Image src="/logo1.2.png" width="5000%" height="850%" />
        </div> 

    </div>
);
}