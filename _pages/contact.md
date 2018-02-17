---
ref         : contact
layout      : default
title       : Contact
permalink   : /contact/

# Check the <form> action URL has the correct email address
---








<!-- Jumbotron
–––––––––––––––––––––––––––––––––––––––––––––––––– -->

<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Contact</h1>
    <p class="lead">We are looking for the outcasts, the autodidact, iconoclast who wants to be a part of change to build a better world. Our mission is to apply technology with human oriented design to connect people, and that takes diverse perspectives to achieve.</p>
    <p class="lead">The world we live in has been built upon the shoulders of giants; if you are interested in contributing or partnering to become one of those giants, drop your info in our hat here.</p>
  </div>
</div>

<!-- ––––––––––––––––––––––––––––––––––––––––––––– -->








<!-- Contact Form
–––––––––––––––––––––––––––––––––––––––––––––––––– -->

<!--
  Form Validation:    https://getbootstrap.com/docs/4.0/components/forms/#how-it-works
  Constraint API:     https://www.w3.org/TR/html5/sec-forms.html#the-constraint-validation-api

  Temporary Form Action Options
  Using Google Form:  https://github.com/toperkin/staticFormEmails/blob/master/README.md
  Formspree:          https://formspree.io
-->

<div class="container">
  <div class="row">
    <div class="col-12 col-md-8 offset-md-2">
      <h3 class="mb-3">Contact Form</h3>
      <form name="form-contact" method="POST" action="https://formspree.io/mavbarona@gmail.com" target="_blank">

        <!-- Remove this before deploying! -->
        <div class="form-group d-none">
          <label class="" for="select-debug">You should not be seeing this!</label>
          <select class="form-control" id="select-debug" name="environment">
            <option value="development"></option>
          </select>
        </div>

        <!-- Name Input Field -->
        <div class="form-group">
          <label class="sr-only" for="input-name">Name</label>
          <input required class="form-control" id="input-name" type="text" name="name" placeholder="Your name" minlength="4" maxlength="128" />
        </div>

        <!-- Email Input Field -->
        <div class="form-group">
          <label class="sr-only" for="input-email">Email</label>
          <input required class="form-control" id="input-email" type="email" name="email" placeholder="Email address" minlength="4" maxlength="128" />
        </div>

        <!-- Organization Input Field -->
        <div class="form-group">
          <label class="sr-only" for="input-org">Organization</label>
          <input class="form-control" id="input-org" type="text" name="organization" placeholder="Company or organization (optional)" minlength="2" maxlength="128" />
        </div>

        <!-- Subject Select -->
        <div class="form-group">
          <label class="sr-only" for="select-subject">Subject</label>
          <select required class="form-control" id="select-subject" name="subject">
            <option>- Select a subject -</option>
            <optgroup label="Contact Us">
              <option value="inquiry">General inquiry</option>
              <option value="website">Website feedback</option>
              <option value="support">Technical support</option>
            </optgroup>
            <optgroup label="Work with Us">
              <option value="creator">Content creator</option>
              <option value="consume">Content consumer</option>
            </optgroup>
          </select>
        </div>

        <!-- Roles -->
        <div class="form-group" id="select-describe-group" style="display:none;">
          <label>Select all that apply:</label>
          <!-- TODO: Use select multiple instead of checkboxes -->
          <div class="row mx-2">
            <div class="form-check col-12 col-md-6 col-lg-4">
              <input class="form-check-input" type="checkbox" id="business-professional" name="business-professional" value="business-professional" />
              <label for="business-professional">Business Professional</label>
            </div>
            <div class="form-check col-12 col-md-6 col-lg-4">
              <input class="form-check-input" type="checkbox" id="community-leader" name="community-leader" value="community-leader" />
              <label for="community-leader">Community Leader</label>
            </div>
            <div class="form-check col-12 col-md-6 col-lg-4">
              <input class="form-check-input" type="checkbox" id="artist" name="artist" value="artist" />
              <label for="artist">Artist</label>
            </div>
            <div class="form-check col-12 col-md-6 col-lg-4">
              <input class="form-check-input" type="checkbox" id="developer" name="developer" value="developer" />
              <label for="developer">Developer</label>
            </div>
            <div class="form-check col-12 col-md-6 col-lg-4">
              <input class="form-check-input" type="checkbox" id="collaborator" name="collaborator" value="collaborator" />
              <label for="collaborator">Collaborator</label>
            </div>
            <div class="form-check col-12 col-md-6 col-lg-4">
              <input class="form-check-input" type="checkbox" id="student" name="student" value="student" />
              <label for="student">Student</label>
            </div>
          </div>
        </div>

        <!-- Message Textarea -->
        <div class="form-group">
          <label class="sr-only" for="input-message">Message</label>
          <textarea required class="form-control" id="input-message" name="message" placeholder="Message" rows="5" minlength="8" maxlength="2048"></textarea>
        </div>

        <!-- TODO: reCAPTCHA -->

        <!-- Submit/Reset Buttons -->
        <div id="form-buttons" class="text-right">
          <button class="btn btn-success btn-lg mx-1" type="submit" name="btn-submit" aria-pressed="true">
            Submit
          </button>
          <button class="btn btn-light btn-lg mx-1" type="reset" name="btn-reset" aria-pressed="true">
            Reset
          </button>
        </div>

      </form>
    </div>
  </div>
</div>







<!-- Contact Page JavaScript
––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script>
$(function() {
  $('#select-subject').on('change', function() {
    var selected = $(this).val();
    if (selected == 'creator' || selected == 'consume') {
      $('#select-describe-group').show();
    } else {
      $('#select-describe-group').hide();
    }
  });
});
</script>
