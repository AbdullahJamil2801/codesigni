import Link from 'next/link';
import servicesData from '../../data/servicesData';

const ServicesTwo = () => {
  return (
    <>
      <section id="tpservices-area" className="tpservices-area-2 pt-115 pb-85 p-relative">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-section-title text-center">
                <span className="tp-sub-title-2 mb-15">What we do the best !</span>
                <h2 className="tp-title">Our Services</h2>
              </div>
            </div>
          </div>
          <div className="row mt-60">
            {
              servicesData.slice(0, 8).map(item => {
                return (
                  <div key={item.id} className="col-xl-3 col-lg-3 col-md-6">
                    <Link href={`/service-details/${item.id}`}>
                    <div className="tpservices tpservices-tpbs">
                      <div className="tpservices__icon mb-30">
                        <i className={item.icon}></i>
                      </div>
                      <div className="tpservices__content">
                        <h4 className="tpservices__title mb-25">
                          <Link href={`/service-details/${item.id}`}>
                            <a>{item.title}</a>
                          </Link>
                        </h4>                                             
                        <p>{item.description}</p>
                        <div className="tpservices__btn mt-30">
                          <Link href={`/service-details/${item.id}`}>
                            <a>
                              <i className="flaticon-right-arrow-1"></i>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    </Link>
                  </div>
                )
              })
            }

          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesTwo;