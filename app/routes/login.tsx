import { Link, Outlet } from "@remix-run/react"

export default () => {
    return (
        <div className="login-container">
            <h1>Welcome to Wellness Center</h1>
            <div className="form-container">
                <Link to="/login/login">Login</Link>
                <Link to="/login/register">Register</Link>
                <Outlet />

            </div>
        </div>
    )
}