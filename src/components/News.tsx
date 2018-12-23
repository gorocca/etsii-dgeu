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

    public render(){
    return (
    <div>   
        <div className="card" style={margin} >
            <span className="icon-small">
                <h4><FontAwesomeIcon icon="newspaper" />  Noticias</h4>
            </span>
            
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><a href={this.props.links[0]}>{this.props.news[0]}</a></li>
                <li className="list-group-item"><a href={this.props.links[1]}>{this.props.news[1]}</a></li>
                <li className="list-group-item"><a href={this.props.links[2]}>{this.props.news[2]}</a></li>
                <li className="list-group-item"><a href={this.props.links[3]}>{this.props.news[3]}</a></li>
                <li className="list-group-item"><a href={this.props.links[4]}>{this.props.news[4]}</a></li>
            </ul>
        </div>
  </div>);
}
}

export default News;


