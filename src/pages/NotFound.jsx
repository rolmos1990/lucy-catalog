import Logo from "../assets/images/logo/lucymodas-logo.png";
import Seo from "../components/common/seo/Seo";

function NotFound() {
  return (
    <>
      <Seo title="404 " />
      {/* End Seo Related data */}
      <div className="error-page ">
        <img src={Logo} style={{'height': '100px', 'marginBottom': '150px'}} />
        <hr />
      <div className="d-flex align-items-center">
        <div className="content-wrapper m-5">
          <h6>404</h6>
          <h1 className="font-recoleta">Página no encontrada</h1>
          <p className="text-lg">
            Lucy Modas <br />, haz ingresado en una pagina incorrecta.
          </p>
          <a href="http://lucymodas.com" className="theme-btn-four">
            Ir a la web
          </a>
        </div>
      </div>
      </div>
    </>
  );
}

export default NotFound;
