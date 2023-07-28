import './EventsPage.css';

export default function EventsPage(){
    return(
        <>
          {/* <div class="card mb-3" style="max-width: ;"> */}
            <div className='card1'>
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <svg class="bd-placeholder-img img-fluid rounded-start" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text></svg>
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Kid Camp -- 5-7yrs.</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-body-secondary">$50, one week</small></p>
                            <a class="btn btn-outline-primary" href="#" role="button">BOOK</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='card2'>
                {/* <div class="card mb-3" style="max-width: ;">  */}
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <svg class="bd-placeholder-img img-fluid rounded-start" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text></svg>
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Senior Camp</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-body-secondary">$50, one week</small></p>
                            <a class="btn btn-outline-primary" href="#" role="button">BOOK</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}