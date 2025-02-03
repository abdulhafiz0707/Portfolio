import React, { useState } from 'react'
import '../Testimonials/Testimonials.scss'
import T1 from '../../assets/svg/T1.svg'
import T2 from '../../assets/svg/T2.svg'
import Bayastan from '../../assets/img/Bayastan.jpg'
import Ellipse2 from '../../assets/svg/Ellipse2.svg'
import Ellipse3 from '../../assets/svg/Ellipse3.svg'

function Testimonials() {
	const [index, setIndex] = useState(0)

	const reviews = [
		{
			img: Bayastan,
			text: 'She listened to my ideas and provided valuable input, which helped to create a user interface that was both aesthetically pleasing and easy to use.',
			name: 'Bayastan Akmataliev',
			position: 'Executive Engineer',
		},
		{
			img: Ellipse2,
			text: 'I recently worked with Saira on a project and was extremely impressed with their creativity and attention to detail. She listened to my ideas and',
			name: 'Rick Wright',
			position: 'Executive Engineer',
		},
		{
			img: Ellipse3,
			text: 'Her design skills are top-notch and effectively communicated with our team throughout the project. I highly recommend her to anyone in.',
			name: 'Devon Miles',
			position: 'Executive Engineer',
		},
	]

	const prevSlide = () => {
		setIndex(index === 0 ? reviews.length - 1 : index - 1)
	}

	const nextSlide = () => {
		setIndex(index === reviews.length - 1 ? 0 : index + 1)
	}

	return (
		<div className='Testimonials'>
			<div className='Testimonials-title'>
				<p>Testimonials</p>
				<h2>What Our Customers Say</h2>
			</div>
			<div className='Rewies'>
				<div className='review'>
					<img src={reviews[index].img} alt={reviews[index].name} />
					<p>{reviews[index].text}</p>
					<h3>{reviews[index].name}</h3>
					<h6>{reviews[index].position}</h6>
				</div>
			</div>
			<div className='buttons'>
				<button className='btn1' onClick={prevSlide}>
					<img src={T1} alt='Previous' />
				</button>
				<button className='btn2' onClick={nextSlide}>
					<img src={T2} alt='Next' />
				</button>
			</div>
		</div>
	)
}

export default Testimonials
