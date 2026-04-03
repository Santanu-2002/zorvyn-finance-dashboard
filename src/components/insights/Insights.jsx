import { useSelector } from "react-redux";
import "./insights.css"
export default function Insights(){
    const transaction = useSelector((state)=> state.calculator.transactions);

    const categoryMapping = {};

    transaction.forEach((item) => {
        if(item.type === "expense"){
            categoryMapping[item.category] = (categoryMapping[item.category] || 0) + item.amount;
        }
    });

    let highestSpentCategory = "";
    let highestSpentamount = 0;

    for(let categoryies in categoryMapping){
        if(categoryMapping[categoryies]> highestSpentamount){
            highestSpentamount = categoryMapping[categoryies];
            highestSpentCategory= categoryies;
        }
    };


return(
    <div className="insights-div">
        <div className="insight-card"> 
            <h3>Hightest Spent Category is:</h3>
            <p>{highestSpentCategory}</p>
        </div>
        
        <div className="insight-card">
            <h3>Amount:</h3>
            <p>{highestSpentamount}</p>
        </div>
        
    </div>
)
}