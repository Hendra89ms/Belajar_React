import React from "react";

const RealtimeInput = () => {
  // handle userInput
  const [text, setText] = React.useState("text");
  const handleUserInput = (e) => {
    setText(e.target.value);
  };

  // handle color
  const [textColor, setColor] = React.useState("red");
  const handleColor = (e) => {
    setColor(e.target.value);
  };

  // handle range fontSize
  const [sizeText, setSize] = React.useState();
  const handleSize = (e) => {
    setSize(e.target.value);
  };

  // handle Background Color
  const [bgColor, setBgColor] = React.useState("lightBlue");
  const handleBgColor = (e) => {
    setBgColor(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
        width: "50%",
        backgroundColor: `${bgColor}`,
      }}
    >
      <h1 style={{ color: textColor, fontSize: `${sizeText}px` }}>{text}</h1>
      <input
        style={{ padding: "10px" }}
        type="text"
        id="text"
        onChange={handleUserInput}
      />
      <lable>Pilih Warna Text :</lable>
      <input type="color" id="color" onChange={handleColor} />
      <label>Range Font Size :</label>
      <input
        type="range"
        min={10}
        max={100}
        defaultValue={15}
        onChange={handleSize}
      />

      <label>Pilih Background Color : </label>
      <input type="color" id="backgroundColor" onChange={handleBgColor} />
    </div>
  );
};

export default RealtimeInput;
