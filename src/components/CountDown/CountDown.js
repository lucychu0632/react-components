import React, {Component} from 'react';
import './Countdown.css';

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: this.checkTime(0),
      hour: this.checkTime(0),
      minute: this.checkTime(0),
      second: this.checkTime(0),
      today: new Date(),
      finalDate: ""
    };
    this.checkTime = this.checkTime.bind(this)
  }

  checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
        let day = this.state.day;
    let hour = this.state.hour;
    let minute = this.state.minute;
    let second = this.state.second;
    let leftTime = (new Date(2017, 9, 17, 24, 0, 0) - new Date());
    let days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10);
    let hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10);
    let minutes = parseInt(leftTime / 1000 / 60 % 60, 10);
    let seconds = parseInt(leftTime / 1000 % 60, 10);
    day = days - 1;
    hour = hours - 1;
    minute = minutes - 1;
    second = seconds - 1;
    if (day < 0) {
      day = 0
    }
    if (hour < 0) {
      hour = 0
    }
    if (minute < 0) {
      minute = 0
    }
    if (second < 0) {
      second = 0
    }
    this.setState({
      day: this.checkTime(day),
      hour: this.checkTime(hour),
      minute: this.checkTime(minute),
      second: this.checkTime(second),
    });
    if (day === 0 && hour=== 0 && minute=== 0 && second=== 0 ) {
      clearInterval(this.timer);
      alert("活动已结束");
    }
  }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const {day, hour, minute, second} = this.state;
    return (
      <div className="countdown">
      <span ref="countDown">距离活动结束还有: {day} 天 { hour } 小时 { minute } 分 { second } 秒</span>
    </div>
  );
  }
}

export default Countdown;
