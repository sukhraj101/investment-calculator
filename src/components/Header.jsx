import logo from '../assets/investment-calculator-logo.png';

function Header () {
    return (
        <>
            <img src={logo} alt="" />
            <h1>Investment Calculator</h1>
        </>
    );
}

export default Header;