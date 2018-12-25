import {library} from '@fortawesome/fontawesome-svg-core';
import {faCalendar,faCalendarCheck,faFile,faGraduationCap,faNewspaper} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as React from 'react';

const margin = {margin: "2.5% 0 2.5% 0"};

library.add(faCalendar,faCalendarCheck,faFile,faGraduationCap,faNewspaper);

class Shortcuts extends React.Component{
    public render(){
        return(<div>
        <div className='row'>
            <div className='col-md-12'>
                <h2>Accesos rápidos</h2>
            </div>
        </div>
        <div className='row' style={margin}>
            <div className='col-md-3'>
                <a href='https://www.informatica.us.es/index.php/horarios'>
                    <span className="icon-small">
                        <h3><FontAwesomeIcon icon="calendar" />  Calendario</h3>
                    </span>
                </a>
            </div>
            <div className='col-md-3'>
                <a href='https://www.informatica.us.es/index.php/secretaria'>
                    <span className="icon-small">
                        <h3><FontAwesomeIcon icon="file" />  Secretaría</h3>
                    </span>
                </a>    
            </div>
            <div className='col-md-3'>
                <a href='https://www.informatica.us.es/index.php/calendario-de-examenes'>
                    <span className="icon-small">
                        <h3><FontAwesomeIcon icon="calendar-check" />  Calendario de exámenes</h3>
                    </span>
                </a>
            </div>
            <div className='col-md-3'>
                <a href='https://www.informatica.us.es/index.php/estudios'>
                    <span className="icon-small">
                        <h4><FontAwesomeIcon icon="graduation-cap" />  Estudios</h4>
                    </span>
                </a>
            </div>
        </div>
        </div>
        );
    }
}

export default Shortcuts;