import React from 'react'
import './ResumeInfo.scss'
import { RiMapPinUserLine } from 'react-icons/ri'
import { LuPhone } from 'react-icons/lu'
import { MdOutlineEmail } from 'react-icons/md'

function ResumeInfo() {
	return (
		<div className='ResumeInfo'>
			<div className='Title'>
				<p className='titles'>A | K</p>
				<p className='name'>Abdulhafiz Kudaiberdiev</p>
			</div>
			<div className='Resume-social'>
				<div className='map'>
					<RiMapPinUserLine className='RiMapPinUserLine' />
					<p className='mep-p'>Kyrgyzstan Chui</p>
					<p>Postal code ( 722030 )</p>
				</div>
				<div className='phone'>
					<LuPhone className='LuPhone' />
					<p>+996 559 20 70 83</p>
				</div>
				<div className='email'>
					<MdOutlineEmail className='MdOutlineEmail' />
					<p className='gmail-name'>abdulhafizkudajberdiev</p>
					<p className='gmail'>@gmail.com</p>
				</div>
			</div>
		</div>
	)
}

export default ResumeInfo
