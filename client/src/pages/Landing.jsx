import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
        <h1>Landing Page</h1>
        <Link to="/login">Login Page</Link>
        <Link to="/register">Register Page</Link>
    </div>
  )
}

export default Landing