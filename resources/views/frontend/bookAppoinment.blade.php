@extends('layouts.main')

@section('content')

<section class="team_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Book Appointment
        </h2>
      </div>
    </div>
  </section>
  <div class="container mt-3">
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-body">
                    <div class="card-title"><strong>Personal Information</strong> </div>
                    <div class="mb-3">
                        <label  class="form-label">First Name</label>
                        <input name="first_name" type="text" class="form-control" value="{{ $userDetails->first_name }}" disabled>
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Last Name</label>
                        <input name="last_name" type="text" class="form-control" value="{{ $userDetails->last_name }}" disabled>
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Contact No</label>
                        <input name="contact_no" type="text" class="form-control" value="{{ $userDetails->contact_no }}" disabled>
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Email</label>
                        <input name="email" type="text" class="form-control" value="{{ $userDetails->email }}" disabled>
                    </div>
                    <hr>
                    <div class="card-title"><strong>Doctor's Details</strong> </div>
                    <div class="mb-3">
                        <label  class="form-label">Name</label>
                        <input name="doctor_name" type="text" class="form-control" value="{{ $doctorProfile->name }}" disabled>
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Type</label>
                        <input name="doctor_type" type="text" class="form-control" value="{{ $doctorProfile->doctor_type }}" disabled>
                    </div>

                    <div class="mb-3">
                        <label  class="form-label">Doctor Fee</label>
                        <input name="doctor_fee" type="text" class="form-control" value="LKR.{{ $doctorProfile->doctor_fee}}" disabled>
                    </div>
                </div>
            </div>
             <div class="card">
                <div class="card-body">
                    <div class="card-title"><strong>Selected Date & Time</strong> </div>
                    <table class="table">
                        <tr>
                            <th>Date</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                        </tr>
                        <tr>
                            <td>{{ $timeslot->available_date }}</td>
                            <td>{{ $timeslot->start_time }}</td>
                            <td>{{ $timeslot->end_time }}</td>
                        </tr>
                    </table>
                    <hr>
                    <div class="card-title"><strong>Payments Details</strong> </div>
                    <div class="mb-3">
                        <label  class="form-label">Total Amount</label>
                        <input  type="text" class="form-control" value="{{ $doctorProfile->doctor_fee}}" disabled>
                    </div>
                </div>
            </div>
            <hr>
        </div>

        <div class="col-md-6">
            <aside>
                <article class="card">
                    <div class="card-body p-5">
                        <ul class="nav bg-light nav-pills rounded nav-fill mb-3" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="pill" href="#nav-tab-card">
                                <i class="fa fa-credit-card"></i> Credit Card</a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="nav-tab-card">
                                @foreach (['danger', 'success'] as $status)
                                    @if(Session::has($status))
                                        <p class="alert alert-{{$status}}">{{ Session::get($status) }}</p>
                                    @endif
                                @endforeach


                            <form role="form" method="POST" id="paymentForm" action="{{ route('stripe.store')}}"
                                class="require-validation"
                                data-cc-on-file="false"
                                data-stripe-publishable-key="{{ env('STRIPE_KEY') }}"
                                id="payment-form">
                                    @csrf
                                    <input type="hidden" name="doctor_id" value="{{ $doctorProfile->doctor_id }}">
                                    <input type="hidden" name="timeslot_id" value="{{ $timeslot->id }}">
                                    <input type="hidden" name="timeslot_id" value="{{ $timeslot->id }}">
                                    <input type="hidden" name="selected_timeslot" value="{{ $timeslot->available_date }}">
                                    <input type="hidden" name="selected_start_time" value="{{ $timeslot->start_time }}">
                                    <input type="hidden" name="selected_end_time" value="{{ $timeslot->end_time }}">
                                    <input type="hidden" name="total_amount" value="{{ $doctorProfile->doctor_fee }}">
                                    <div class='form-row row'>
                                        <div class='col-xs-12 form-group required'>
                                            <label class='control-label'>Name on Card</label> <input
                                                class='form-control' size='4' type='text' name="card_name">
                                        </div>
                                    </div>

                                    <div class='form-row row'>
                                        <div class='col-xs-12 form-group card required'>
                                            <label class='control-label'>Card Number</label> <input
                                                autocomplete='off' class='form-control card-number' size='20' name="card_number"
                                                type='text'>
                                        </div>
                                    </div>

                                    <div class='form-row row'>
                                        <div class='col-xs-12 col-md-4 form-group cvc required'>
                                            <label class='control-label'>CVC</label> <input autocomplete='off' name="cvv"
                                                class='form-control card-cvc' placeholder='ex. 311' size='4'
                                                type='text'>
                                        </div>
                                        <div class='col-xs-12 col-md-4 form-group expiration required'>
                                            <label class='control-label'>Expiration Month</label> <input
                                                class='form-control card-expiry-month' placeholder='MM' size='2' name="month"
                                                type='text'>
                                        </div>
                                        <div class='col-xs-12 col-md-4 form-group expiration required'>
                                            <label class='control-label'>Expiration Year</label> <input
                                                class='form-control card-expiry-year' placeholder='YYYY' size='4' name="year"
                                                type='text'>
                                        </div>
                                    </div>

                                    <div class='form-row row'  >
                                        <div class='col-md-12 error form-group hide'>
                                            <div class='alert-danger alert' id="error">Please correct the errors and try
                                                again.</div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-xs-12">
                                            <button class="btn btn-primary btn-lg btn-block" type="submit">Pay Now </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </article>
            </aside>

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

<script type="text/javascript" src="https://js.stripe.com/v2/"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script type="text/javascript">
   $(function() {

  /*------------------------------------------
  --------------------------------------------
  Stripe Payment Code
  --------------------------------------------
  --------------------------------------------*/

  var $form = $(".require-validation");

  $('form.require-validation').bind('submit', function(e) {
      var $form = $(".require-validation"),
      inputSelector = ['input[type=email]', 'input[type=password]',
                       'input[type=text]', 'input[type=file]',
                       'textarea'].join(', '),
      $inputs = $form.find('.required').find(inputSelector),
      $errorMessage = $('#error'),
      valid = true;
      $errorMessage.addClass('hide');

      $('.has-error').removeClass('has-error');
      $inputs.each(function(i, el) {
        var $input = $(el);
        if ($input.val() === '') {
          $input.parent().addClass('has-error');
          $errorMessage.removeClass('hide');
          e.preventDefault();
        }
      });

      if (!$form.data('cc-on-file')) {
        e.preventDefault();
        Stripe.setPublishableKey($form.data('stripe-publishable-key'));
        Stripe.createToken({
          number: $('.card-number').val(),
          cvc: $('.card-cvc').val(),
          exp_month: $('.card-expiry-month').val(),
          exp_year: $('.card-expiry-year').val()
        }, stripeResponseHandler);
      }

  });

  /*------------------------------------------
  --------------------------------------------
  Stripe Response Handler
  --------------------------------------------
  --------------------------------------------*/
  function stripeResponseHandler(status, response) {
      if (response.error) {
          $('.error')
              .removeClass('hide')
              .find('.alert')
              .text(response.error.message);
      } else {
          /* token contains id, last4, and card type */
          var token = response['id'];

          $form.find('input[type=text]').empty();
          $form.append("<input type='hidden' name='stripeToken' value='" + token + "'/>");
          $form.get(0).submit();
      }
  }

});
</script>


@endsection

