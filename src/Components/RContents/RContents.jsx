import React from 'react'
import './RContents.scss'
import Rlogo from '../../assets/img/Rlogo.jpg'
import { IoSchoolSharp } from 'react-icons/io5'
import { FaCalendar } from 'react-icons/fa'
import { FaMapPin } from 'react-icons/fa'
import { PiStudentFill } from 'react-icons/pi'
import { MdOutlineSportsMartialArts } from 'react-icons/md'
import { GiJourney } from 'react-icons/gi'
import { PiCookingPotFill } from 'react-icons/pi'
import { MdComputer } from 'react-icons/md'
import { HiChevronDown } from 'react-icons/hi'

function RContents() {
	return (
		<div className='RContents'>
			<div className='RContainer1'>
				<img src={Rlogo} alt='' />
				<h1>Skill</h1>
				<div className='Rtexts'>
					<p>
						Frontend: HTML5, CSS3, SCSS, JavaScript TypeScript Frameworks:
						React, Nextjs, Redux Toolkit Styling: Tailwind CSS, Bootstrap,
						Styled Components Tools: Git, GitHub, Webpack, Postman, Figma
						Additional: Adaptive layout, working with REST API, animations
					</p>
				</div>
			</div>
			<div className='RContainer2'>
				<div className='RContainer2-title'>
					<h1>
						About me <HiChevronDown />
					</h1>

					<p>
						• Frontend developer, I create modern, fast and adaptive websites. I
						can work with React, JavaScript. TypeScript. I am constantly
						developing, learning new technologies and information, I strive for
						clean code. I am ready for cooperation and new projects.
					</p>
				</div>
				<div className='RContainer2-title2'>
					<h1>
						Education <HiChevronDown />
					</h1>
					<div className='boxx'>
						<div className='title3'>
							<p>
								• okurmen <IoSchoolSharp className='IoSchoolSharp' />
							</p>
							<p>
								• 2024 <FaCalendar className='CiCalendar' />
							</p>
							<p>
								• Bishkek <FaMapPin className='FaMapPin' />
							</p>
						</div>
						<div className='STUDENT'>
							<p className='students'>
								STUDENT <PiStudentFill className='PiStudentFill' />
							</p>
						</div>
					</div>
				</div>

				<div className='Hobby'>
					<h1 className='Hobby-text'>
						Hobby <HiChevronDown />
					</h1>

					<div className='Hobby-container'>
						<p>
							• Sport{' '}
							<MdOutlineSportsMartialArts
								style={{ color: 'rgb(8, 114, 191)' }}
							/>
						</p>
						<p>
							• journey <GiJourney style={{ color: 'rgb(8, 114, 191)' }} />
						</p>
						<p>
							• Cooking{' '}
							<PiCookingPotFill style={{ color: 'rgb(8, 114, 191)' }} />
						</p>
						<p>
							• Programming <MdComputer style={{ color: 'rgb(8, 114, 191)' }} />
						</p>
					</div>
				</div>
			</div>
			<hr />
		</div>
	)
}

export default RContents
