import Candlestick from "./Wijmo/Candlestick"
import TransactionsTable from "./Wijmo/TransactionTable"
import Trade from "./Wijmo/Trade"


const Dashboard = () => {

    return (
        <div className="dashboard">
            <Candlestick />
            <Trade />
            <TransactionsTable />
        </div>
    )
}

export default Dashboard