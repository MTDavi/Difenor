export const About = (props) => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            {' '}
            <img src='img/box.png' className='img-DP' alt='' />{' '}
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2>O nas</h2>
              {/*<p>{props.data ? props.data.paragraph : 'loading...'}</p>*/}
              {/*<p>PRÓBOWAŁEŚ JUŻ WSZYSTKIEGO, A W DALSZYM CIĄGU NIE UDAŁO CI SIĘ POZBYĆ UCIĄŻLIWYCH GRYZONI?</p>*/}
              {/*<p>Mysz - Nornica - Nornik - Karczownik - Kret</p>*/}
              {/*<p>Jak pozbyć się kreta? PRÓBOWAŁEŚ JUŻ WSZYSTKICH ŚRODKÓW NA GRYZONIE, A W DALSZYM CIĄGU NIE UDAŁO CI SIĘ ICH POZBYĆ?</p>*/}
              {/*<p>Pierwszy, profesjonalny środek na kreta, nornic i innych gryzoni, stosowany dotychczas wyłącznie przez profesjonalne ekipy DDD.*/}
              {/*  Difenor® to najnowszej generacji sposób na kreta - środek biobójczy zawierający difenacoum 0,005%, odpowiadający na pytanie jak zwalczać krety,*/}
              {/*  nornice, karczowniki oraz myszy polne, opracowany technologicznie pod kątem tych gryzoni.*/}
              {/*  Dzięki konsystencji stężonej pasty z atraktorami (hormonami) wabiącymi nasz środek na gryzonie jest w 100% skuteczny.*/}
              {/*  Szkodniki po spożyciu preparatu niemal natychmiast padają, a działanie trucizny nie powoduje u nich bólu ani konwulsji,*/}
              {/*  co nie wzbudza nieufności u innych osobników. Preparat zawiera również substancję gorzką - bitrex,*/}
              {/*  która znacząco zmniejsza prawdopodobieństwo spożycia przez zwierzęta domowe lub ptaki.</p>*/}
              <p>Difenor to rodzinna firma założona w 2014 roku. Powstała z konkretnej potrzeby zaopiekowania się własnym ogrodem,
              sąsiadującym z nieużytkami, łąkami, z których sprowadziły się liczne gryzonie, gustujące w korzeniach naszych drzewek i innych roślin. Poszukiwania środka
              skutecznego na szkodniki, a równoczesnie możliwie najbardziej bezpiecznego dla naszych domowych zwierząt, zaprowadziły nas do opracowania produktu, ktory
              uratował już niejeden ogród, dom czy plantację. Difenor to środek na gryzonie, który możemy Państwu polecić, bazując na doświadczeniu własnym oraz naszych licznych
              zadowolonych klientów.</p>
              {/*<p>Opakowanie zawiera 450 g produktu, w postaci saszetek z pastą. Są one na tyle duże, że z łatwością możemy podzielić je na trzy - cztery części.*/}
              {/*  Jedno opakowanie umożliwia zlikwidowanie od 60 do nawet 90 gryzoni.</p>*/}
              <h3>Dlaczego Difenor?</h3>
              <p>- jest wygodny do aplikacji - masa środka jest na tyle plastyczna, że można ją swobodnie dozować w zależności od potrzeb, </p>
              <p>- zaaplikowany środek niezjedzony przez gryzonia (bo np. nora okazała się już opuszczona ) można swobodnie ponownie wykorzystać w innym miejscu, </p>
              <p>- gryzoń ogrodowy najczęsciej pada pod ziemią, </p>
              <p>- martwy gryzoń się mumifikuje, a więc nie ma zapachu padliny, co jest szczególnie istotne, gdy używamy difenoru w garażach, piwnicach czy budynkach gospodarczych. </p>
              <div className='list-style'>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}><b>{d}</b></li>
                        ))
                      : 'loading'}
                  </ul>
                </div>
                {/*<div className='col-lg-6 col-sm-6 col-xs-12'>*/}
                {/*  <ul>*/}
                {/*    {props.data*/}
                {/*      ? props.data.Why2.map((d, i) => (*/}
                {/*          <li key={`${d}-${i}`}> {d}</li>*/}
                {/*        ))*/}
                {/*      : 'loading'}*/}
                {/*  </ul>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
