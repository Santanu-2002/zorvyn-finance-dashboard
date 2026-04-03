import { useState } from "react";
import "./transactionTable.css";
export default function TransactionTable({ columns, data }) {

    const [dataCount, setDataCount] = useState(10);

    const handleMore = () =>{
        setDataCount((prev)=> prev +10);
    };
    
  return (
    <div className="table-container">
    <table className="table-body">
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col.header}</th>
          ))}
        </tr> 
      </thead>
      <tbody>
        {data?.slice(0, dataCount).map((row, rowId) => (
          <tr key={rowId}>
            {columns.map((col, colId) => (
              <td key={colId}>
                {row[col.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>

    </table>
    <button onClick={handleMore} className="load-button">Load more</button>
    </div>
  );
}

