import "./LoadScreenStyles.css";

const LoadScreen = () => {
  return (
    <div className="loadScreen">
      <div></div>
      <div className="midSection">
        <img src="./loadimage.svg" alt="" />
        <div>
          <h1>Pocket Notes</h1>
          <p>Send and receive messages without keeping your phone online.</p>
          <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
        </div>
      </div>
      <div className="endSection">
        <img src="./lock.svg" alt="" />
        <p>end-to-end encrypted</p>
      </div>
    </div>
  );
};

export default LoadScreen;
