import React from 'react';




function Card() {
  return (
    <>
    <div className="card mb-3 text-center" >
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzvfJVaUafdQvJnFk5WqxyBoKX9CQtPrtnfA&s" className="card-img-top" alt="" style={{height: 35 +"rem",width: 80.7 +"rem"}}/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
 

  <div className="card-container">
  <div className="card" style={{width: 18+"rem"}}>
    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT3O9oVCP2b9wo41j2l9xPGdBNeQbbrtoRkuTCPGcdCHHzVam6v" className="card-img-top" alt="..." style={{height: 20 +"rem",width: 16.5 +"rem"}}/>
    <div className="card-body">
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
  <div className="card" style={{width: 18+"rem"}}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcrpI7fHyuLvWYioQJ_EMgHebppuxlrv-VxB1ZnYuu9sI7lJYy" className="card-img-top" alt="..." style={{height: 20 +"rem",width: 16.5 +"rem"}}/>
    <div className="card-body">
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
</div>
<div className="card-container">
  <div className="card" style={{width: 18+"rem"}}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_uUox6R8uKLiyE9igAnnwoh_hQ5jJwfe6w6JtcwURt5XK8V3D" className="card-img-top" alt="..." style={{height: 20 +"rem",width: 16.5 +"rem"}}/>
    <div className="card-body">
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
  <div className="card" style={{width: 18+"rem"}}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv4b5nqw5GlvuesveN906ANEJrzywK1-_gqE5FF4RvnDmys_o8" className="card-img-top" alt="..." style={{height: 20 +"rem",width: 16.5 +"rem"}}/>
    <div className="card-body">
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
</div>


<div className="card mb-3 text-center" >
    <img src="data:image/jpeg;base64,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" className="card-img-top" alt="" style={{height: 35 +"rem",width: 80.7 +"rem"}}/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>


  <div className="card-container">
  <div className="card" style={{width: 18+"rem"}}>
    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZYsB81BAiAEDoGvlh1W5IzyeOUEIvasuQt9cVnsxECTWFrW0W" className="card-img-top" alt="..." style={{height: 20 +"rem",width: 16.5 +"rem"}}/>
    <div className="card-body">
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
  <div className="card" style={{width: 18+"rem"}}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBjLRaS7-3ukA9XK6XREUvXjik3ctRsoMojwyTF8j_McGT08pN" className="card-img-top" alt="..." style={{height: 20 +"rem",width: 16.5 +"rem"}}/>
    <div className="card-body">
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
</div>
<div className="card-container">
  <div className="card" style={{width: 18+"rem"}}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwxBmjCFEQmG4uc7d_oFibErWzbyRRRfRJ48esvoRol-MzjSPe" className="card-img-top" alt="..." style={{height: 20 +"rem",width: 16.5 +"rem"}}/>
    <div className="card-body">
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
  <div className="card" style={{width: 18+"rem"}}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSdargRU6hgvGu3fqDPxlJqIS-s-wTmOKnh0af07HHbDKSH2Gf" className="card-img-top" alt="..." style={{height: 20 +"rem",width: 16.5 +"rem"}}/>
    <div className="card-body">
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
</div>



   </>

  );
}

export default Card;