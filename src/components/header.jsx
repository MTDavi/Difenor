import ParticlesBg from "particles-bg";

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
              <div className='container'>
                  <div className='row'>
                      <div className='col-xs-12 col-md-12'>
                          <div className='about-text'>
                              <div className='buttonHeader'>
                                  <a
                                      href='https://allegro.pl/uzytkownik/luckowski'
                                      className='btn btn-custom btn-lg page-scroll'
                                  >
                                      Kup teraz na allegro!
                                  </a>{' '}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
      </div>
    </header>
  )
}


