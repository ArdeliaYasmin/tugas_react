import { Link, animateScroll as scroll } from 'react-scroll'

function Footer() {


  return (
    <footer>
      <div className="container" >
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">PT. Putra Kembar Berjaya</h1>
                <p className="footer-text">
                  Jl. Kedaung BKKBN No. 11 <br/>
                  Kp Cimuning - Mustika Jaya <br/>
                  Bekasi - Indonesia 
        
                </p>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Important Link</p>
                <ul>
                  <li>
                  <Link   
                         spy={true}
                         smooth={true}
                         duration={1000}
                         to="headerbg"
                  > Home </Link>
                  </li>
                  <li>
                  <Link to="services" spy={true} smooth={true} duration={1000} > Services </Link>
                  </li>
                  <li>
                  <Link to="about-scroll" spy={true} smooth={true} duration={1000}>About Us  </Link>
                  </li>
                  <li>
                  <Link to="contact" spy={true} smooth={true} duration={1000}> Contact  </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Contact</p>
                <ul>
                  <li>
                    <Link to="#" >mkt.putra2kembar@gmail.com <br/>
                    putra2kembar@yahoo.co.id</Link>
                  </li>
                  <li>
                    <Link to="#" > Burhan #3265</Link>
                  </li>
                  <li>
                    <Link to="#" >021 - 8550 4234 <br/>
                    021 - 8550 4481 </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Social Media</p>
                <ul>
                  <li>
                    <a target="_blank" rel="noreferrer" href="" > Github</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="" > Twitter</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href=""> Linkedin</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>

    </footer>
  );
}
export default Footer;
