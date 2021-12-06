import React, { useEffect, useState } from 'react'
import { fetchCountries } from '../../actions/Actions'
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios";
import { Link } from "react-router-dom";
import './fromActivity.css'
import { Nav } from '../nav/Nav';



export const FormActivity = () => {

	const countries = useSelector((state) => state.getCountries.countries);
	const dispatch = useDispatch()
	const [formSate, setFormState] = useState({

		name: "",
		difficulty: "",
		duration: "",
		season: "",
		countryId: []

	})


	useEffect(() => {
		dispatch(fetchCountries())
	}, [dispatch])


	const handleSubmit = async (e) => {
		e.preventDefault();

		if (isValid()) {
			alert("Actividad creada correctamente")

			await axios.post("http://localhost:3001/activity", formSate);
			setFormState({
				name: "",
				difficulty: "",
				duration: "",
				season: "",
				countryId: [],
			})
		} else {
			alert("Los campos deben estar completos")
		}
	};

	const isValid = () => {

		if (formSate.name.length === 0) {


			return false;
		} else if (formSate.difficulty === "") {

			return false;

		} else if (formSate.duration === "") {
			return false;
		} else if (formSate.season === "") {
			return false;
		} else if (formSate.countryId === []) {
			return false
		}

		return true
	}

	const handleInputChange = ({ target }) => {

		setFormState({
			...formSate,
			[target.name]: target.value
		})
	}

	const handleChangeSelect = ({ target }) => {

		setFormState({
			...formSate,
			[target.name]: [...formSate.countryId, target.value]
		})
	}

	return (

		<>
			<Nav />
			<div className="container-form">
				<div className="dform">
					<div className="header">
						<h2>Crear actividad turistica</h2>
					</div>
					<form id="form" className="form" onSubmit={handleSubmit}>
						<div className="form-control">
							<label >Nombre</label>
							<input className='input' type="text" id="name" name="name" onChange={handleInputChange} value={formSate.name} />

						
						</div>
						<div className="form-control">
							<label >Dificultad </label>
							<select className="input" name="difficulty" onChange={handleInputChange} value={formSate.difficulty} >
								<option >Selecionar dificultad</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>

							</select>
							

						</div>
						<div className="form-control">
							<label>Temporada</label>
							<select className='input' name="season" onChange={handleInputChange} value={formSate.season}>
								<option >Selecionar temporada</option>
								<option value="Verano">Verano</option>
								<option value="Otoño">Otoño</option>
								<option value="Invierno">Invierno</option>
								<option value="Primavera">Primavera</option>
							</select>
							
						</div>

						<div className="form-control">
							<label>Duracion</label>
							<input className='input' type="text" id="duracion" placeholder="Rango de 1 a 24 Horas" name="duration" onChange={handleInputChange} value={formSate.duration} />
						
						</div>

						<div className="form-control">
							<label>Seleccionar pais</label>
							<select
								className="select-country"
								name="countryId"
								multiple
								value={formSate.countryId}
								onChange={handleChangeSelect}>

								{
									countries?.map((c) => {
										return (
											<option key={c.name} value={c.id}>
												{c.name}
											</option>
										)
									})
								}
							</select>
							
						</div>
						<div className="form-control">
							<button className="btn" onClick={handleSubmit}>Crear</button>
							<Link className="formLink" to="/countries">Regresar al Home</Link>
						</div>


					</form>
				</div>

			</div>

		</>


	)
}
