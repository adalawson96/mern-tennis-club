import './HomePage.css';
import { Link } from 'react-router-dom';

export default function HomePage(){
    return(
        <>
        <div id="carouselAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img  src="/backgroundHead.png" className="d-block w-100" alt="Logo"/>
                </div>
                <div className="carousel-item">
                    <img src="/tennisCourt.png" className="d-block w-100" alt="Tennis Court"/>
                </div>
                <div className="carousel-item">
                    <img src="/restuarantHead.png" className="d-block w-100" alt="Restaurant"/>
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselAutoplaying"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselAutoplaying"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        <br />
        <div className='subHeading'>
            <h3> Restaurant «XXX» is located in the Tennis Club Moinohs do Mar <br/> Ericeira, Portugal.</h3><br/>
            <h1>UPCOMING EVENTS</h1><br/>
        </div>
        <div className="upcoming-events">
            <div className="card1">
                <Link to="/events">{ <img src="/kidCamp.png" alt="Kid Camp"/>}</Link>
                <h3>KIDS CAMP</h3>
                <Link to="/events{">{ <button>DETAILS</button> }</Link>
            </div>
            <div className="card2">
            <Link to="/events">{ <img src="/seniorCamp.png" alt="Senior Camp"/>}</Link><br></br>
                <h3>SENIOR CAMP</h3>
                <Link to="/events{">{ <button>DETAILS</button> }</Link>
            </div>
            <div className="card2">
            <Link to="/events">{ <img src="/seniorCamp.png" alt="Senior Camp"/>}</Link><br></br>
                <h3>SENIOR CAMP</h3>
                <Link to="/events{">{ <button>DETAILS</button> }</Link>
            </div>
        </div>
        <div className="restaurant">
            <h1>RESTUARANT</h1>
        </div>

        <div className="schedule">
            {/* <h1>SCHEDULE</h1> */}
            <div class="flex-container">
                <div class="black-rectangle">
                    <h1>SCHEDULE</h1>
                </div>
            </div>
        </div>
            
        </>
    )
};