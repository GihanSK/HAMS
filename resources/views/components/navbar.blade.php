<header class="header_section">
      <div class="header_top">
        <div class="container">
          <div class="contact_nav">
            <a href="">
              <i class="fa fa-phone" aria-hidden="true"></i>
              <span>
                Call : 081 234 234
              </span>
            </a>
            <a href="">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <span>
                Email : medicinetracker@gmail.com
              </span>
            </a>
            <a href="">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <span>
                NO 30 Lauries Rd, Colombo 05 10500
              </span>
            </a>
          </div>
        </div>
      </div>

      <div class="header_bottom">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg custom_nav-container ">
            <a class="navbar-brand" href="index.html">
              <img src="{{asset('frontend/images/logo.png')}}" alt="">
            </a>


            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class=""> </span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <div class="d-flex mr-auto flex-column flex-lg-row align-items-center">
                <ul class="navbar-nav  ">
                  <li class="nav-item active">
                    <a class="nav-link" href="{{ url('/') }}">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="{{ route('about-us') }}"> About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="{{ route('doctors') }}">Doctors</a>
                  </li>

                  @auth
                  <li class="nav-item">
                    <a class="nav-link" href="/home">My Dashboard</a>
                  </li>
                  @endauth

                </ul>
              </div>
              <div class="quote_btn-container">
                @guest
                <a href="{{ url('/login') }}">
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <span>
                      Login
                    </span>
                  </a>
                @endguest

                <a href="{{ route('user-signup-view') }}">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  <span>
                    Sign Up
                  </span>
                </a>

              </div>
            </div>
          </nav>
        </div>
      </div>
</header>
