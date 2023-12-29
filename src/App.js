import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as ReactDOMClient from 'react-dom/client'
import './style.css'

import local from './local.svg'
import sun from './sun.svg'
import rain from './rain.svg'
import humidity from './humidity.svg'
import wind from './wind.svg'
import weathImg from './weatherImg.svg'

const src =
	'http://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&units=metric&appid=e7023e697cfd6ddd1b49d65e8ff44259'

function App() {
        const [articles, setArticles] = useState([])
		const [city, setCity] = useState('')

        useEffect(() => {
					navigator.geolocation.getCurrentPosition(function (position) {
						const lat = position.coords.latitude
						const lon = position.coords.longitude

						const src = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=e7023e697cfd6ddd1b49d65e8ff44259`

						axios.get(src).then(data => {
							setArticles(data.data.list)
							setCity(data.data.city.name)
						})
					})
				}, [])

	return (
		<div className='wrapper'>
			<div className='container'>
				<div className='city'>
					<img src={local} />
					{city && <p> {city}</p>}
				</div>
				<main>
					<div className='logo'>
						<img src={sun} />
					</div>
					<div className='weather'>
						<div className='onePart'>
							{articles[0] && <p className='title'>{articles[0].main.temp}º</p>}
							<div className='maxMin'>
								{articles[0] && (
									<p className='max'>Max.: {articles[0].main.temp_max}º</p>
								)}
								{articles[0] && (
									<p className='min'>Min.: {articles[0].main.temp_min}º</p>
								)}
							</div>
						</div>
						<div className='twoPart'>
							<div className='twoPart__cont twoPart__one'>
								<img src={rain} />
								6%
							</div>
							<div className='twoPart__cont twoPart__two'>
								<img src={humidity} />
								{articles[0] && <p>{articles[0].main.humidity}%</p>}
							</div>
							<div className='twoPart__cont twoPart__tree'>
								<img src={wind} />
								{articles[0] && <p>{articles[0].wind.speed}km\h</p>}
							</div>
						</div>
						<div className='treePart'>
							<div className='treePart__title'>
								<p className='today'>Today</p>
								{articles[0] && (
									<p className='date'>
										{new Date(articles[0].dt * 1000).toLocaleDateString(
											'ru-RU',
											{
												month: 'long',
												day: 'numeric',
											}
										)}
									</p>
								)}
							</div>
							<div className='cards'>
								<div className='card'>
									{articles[1] && (
										<p className='card__temp'>{articles[1].main.temp}º</p>
									)}
									<img src={weathImg} className='weathImg' />

									{articles[1] && (
										<p className='time'>
											{new Date(articles[1].dt * 1000).toLocaleTimeString(
												'ru-RU',
												{
													hour: '2-digit',
													minute: '2-digit',
												}
											)}
										</p>
									)}
								</div>
								<div className='card'>
									{articles[2] && (
										<p className='card__temp'>{articles[2].main.temp}º</p>
									)}
									<img src={weathImg} className='weathImg' />
									{articles[2] && (
										<p className='time'>
											{new Date(articles[2].dt * 1000).toLocaleTimeString(
												'ru-RU',
												{
													hour: '2-digit',
													minute: '2-digit',
												}
											)}
										</p>
									)}
								</div>
								<div className='card'>
									{articles[3] && (
										<p className='card__temp'>{articles[3].main.temp}º</p>
									)}
									<img src={weathImg} className='weathImg' />
									{articles[3] && (
										<p className='time'>
											{new Date(articles[3].dt * 1000).toLocaleTimeString(
												'ru-RU',
												{
													hour: '2-digit',
													minute: '2-digit',
												}
											)}
										</p>
									)}
								</div>
								<div className='card'>
									{articles[4] && (
										<p className='card__temp'>{articles[4].main.temp}º</p>
									)}
									<img src={weathImg} className='weathImg' />
									{articles[4] && (
										<p className='time'>
											{new Date(articles[4].dt * 1000).toLocaleTimeString(
												'ru-RU',
												{
													hour: '2-digit',
													minute: '2-digit',
												}
											)}
										</p>
									)}
								</div>
							</div>
						</div>
						<div className='but'>
							<button className='button'>Next Forecast</button>
						</div>
					</div>
				</main>
			</div>
		</div>
	)
}

export default App