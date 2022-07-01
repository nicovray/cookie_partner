/* eslint-disable import/no-extraneous-dependencies */
import ProgressBar from "@ramonak/react-progress-bar";

export default function Progression() {
  return (
    <div>
      <h5>Budget used</h5>
      <ProgressBar
        completed={60}
        className="wrapper1"
        barContainerClassName="container1"
        completedClassName="barCompleted1"
        labelClassName="label1"
      />
      <h5>Tasks advancement</h5>
      <ProgressBar
        completed={30}
        className="wrapper2"
        barContainerClassName="container2"
        completedClassName="barCompleted2"
        labelClassName="label2"
      />
      <h5>UI/UI</h5>
      <ProgressBar
        completed={60}
        className="wrapper3"
        barContainerClassName="container3"
        completedClassName="barCompleted3"
        labelClassName="label3"
      />
      <h5>Data analysis</h5>
      <ProgressBar
        completed={40}
        className="wrapper4"
        barContainerClassName="container4"
        completedClassName="barCompleted4"
        labelClassName="label4"
      />
      <h5>Testing</h5>
      <ProgressBar
        completed={80}
        className="wrapper5"
        barContainerClassName="container5"
        completedClassName="barCompleted5"
        labelClassName="label5"
      />
    </div>
    //   <ProgressBar completed={60} />
  );
}
