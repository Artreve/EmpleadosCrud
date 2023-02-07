import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">Primer Tp</a>
                <form className="d-flex" role="search">
                <Link className="btn btn-primary" type="submit">Inicio</Link>
                </form>
            </div>
        </nav>
    </div>
  )
}

export default NavBar