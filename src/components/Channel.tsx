import * as React from "react";
import telegram from 'src/assets/images/telegram.svg';


class Channel extends React.Component{
    public render(){
        return(
            <div className="row">
            {/* <a href="https://t.me/empleo_etsii"> */}
           
                <div className="col-md-9">
                <a href="https://t.me/empleo_etsii">
                    <img style={{float:'left', width:'50px',height:'50px',"margin-left":'100px'}} src={telegram}/>
                    <span className="align-middle h3">Ofertas de empleo para egresados ¡ Suscríbete al nuevo canal !</span>
                    </a>
                </div>
                {/* </a> */}
            </div>
        );
    };
}

export default Channel;