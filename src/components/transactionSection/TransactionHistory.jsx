import TransactionTable from "./TransactionTable";
import dummyData from "../../data/dummyData.json";
import "./transactionHistory.css";

import { useDispatch, useSelector } from "react-redux";
import { setTransacrtion, addTransaction} from "../../global/slices/moneyTracker/calculations";

import { useEffect, useState } from "react";

export default function TransactionHistory(){
    const [originalData , setOriginalData] = useState(dummyData);
    const [updatedData, setUpdatedData] = useState(dummyData);
    const [formData, setFormData] = useState({
    date: "",
    amount: "",
    category: "",
    type: ""
    });
    
    const [add , setAdd] = useState(false);

    const dispatch =  useDispatch();
    const role = useSelector((state)=> state.role.role);

    const handleChange =(field, value)=>{
        setFormData((prev)=>({
            ...prev,
            [field]:value
        }));
    };

    useEffect(()=> {
        dispatch(setTransacrtion(dummyData));
    },[]);
    

    const handleSubmit =(e)=>{
        e.preventDefault();
        const newData = {
            ...formData,
            amount: Number(formData.amount)
        };

        dispatch(addTransaction(newData));
        setUpdatedData((prev)=> [...prev, newData]);
        setOriginalData((prev)=> [...prev, newData]);

        setFormData({
            date: "",
            amount: "",
            category: "",
            type: ""
        });
    };

    const handelMinAmount =()=>{
        const sortedDataMin = [...updatedData]?.sort((prev, curr)=> prev.amount - curr.amount);
        
        setUpdatedData(sortedDataMin);
    };

    const handleMaxAmount =()=>{
        const sortedDataMax = [...updatedData]?.sort((prev, curr)=> curr.amount - prev.amount );

        setUpdatedData(sortedDataMax);
    };

    const handleOriginal = ()=>{
        setUpdatedData(originalData);
    }

    const tableColumns = [
        {header:"Date", accessor:"date"},
        {header:"Amount", accessor:"amount"},
        {header:"Category", accessor:"category"},
        {header:"Type", accessor:"type"},
    ]
return(
    <>
    <div className="holding-div">
    <div className="transaction-div">
        <div className="buttons-div">
            <button onClick={handleMaxAmount} className="sort-buttons">Highest Price⬆️</button>
            <button onClick={handelMinAmount} className="sort-buttons">Lowest Price⬇️</button>
            <button onClick={handleOriginal} className="sort-buttons">Reset</button>
        </div>
        <div className="transctions-list">
        <TransactionTable columns={tableColumns} data={updatedData}/>
        </div>
    </div >
    {role === "admin" && (
            <button onClick={()=> setAdd(true)} className="add-button">ADD NEW</button>
        )}
    </div>
        {add && (
            <div className="form-div">
                <form onSubmit={handleSubmit} className="form-page">
                    <div className="input-divs">
                    <label>Date</label>
                    <input type="date" value={formData.date} onChange={(e)=> handleChange("date",e.target.value)}
                    className="form-input"/>
                    </div>
                    <div className="input-divs">
                    <label>Amount</label>
                    <input type="number" value={formData.amount} onChange={(e)=> handleChange("amount",e.target.value)}
                    className="form-input"/>
                    </div>
                    <div className="input-divs">
                    <label>Category</label>
                    <select onChange={(e)=> handleChange("category",e.target.value)} value={formData.category} 
                        className="form-input">
                        <option> select-category</option>
                        <option value="Client Payment">Client Payment</option>
                        <option value="Office Rent">Office Rent</option>
                        <option value="Utilities">Utilities</option>
                        <option value="Salary">Salary</option>
                        <option value="Operations">Operations</option>
                        <option value="Marketing">Marketing</option>
                    </select>
                    </div>
                    <div className="input-divs">
                    <label>Type</label>
                    <select onChange={(e)=> handleChange("type",e.target.value)}
                        className="form-input">
                        <option value="">selct-type</option>
                        <option value="income">income</option>
                        <option value="expense">expense</option>
                    </select>
                    </div>

                    <div className="form-buttomRow">
                    <button className="form-button">ADD</button>
                    <button className="close-button" onClick={()=> setAdd(false)}>CLOSE</button>
                    </div>
                </form>
            </div>
        )}
    </>
)
}