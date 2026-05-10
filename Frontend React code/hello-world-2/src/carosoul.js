function carosoul() {
    return(
        <div>
            <div id="demo1" className="carousel slide" data-ride="carousel">
  <ul className="carousel-indicators">
    <li data-target="#demo1" data-slide-to="0" class="active"></li>
    <li data-target="#demo1" data-slide-to="1"></li>
    <li data-target="#demo1" data-slide-to="2"></li>
  </ul>
  <div className="carousel-inner">
    <div className="carousel-item active">
      
      <div className="carousel-caption">
        <h1 className="text-white">Alappuzha</h1>
      </div>   
    </div>
    <div className="carousel-item">
     
      <div className="carousel-caption">
        <h1 className="text-white">Kovalam</h1>
      </div>   
    </div>
 <div className="carousel-item">
      
      </div>   
  </div>
  </div>
  <a className="carousel-control-prev" href="#demo1" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#demo1" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a>
</div>

    )
}
export default carosoul;