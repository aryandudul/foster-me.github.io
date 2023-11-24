import React from 'react';

const HomePage: React.FC = () => {
  return  ( 

<div>
<section id="title" className="gradient-background" style={{ width: '500' }}>
    
    <div className="container col-xxl-8 px-2 py-5 " >
      <div className="row flex-lg-row-reverse align-items-center g-5 pt-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src="/pet_image.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" height="200" width="75%" loading="lazy"/>
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Fostering Animal Happiness</h1>
          <p className="lead">"Fostering a puppy is one of the most rewarding experiences. When you see that glint in the puppy's eyes, you know that he/she feels safe".</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <a href="/petList">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">ADOPT</button>
            </a>            
            <a href="../11.3 TinDog Project/register-login/login.html"><button type="button" className="btn btn-outline-secondary btn-lg px-4"> SIGN IN</button></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section id="features" mt-5>
    <div className="container px-4 py-0" id="hanging-icons">
      
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="col d-flex align-items-start">
          <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
            </svg>
          </div>
          <div>
            <h3 className="fs-2 text-body-emphasis">Easy to use.</h3>
            <p>So easy to use, even your dog could do it.</p>
            
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" className="bi bi-mortarboard-fill" viewBox="0 0 16 16">
              <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
              <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/>
            </svg>
          </div>
          <div>
            <h3 className="fs-2 text-body-emphasis">Test Drive for Compatibility.</h3>
              
            <p>Temporary pet fostering lets families assess if a pet fits their lifestyle before adopting.</p>
            
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" className="bi bi-arrow-through-heart-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l3.103-3.104a.5.5 0 1 1 .708.708L4.5 12.207V14a.5.5 0 0 1-.146.354l-1.5 1.5ZM16 3.5a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182A23.825 23.825 0 0 1 5.8 12.323L8.31 9.81a1.5 1.5 0 0 0-2.122-2.122L3.657 10.22a8.827 8.827 0 0 1-1.039-1.57c-.798-1.576-.775-2.997-.213-4.093C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5v3Z"/>
            </svg>          </div>
          <div>
            <h3 className="fs-2 text-body-emphasis"> A Loving Respite for Foster Parents.</h3>
            <p>.</p>
           
          </div>
        </div>
      </div>
    </div>
        

  </section>
  
  <section id="testimonial">
    <section id="testimonial">
      <div className="my-5">
        <div className="p-5 text-center bg-body-tertiary">
          <div className="container py-5">
            <h2 className="text-body-emphasis">"I no longer have to sniff other dogs for love. I've found the best parents  on fosterMe
               Woof."</h2>
            <img className="profile-img mt-5" src="/dog-img.jpg" alt="dog image"/>
            <p className="col-lg-8 mx-auto lead mt-2">
              Pebbles, New York
            </p>
          </div>
  
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-12">
                <img src="/techcrunch.png" alt="techcrunch" height="30"/>
              </div>
              <div className="col-lg-3 col-sm-12">
                <img src="/mashable.png" alt="mashable" height="30"/>
              </div>
              <div className="col-lg-3 col-sm-12">
                <img src="/bizinsider.png" alt="bizinsider" height="30"/>
              </div>
              <div className="col-lg-3 col-sm-12">
                <img src="/tnw.png" alt="tnw" height="30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </section>
  

  <section id="footer" className="gradient-background ">
    <div className="container" >
      <footer className="py-5 pb-0">
        <div className="row">
          <div className="col-6 col-md-2 mb-0">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
            </ul>
          </div>
    
          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
            </ul>
          </div>
    
          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
            </ul>
          </div>
    
          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
               <div className="d-flex flex-column flex-sm-row w-100 gap-2">
               <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
    
        <div className="d-flex flex-column flex-sm-row justify-content-between py-2 my-4 ">
          <p>© 2023 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
          <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg></a></li>
<li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></a></li>
<li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg></a></li>

          </ul>
        </div>
      </footer>
    </div>

  </section>
</div>

    
  );
};

export default HomePage;
