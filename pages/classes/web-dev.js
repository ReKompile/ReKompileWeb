import GradientButton from "../../components/GradientButton";

export default function WebDev() {
  return (
    <div className="main-web-dev-page">
      <div id="cover">
        <div className="content">
          <h1 id="heading">Website Development</h1>
          <h2>Free</h2>
          <p id="paragraph">
            This class will teach you HTML <br /> and CSS and guide you to build{" "}
            <br />
            <span id="underline"> a real world website</span>
          </p>
          <br />
          <GradientButton>Sign Up</GradientButton>
        </div>
      </div>

      <div id="container">
        <div className="items" id="item-1">
          <span className="icon-heading">
            <img src="/webDevAssets/time-five.png" alt="" width="20px" />{" "}
            Estimated Time
          </span>
          <h3>3 months</h3>
          <p>At 2 hours/week</p>
        </div>
        <div className="items" id="item-2">
          <span className="icon-heading">
            <img
              src="/webDevAssets/location-icon.png"
              alt=""
              width="20px"
              // height="20px"
            />{" "}
            Location
          </span>
          <h3>Rise Academy</h3>
          <p>This class only offered in person to Rise Academy student</p>
        </div>
        <div className="items" id="item-3">
          <span className="icon-heading">
            <img src="/webDevAssets/read-outlined.png" alt="" width="20px" />{" "}
            PREREQUISITES
          </span>
          <h3>None</h3>
          <p>We will teach you everything you need to know</p>
        </div>
      </div>

      <div id="learning-container">
        <div className="icon-heading">WHAT YOU WILL LEARN</div>
        <div className="learning">
          <div className="learn">
            <img src="/webDevAssets/tick-vector.png" alt="" width="30px" />
            <p>The basics of UI design using Figma</p>
          </div>
          <div className="learn">
            <img src="/webDevAssets/tick-vector.png" alt="" width="30px" />
            <p>Implementing Figma designs using CSS</p>
          </div>
          <div className="learn">
            <img src="/webDevAssets/tick-vector.png" alt="" width="30px" />
            <p>Fundamentals of HTML and how to write it</p>
          </div>
          <div className="learn">
            <img src="/webDevAssets/tick-vector.png" alt="" width="30px" />
            <p>Web layout and responsiveness</p>
          </div>
        </div>
      </div>

      {/* <div className="text-5xl text-center mb-5">Web Dev Page</div>
      <div className="bg-under-construction h-full"></div> */}
    </div>
  );
}
