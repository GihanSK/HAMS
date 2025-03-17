@extends('layouts.main')

@section('content')

<section class="about_section layout_padding">
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
                About <span>Medicine Tracker</h2></span>
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

@endsection