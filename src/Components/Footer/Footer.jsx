import React from 'react'
import './Footer.scss'
import InstagramLogo from '../../assets/img/InstagramLogo.png'
import FacebookLogo from '../../assets/img/FacebookLogo.png'
import LinkedinLogo from '../../assets/img/LinkedinLogo.png'
import GitHub from '../../assets/img/GitHub.png'

function Footer() {
	return (
		<footer>
			<div className='Footer-title'>
				<h1>Portfolio</h1>
			</div>
			<div className='Footer-container'>
				<div className='Footer-content1'>
					<h1>Company</h1>
					<p>About me</p>
					<p>Why Choose me</p>
					<p>Pricing</p>
					<p>Testimonial</p>
				</div>
				<div className='Footer-content2'>
					<h1>Resources</h1>
					<p>Privacy Policy</p>
					<p>Terms and Condition</p>
					<p>Blog</p>
					<p>Contact Us</p>
				</div>
				<div className='Footer-register'>
					<h1>Subscribe my Newsletter</h1>
					<div>
						<input type='text' placeholder='Enter your Email' />{' '}
						<button>Subscribe</button>
					</div>
				</div>
			</div>
			<div className='Footer-bottom'>
				<hr />
				<p>Copyright @2025</p>
				<div className='Footer-social'>
					<a className='insta' href='https://www.instagram.com'>
						<img src={InstagramLogo} alt='' />
					</a>
					<a className='book' href='https://www.facebook.com'>
						<img src={FacebookLogo} alt='' />
					</a>
					<a className='link' href='https://www.linkedin.com'>
						<img src={LinkedinLogo} alt='' />
					</a>
					<a className='git' href='https://github.com'>
						<img src={GitHub} alt='' />
					</a>
				</div>
				<hr />
			</div>
		</footer>
	)
}

export default Footer
