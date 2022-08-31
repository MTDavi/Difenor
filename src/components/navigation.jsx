export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          {/*<a className='navbar-brand page-scroll' href='#page-top'>*/}
            <img src='../img/difenorMini.png' className='img-logo' alt='' />{' '}
            {/*DIFENOR*/}
          {/*</a>{' '}*/}

        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#about' className='page-scroll'>
                O nas
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Produkt
              </a>
            </li>
            {/*<li>*/}
            {/*  <a href='#services' className='page-scroll'>*/}
            {/*    Firma DDD*/}
            {/*  </a>*/}
            {/*</li>*/}

            <li>
              <a href='#difelmark' className='page-scroll'>
                DIFELMARK
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Opinie
              </a>
            </li>
            <li>
              <a href='#contact ' className='page-scroll'>
                Kontakt
              </a>
            </li>
            {/*<li>*/}
            {/*  <a href='#testimonials' className='page-scroll'>*/}
            {/*    Testimonials*/}
            {/*  </a>*/}
            {/*</li>*/}
            
          </ul>
        </div>
      </div>
    </nav>
  )
}
