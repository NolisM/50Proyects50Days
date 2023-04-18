import { Link } from 'react-router-dom'
import expandingCards from '../images/expandingCards.png'
import progressSteps from '../images/progressSteps.png'
import rotatingNavigation from '../images/rotatingNavigation.png'
import hiddenSearch from '../images/hiddenSearch.png'
import blurriLoading from '../images/blurriLoading.png'
import scrollAnimation from '../images/scrollAnimation.png'
import splitLandingPage from '../images/spliLandingPage.png'
import './proyect.css'

const images = {
    expandingCards,
    progressSteps,
    rotatingNavigation,
    hiddenSearch,
    blurriLoading,
    scrollAnimation,
    splitLandingPage

}

const proyect = ({ url, image, title }) => {
    return (
        <div className='project' data-message={`${title} `}  >
            <img src={images[image]} alt='img not found' className='img' />
            <a href={url}><button>Live Demo</button></a>
        </div>
    )

}

export default proyect