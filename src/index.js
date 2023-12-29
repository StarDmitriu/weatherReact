import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as ReactDOMClient from 'react-dom/client'
import './style.css'
import App from './App'

const app = ReactDOMClient.createRoot(document.getElementById('app'))

app.render(
	<React.StrictMode>
		<App/>
	</React.StrictMode>
)
