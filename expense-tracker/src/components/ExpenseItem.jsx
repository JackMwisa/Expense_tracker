import "./ExpenseItem.css"

// function ExpenseItem({date, title, amount}) {

function ExpenseItem(props) {
    // const expenseDate = new Date(2023, 2 ,21);
    // const expenseTitle = "Car Insurance";
    // const expenseAmount = 294.67;

    const month = props.date.toLocaleString("USA", {month: 'long'})
    const day = props.date.toLocaleString("USA", {day: '2-digit'})
    const year = props.date.getFullYear();

    return (
        <div className="expense-item">
            <div>
                {/* {props.date.toISOString()} */}
                
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            
            
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;