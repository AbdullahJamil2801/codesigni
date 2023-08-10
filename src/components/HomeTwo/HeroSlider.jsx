import Link from 'next/link';
import { Pagination, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


const HeroSliderFour = () => {
  const sliderData = [
    {
      id: 1,
      bg: 'assets/img/slider/design-agency-in-lahore-Pakistan-hero.webp',
      title: 'IGNITE YOUR BRAND WITH POWERFUL SOCIAL MEDIA MARKETING !',
      subtitle: <>Social Media <span>Marketing</span></>
    },
    {
      id: 2,
      bg: 'assets/img/slider/Coding-website-development-agency-in-Pakistan-hero.webp',
      title: '"AMPLIFY LEADS & ECOMMERCE SALES WITH GOOGLE ADS !',
      subtitle: <>Google <span>Ads</span></>
    },
    {
      id: 3,
      bg: 'assets/img/slider/slider-2-1.webp',
      title: 'IGNITE SALES GROWTH THROUGH E-COMMERCE MARKETING !',
      subtitle: <>Ecommerce <span>Marketing</span></>
    },
    {
      id: 4,
      bg: 'assets/img/slider/slider-2-1.webp',
      title: 'AMPLIFY YOUR ONLINE PRESENCE THROUGH SEO STRATEGY !',
      subtitle: <>SEO</>
    },
    {
      id: 5,
      bg: 'assets/img/slider/slider-2-1.webp',
      title: 'AMPLIFY YOUR ONLINE PRESENCE THROUGH SEO STRATEGY !',
      subtitle: <>SEO</>
    },
    {
      id: 6,
      bg: 'assets/img/slider/slider-2-1.webp',
      title: 'AMPLIFY YOUR ONLINE PRESENCE THROUGH SEO STRATEGY !',
      subtitle: <>SEO</>
    }
  ]
  return (
    <>
      <div className="tpbs-area p-relative">
        <div className="tpbs-slider tpbs-slider-active">

          <Swiper
            modules={[Pagination, EffectFade, Autoplay]}
            spaceBetween={25}
            slidesPerView={1}
            effect="fade"
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
          >
            {sliderData.slice(0, 6).map(item => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="tpbs-slider__item tpbs-slider__height text-center" style={{ backgroundImage: `url(${item.bg})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div className="dot-bg-iamge" data-background="assets/img/bg/dot-img.png"></div>
                    <div className="tpbs-slider__item-content p-relative">
                      <div className="container">
                        <div className="row">
                          <div className="col-xl-12">
                            <span className="tp-sub-title-2 mb-30"><a>{item.title}</a></span>
                            <h3 className="tpbs-slider__item-title">{item.subtitle}</h3>
                            <div className="tpbs-btn mt-40">
                              <Link href="/services">
                                <a className="tp-solid-btn">Get In Touch</a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
            }
          </Swiper>

        </div>
        {/* <div className="tpbs__shape tpbs__shape-1">
          <img src="assets/img/shape/shape-1.pn" alt="shape-1" />
        </div>
        <div className="tpbs__shape tpbs__shape-2">
          <img src="assets/img/shape/shape-2.png" alt="shape-1" />
        </div>
        <div className="tpbs__shape tpbs__shape-3">
          <img src="assets/img/shape/shape-3.png" alt="shape-1" />
        </div> */}
      </div>
    </>
  );
};

export default HeroSliderFour;