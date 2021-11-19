import "../../../node_modules/react-vis/dist/style.css";
import { connect } from "react-redux";
import {
  XYPlot,
  LineSeries,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
} from "react-vis";

const Chart = (props) => {
    let x = 0, y = 0;
  let data = [{ x: x, y: y }];
    if (props.userInfo.account) {
        props.userInfo.account.transactionHistory.forEach((transaction) => {
            data = [...data,  {x: x++, y: transaction.finalBal}]
        });
    }
  return (
    <div style={{ marginTop: "15px" }}>
      <XYPlot height={300} width={800}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries data={data} color="red" />
        <LineSeries data={data} color="purple" />
        <LineSeries data={data} color="yellow" />
      </XYPlot>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { ...state };
};
export default connect(mapStateToProps)(Chart);
