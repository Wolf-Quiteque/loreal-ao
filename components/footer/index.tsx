const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6>
              <img
                src="https://loreal-ao.vercel.app/images/logo.svg"
                style={{ height: "200", width: "100px" }}
              />
            </h6>
            <p>
              Oferecemos uma gama de produtos capilares de alta qualidade,
              especificamente desenvolvidos para atender às suas necessidades
              individuais. Nossos produtos incluem xampus, condicionadores,
              tratamentos, produtos para pentear e muito mais.
            </p>
            <ul className="site-footer__social-networks">
              <li>
                <a href="#">
                  <i className="icon-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-youtube-play"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Comprar online</li>
              <li>
                <a href="#">Status do pedido</a>
              </li>
              <li>
                <a href="#">Envio e entrega</a>
              </li>
              <li>
                <a href="#">devoluções</a>
              </li>
              <li>
                <a href="#">Opções de pagamento</a>
              </li>
              <li>
                <a href="#">Contate-nos</a>
              </li>
            </ul>
            <ul>
              <li>Informação</li>
              <li>
                <a href="#">Cartões de presente</a>
              </li>
              <li>
                <a href="#">Encontre uma loja</a>
              </li>
              <li>
                <a href="#">Boletim de Notícias</a>
              </li>
              <li>
                <a href="#">Torne-se um membro </a>
              </li>
              <li>
                <a href="#">Site feedback</a>
              </li>
            </ul>
            <ul>
              <li>Contact</li>
              <li>
                <a href="#">store@uikit.com</a>
              </li>
              <li>
                <a href="#">Hotline: +1 131 138 138</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>DESIGN BY GSMART - © 2023. TODOS DIREITOS RESERVADO.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
