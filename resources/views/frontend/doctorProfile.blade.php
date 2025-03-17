@extends('layouts.main')

@section('content')


<section class="team_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Profile
        </h2>
      </div>
    </div>
  </section>

  <div style="padding:50px">


    <div class="row">
        @foreach ($List as $data)
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header" style="background-color: black;color:white;font-weight:bold">{{ $data->name }}</div>
                    <img src="{{ asset('storage/'.$data->profile_img) }}" alt="" class="img" style="display:block">
                    <div class="card-body">
                        <h5 class="card-title">{{ $data->doctor_type }}</h5>
                        <p>{{ $data->experience }}</p>
                    </div>

                </div>
            </div>
        @endforeach
            <div class="col-md-6">
                <div class="container">
                    @if (session('success'))
                    <div class="alert alert-danger" role="alert">
                        {{ session('success') }}
                    </div>
                    @endif
                </div>

                <h4>Available Time Slots</h4>
                <table class="table">
                    <tr>
                        <th>Date</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Action</th>
                    </tr>
                    @if($avbSlots->count() > 0)
                        @foreach ($avbSlots as $slots)
                            <tr>
                                <td>{{ $slots->available_date }}</td>
                                <td>{{ $slots->start_time }}</td>
                                <td>{{ $slots->end_time }}</td>
                                @auth
                                    @role('patient')
                                        <td><a class="btn btn-dark" href="{{ route('bookAppoinment',['id'=>$slots->id]) }}">Book Appoinment</button></td>
                                    @endrole
                                @endauth

                                @guest
                                    <td><a class="btn btn-dark" href="{{ route('login') }}">Book Appoinment</button></td>
                                @endguest


                            </tr>
                        @endforeach
                    @else
                    <tr>
                        <td class="text-danger" colspan="4" style="text-align:center">There are no any available time slots to display</td>
                    </tr>
                    <tr>
                        <td colspan="4" style="text-align:center"><a href="{{ route('doctors') }}" class="btn btn-dark w-50">Back</a></td>
                    </tr>
                    @endif

                </table>
            </div>


    </div>
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

