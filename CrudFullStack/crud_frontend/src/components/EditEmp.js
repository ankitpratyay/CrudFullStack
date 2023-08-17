import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
export default function EditEmp(props) {
    const initialState = {
		companyName: "",
		phone: "",
		email: "",
		location: "",
		link: "",
		description: "",
	};
	const [crud, setCrud] = useState(initialState);

	const { _id } = useParams();
	const navigate = useNavigate();

	useEffect(
		function () {
			async function updateCrud() {
				try {
					const response = await axios.get(`http://localhost:5000/api/cruds/${_id}`);
					console.log("Employee Respose for Edit :",response)
					setCrud(response.data);
				} catch (error) {
					console.log(error);
				}
			}
			updateCrud();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[props]
	);

	function handleSubmit(event) {
		event.preventDefault();
		async function updateCrud() {
			try {
				await axios.patch(`http://localhost:5000/api/cruds/${crud._id}`, crud);
				navigate(`/cruds/${crud._id}`);
			} catch (error) {
				console.log(error);
			}
		}
		updateCrud();
	}

	function handleChange(event) {
		setCrud({ ...crud, [event.target.name]: event.target.value });
	}

	function handleCancel() {
		navigate(`/cruds/${crud._id}`);
	}

	return (
		<div className="container">
			<h1>Edit {crud.companyName}</h1>
			<hr />
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Name</label>
					<input
						name="companyName"
						type="text"
						value={crud.companyName}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Phone</label>
					<input
						name="phone"
						type="tel"
						pattern="+91-[0-9]{10}"
						required
						value={crud.phone}
						onChange={handleChange}
						className="form-control"
					/>
					<small>Format: +91-XXXXXXXXXX</small>
				</div>
				<div className="form-group">
					<label>Email</label>
					<input
						name="email"
						type="email"
						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
						required
						value={crud.email}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Location</label>
					<input
						name="location"
						type="text"
						required
						value={crud.location}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Description</label>
					<textarea
						name="description"
						row="5"
						value={crud.description}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="btn-group mt-2">
					<button type="submit" className="btn btn-primary">
						Update
					</button>
					<button
						type="button"
						onClick={handleCancel}
						className="btn btn-secondary"
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}
