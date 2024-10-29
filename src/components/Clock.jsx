import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    // component jo hm is ma use kr rhe hain usko har sec bd update kr ra ha ye component willmount
    this.timeId = setInterval(() => {
      this.setState({
        time: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }

  render() {
    const { time } = this.state;
    const hourRotation = (time.getHours() % 12) * 30 + time.getMinutes() * 0.5;
    const minuteRotation = time.getMinutes() * 6;
    const secondRotation = time.getSeconds() * 6;

    return ( 
       
        <div className="flex items-center justify-center h-screen bg-purple-900">
          <h1 className="text-white  mb-80  text-8xl  font-bold text-pink-400">Analogue Clock</h1>
         <div className="relative w-64 h-64 bg-indigo-400  rounded-full border-4 border-gray-800 hover:cursor-pointer hover:bg-blue-500">
          {/* Hour Hand */}
          <div
            className="absolute bg-gray-800"
            style={{
              transform: `rotateZ(${hourRotation}deg)`,
              top: "30%",
              left: "50%",
              height: "20%", // Adjust height to fit within the circle
              width: "4px",
              transformOrigin: "bottom center", // Rotate from the bottom center
              translate: "-50% 0", // Center horizontally
              borderRadius: "2px",
            }}
          />

          {/* Minute Hand */}
          <div
            className="absolute bg-gray-600"
            style={{
              transform: `rotateZ(${minuteRotation}deg)`,
              top: "20%",
              left: "50%",
              height: "30%", // Adjust height to fit within the circle
              width: "3px",
              transformOrigin: "bottom center",
              translate: "-50% 0",
              borderRadius: "2px",
            }}
          />

          {/* Second Hand */}
          <div
            className="absolute bg-red-500"
            style={{
              transform: `rotateZ(${secondRotation}deg)`,
              top: "15%",
              left: "50%",
              height: "35%", // Adjust height to fit within the circle
              width: "2px",
              transformOrigin: "bottom center",
              translate: "-50% 0",
              borderRadius: "2px",
            }}
          />

          {/* Center Circle */}
          <div className="absolute w-4 h-4 bg-yellow-400 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

          {/* Clock Numbers */}
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className="absolute text-yellow-50 hover:text-amber-300 font-semibold text-lg"
              style={{
                transform: `rotate(${
                  index * 30
                }deg) translate(0, -100px) rotate(-${index * 30}deg)`,
                top: "46%",
                left: "48%",
                transformOrigin: "center",
              }}
            >
              {index === 0 ? 12 : index}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Clock;
