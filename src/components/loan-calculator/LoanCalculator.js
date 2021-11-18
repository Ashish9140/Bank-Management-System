import React, { useState } from 'react';

export const LoanCalculator = () => {
    // state to storage the values given by the user when filling the input fields
    const [userValues, setUserValues] = useState({
        amount: '',
        interest: '',
        years: '',
    });

    // state to storage the results of the calculation
    const [results, setResults] = useState({
        monthlyPayment: '',
        totalPayment: '',
        totalInterest: '',
        isResult: false,
    });

    // state to storage error message
    const [error, setError] = useState('');

    // event handler to update state when the user enters values

    const handleInputChange = (event) =>
        setUserValues({ ...userValues, [event.target.name]: event.target.value });

    const isValid = () => {
        const { amount, interest, years } = userValues;
        let actualError = '';
        // Validate if there are values
        if (!amount || !interest || !years) {
            actualError = 'All the values are required';
        }
        // Validade if the values are numbers
        if (isNaN(amount) || isNaN(interest) || isNaN(years)) {
            actualError = 'All the values must be a valid number';
        }
        // Validade if the values are positive numbers
        if (Number(amount) <= 0 || Number(interest) <= 0 || Number(years) <= 0) {
            actualError = 'All the values must be a positive number';
        }
        if (actualError) {
            setError(actualError);
            return false;
        }
        return true;
    };

    // Handle the data submited - validate inputs and send it as a parameter to the function that calculates the loan
    const handleSubmitValues = (e) => {
        e.preventDefault();
        if (isValid()) {
            setError('');
            calculateResults(userValues);
        }
    };

    // Calculation
    const calculateResults = ({ amount, interest, years }) => {
        const userAmount = Number(amount);
        const calculatedInterest = Number(interest) / 100 / 12;
        const calculatedPayments = Number(years) * 12;
        const x = Math.pow(1 + calculatedInterest, calculatedPayments);
        const monthly = (userAmount * x * calculatedInterest) / (x - 1);

        if (isFinite(monthly)) {
            const monthlyPaymentCalculated = monthly.toFixed(2);
            const totalPaymentCalculated = (monthly * calculatedPayments).toFixed(2);
            const totalInterestCalculated = (
                monthly * calculatedPayments -
                userAmount
            ).toFixed(2);

            // Set up results to the state to be displayed to the user
            setResults({
                monthlyPayment: monthlyPaymentCalculated,
                totalPayment: totalPaymentCalculated,
                totalInterest: totalInterestCalculated,
                isResult: true,
            });
        }
        return;
    };

    // Clear input fields
    const clearFields = () => {
        setUserValues({
            amount: '',
            interest: '',
            years: '',
        });

        setResults({
            monthlyPayment: '',
            totalPayment: '',
            totalInterest: '',
            isResult: false,
        });
    };

    return (
        <div className='calculator'>
            <h2>Loan Calculator</h2>
            {/* Display the error when it exists */}
            <p className='error'>{error}</p>
            <form onSubmit={handleSubmitValues}>
                {/* ternary operator manages when the calculator and results will be displayed to the user */}
                {!results.isResult ? (
                    //   Form to collect data from the user
                    <div className='loan-calc'>
                        <div className="loan-group">
                            <label>Amount</label>
                            <div>
                                <input type='text'
                                    name='amount'
                                    placeholder='Loan amount'
                                    value={userValues.amount}
                                    onChange={handleInputChange} required />
                            </div>
                        </div>
                        <div className="loan-group">
                            <label>Interest</label>
                            <div>
                                <input type='text'
                                    name='interest'
                                    placeholder='Interest'
                                    value={userValues.interest}
                                    onChange={handleInputChange} required />
                            </div>
                        </div>
                        <div className="loan-group">
                            <label>Years</label>
                            <div>
                                <input type='text'
                                    name='years'
                                    placeholder='Years to repay'
                                    value={userValues.years}
                                    onChange={handleInputChange} required />
                            </div>
                        </div>
                        <div className="loan-calc-btn">
                            <button type="submit">Calculate</button>
                        </div>
                    </div>
                ) : (
                    //   Form to display the results to the user
                    <div className='loan-calc'>
                        <h4>
                            Loan amount: ${userValues.amount} <br /> Interest:{' '}
                            {userValues.interest}% <br /> Years to repay: {userValues.years}
                        </h4>

                        <div className="loan-group">
                            <label id='label'>Monthly Payment:</label>
                            <div>
                                <input type='text' value={results.monthlyPayment} disabled />
                            </div>
                        </div>

                        <div className="loan-group">
                            <label id='label'>Total Payment: </label>
                            <div>
                                <input type='text' value={results.totalPayment} disabled />
                            </div>
                        </div>

                        <div className="loan-group">
                            <label id='label'>Total Interest:</label>
                            <div>
                                <input type='text' value={results.totalInterest} disabled />
                            </div>
                        </div>

                        {/* Button to clear fields */}
                        <div className="loan-calc-btn">
                            <button type="submit" onClick={clearFields}>Calculate Again</button>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
}