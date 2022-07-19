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
              <p>{props.data ? props.data.paragraph : 'loading...'}</p>
              <p>PRÓBOWAŁEŚ JUŻ WSZYSTKIEGO, A W DALSZYM CIĄGU NIE UDAŁO CI SIĘ POZBYĆ UCIĄŻLIWYCH GRYZONI?</p>
              <p>Mysz - Nornica - Nornik - Karczownik - Kret</p>
              <p>Jak pozbyć się kreta? PRÓBOWAŁEŚ JUŻ WSZYSTKICH ŚRODKÓW NA GRYZONIE, A W DALSZYM CIĄGU NIE UDAŁO CI SIĘ ICH POZBYĆ?</p>
              <p>Pierwszy, profesjonalny środek na kreta, nornic i innych gryzoni, stosowany dotychczas wyłącznie przez profesjonalne ekipy DDD.
                Difenor® to najnowszej generacji sposób na kreta - środek biobójczy zawierający difenacoum 0,005%, odpowiadający na pytanie jak zwalczać krety,
                nornice, karczowniki oraz myszy polne, opracowany technologicznie pod kątem tych gryzoni.
                Dzięki konsystencji stężonej pasty z atraktorami (hormonami) wabiącymi nasz środek na gryzonie jest w 100% skuteczny.
                Szkodniki po spożyciu preparatu niemal natychmiast padają, a działanie trucizny nie powoduje u nich bólu ani konwulsji,
                co nie wzbudza nieufności u innych osobników. Preparat zawiera również substancję gorzką - bitrex,
                która znacząco zmniejsza prawdopodobieństwo spożycia przez zwierzęta domowe lub ptaki.</p>
              <p>Opakowanie zawiera 450 g produktu, w postaci saszetek z pastą. Są one na tyle duże, że z łatwością możemy podzielić je na trzy - cztery części.
                Jedno opakowanie umożliwia zlikwidowanie od 60 do nawet 90 gryzoni.</p>
              <h3>Dlaczego my?</h3>
              <div className='list-style'>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : 'loading'}
                  </ul>
                </div>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : 'loading'}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
