import React from 'react'
import '../MyService/MyService.scss'
import Servic from '../../assets/img/Servic.png'

function MyService() {
	return (
		<div className='Service'>
			<div className='Service-title'>
				<p>Services</p>
				<h1>My projects</h1>
			</div>
			<div className='Service-content'>
				<div className='Service-content1'>
					<img src={Servic} alt='' />
					<h2>Driving School</h2>
					<p>Here you can look</p>
					<button>
						<a href='https://driving-school-pjz3.vercel.app/'>Go</a>
					</button>
				</div>
				<div className='Service-content2'>
					<img src={Servic} alt='' />
					<h2>Driving School</h2>
					<p>Here you can look</p>
					<button>
						<a href='https://driving-school-pjz3.vercel.app/'>Go</a>
					</button>
				</div>
				<div className='Service-content3'>
					<img src={Servic} alt='' />
					<h2>Driving School</h2>
					<p>Here you can look</p>
					<button>
						<a href='https://driving-school-pjz3.vercel.app/'>Go</a>
					</button>
				</div>
			</div>
		</div>
	)
}

export default MyService
