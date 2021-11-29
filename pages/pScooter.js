import Navbar from "../components/Navbar"
import Link from "next/link";
const pScooter = () => {
    return (
        <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <Navbar/>
       


        <div class="card-group">
<h3>Popular Scooter</h3>
 <div class="card">
 
   <img src="/s9.png" class="card-img-top" alt="error"/>
   <div class="card-body">
     <h5 class="card-title">safari</h5>
     <p class="card-text">Diwali offers</p>
     <button type="button" class="btn btn-danger">Rs.70000.</button>
    
     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
   </div>
 </div>

 <div class="card">
   <img src="/s6.jpeg" class="card-img-top" alt="error"/>
   <div class="card-body">
     <h5 class="card-title">safari</h5>
     <p class="card-text">Diwali offers</p>
     <button type="button" class="btn btn-danger">Rs.70000.</button>
     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
   </div>
 </div>

 <div class="card">
   <img src="s7.jpg" class="card-img-top" alt="error"/>
   <div class="card-body">
     <h5 class="card-title">safari</h5>
     <p class="card-text">Diwali offers</p>
     <button type="button" class="btn btn-danger">Rs.70000.</button>
     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
   </div>
 </div>
</div>
         
        </div>
    )
}

export default pScooter
