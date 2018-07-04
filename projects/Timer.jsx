import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
moment.locale('ko');

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //date: moment()
    };
    this.nTimer = setInterval(this.handleTick, 1000);
  }

  handleTick = () => {
    //에로우 함수를 써야, 아래서 this를 사용할수 있음.
    console.log(1);
    this.forceUpdate();
  };

  render() {
    console.log(this.props.expireDate);
    return (
      <div>
        <div>현재시각: {moment().format('YYYY-MM-DD A hh:mm:ss')}</div>
        <div>강의종료시까지 {moment(this.props.expireDate).fromNow()} 분 남았습니다.</div>
      </div>
    );
  }
}

export default Timer;