import { Link } from 'react-router-dom'
import expandingCards from '../images/expandingCards.png'
import progressSteps from '../images/progressSteps.png'
import rotatingNavigation from '../images/rotatingNavigation.png'
import hiddenSearch from '../images/hiddenSearch.png'
import blurriLoading from '../images/blurriLoading.png'
import './proyect.css'

const images = {
    expandingCards,
    progressSteps,
    rotatingNavigation,
    hiddenSearch,
    blurriLoading

}

const proyect = ({ url, image, title }) => {
    return (
        < Link to={url}  >
            <div className='project' data-message={`${title} `}  >
                <p>{title}</p>
                <img src={images[image]} alt='img not found' className='img' />
                <button>Live Demo</button>
            </div>
        </Link>
    )

}

export default proyect