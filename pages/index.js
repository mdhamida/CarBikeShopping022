
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'





export default function Home() {
  return (
 <>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
 <Navbar/>
 

 <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/car3.jpg"  width="1400" height="500" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1 style={{color:"red"}}>Welcome to You</h1>
        <p style={{color:"white" }}>In this website i will show all kind of car like electric car lexery car and letest car </p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="bg4.jpg"  width="1400" height="500" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h1 style={{color:"red"}}>Welcome to You</h1>
        <p style={{color:"white" }}>In this website i will show all kind of car like electric car lexery car and letest car </p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="car2.jpg"  width="1400" height="500" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h1 style={{color:"red"}}>Welcome to You</h1>
        <p style={{color:"white" }}>In this website i will show all kind of car like electric car lexery car and letest car </p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


 <div class="card-group">
 <h2>New Cars</h2>
  <div class="card">
  
    <img src="/c1.jpg" class="card-img-top" alt="error"/>
    <div class="card-body">
      <h5 class="card-title">Maruti Vitara Brezza</h5>
      <p class="card-text">Diwali offers</p>
      <button type="button" class="btn btn-danger">Rs 10 Lakh.</button>
     
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>

  <div class="card">
    <img src="/c2.jpg" class="card-img-top" alt="error"/>
    <div class="card-body">
      <h5 class="card-title">Maruti S-Cross</h5>
      <p class="card-text">Diwali offers</p>
      <button type="button" class="btn btn-danger">Rs.11.Lakh.</button>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>

  <div class="card">
    <img src="c3.jpg" class="card-img-top" alt="error"/>
    <div class="card-body">
      <h5 class="card-title">Hyundai Venue</h5>
      <p class="card-text">Diwali offers</p>
      <button type="button" class="btn btn-danger">Rs 11.1 Lakh.</button>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>


<div class="card-group">
<h3>Luxery Cars</h3>
  <div class="card">

    <img src="/c4.jpg" class="card-img-top" alt="error"/>
    <div class="card-body">
      <h5 class="card-title">Maruti Vitara Brezza</h5>
      <p class="card-text">Diwali offers</p>
      <button type="button" class="btn btn-danger">Rs.7.62 Lakh.</button>
     
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>

  <div class="card">
    <img src="/c5.jpg" class="card-img-top" alt="error"/>
    <div class="card-body">
      <h5 class="card-title">Maruti S-Cross</h5>
      <p class="card-text">Diwali offers</p>
      <button type="button" class="btn btn-danger">Rs.8.8 Lakh.</button>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>

  <div class="card">
    <img src="c6.jpg" class="card-img-top" alt="error"/>
    <div class="card-body">
      <h5 class="card-title">Hyundai Venue</h5>
      <p class="card-text">Diwali offers</p>
      <button type="button" class="btn btn-danger">Rs.11.1 Lakh.</button>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>




<div class="card-group">
<h3>Electric Cars</h3>
  <div class="card">
 
    <img src="/c9.jpg" class="card-img-top" alt="error"/>
    <div class="card-body">
      <h5 class="card-title">Maruti Vitara Brezza</h5>
      <p class="card-text">Diwali offers</p>
      <button type="button" class="btn btn-danger">Rs.10 Lakh.</button>
     
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>

  <div class="card">
    <img src="/c8.jpg" class="card-img-top" alt="error"/>
    <div class="card-body">
      <h5 class="card-title">Maruti S-Cross</h5>
      <p class="card-text">Diwali offers</p>
      <button type="button" class="btn btn-danger">Rs.11 Lakh.</button>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>

  <div class="card">
    <img src="c9.jpg" class="card-img-top" alt="error"/>
    <div class="card-body">
      <h5 class="card-title">Hyundai Venue</h5>
      <p class="card-text">Diwali offers</p>
      <button type="button" class="btn btn-danger">Rs.6. Lakh.</button>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>



<div class="card-group">
<h3>Popular Cars</h3>
  <div class="card">
 
    <img src="/c12.jpg" class="card-img-top" alt="error"/>
    <div class="card-body">
      <h5 class="card-title">Maruti Vitara Brezza</h5>
      <p class="card-text">Diwali offers</p>
      <button type="button" class="btn btn-danger">Rs.7 Lakh.</button>
     
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>

  <div class="card">
    <img src="/c11.jpg" class="card-img-top" alt="error"/>
    <div class="card-body">
      <h5 class="card-title">Maruti S-Cross</h5>
      <p class="card-text">Diwali offers</p>
      <button type="button" class="btn btn-danger">Rs.8 Lakh.</button>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  

  <div class="card">
    <img src="c12.jpg" class="card-img-top" alt="error"/>
    <div class="card-body">
      <h5 class="card-title">Hyundai Venue</h5>
      <p class="card-text">Diwali offers</p>
      <button type="button" class="btn btn-danger">Rs.6 Lakh.</button>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>






<div style={{background:"black"}} className="card ">
           <div className="row">

           
<h5>Email Us: ali.hamid161999@gmail.com</h5>
<h5>follow us:</h5>
               <div className="col-6">
               <div className="header__content">
               <div className="header__section">
               <ul className="header__ul">
              <li>
              <a href="https://www.facebook.com/mdhamid.ali.5836/">
                <h5>facebook</h5>
                  </a>
              </li>

              <li>
              <a href="https://www.twitter.com">
              <h5>Twitter</h5>
                  </a>
              </li>

              <li>
              <a href="https://www.linkedin.com/in/md-hamid-ali-b46474210/">
              <h5>linkedin</h5>
                  </a>
              </li>

              </ul>
           
          
         </div>
     </div>
 </div>
               
               <div className="col-6">
               <h1>Created by : </h1>
                 <div className="banner__img">
                     <img style={{width:"150px"}} src="/student.jpg" alt="pic" />
                 </div>
               </div>
      

           </div>
        
       </div>     

    </>
  )
}
