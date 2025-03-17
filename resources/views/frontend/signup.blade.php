@extends('layouts.main')

@section('content')


 <div class="container">
    <div class="card mt-3" style="padding:auto;margin:auto;width:600px">
        @if (session('success'))
        <div class="alert alert-success" role="alert">
            {{ session('success') }}
        </div>
        @endif

        <div class="card-header"><h1>Sign-up</h1></div>
        <div class="card-body">
            <form action="{{ route('user-store') }}"  method="POST">
                @csrf
                <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label  class="form-label">First Name</label>
                            <input name="first_name" type="text" class="form-control" value="{{ old('first_name') }}">
                             @error('first_name')
                                <span class="text-danger" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                             @enderror
                          </div>
                    </div>
                    <div class="col">
                        <div class="mb-3">
                            <label  class="form-label">Last Name</label>
                            <input name="last_name" type="text" class="form-control" value="{{ old('last_name') }}">
                            @error('last_name')
                                <span class="text-danger" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                             @enderror
                          </div>
                    </div>
                </div>




                  <div class="mb-3">
                    <label  class="form-label">Email Address</label>
                    <input name="email" type="text" class="form-control" value="{{ old('email') }}">
                    @error('email')
                        <span class="text-danger" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                     @enderror
                  </div>

                  <div class="mb-3">
                    <label  class="form-label">Contact No</label>
                    <input name="contact_no" type="number" class="form-control" value="{{ old('contact_no') }}">
                    @error('contact_no')
                        <span class="text-danger" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                  </div>

                  <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label  class="form-label">Gender</label>
                            <br>
                            <select name="gender" class="form-select" aria-label="Default select example" >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            @error('gender')
                                <span class="text-danger" role="alert">
                                    <strong>This field is required</strong>
                                </span>
                            @enderror
                          </div>
                    </div>
                    <div class="col">
                        <div class="mb-3">
                            <label  class="form-label">Register As</label>
                            <br>
                            <select name="role" class="form-select" aria-label="Default select example" >
                                <option value="patient">Patient</option>
                                <option value="doctor">Doctor</option>
                            </select>
                            @error('role')
                                <span class="text-danger" role="alert">
                                    <strong>This field is required</strong>
                                </span>
                            @enderror
                          </div>
                    </div>
                  </div>




                  <div class="mb-3">
                    <label  class="form-label">Password</label>
                    <input name="password" type="password" class="form-control">
                    @error('password')
                        <span class="text-danger" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                  </div>

                  <div class="mb-3">
                    <label  class="form-label">Confirm Password</label>
                    <input name="password_confirmation" type="password" class="form-control">
                  </div>

                  <div class="mt-3 mb-3">
                    <button type="submit" class="btn btn-register w-100" style="background-color: #00c6a9; color:white">Register</button>
                  </div>
            </form>
        </div>
    </div>

 </div>
@endsection

