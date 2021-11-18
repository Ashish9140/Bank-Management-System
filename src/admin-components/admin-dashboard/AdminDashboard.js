import './AdminDashboard.css'

export const AdminDashboard = () => {
    return (
        <>
            <div className="cards">
                <div className="card-single">
                    <div>
                        <span>Total Balance</span>
                        <h2>$1000</h2>
                    </div>
                    <div>
                        <span className="las la-burn"></span>
                    </div>
                </div>
                <div className="card-single">
                    <div>
                        <span>Total Withdrawl</span>
                        <h2>$100</h2>
                    </div>
                    <div>
                        <span className="las la-burn"></span>
                    </div>
                </div>
                <div className="card-single">
                    <div>
                        <span>Last Withdrawl</span>
                        <h2>$300</h2>
                    </div>
                    <div>
                        <span className="las la-burn"></span>
                    </div>
                </div>
                <div className="card-single">
                    <div>
                        <span>Last Deposite</span>
                        <h2>$400</h2>
                    </div>
                    <div>
                        <span className="las la-burn"></span>
                    </div>
                </div>
                <div className="card-single">
                    <div>
                        <span>Total Users</span>
                        <h2>20</h2>
                    </div>
                    <div>
                        <span className="las la-burn"></span>
                    </div>
                </div>
                <div className="card-single">
                    <div>
                        <span>Active Users</span>
                        <h2>7</h2>
                    </div>
                    <div>
                        <span className="las la-burn"></span>
                    </div>
                </div>
                <div className="card-single">
                    <div>
                        <span>Inactive Users</span>
                        <h2>13</h2>
                    </div>
                    <div>
                        <span className="las la-burn"></span>
                    </div>
                </div>
            </div>
        </>
    )
}
