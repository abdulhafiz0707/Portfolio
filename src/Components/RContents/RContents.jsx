import React from 'react'
import './RContents.scss'
import Rlogo from '../../assets/img/Banner1.png'
import HtmlLogo from '../../assets/img/HtmlLogo.png'
import CssLogo from '../../assets/img/CssLogo.png'
import ReactLogo from '../../assets/img/ReactLogo.png'
import JS from '../../assets/img/JS.png'
import TSlogo from '../../assets/img/TSlogo.png'
import Sasslogo from '../../assets/img/Sasslogo.png'
import { IoSchoolSharp } from 'react-icons/io5'
import { FaCalendar } from 'react-icons/fa'
import { FaMapPin } from 'react-icons/fa'
import { PiStudentFill } from 'react-icons/pi'
import { MdOutlineSportsMartialArts } from 'react-icons/md'
import { GiJourney } from 'react-icons/gi'
import { PiCookingPotFill } from 'react-icons/pi'
import { MdComputer } from 'react-icons/md'


function RContents() {
	return (
		<div className='RContents'>
			<div className='RContainer1'>
				<img src={Rlogo} alt='' />
				<h1>My Skills</h1>
				<div className='Rtexts'>
					<p>
						🔹Frontend
						<br /> - Languages: HTML, CSS, SCSS, JavaScript, TypeScript
						<br />- Frameworks and libraries: React, Next.js, Redux Toolkit
					</p>
					<p>
						🎨 Styling
						<br /> - CSS frameworks: Tailwind CSS, Bootstrap
						<br /> - Styling methods: Styled Components
					</p>
					<p>
						🛠 Tools
						<br /> - Version control system: Git, GitHub
						<br /> - Module builder: Webpack
						<br /> - Working with API: Postman
						<br /> - Design and prototyping: Figma Pixso
					</p>

					<p>
						🚀 Additional skills
						<br /> - Adaptive layout
						<br /> - Working with REST API
						<br /> - Animations
					</p>
				</div>
			</div>
			<div className='RContainer2'>
				<div className='RContainer2-title'>
					<h1>About me</h1>
					<div className='RContainer2-title2'>
						<p>
							🔹Frontend developer, I create modern, fast and adaptive websites.
							I can work with React, JavaScript, TypeScript. I am constantly
							developing, learning new technologies and information, striving
							for clean and maintainable code. • I am proficient in Git,
							Webpack, Figma tools, I can work with REST API. I use SCSS,
							Tailwind CSS, Bootstrap, Styled Components in my work. •
							Experience in creating SPA, interacting with the server,
							optimizing performance and SEO. I understand application
							architecture, state management (Redux Toolkit). • Attentive to
							details, I know how to work in a team, I am always open to new
							projects and interesting tasks. I am ready for cooperation and
							professional growth. 🚀
						</p>
					</div>
				</div>
				<div className='ffwgit'>
					<div className='Hobby'>
						<h1 className='Hobby-text'>Hobby</h1>

						<div className='Hobby-container'>
							<p>
								• Sport{' '}
								<MdOutlineSportsMartialArts style={{ color: '#765AEE' }} />
							</p>
							<p>
								• Journey <GiJourney style={{ color: '#765AEE' }} />
							</p>
							<p>
								• Cooking <PiCookingPotFill style={{ color: '#765AEE' }} />
							</p>
							<p>
								• Programming <MdComputer style={{ color: '#765AEE' }} />
							</p>
						</div>
					</div>
					<div className='RContainer2-title2'>
						<h1>Education</h1>
						<div className='boxx'>
							<div className='title3'>
								<p>
									• Okurmen <IoSchoolSharp className='IoSchoolSharp' />
								</p>
								<p>
									• Bishkek <FaMapPin className='FaMapPin' />
								</p>
								<p>
									• 2024 <FaCalendar className='CiCalendar' />
								</p>
								<p>
									• Student <PiStudentFill className='PiStudentFill' />
								</p>
							</div>
						</div>
					</div>
				</div>
				<br />
				<br />
				<div className='Skills'>
					<img src={HtmlLogo} alt='' />
					<img src={CssLogo} alt='' />
					<img src={JS} alt='' />
					<img src={ReactLogo} alt='' />
					<img src={TSlogo} alt='' />
					<img src={Sasslogo} alt='' />
				</div>
			</div>
		</div>
	)
}

export default RContents
