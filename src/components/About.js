function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src="./img/img1.png" className="img-fluid" />
          </div>
          <div className="col-md-6 text-justify">
            <h2 className="main-title about-h2">ABOUT</h2>
            <p className="main-p">
            PT Putra Kembar Berjaya ialah perusahaan yang bergerak dibidang pembuatan
            kemasan kotak karton bergelombang, yang terdiri dari Single Wall (E/F, B/F, dan C/F),
            Double Wall (CB/F), Triple Wall (ABC/F) dengan berbagai spesifikasi seperti gramatur
            dan ukuran carton box untuk type regular box maupun custom box.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
