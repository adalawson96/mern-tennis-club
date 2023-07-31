import './EventsPage.css';

export default function EventsPage(){
    return(
        <>
          {/* <div class="card mb-3" style="max-width: ;"> */}
            <div className='cardA'>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                        <svg className="bd-placeholder-img img-fluid rounded-start" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text></svg>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Kid Camp -- 5-7yrs.</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">$50, one week</small></p>
                            <a className="btn btn-outline-primary" href="#" role="button">BOOK</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='cardB'>
                {/* <div className="card mb-3" style="max-width: ;">  */}
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                        <svg className="bd-placeholder-img img-fluid rounded-start" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text></svg>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Senior Camp</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">$50, one week</small></p>
                            <a className="btn btn-outline-primary" href="#" role="button">BOOK</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}