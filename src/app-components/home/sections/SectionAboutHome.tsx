interface Props {
  id?: string;
}
export default function SectionAboutHome({ id }: Props) {
  return (
    <section id={id} className="section section-page ">
      <div className="section-bg"></div>
      <div className="section-header"></div>
      <div className="section-body container-fluid">
        <div className="section-content content-large content-align-right content-row">
          <div className="content-col-first sticky-wrapper">
            <div className="content-wrapper sticky-element">
              <div className="col-lg-9">
                <h3 className="display-3 title-font strong mt-title mb-4">
                  An expert and serious
                </h3>
                <p className="">
                  We are very concerned about making nice products and projects.
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Maecenas porttitor congue massa. Maecenas porttitor congue
                  massa.
                </p>
                <div className="btns-group mt-4">
                  <a className="btn btn-line-arrow " href="#">
                    <span className="text">Expertises</span>
                    <span className="icon ms-3">
                      <span className="icon-arrow-right"></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="content-col-second ">
            <div className="content-wrapper ">
              <div className="row g-3 g-xl-5">
                <div className="col-12 col-md-6">
                  <div className="row g-3 g-xl-5">
                    <div className="col-12">
                      <figure className="figure-a">
                        <img
                          src="./img/img-sample-1.jpg"
                          className="img-1 img-fluid"
                          alt="..."
                        />
                      </figure>
                    </div>
                    <div className="col-12">
                      <figure className="figure-a">
                        <img
                          src="./img/img-sample-2.jpg"
                          className="img-1 img-fluid"
                          alt="..."
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="row g-3 g-xl-5">
                    <div className="col-12">
                      <figure className="figure-a">
                        <img
                          src="./img/img-sample-4.jpg"
                          className="img-1 img-fluid"
                          alt="..."
                        />
                      </figure>
                    </div>
                    <div className="col-12">
                      <figure className="figure-a">
                        <img
                          src="./img/img-sample-3.jpg"
                          className="img-1 img-fluid"
                          alt="..."
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
