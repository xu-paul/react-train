import React from 'react';
class Battle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { disabled1:true,disabled2:true};
    }
     changeValue1=(e)=>{
            if(e.target.value){
                this.setState({disabled1:false});
            }
            else{
              this.setState({disabled1:true});
            }
     }
     changeValue2=(e)=>{
            if(e.target.value){
                this.setState({disabled2:false});
            }
            else{
              this.setState({disabled2:true});
            }
     }
    render() {
        const style={
            div1:{ width: '90%', backgroundColor: '', margin: '0 auto',paddingBottom:'200px' },
            h1:{textAlign:'center',fontSize:'35px',fontWeight:300,margin:'60px 0 30px'},
            ul:{ display: 'flex',  listStyle: 'none', justifyContent: 'center' },
            svg:{background:'rgba(0, 0, 0, 0.08)',width:'220px',height:'220px',padding:'40px',boxSizing:'border-box'},
            li:{width:'33%',display:'flex', flexDirection:'column',alignItems:'center'},
            h3:{fontSize:'28px',fontWeight:300,marginBottom:'20px'},
            div2:{width: '90%', backgroundColor: '', margin: '0 auto',display:'flex',justifyContent:'space-around'},
            div3:{width:'40%',display:'flex',flexDirection:'column'},
            div4:{display:'flex'},
            label:{fontSize:'20px',margin:'5px 0',fontWeight:300},
            input:{flex:2,fontSize:'16px',marginRight:'10px',padding:'8px',borderRadius:'3px',border:'none',boxShadow:'inset 0 1px 2px rgba(0,0,0,0.15)',background:'rgba(0,0,0,0.02)'},
            btn:{flex:1,fontSize:'16px',border:'none',cursor:'pointer',letterSpacing:'.25em',background:'black',color:'#c7c7c7'}
            
        }
       return (
              <div style={style.div1}>
                   <h1 style={style.h1}>Instrutions</h1>
                  <ul style={style.ul}>
                      <li style={style.li}>
                          <h3 style={style.h3}>Enter two Github users</h3>
                          <svg style={style.svg} t="1573656486452" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6610" width="128" height="128"><path d="M722.995 541.05c83.58-43.31 140.734-130.544 140.734-231.177 0-143.755-116.537-260.28-260.28-260.28-143.75 0-260.286 116.53-260.286 260.28 0 99.425 55.772 185.8 137.718 229.632-174.065 52.06-303.135 214.753-298.814 399.728 0 36.46 49.29 31.447 49.29 1.808 0-204.831 166.052-370.883 370.888-370.883 204.83 0 370.883 166.057 370.883 370.883 0 24.852 43.269 21.1 43.269-1.808 4.08-183.219-122.122-344.448-293.402-398.182zM599.24 522.06c-5.028 0-10.015 0.206-15.007 0.39-108.754-9.15-194.181-100.26-194.181-211.38 0-117.191 95.001-212.187 212.193-212.187 117.192 0 217.487 95.001 217.487 212.188 0 111.641-91.033 203.08-200.975 211.497a411.674 411.674 0 0 0-19.517-0.507zM336.43 552.05c0.338 0 0.67 0.025 1.004 0.025 30.56 0 31.221-49.643-1.004-49.643-0.824 0-1.638-0.046-2.463-0.057l-0.046-0.937c-4.29 0-8.53 0.18-12.764 0.343-91.105-7.214-167.004-78.284-167.004-170.741 0-97.587 84.536-176.691 182.277-176.691 32.277 0 23.772-41.048-9.595-41.048-119.9 0-217.093 97.04-217.093 216.735 0 79.55 47.631 151.383 114.76 190.659C91.397 569.42 3.676 704.722 7.168 854.103c0 30.372 46.403 26.189 46.403 1.505 0-170.562 112.015-303.534 282.86-303.534v-0.025z" fill="" p-id="6611"></path></svg> 
                      </li>
                      <li style={style.li}>
                          <h3 style={style.h3}>Battle</h3>
                          <svg style={style.svg} t="1573657591876" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7586" width="128" height="128"><path d="M805.925926 450.37037c114.725926 10.42963 138.42963 71.111111 0 89.125926H243.674074c-45.511111-1.896296-90.074074-22.755556-101.451852-38.874074H90.074074v-13.274074H142.222222c11.377778-15.17037 58.785185-36.02963 101.451852-36.977778H805.925926zM525.274074 729.125926c3.792593-15.17037 3.792593-30.340741 0-45.511111h-5.688889l-48.355555 45.511111h54.044444z m76.8-74.903704c3.792593-15.17037 3.792593-30.340741 0-45.511111h-5.688889L547.081481 654.222222h54.992593z m41.718519-101.451852L354.607407 823.940741H274.962963l16.118518-24.651852h23.703704l0.948148-0.948148 44.562963-61.62963 1.896297-2.844444h-28.444445l15.170371-23.703704 8.533333-20.859259h22.755555l0.948149-0.948148 43.614814-97.65926 0.948149-2.844444h-26.548149l14.222223-35.081482h230.4zM398.222222 591.644444l-38.874074 93.866667h18.962963l41.718519-93.866667H398.222222z m-67.318518 146.014815l-37.925926 57.837037h18.962963l41.718518-57.837037h-22.755555zM171.614815 530.014815c-13.274074-4.740741-25.6-10.42963-34.133334-17.066667h-26.548148c-6.637037 30.340741-14.222222 59.733333-20.859259 90.074074h32.237037c17.066667-24.651852 33.185185-48.355556 49.303704-73.007407z m0-69.214815c-16.118519-24.651852-33.185185-48.355556-49.303704-73.007407H90.074074c6.637037 30.340741 14.222222 59.733333 20.859259 90.074074h26.548148c9.481481-6.637037 20.859259-12.325926 34.133334-17.066667z m159.288889 142.222222c5.688889-17.066667 4.740741-33.185185 0-48.355555h-24.651852v-7.585186h-55.940741v8.533334c-28.444444 2.844444-49.303704 11.377778-47.407407 23.703704-1.896296 10.42963 20.859259 23.703704 67.318518 23.703703h60.681482z m0-215.229629c5.688889 17.066667 4.740741 33.185185 0 48.355555h-24.651852v7.585185h-55.940741v-8.533333c-28.444444-2.844444-49.303704-11.377778-47.407407-23.703704-1.896296-10.42963 20.859259-23.703704 67.318518-23.703703h60.681482z m194.37037-127.051852c3.792593 15.17037 3.792593 30.340741 0 45.511111h-5.688889l-48.355555-45.511111h54.044444z m76.8 74.903703c3.792593 15.17037 3.792593 30.340741 0 45.511112h-5.688889l-48.355555-45.511112h54.044444z m41.718519 101.451852L354.607407 165.925926H274.962963l16.118518 24.651852h23.703704l0.948148 0.948148 44.562963 61.62963 1.896297 2.844444h-28.444445l15.170371 23.703704 8.533333 20.859259h22.755555l0.948149 0.948148 43.614814 97.659259 0.948149 2.844445h-26.548149l14.222223 35.081481h230.4zM398.222222 398.222222l-38.874074-93.866666h18.962963l41.718519 93.866666H398.222222z m-67.318518-146.014815l-37.925926-57.837037h18.962963l41.718518 57.837037h-22.755555z m413.392592 205.748149H720.592593c-0.948148 2.844444-0.948148 6.637037-1.896297 9.481481h26.548148c0-2.844444 0-5.688889-0.948148-9.481481z m72.05926 4.74074v10.42963c4.740741 0 9.481481 0.948148 13.274074 1.896296l7.585185-8.533333c-6.637037-2.844444-13.274074-2.844444-20.859259-3.792593z m17.066666 13.274074c3.792593 1.896296 7.585185 3.792593 10.42963 6.637037l13.274074-7.585185c-5.688889-3.792593-10.42963-6.637037-16.118519-8.533333l-7.585185 9.481481z m14.222222 9.481482c1.896296 1.896296 3.792593 4.740741 5.688889 7.585185h20.85926c-3.792593-5.688889-8.533333-10.42963-12.325926-14.222222l-14.222223 6.637037z m5.688889 12.325926c-1.896296 2.844444-3.792593 4.740741-5.688889 6.637037l14.222223 7.585185c3.792593-3.792593 7.585185-8.533333 12.325926-14.222222H853.333333z m-8.533333 9.481481c-3.792593 2.844444-6.637037 5.688889-10.42963 7.585185l7.585186 9.481482c5.688889-1.896296 11.377778-4.740741 16.118518-9.481482l-13.274074-7.585185z m-14.222222 9.481482c-4.740741 1.896296-9.481481 1.896296-14.222222 2.844444v10.42963c7.585185-0.948148 14.222222-1.896296 21.807407-3.792593l-7.585185-9.481481z m-86.281482 15.17037c0.948148-2.844444 0.948148-6.637037 1.896297-9.481481h-26.548149c0.948148 2.844444 0.948148 6.637037 1.896297 9.481481h22.755555z m37.925926 0l0.948148-9.481481h-26.548148l1.896297 9.481481h23.703703z m-75.851852 0c0.948148-2.844444 0.948148-6.637037 1.896297-9.481481h-26.548148c0.948148 2.844444 0.948148 6.637037 1.896296 9.481481h22.755555z m-36.977777 0c0.948148-2.844444 0.948148-6.637037 1.896296-9.481481H644.740741c0.948148 2.844444 0.948148 6.637037 1.896296 9.481481h22.755556z m-37.925926 0c0.948148-2.844444 0.948148-6.637037 1.896296-9.481481H606.814815c0.948148 2.844444 0.948148 6.637037 1.896296 9.481481h22.755556z m-37.925926 0c0.948148-2.844444 0.948148-6.637037 1.896296-9.481481H568.888889c0.948148 2.844444 0.948148 6.637037 1.896296 9.481481h22.755556z m-36.977778 0c0.948148-2.844444 0.948148-6.637037 1.896296-9.481481h-26.548148c0.948148 2.844444 0.948148 6.637037 1.896296 9.481481h22.755556z m-37.925926 0c0-2.844444 0.948148-6.637037 1.896296-9.481481h-26.548148c0.948148 2.844444 0.948148 6.637037 1.896296 9.481481h22.755556z m-36.977778 0c0.948148-2.844444 0.948148-6.637037 1.896297-9.481481h-26.548149c0.948148 2.844444 0.948148 6.637037 1.896297 9.481481h22.755555z m-37.925926 0c0.948148-2.844444 0.948148-6.637037 1.896297-9.481481h-26.548149c0.948148 2.844444 0.948148 6.637037 1.896297 9.481481h22.755555z m-37.925926 0c0.948148-2.844444 0.948148-6.637037 1.896297-9.481481h-26.548148c0.948148 2.844444 0.948148 6.637037 1.896296 9.481481h22.755555z m-36.977777 0l1.896296-9.481481h-26.548148l1.896296 9.481481h22.755556z m413.392592-73.955555H758.518519l-1.896297 9.481481h26.548148l-0.948148-9.481481z m-75.851852 0H682.666667c-0.948148 2.844444-0.948148 6.637037-1.896297 9.481481h26.548149c0.948148-2.844444 0-5.688889-0.948149-9.481481z m-36.977777 0h-23.703704c-0.948148 2.844444-0.948148 6.637037-1.896296 9.481481h26.548148c0-2.844444-0.948148-5.688889-0.948148-9.481481z m-37.925926 0h-23.703704c-0.948148 2.844444-0.948148 6.637037-1.896296 9.481481h26.548148c0-2.844444 0-5.688889-0.948148-9.481481z m-37.925926 0h-23.703704c-0.948148 2.844444-0.948148 6.637037-1.896296 9.481481h26.548148c0.948148-2.844444 0-5.688889-0.948148-9.481481z m-36.977778 0h-23.703704c-0.948148 2.844444-0.948148 6.637037-1.896296 9.481481h26.548148c0-2.844444-0.948148-5.688889-0.948148-9.481481z m-37.925926 0h-23.703704c-0.948148 2.844444-0.948148 6.637037-1.896296 9.481481h26.548148c0-2.844444 0-5.688889-0.948148-9.481481z m-36.977778 0h-23.703703c-0.948148 2.844444-0.948148 6.637037-1.896297 9.481481h26.548148c0-2.844444-0.948148-5.688889-0.948148-9.481481z m-37.925926 0h-23.703703c-0.948148 2.844444-0.948148 6.637037-1.896297 9.481481h26.548148c0-2.844444-0.948148-5.688889-0.948148-9.481481z m-37.925926 0h-23.703703c-0.948148 2.844444-0.948148 6.637037-1.896297 9.481481h26.548149c0-2.844444 0-5.688889-0.948149-9.481481z m-36.977777 0h-23.703704l-1.896296 9.481481H369.777778l-0.948148-9.481481z" p-id="7587"></path></svg>
                      </li>
                      <li style={style.li}>
                          <h3 style={style.h3}>See the winner</h3>
                          <svg style={style.svg} t="1573658829478" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8901" width="128" height="128"><path d="M448.8 622.8h126.5v126.5H448.8z" fill="#FFB300" p-id="8902"></path><path d="M609.7 796.8H414.3v-61.2c0-11.5 9.4-20.9 20.9-20.9h153.7c11.5 0 20.9 9.4 20.9 20.9v61.2z" fill="#FFCA28" p-id="8903"></path><path d="M708.1 1016.2H315.9c-11.5 0-20.9-9.4-20.9-20.9V817.2c0-11.5 9.4-20.9 20.9-20.9h392.3c11.5 0 20.9 9.4 20.9 20.9v178.1c-0.1 11.6-9.4 20.9-21 20.9z" fill="#455A64" p-id="8904"></path><path d="M638.3 964H385.7c-5.8 0-10.4-4.7-10.4-10.4V852.7c0-5.8 4.7-10.4 10.4-10.4h252.6c5.8 0 10.4 4.7 10.4 10.4v100.8c0 5.8-4.6 10.5-10.4 10.5z" fill="#CFD8DC" p-id="8905"></path><path d="M257.2 115.8v284.8c-83.8-11.7-148.5-83.8-148.5-170.8v-114h148.5m52.2-52.2H98.2c-23.1 0-41.8 18.7-41.8 41.8v124.5C56.4 354 157 454.6 281.1 454.6h28.3v-391zM915.3 115.8v108.8c0 88-64.4 161.3-148.5 175.2v-284h148.5m10.5-52.2H714.6v390.9h23.1c126.9 0 229.8-102.9 229.8-229.8V105.4c0.1-23.1-18.7-41.8-41.7-41.8z" fill="#FFB300" p-id="8906"></path><path d="M512 647.9c-162.7 0-294.6-131.9-294.6-294.6V27.6c0-10.9 8.9-19.8 19.8-19.8h549.5c10.9 0 19.8 8.9 19.8 19.8v325.7C806.6 516 674.7 647.9 512 647.9z" fill="#FFCA28" p-id="8907"></path><path d="M787.3 458.4L640.1 265 433.6 413l167 221.4c43.9-14.5 74.6-33.9 103.9-58.3 34.9-29.1 62.9-67.8 82.8-117.7z" fill="#FFB806" p-id="8908"></path><path d="M522.3 178.3l31.3 63.3c1.5 3.1 4.5 5.2 7.9 5.7l69.9 10.2c8.6 1.2 12 11.8 5.8 17.8l-50.6 49.3c-2.5 2.4-3.6 5.9-3 9.2l11.9 69.6c1.5 8.5-7.5 15-15.2 11L512.9 379l-67.4 35.4c-7.7 4-16.6-2.5-15.2-11l11.9-69.6c0.6-3.4-0.5-6.8-3-9.2l-50.6-49.3c-6.2-6-2.8-16.6 5.8-17.8l69.9-10.2c3.4-0.5 6.3-2.6 7.9-5.7l31.3-63.3c3.9-7.8 15-7.8 18.8 0z" fill="#FFF8E1" p-id="8909"></path></svg>
                      </li>
                  </ul>

                  <h1 style={style.h1}>Players</h1>
                  <div style={style.div2}>
                          <div style={style.div3}>
                              <label for="username" style={style.label}>Player one</label>
                              <div style={style.div4}>
                                  <input onKeyUp={this.changeValue1.bind(this)} style={style.input} id="username" type="text" placeholder="github username"/> 
                                  <button style={style.btn} disabled={this.state.disabled1}>submit</button>
                              </div>
                          </div>    
                          <div style={style.div3}>
                              <label for="username2" style={style.label}>Player two</label>
                              <div style={style.div4}>
                                  <input onKeyUp={this.changeValue2.bind(this)} style={style.input} id="username2" type="text" placeholder="github username"/> 
                                  <button style={style.btn} disabled={this.state.disabled2}>submit</button>
                              </div>  
                          </div>    
                           
                  </div>
              </div>
       )
    }
}
export default Battle;