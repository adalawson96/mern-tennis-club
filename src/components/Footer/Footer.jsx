import './Footer.css';

export default function Footer(){
    return(
        <footer>
                <div className="footer">
                    <div className="col-1">
                     {/* INSERT MAP? */}
                      {/* Schedule Section */}
        {/* <div className="schedule">
            <div class="flex-container">
                <div class="black-rectangle">
                    <h1>SCHEDULE</h1>
                    <h3>Tennis Court- Monday-Friday 9-18h.</h3>
                    <h3>Saturday 10-15h.</h3><br/><br/><br/>
                </div>
            </div> */}
                        <img src="./tennisLogo.png" alt="Logo" />
                    </div>
                    <div className="col-2">
                        <h5>Procuramos, pela via do desporto, melhorar as capacidades individuais ao nível do desenvolvimento físico, psíquico e social. As classes são organizadas por idades, nível e objectivos de aprendizagem.</h5><br />
                        <h3>GET IN TOUCH!</h3>
                        <div className="social-icons">
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-instagram"></i>
                        </div>
                        <h5>©2023, Molinohs do Mar</h5>
                    </div>
                </div>
        </footer>
    )
}