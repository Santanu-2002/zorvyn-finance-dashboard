import { useDispatch, useSelector } from "react-redux";
import { setRole} from ".././global/slices/role/roleSlice";
import SummaryBar from "../components/summarySection/SummaryBar";
import TransactionHistory from "../components/transactionSection/TransactionHistory";
import Insights from "../components/insights/Insights";

import "./dashboard.css";
export default function Dashboard(){
    const dispatch = useDispatch();

    const role = useSelector((state) => state.role.role);
return(
    <div className="dashboard-div">
        <header className="header-div">
            <h2>Finance Dashboard</h2>
            <button onClick={()=> dispatch(setRole(role === "viewer"?"admin":"viewer"))} className="role-button">
                {role==="viewer"?"Viewer":"Admin"}
            </button>
        </header>
        <main className="main-div">
            <SummaryBar/>
            <TransactionHistory/>
            <Insights/>
        </main>
        <footer className="footer-div">
            This is the Assignment for @ZORVYN
        </footer>
    </div>
)
}