import config from "./config";

let testAppJs = () => {
  console.log("app.js imported to index.js");
  console.log(config);
  TweenMax.to(".main__logo", 0.6, {
    x: 200,
    yoyo: true,
    repeat: -1,
    ease: Power4.easeOut
  });
};

export default testAppJs;
