# Finance Dashboard

A responsive finance dashboard built as a frontend internship assignment. The app lets users track income, expenses, and view their financial activity through summary cards, a balance trend chart, and a transaction history table.


## Features

- **Summary Section** — Total Balance, Total Income, and Total Expense cards with a live balance trend line chart
- **Transaction History** — Full transaction table with sort by highest/lowest amount and reset
- **Add Transaction** — Admin-only modal form to add new transactions (date, amount, category, type)
- **Role-Based UI** — Toggle between Viewer and Admin roles; Admin gets access to the Add Transaction form
- **Responsive Design** — Works on desktop, tablet, and mobile screens

---

## Tech Stack

- React.js (functional components + hooks)
- Redux Toolkit (global state management)
- Recharts (balance trend line chart)
- CSS (per-component CSS files, no global CSS framework)
- Vite (build tool)

---

## Project Structure

```
src/
├── components/
│   ├── summarySection/
│   │   ├── SummaryBar.jsx        # Summary cards + chart wrapper
│   │   ├── BalanceChart.jsx      # Recharts line chart
│   │   ├── summaryCard.css
│   │   └── summaryChart.css
│   └── transactionSection/
│   |    ├── TransactionHistory.jsx  # Sort buttons, Add button, modal form
│   |    ├── TransactionTable.jsx    # Reusable table with load more
│   |    ├── transactionHistory.css
|   |    └── transactionTable.css
|   └── insights/
|       ├── Insignts.jsx  
│       └── insignts.css
├── global/
│   └── slices/
│       ├── moneyTracker/
│       │   └── calculations.js   # transactions slice (setTransaction, addTransaction)
│       └── role/
│           └── roleSlice.js      # role slice (viewer / admin)
│   └── globalStore.js            # Redux store
├── data/
│   └── dummyData.json            # Mock transaction data
├── pages/
│   └── Dashboard.jsx             # Main page layout
│   └── dashboard.css
└── main.jsx                      # App entry point with Redux Provider
```

---

## Getting Started

### Prerequisites

- Node.js v18 or above
- npm


### Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.


## How Role Switching Works

There is no login or backend auth. Role switching is simulated on the frontend using Redux.

- Click the **Admin / Viewer** button in the header to toggle between roles
- **Viewer** — can see all data, charts, and transactions but cannot add new ones
- **Admin** — gets access to the **ADD NEW** button which opens a form to add a transaction

---

## State Management

Redux Toolkit is used for all global state.

| Slice | State | Actions |
|---|---|---|
| `calculator` | `transactions[]` | `setTransaction`, `addTransaction` |
| `role` | `"viewer" \| "admin"` | `setRole` |

Both slices are registered in `globalStore.js` and the `Provider` wraps the entire app in `main.jsx`.

---

## Data Format

Each transaction in `dummyData.json` follows this shape:

```json
{
  "date": "2025-01-15",
  "amount": 5000,
  "category": "Salary",
  "type": "income"
}
```

Valid categories: `Client Payment`, `Office Rent`, `Utilities`, `Salary`, `Operations`, `Marketing`

Valid types: `income`, `expense`

---

## Assignment Requirements Coverage

| Requirement | Status |
|---|---|
| Dashboard Overview with summary cards 
| Time-based visualization (balance trend chart) 
| Transaction list with date, amount, category, type 
| Sorting  |  Sort by highest and lowest amount |
| Role-based UI (Viewer / Admin) 
| Admin can add transactions 
| State management (Redux Toolkit) 
| Responsive design 
| Empty / edge case handling 

---

## Known Limitations

- Data is not persisted — refreshing the page resets transactions to the original dummy data
- No backend or authentication — roles are frontend-only simulation




**Santanu Kumar Nayak**
Frontend Developer
[LinkedIn](https://www.linkedin.com/in/santanu-kumar-nayak-b39441289/)
