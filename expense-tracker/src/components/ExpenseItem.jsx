import ExpenseDate from "./ExepenseDate";
import "./ExpenseItem.css"

// function ExpenseItem({date, title, amount}) {

function ExpenseItem(props) {

    return (
        <div className="expense-item">

            <ExpenseDate date={props.date} />

            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;