import React from 'react';
import { connect } from 'react-redux'
import Chart from '../charts/Chart'
import './Dashboard.css'

class Dashboard extends React.Component {
    lastTransaction = (type) => {
        let amount = 0;
        this.props.userInfo.account.transactionHistory.forEach((transaction) => {
            if (transaction.transactionType === type) {
                amount = transaction.amount;
            }
        })
        return amount;
    }
    totalWithdraw = () => {
        let amount = 0;
        this.props.userInfo.account.transactionHistory.forEach((transaction) => {
            if (transaction.transactionType === "withdraw") {
                amount += transaction.amount;
            }
        })
        return amount;
    }
    render() {
        const { userInfo } = this.props;
        return (
            <>
                <div className="cards">
                    <div className="card-single">
                        <div>
                            <span>Current Balance</span>
                            <h2>${ userInfo.account ? userInfo.account.accountBal : 0 }</h2>
                        </div>
                        <div>
                            <span className="las la-burn"></span>
                        </div>
                    </div>
                    <div className="card-single">
                        <div>
                            <span>Last Deposit</span>
                            <h2>${ userInfo.account ? this.lastTransaction("deposit") : 0 }</h2>
                        </div>
                        <div>
                            <span className="las la-burn"></span>
                        </div>
                    </div>
                    <div className="card-single">
                        <div>
                            <span>Last Withdrawl</span>
                            <h2>${ userInfo.account ? this.lastTransaction("withdraw"):0 }</h2>
                        </div>
                        <div>
                            <span className="las la-burn"></span>
                        </div>
                    </div>
                    <div className="card-single">
                        <div>
                            <span>Total Withdrawl</span>
                            <h2>${userInfo.account ? this.totalWithdraw() : 0}</h2>
                        </div>
                        <div>
                            <span className="las la-burn"></span>
                        </div>
                    </div>
                </div>
                <div className="chart">
                    <Chart />
                </div>
            </>
        )
    }
    
    
}

const mapStateToProps = (state) => {
    return { ...state };
}
export default connect(mapStateToProps)(Dashboard);