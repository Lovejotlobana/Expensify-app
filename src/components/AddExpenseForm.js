import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import React from 'react';
import { useState } from 'react';
import 'react-dates/lib/css/_datepicker.css';
import { useNavigate } from 'react-router-dom';

// const now = moment().valueOf();
// console.log('DATE', now.valueOf());
// console.log('New DAte'.now.format('Do Mo YYYY'));
const ExpenseForm = (props) => {
  const [description, setDescription] = props.expense
    ? useState(props.expense.description)
    : useState('');

  const [notes, setNotes] = useState('');

  const [amount, setAmount] = props.expense
    ? useState(props.expense.amount)
    : useState(0);

  const [date, setDate] = useState(moment());
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) {
      setMsg('Please Enter Amount and Decription.They cannot be empty');
    } else {
      props.onSubmit({
        description,
        amount,
        createdAt: date.valueOf(), //.vauleof()
        notes,
      });
      navigate('/', { replace: true });
    }
  };

  const [calenderFocused, setCalenderFocused] = useState(false);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='description'
          autofocus
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <input
          type='number'
          placeholder='amount'
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <br /> <br />
        <textarea
          placeholder='notes'
          value={notes}
          onChange={(e) => {
            setNotes(e.target.value);
          }}
        />
        <SingleDatePicker
          date={date} // momentPropTypes.momentObj or null
          onDateChange={(date) => setDate(date)} // PropTypes.func.isRequired
          focused={calenderFocused} // PropTypes.bool
          onFocusChange={({ focused }) => setCalenderFocused(focused)} // PropTypes.func.isRequired
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <button type='submit'>Add Expense</button>
      </form>
      <br />
      <br />
      <p>{msg}</p>
    </div>
  );
};

export default ExpenseForm;
