import "./Spinner.css";

export const Spinner = (props) => {
  props.close();
  return (
    <div className="spinner-wrapper">
      <div class="spinner-container">
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
};
