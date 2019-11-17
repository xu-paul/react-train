import React from 'react';
import Nav from './Nav';
import Content from './Content';

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: 'fa fa-camera-retro fa-3x',
      color: '',
      fontcolor: 'black',
      data: '%3E1&sort=stars&order=desc&type=Repositories',
    };
  }

      changeIcon = () => {
        if (this.state.icon === 'fa fa-camera-retro fa-3x') {
          this.setState({
            icon: 'fa fa-tripadvisor fa-3x',
            color: '#1c2022',
            fontcolor: 'white',
          });
        } else {
          this.setState({
            icon: 'fa fa-camera-retro fa-3x',
            color: '',
            fontcolor: 'black',

          });
        }
      }

      changeData = (data) => {
        this.setState({
          data,
        });
      }

      render() {
        const style = {
          bdiv: { background: this.state.color, color: this.state.fontcolor },
          div: {
            width: '90%', backgroundColor: '', margin: '0 auto', display: 'flex', justifyContent: 'space-between', paddingTop: '50px',
          },
          ul: { display: 'flex', listStyle: 'none', fontWeight: 'bold' },
          pli: {
            flex: 1, color: 'red', marginRight: '10px', cursor: 'pointer',
          },
          bli: { flex: 1, cursor: 'pointer' },
          a: { color: 'black', textDecoration: 'none' },

        };
        return (
          <div style={style.bdiv}>
            <div style={style.div}>
              <ul style={style.ul}>
                <li style={style.pli}>Popular</li>
                <li style={style.bli}><a href="battle.html" style={style.a}>Battle</a></li>
              </ul>
              <span className={this.state.icon} onClick={this.changeIcon} />

            </div>

            <Nav news={this.changeData} acolor={this.state.fontcolor} />
            <Content acolor={this.state.fontcolor} data={this.state.data} />

          </div>
        );
      }
}

export default Popular;
