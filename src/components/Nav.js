import React from 'react';
import './Nav.css';
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liname: '%3E1&sort=stars&order=desc&type=Repositories' };
  }

      dataChange = (data1) => {
        this.props.news(data1);
        this.setState({ liname: data1 });
      }

      render() {
        const all = '%3E1&sort=stars&order=desc&type=Repositories';
        const js = '%3E1+language:javascript&sort=stars&order=desc&type=Repositories';
        const ruby = '%3E1+language:ruby&sort=stars&order=desc&type=Repositories';
        const java = '%3E1+language:java&sort=stars&order=desc&type=Repositories';
        const css = '%3E1+language:css&sort=stars&order=desc&type=Repositories';
        const python='%3E1+language:python&sort=stars&order=desc&type=Repositories'
        const style = {
          div: {
            width: '90%', backgroundColor: '', margin: '0 auto', display: 'flex', justifyContent: 'center',
          },
          ul: {
            display: 'flex', listStyle: 'none', fontWeight: 'bold', justifyContent: 'space-between',
          },
          li: {
            marginRight: '10px', cursor: 'pointer', border: 'none', background: 'transparent', fontSize: '20px', outline: 'none', color: this.props.acolor,
          },
        };
        return (
          <div style={style.div}>
            <div style={style.ul}>
              <button style={style.li} onClick={this.dataChange.bind(this, all)} className={this.state.liname === all ? 'active' : ' '}>All</button>
              <button style={style.li} onClick={this.dataChange.bind(this, js)} className={this.state.liname === js ? 'active' : ' '}>JavaScript</button>
              <button style={style.li} onClick={this.dataChange.bind(this, ruby)} className={this.state.liname === ruby ? 'active' : ' '}>Ruby</button>
              <button style={style.li} onClick={this.dataChange.bind(this, java)} className={this.state.liname === java ? 'active' : ' '}>Java</button>
              <button style={style.li} onClick={this.dataChange.bind(this, css)} className={this.state.liname === css ? 'active' : ' '}>CSS</button>
              <button style={style.li} onClick={this.dataChange.bind(this, python)} className={this.state.liname === python ? 'active' : ' '}>Python</button>
            </div>

          </div>
        );
      }
}
export default Nav;
