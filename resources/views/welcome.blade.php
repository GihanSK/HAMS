@extends('layouts.main')



@section('content')
 <!-- book section -->
 <div class="hero_area">
<section class="slider_section ">
      <div class="dot_design">
        <img src="{{asset('frontend/images/dots.png')}}" alt="">
      </div>
      <div id="customCarousel1" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container ">
              <div class="row">
                <div class="col-md-6">
                  <div class="detail-box">
                    <div class="play_btn">
                      <button>
                        <i class="fa fa-play" aria-hidden="true"></i>
                      </button>
                    </div>
                    <h1>
                      Medicine <br>
                      <span>
                       Tracker
                      </span>
                    </h1>
                    <p>
                        Booking a doctor's appointment is the process of scheduling a specific date and time to see a healthcare provider for a medical consultation or treatment.
                    </p>
                    <a href="{{ route('doctors') }}">
                        Book Appoinment
                     </a>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    <img src="{{asset('frontend/images/slider-img.jpg')}}" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container ">
              <div class="row">
                <div class="col-md-6">
                  <div class="detail-box">
                    <div class="play_btn">
                      <button>
                        <i class="fa fa-play" aria-hidden="true"></i>
                      </button>
                    </div>
                    <h1>
                      Online <br>
                      <span>
                        Appointments
                      </span>
                    </h1>
                    <p>
                        Booking a doctor's appointment is the process of scheduling a specific date and time to see a healthcare provider for a medical consultation or treatment.
                    </p>
                    <a href="{{ route('doctors') }}">
                      Book Appoinment
                    </a>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    <img src="{{asset('frontend/images/slider-img.jpg')}}" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container ">
              <div class="row">
                <div class="col-md-6">
                  <div class="detail-box">
                    <div class="play_btn">
                      <button>
                        <i class="fa fa-play" aria-hidden="true"></i>
                      </button>
                    </div>
                    <h1>
                      Mico <br>
                      <span>
                        Hospital
                      </span>
                    </h1>
                    <p>
                        Booking a doctor's appointment is the process of scheduling a specific date and time to see a healthcare provider for a medical consultation or treatment.
                    </p>
                    <a href="{{ route('doctors') }}">
                        Book Appoinment
                      </a>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    <img src="{{asset('frontend/images/slider-img.jpg')}}" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
</div>

 <section class="book_section layout_padding">

  </section>


  <!-- end book section -->


  <!-- about section -->

  <section class="about_section">
    <div class="container  ">
      <div class="row">
        <div class="col-md-6 ">
          <div class="img-box">
            <img src="{{asset('frontend/images/about-img.jpg')}}" alt="">
          </div>
        </div>
        <div class="col-md-6">
          <div class="detail-box">
            <div class="heading_container">
              <h2>
                About <span>Medicine Tracker</span>
              </h2>
            </div>
            <p>
                A medicine tracker is a tool or system designed to help individuals keep a record of their medication usage and related information. It can be a physical notebook or a digital application, and its primary purpose is to ensure that individuals take their medications as prescribed and to manage their health effectively.
            </p>

          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- end about section -->


  <!-- treatment section -->

  <section class="treatment_section layout_padding">
    <div class="side_img">
      <img src="{{asset('frontend/images/treatment-side-img.jpg')}}" alt="">
    </div>
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Hospital <span>Treatment</span>
        </h2>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-3">
          <div class="box ">
            <div class="img-box">
              <img src="{{asset('frontend/images/t1.png')}}" alt="">
            </div>
            <div class="detail-box">
              <h4>
                Nephrologist Care
              </h4>
              <p>
                Nephrologists are medical doctors who specialize in the care of kidneys. Your nephrologist can examine you, order blood and urine tests, make a diagnosis and treat your condition with medication or a procedure
              </p>

            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="box ">
            <div class="img-box">
              <img src="{{asset('frontend/images/t2.png')}}" alt="">
            </div>
            <div class="detail-box">
              <h4>
                Eye Care
              </h4>
              <p>
                Primary eye care provides an entry point for patients to receive refractions and glasses or contact lenses, screenings for asymptomatic eye diseases, diagnosis and treatment of most eye conditions, referral to specialists, and coordination with other aspects of medical care.
              </p>

            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="box ">
            <div class="img-box">
              <img src="{{asset('frontend/images/t3.png')}}" alt="">
            </div>
            <div class="detail-box">
              <h4>
                Pediatrician Clinic
              </h4>
              <p>
                A pediatrician is a medical doctor who specializes in treating infants, children, adolescents, and young adults. Pediatric care can begin before conception and continue through pregnancy
              </p>

            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="box ">
            <div class="img-box">
              <img src="{{asset('frontend/images/t4.png')}}" alt="">
            </div>
            <div class="detail-box">
              <h4>
                Parental Care
              </h4>
              <p>
                Parental care involves traits expressed by parents that are directed toward their offspring and that enhance the offspring’s fitness (development or survival). These traits often incur a cost to the parents’ own survival and reproduction.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- end treatment section -->

  <!-- team section -->

  <section class="team_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Our <span>Doctors</span>
        </h2>
      </div>
      <div class="carousel-wrap ">
        <div class="owl-carousel team_carousel">
          <div class="item">
            <div class="box">
              <div class="img-box">
                <img src="{{asset('frontend/images/team1.jpg')}}" alt="" />
              </div>
              <div class="detail-box">
                <h5>
                  Hennry
                </h5>
                <h6>
                  MBBS
                </h6>
                <div class="social_box">
                  <a href="">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="box">
              <div class="img-box">
                <img src="{{asset('frontend/images/team2.jpg')}}" alt="" />
              </div>
              <div class="detail-box">
                <h5>
                  Jenni
                </h5>
                <h6>
                  MBBS
                </h6>
                <div class="social_box">
                  <a href="">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="box">
              <div class="img-box">
                <img src="{{asset('frontend/images/team3.jpg')}}" alt="" />
              </div>
              <div class="detail-box">
                <h5>
                  Morco
                </h5>
                <h6>
                  MBBS
                </h6>
                <div class="social_box">
                  <a href="">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- end team section -->





  <!-- info section -->
 
  <!-- end info_section -->

@endsection
