import Image from 'next/image' 


export default function SecondViewMob(){
    return(
        <div className="Secondphone">
            
            <div className="videoph">
            
            <iframe width="100%" height="200vh" src="https://www.youtube.com/embed/bARCE45FM4s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
            </div>

            <div className="JetsBackGr">
                <Image src="/jetsbackgr.jpg" width="505%" height="129%"/>
            </div>

            <div className="FAQph">
                <ul>
                    <li> All renters must be 18 years older.</li>
                    <li> Parents of guardians must sign for all passenger under 18 years of age.</li>
                    <li>Passengers must be at least 6 years old to ride.</li>
                    <li>Rentals are inspected before and after rental period.</li>
                    <li>Renter(s) is/are responsible for all or any damage, repair and labor costs.</li>
                    <li>All renters and passenger must sign a rental agreement, release of liability waiver.</li>
                    <li>Sea Horse Jet Ski Rental reserving the right to deny rentals to persons not qualified or experienced enough for certain rentals.</li>
                    <li>All renters must have valid photo ID</li>
                </ul>
            </div>

        </div>
    
    );
}