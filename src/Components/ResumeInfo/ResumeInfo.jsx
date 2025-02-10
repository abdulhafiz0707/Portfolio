import React from 'react'
import './ResumeInfo.scss'
import { PiMapPinSimpleAreaFill } from 'react-icons/pi'
import { FaSquarePhone } from 'react-icons/fa6'
import { FaTelegram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function ResumeInfo() {
	return (
		<div className='ResumeInfo'>
			<div className='Title'>
				<p className='titles'>
					A <i>|</i> K
				</p>
				<p className='name'>Abdulhafiz Kudaiberdiev</p>
			</div>
			<div className='Resume-social'>
				<div className='map'>
					<PiMapPinSimpleAreaFill className='PiMapPinSimpleAreaFill' />
					<h2>Geolocation</h2>
					<p className='mep-p'>Kyrgyzstan Chui</p>
					<p>Postal code ( 722030 )</p>
				</div>
				<div className='phone'>
					<FaSquarePhone className='FaSquarePhone' />
					<h2>Phone</h2>
					<p>+996 559 20 70 83</p>
				</div>
				<div className='telegram'>
					<FaTelegram className='FaTelegram' />
					<div className='webb'>
						{' '}
						{/* ✅ Исправлено: <div> вместо <p> */}
						<h2>Telegram</h2>
						<a href='https://t.me/@abdulhaf1z83'>t.me/abdulhaf1z83</a>
					</div>
				</div>

				<div className='email'>
					<MdEmail className='MdEmail' />
					<h2>Email</h2>
					<p className='gmail-name'>abdulhafizkudajberdiev</p>
					<p className='gmail'>@gmail.com</p>
				</div>
			</div>
		</div>
	)
}

export default ResumeInfo
