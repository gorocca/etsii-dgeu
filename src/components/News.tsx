import {library} from '@fortawesome/fontawesome-svg-core';
import {faNewspaper} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as React from 'react';

const margin = {margin: "10% 10% 10% 10%"};
library.add(faNewspaper);

interface INewsProps{
    news: string[];
    links: string[];
}

interface INewsState{
    news: string[];
    links: string[];
}
class News extends React.Component<INewsProps,INewsState>{
    constructor(props:INewsProps){
        super(props);
    }
   
    public news(props:INewsProps){
        const rows = [];
        for (let i = 0; i < 8; i++) {
            rows.push(<li className="list-group-item"><a href={this.props.links[i]}>{this.props.news[i]}</a></li>);
        }
        return  <ul className="list-group list-group-flush">{rows}</ul>;
    }

    public render(){
    return (
    <div>   
        <div className="card" style={margin} >
            <span className="icon-small">
                <h4><FontAwesomeIcon icon="newspaper" />  Noticias</h4>
            </span>
            {this.news(this.props)}
        </div>
  </div>);
}
}

export default News;


