import './Footer.css';

export default function Footer(){
    return(
        <footer>
                <div className="footer">
                    <div className="col-1">
                     {/* INSERT MAP? */}
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