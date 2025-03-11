import download from './download.jpeg'
import './style.css'
function Template(){
  return (
    <>
    <div class="container">
    <div class="header">
      <div class="university">Kl university</div>
      <div class="home">
        <span> home</span>
        <span> about</span>
        <span> portfolio</span>
        <span> Login</span>
        </div>
    </div>
    <div class="content">
    <img className="product-img" src={download} alt="No image"/>
       <div class="projectdetails">
        <p>Name</p>
        <p>age</p>
        <p>Profession</p>
        </div> 
     </div>
     <div class="footer">
      <div class="logo">
    	<i class="fa fa-facebook-official"></i>
      <i class="fa fa-github-square"></i>
    
      <i class="fa fa-google-plus-circle"></i>
      
      <i class="fa fa-instagram"></i>
     </div>
     </div>
     </div>
    </>

  )
}

export default Template