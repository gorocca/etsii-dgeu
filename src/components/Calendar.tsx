import * as React from "react";
import CalendarReact from 'react-calendar';

const margin = {margin: "2.5% 2.5% 2.5% 2.5%"};

interface ICalendarProps{
    date: Date;
}

interface ICalendarState{
    date: Date;
}
class Calendar extends React.Component<ICalendarProps,ICalendarState>{
    constructor(props:ICalendarProps){
        super(props);
    }
    
    public render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12" >
                        <h2>Agenda de la ETSII</h2>
                    </div>
                </div>
                <div className="row" style={margin}>
                    <CalendarReact value={this.props.date} className="calendar"/>
                </div>
            </div>
        );
      }
}

export default Calendar;