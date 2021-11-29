import Navbar from "../components/Navbar"
import Link from "next/link";
const login = () => {
    return (
        <>
        <Navbar/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
     <div style={{textAlign:"center"}} className="container">
       <div   className="login">
         <div  class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" />
</div>
 

 <div  class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Paaword</label>
  <input type="email" class="form-control" id="exampleFormControlInput1"/>
</div>

<div  class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
  <input type="email" class="form-control" id="exampleFormControlInput1"/>
</div>
</div>
<button  type="submit" class="btn btn-primary">Submit</button>

</div>
        </>
    )
}

export default login
