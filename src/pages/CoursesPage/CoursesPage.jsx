import './CoursesPage.css';

export default function CoursesPage(){
    return(
    <>
      <div>
        <h1>Tennis School Courses & Prices</h1>
        <h3>kids</h3>
        <div className="parent-container">
            <div className="card-container">
                <div className="card text-bg-warning mb-3" style={{ maxWidth: '18rem' }}>
                    <div className="card-header">5-9 yo, max 8 ppl</div>
                    <div className="card-body">
                    <h5 className="card-title">Mini Tennis</h5>
                    <p className="card-text">
                    €45/month /1x Week  <br /> €80/month /2x Week
                    </p>
                    </div>
                </div>
                <div className="card text-bg-warning mb-3" style={{ maxWidth: '18rem' }}>
                    <div className="card-header">10-13 yo, max 6 ppl</div>
                    <div className="card-body">
                    <h5 className="card-title">Initiation</h5>
                    <p className="card-text">
                    €45/month /1x Week  <br /> €100/month /2x Week <br /> €150/month /3x Week
                    </p>
                    </div>
                </div>
                <div className="card text-bg-warning mb-3" style={{ maxWidth: '18rem' }}>
                    <div className="card-header">14-18 yo, max 4 ppl</div>
                    <div className="card-body">
                    <h5 className="card-title">PreCompetition</h5>
                    <p className="card-text">
                    €65/month /1x Week €135/month /2x Week <br /> €195/month /3x Week
                    </p>
                    </div>
                </div>
            </div>
        </div>

        <h3>adults</h3>
        <div className="parent-container">
            <div className="card-container">
                <div className="card text-bg-info mb-3" style={{ maxWidth: '18rem' }}>
                    <div className="card-header">Header</div>
                    <div className="card-body">
                    <h5 className="card-title">Info card title</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    </div>
                </div>
                <div className="card text-bg-info mb-3" style={{ maxWidth: '18rem' }}>
                    <div className="card-header">Header</div>
                    <div className="card-body">
                    <h5 className="card-title">Info card title</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    </div>
                </div>
                <div className="card text-bg-info mb-3" style={{ maxWidth: '18rem' }}>
                    <div className="card-header">Header</div>
                    <div className="card-body">
                    <h5 className="card-title">Info card title</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                </div>
            </div>
            </div>
        </div>
 
            <h3>individuals </h3>
            <div className="parent-container">
                {/* <div className="card-container"> */}
                <div className="card text-bg-success mb-3" style={{ maxWidth: '18rem' }}>
                    <div className="card-header">Header</div>
                    <div className="card-body">
                    <h5 className="card-title">Success card title</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </>
   )
}