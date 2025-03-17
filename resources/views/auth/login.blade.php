@extends('layouts.main')

@section('content')
<div class="container mt-3">
    <div class="card" style="padding:auto;margin:auto;width:600px">
        <div class="card-header"><h1>Login</h1></div>
        <div class="card-body">
            <form method="POST" action="{{ route('login') }}">
                @csrf

                <div class="mb-3">
                    <label class="label" for="email">{{ __('E-Mail Address') }}</label>
                    <div class="control">
                        <input class="form-control"  id="email" type="email" class="input @error('email') is-danger @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
                    </div>
                    @error('email')
                        <p  class="text-danger" role="alert">
                            {{ $message }}
                        </p>
                    @enderror
                </div>

                <div class="mb-3">
                    <label class="label" for="password">{{ __('Password') }}</label>
                    <div class="control">
                        <input class="form-control"  id="password" type="password" class="input @error('password') is-danger @enderror" name="password" required autocomplete="current-password" autofocus>
                    </div>
                    @error('password')
                        <p  class="text-danger"  role="alert">
                            {{ $message }}
                        </p>
                    @enderror
                </div>

                <div class="mb-3">

                    {{-- <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="false" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                        <label class="form-check-label" for="flexCheckDefault">
                          Remember Me
                        </label>
                    </div> --}}

                    {{-- <label tabindex="0" class="b-checkbox checkbox is-thin">
                        <input class="form-check" type="checkbox" value="false" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                        <span class="control-label">{{ __('Remember Me') }}</span>
                    </label> --}}
                </div>

                <hr>

                <div class="field is-form-action-buttons">
                    <button type="submit" class="btn  w-100" style="background-color: #00c6a9; color:white">
                        {{ __('Login') }}
                    </button>

                    {{-- @if (Route::has('password.request'))
                        <a class="button is-black is-outlined" href="{{ route('password.request') }}">
                            {{ __('Forgot Your Password?') }}
                        </a>
                    @endif --}}
                </div>
            </form>
        </div>
    </div>
</div>

@endsection
