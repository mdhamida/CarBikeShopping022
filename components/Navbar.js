

const Navbar = () => {
    return (
      
        <div>
        
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <img src="/logo_car.jpeg" alt="error" width="50" height="30"/>
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="newCar" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Cars
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="/">Cars</a></li>
            <li><a class="dropdown-item" href="/newCar">New Cars</a></li>
            <li><a class="dropdown-item" href="/fCar">Find New Cars</a></li>
            <li><a class="dropdown-item" href="/pCar">Popular Cars</a></li>
            <li><a class="dropdown-item" href="/uCar">Upcoming Cars</a></li>
            <li><a class="dropdown-item" href="/lCar">Latest Cars</a></li>
            <li><a class="dropdown-item" href="lCars">Luxury Cars</a></li>
            <li><a class="dropdown-item" href="#">Sport Cars</a></li>
            <li><a class="dropdown-item" href="#">SUV Cars</a></li>
            <li><a class="dropdown-item" href="#">Electric Cars</a></li>
            <li><a class="dropdown-item" href="#">SUV Cars</a></li>
            <li><a class="dropdown-item" href="#">Compare New Cars</a></li>
            <li><a class="dropdown-item" href="#">New Car Dealers</a></li>

        
          
          </ul>

          
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Bike
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="/bike">Bikes</a></li>
          <li><a class="dropdown-item" href="/nBike">New Bikes</a></li>
            <li><a class="dropdown-item" href="/fBike">Find New Bikes</a></li>
            <li><a class="dropdown-item" href="/pBike">Popular Bike</a></li>
            <li><a class="dropdown-item" href="/uBike">Upcoming Bike</a></li>
            <li><a class="dropdown-item" href="/lBike">Latest Bike</a></li>
            <li><a class="dropdown-item" href="#">Luxury Bike</a></li>
            <li><a class="dropdown-item" href="#">Sport Bike</a></li>
            <li><a class="dropdown-item" href="#">SUV Bike</a></li>
            <li><a class="dropdown-item" href="#">Electric Bike</a></li>
            <li><a class="dropdown-item" href="#">SUV Bike</a></li>
            <li><a class="dropdown-item" href="#">Compare New Bike</a></li>
            <li><a class="dropdown-item" href="#">New Car Bike</a></li>
           
          </ul>

          
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/scooter" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Scooters
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="/nScooter">New Scooters</a></li>
            <li><a class="dropdown-item" href="/fScooter">Find New Scooters</a></li>
            <li><a class="dropdown-item" href="/pScooter">Popular Scooters</a></li>
            <li><a class="dropdown-item" href="/uScooter">Upcoming Scooters</a></li>
           
          </ul>

          
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/bicycles" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Bicycles
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="/nby">New Bicycles</a></li>
            <li><a class="dropdown-item" href="/fby">Find New Bicycles</a></li>
            <li><a class="dropdown-item" href="/pby">Popular Bicycles</a></li>
            <li><a class="dropdown-item" href="/uby">Upcoming Bicycles</a></li>
            <li><a class="dropdown-item" href="#">Latest Bicycles</a></li>
           
          </ul>

          
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/new" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           New Review
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="https://realty.economictimes.indiatimes.com/news/industry/uk-to-make-electric-car-charging-points-compulsory-in-new-buildings/87872097">News</a></li>
            <li><a class="dropdown-item" href="https://www.youtube.com/watch?v=JXohLJfaME0">Video of Cars</a></li>
           
          </ul>

          
        </li>


        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          More
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Book Test Drive Car</a></li>
            <li><a class="dropdown-item" href="#">Get Licence</a></li>
           
          </ul> 
        </li>
        <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
        
      </form>
      <li><a class="dropdown-item" href="https://www.google.co.in/maps">Location</a></li>
            <li><a class="dropdown-item" href="/login">Login/Register</a></li>
      </ul>

      
    
    </div>
  </div>
</nav>   
        </div>
    )
}

export default Navbar
