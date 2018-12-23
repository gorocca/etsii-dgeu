import * as React from "react";
import CalendarReact from 'react-calendar';

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
          <div className="row" >
            <CalendarReact value={this.props.date} className="calendar"/>
          </div>
        );
      }
}

export default Calendar;