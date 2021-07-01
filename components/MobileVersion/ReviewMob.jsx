import Image from 'next/image'


export default function ReviewMob(){
    return(
        <div className="ReviewMob">
            
            <h1>Reviews</h1>

            <h3 className="By">By Adrian Valdes:</h3>
            
            <div className="Review" >

                <div className="leftArrow">
                    <Image src="/leftArrow.svg" width="70%" height="70%" />
                </div>

                <div className="ReviewSpace">

                    <h3>Amazing Experience.</h3>

                </div>

                <div className="rightArrow">
                    <Image src="/rightArrow.svg" width="70%" height="70%" />
                </div>

            </div>


            <div className="YourReview" id="ReviewPh">
                <form action="submit">
                    <input type="name" placeholder="Your name"/><br/>
                    <textarea name="review" id="review" cols="63" rows="15"  placeholder="Leave a Review" /><br/>
                    <button>Send</button>
                </form>
            </div>

            <div className="YourReview" id="MessagePh">
                <form action="submit">
                    <input type="name" placeholder="Your email"/><br/>
                    <textarea name="review" id="review" cols="63" rows="15"  placeholder="Leave us a message" /><br/>
                    <button>Send</button>
                </form>
            </div>
        
    
        </div>
    );
}