@extends('layouts.main')

@section('content')


<section class="team_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Our <span>Doctors</span>
        </h2>
      </div>
    </div>
  </section>

  <div class="container mt-3">
    <div class="row">
        @foreach ($List as $data)
        <div class="col-md-4">
            <div class="card">
                <div class="card-header" style="background-color: black;color:white;font-weight:bold">{{ $data->name }}</div>
                <div class="card-body">
                    <img src="{{ asset('storage/'.$data->profile_img) }}" alt="" class="img" style="display:block">
                   <hr>
                    <h5 class="card-title">{{ $data->doctor_type }}</h5>
                    <a href="{{ route('viewprofile',['id' => $data->id]) }}" class="btn btn-dark w-100">View</a>
                </div>
            </div>
        </div>
        @endforeach
    </div>
</div>

 <style>
    .card img {
      max-width: 100%; /* Ensure the image doesn't exceed the card's width */
      max-height: 100%; /* Ensure the image doesn't exceed the card's height */
      display: block; /* Remove any extra space around the image */
      margin: 0 auto; /* Center the image horizontally within the card */
    }
 </style>
@endsection

