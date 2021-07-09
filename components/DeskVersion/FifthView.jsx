import SwiperCore, { Navigation, Pagination } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react'


export default function FifthView(){

    SwiperCore.use([Navigation, Pagination]);
      
    return(

        <div className="Fifth">-

            
            <h1>Reviews</h1>
            
            <div className="Review"  id="ToWrite">

                <div className="ReviewSpace">
                    <Swiper 
                        spaceBetween={0}
                        slidesPerView={1}
                        className="Swiper"
                        id="Swiper" 
                        navigation       >
                        
                        <SwiperSlide className="SwiperSlide" >
                        
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
                    <div className="swiper-pagination"></div>
                </div>
                
            </div>


            <div className="YourReview" id="Review">
                <form action="submit">
                    <input type="name" placeholder="Your name"/><br/>
                    <textarea name="review" id="review" cols="63" rows="15"  placeholder="Leave a Review" /><br/>
                    <button>Send</button>
                </form>
            </div>

           
        </div>
    );
}
