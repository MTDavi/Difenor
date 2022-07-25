import ParticlesBg from "particles-bg";

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        {/*<img src='img/about.jpg' className='img-responsive' alt='' />{' '}*/}

        {/*<ParticlesBg type="circle" bg={{zIndex: 0, position:"absolute", top:0}} />*/}
        {/*<div className='overlay'>*/}
          <div className='container'>
          
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
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
          {/*</div>*/}
        </div>

      </div>
    </header>
  )
}
