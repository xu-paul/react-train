import React from 'react';
import Battle from './Battle';
class Popularb extends React.Component {
    constructor(props) {
        super(props);
        this.state = { icon: 'fa fa-camera-retro fa-3x', color: '', fontcolor: 'black',
        data:'%3E1&sort=stars&order=desc&type=Repositories',}
        
    }
    
    changeIcon = () => {
        if (this.state.icon == 'fa fa-camera-retro fa-3x')
            this.setState({
                icon: 'fa fa-tripadvisor fa-3x',
                color: '#1c2022',
                fontcolor: 'white',
            })
        else {
            this.setState({
                icon: 'fa fa-camera-retro fa-3x',
                color: '',
                fontcolor: 'black',

            })
        }
    }
    changeData = (data) => {
        this.setState({
            data:data
        }); 
    }
    render() {
        const style={
            bdiv:{ background: this.state.color, color: this.state.fontcolor },
            div:{ width: '90%', backgroundColor: '', margin: '0 auto', display: 'flex', justifyContent: 'space-between', paddingTop: '50px' },
            ul:{ display: 'flex', listStyle: 'none', fontWeight: 'bold' },
            pli:{ flex: 1, marginRight: '10px'}


        }
        return <div style={style.bdiv}>
            <div style={style.div}>
                <ul style={style.ul}>
                    <li style={style.pli} ><a href='/#/'style={{color:'black', textDecoration:'none'}} >Popular</a></li>
                    <li style={{ flex: 1, cursor: 'pointer',color:'red'}}  >Battle</li>
                </ul>
                <span className={this.state.icon} onClick={this.changeIcon}></span>

            </div>
           
            <Battle  />
           
            
        </div>
    }
}
export default Popularb;
