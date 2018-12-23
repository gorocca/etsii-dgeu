import * as React from 'react';
import ControlledCarousel from 'src/components/Carousel';
import Channel from 'src/components/Channel';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import News from 'src/components/News';
import './App.css';
import './assets/css/main.css';

const news = ['20/12/2018 - 17th Brainstorming Week on Membrane Computing',
'20/12/2018 - ¿Quieres irte de prácticas en Empresa a Japón?',
'19/12/2018 - Premio a la Trayectoria Profesional',
'18/12/2018 - Exámenes del Primer Cuatrimestre Enero-Febrero 2019',
'14/12/2018 - Horario del Centro en Navidad'];
const urls = ['https://www.informatica.us.es/index.php/noticias/43-anuncios/2351-17th-brainstorming-week-on-membrane-computing',
'https://www.informatica.us.es/index.php/noticias/43-anuncios/2350-quieres-irte-de-practicas-en-empresa-a-japon',
'https://www.informatica.us.es/index.php/noticias/43-anuncios/2349-premio-a-la-trayectoria-profesional',
'https://www.informatica.us.es/index.php/noticias/43-anuncios/2081-examenes-del-primer-cuatrimestre-enero-febrero-2019',
'https://www.informatica.us.es/index.php/noticias/43-anuncios/2079-horario-del-centro-en-navidad'];

class App extends React.Component {
  public componentDidMount(){
    document.title = "ETSII - Inicio"
  }
  public render() {
    return (
      <div className="App">
        <Header />
        <div className="row">
          <div className="col-md-6">
          <ControlledCarousel />
          </div>
          <div className="col-md-6">
          <News news={news} links={urls}/>
          </div>
        </div>
        <hr/>
        <Channel />
        <hr/>
        <Footer />
      </div>
    );
  }
}

export default App;
