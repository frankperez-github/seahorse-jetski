import Image from 'next/image'
import {Swiper, SwiperSlide} from 'swiper/react'


export default function FifthView(){

    return(
        <div className="Fifth">-
            
            <h1>Reviews</h1>
            
            <div className="Review"  id="ToWrite">

                <div className="leftArrow ">
                    <Image src="/leftArrow.svg" width="70%" height="70%" />
                </div>

                <div className="ReviewSpace">
                    <Swiper 
                        spaceBetween={50}
                        slidesPerView={1}
                        className="Swiper" >
                        
                        <SwiperSlide className="SwiperSlide">
                        <h3 className="By">By Adrian Valdes:</h3>

                        <h3 className="ReviewItself">Amazing Experience.</h3>
                        </SwiperSlide>

                        <SwiperSlide className="SwiperSlide">
                        <h3 className="By">By Frank Perez:</h3>

                        <h3 className="ReviewItself">Waoo! It was awesome. I drived a jetski and y drowned up. I have a good day. Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h3>

                        </SwiperSlide>
                        
                        <SwiperSlide className="SwiperSlide">
                        <h3 className="By">By Asiel Valdes:</h3>

                        <h3 className="ReviewItself">Incredible! </h3>
                        
                        </SwiperSlide>

                        <SwiperSlide className="SwiperSlide">
                        <h3 className="By">By Camilo Perez:</h3>

                        <h3 className="ReviewItself">Very fun.</h3>
                        
                        </SwiperSlide>

                    </Swiper>


                    

                </div>
                
                <div className="rightArrow ">
                    <Image src="/rightArrow.svg" width="70%" height="70%" />
                </div>

            </div>


            <div className="YourReview" id="Review">
                <form action="submit">
                    <input type="name" placeholder="Your name"/><br/>
                    <textarea name="review" id="review" cols="63" rows="15"  placeholder="Leave a Review" /><br/>
                    <button>Send</button>
                </form>
            </div>

            <div className="YourReview" id="Message">
                <form action="submit">
                    <input type="name" placeholder="Your email"/><br/>
                    <textarea name="review" id="review" cols="63" rows="15"  placeholder="Leave us a Message" /><br/>
                    <button>Send</button>
                </form>
            </div>
        </div>
    );
}