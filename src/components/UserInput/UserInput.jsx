function UserInput ({ onChange, userInput }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial">Initial Investment</label>
                    <input id="initial" type="number" required value={userInput.initialInvestment} onChange={(e) => onChange('initialInvestment', e.target.value)} />
                </p>
                <p>
                    <label htmlFor="annual">Annual Investment</label>
                    <input id="annual" type="number" required value={userInput.annualInvestment} onChange={(e) => onChange('annualInvestment', e.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="return">Expected Return</label>
                    <input id="return" type="number" required value={userInput.expectedReturn} onChange={(e) => onChange('expectedReturn', e.target.value)} />
                </p>
                <p>
                    <label htmlFor="duration">Duration</label>
                    <input id="duration" type="number" required value={userInput.duration} onChange={(e) => onChange('duration', e.target.value)} />
                </p>
            </div>
        </section>
    );
}

export default UserInput;