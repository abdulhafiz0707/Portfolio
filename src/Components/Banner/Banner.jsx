import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Banner.scss'

import BannerFoto from '../../assets/img/Banner1.png'
import InstagramLogo from '../../assets/img/InstagramLogo.png'
import FacebookLogo from '../../assets/img/FacebookLogo.png'
import LinkedinLogo from '../../assets/img/LinkedinLogo.png'
import GitHub from '../../assets/img/GitHub.png'

function Banner() {
	useEffect(() => {
		AOS.init({ duration: 1000, once: true })
	}, [])

	return (
		<div className='Banner'>
			<div className='Banner-contents'>
				<div data-aos='fade-right'>
					<p className='Banner-p1'>
						Hello gyes, <i>I’m</i>
					</p>
					<h1>Kudaiberdiev Abdulhafiz</h1>
					<p className='Banner-p2'>FrontEnd Developer</p>
					<p className='Banner-p3'>
						I am committed to finding innovative solutions and continuously
						experimenting to help my clients achieve their goals.
					</p>
					<button data-aos='zoom-in'>Let’s Talk</button>
				</div>
				<div className='Banner-img' data-aos='fade-left'>
					<img src={BannerFoto} alt='Profile' />
				</div>
			</div>

			<div className='Social-media' data-aos='fade-up'>
				<p>Check out My</p>
				<div className='box'>
					<a
						href='https://www.instagram.com/kudaiberdieev__/?utm_source=ig_web_button_share_sheet'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src={InstagramLogo} alt='Instagram Logo' />
					</a>
				</div>
				<div>
					<a
						className='facebook'
						href='https://www.facebook.com/?locale=ru_RU'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src={FacebookLogo} alt='Facebook Logo' />
					</a>
				</div>
				<div>
					<a
						className='linkedin'
						href='https://www.linkedin.com/feed/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src={LinkedinLogo} alt='LinkedIn Logo' />
					</a>
				</div>
				<div>
					<a
						className='GitHub'
						href='https://github.com/abdulhafiz0707'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src={GitHub} alt='GitHub Logo' />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Banner
