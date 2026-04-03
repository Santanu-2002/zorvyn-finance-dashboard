
import {useSelector} from "react-redux"
import "./summaryCard.css";
import BalanceChart from "./BalanceChart";
export default function SummaryBar(){

    const transaction  = useSelector(
        (state)=> state.calculator.transactions
    );

    const totalIncome = transaction?.filter((item)=> item.type.toLowerCase()=== "income")
    ?.reduce((acc, curr)=> acc + Number(curr.amount), 0);

    const totalExpense = transaction?.filter((item)=> item.type.toLowerCase()=== "expense")
    ?.reduce((acc, curr)=> acc + Number(curr.amount), 0);

    const totalBalance = totalIncome - totalExpense;
    return(
        <div className="summary-div">
        <div className="summary-card">
            <h3>
                Total Balance
            </h3>
            <h5 style={{color:"blue"}}>
            {totalBalance}
            </h5>
        </div>
        <div className="summary-card">
            <h3 >Total Income(Monthly)</h3>
            <h5 style={{color:"blue"}}>{totalIncome}</h5>
        </div>
        <div className="summary-card">
            <h3 className="summary-info">Total Expense(Monthly)</h3>
            <h5 style={{color:"blue"}}>{totalExpense}</h5>
        </div>
        {/* <div className="summary-card"> */}
        <BalanceChart/>
        {/* </div> */}
    </div>
)
}