export const Testimonials = (props) => {
  return (
    <div id='testimonials'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>Nasze opinie</h2>
        </div>
          <div className='buttonHeader'>
              <a
                  href='https://allegro.pl/uzytkownik/luckowski/oceny'
                  className='btn btn-custom btn-lg page-scroll'
              >
                  Zobacz nasze opinie!
              </a>{' '}
          </div>
        <div className='column'>
                <div className="col">
                    <img src='img/testimonials/1.png'/>
                </div>
                <div className="col">
                    <img src='img/testimonials/3.png'/>
                </div>
                <div className="col">
                    <img src='img/testimonials/7.png'/>
                </div>
            </div>
          <div className='column'>
              <div className="col">
                  <img src='img/testimonials/4.png'/>
              </div>
              <div className="col">
                  <img src='img/testimonials/8.png'/>
              </div>
              <div className="col">
                  <img src='img/testimonials/9.png'/>
              </div>
          </div>
      </div>
    </div>
  )
}
