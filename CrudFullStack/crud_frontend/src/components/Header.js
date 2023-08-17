import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<NavLink className="navbar-brand" hrefLang="" to="/">
					CRUD App
				</NavLink>
				<button
					className="navbar-toggler collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#mobileMenu"
					aria-controls="mobileMenu"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="toggler-icon top-bar"></span>
					<span className="toggler-icon middle-bar"></span>
					<span className="toggler-icon bottom-bar"></span>
				</button>
				<div className="collapse navbar-collapse" id="mobileMenu">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeclassname="active"
								to="/cruds/new"
							>
								Create
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeclassname="active"
								to="/cruds"
							>
								CRUDs
							</NavLink>
						</li>

					</ul>
				</div>
			</div>
		</nav>
  );
}
