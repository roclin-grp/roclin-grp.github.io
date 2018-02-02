---
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
          <input required class="form-control" id="input-name" type="text" name="name" placeholder="Your name" minlength="4" />
        </div>

        <!-- Email Input Field -->
        <div class="form-group">
          <label class="sr-only" for="input-email">Email</label>
          <input required class="form-control" id="input-email" type="email" name="email" placeholder="Email address" />
        </div>

        <!-- Organization Input Field -->
        <div class="form-group">
          <label class="sr-only" for="input-org">Organization</label>
          <input class="form-control" id="input-org" type="text" name="organization" placeholder="Company or organization (optional)" minlength="4" />
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
            <!-- Individual Checkboxes -->
            <div class="row mx-2">
              {% for role in site.data.contact.roles %}
                <div class="form-check col-12 col-md-6 col-lg-4">
                  <input class="form-check-input" id="{{ role.value }}" type="checkbox" name="{{ role.value }}" value="{{ role.value }}">
                  <label for="{{ role.value }}">{{ role.label }}</label>
                </div>
              {% endfor %}
            </div>
            <!-- Multi-Select
            <select multiple class="form-control" id="select-roles" name="roles">
              {% for role in site.data.contact.roles %}
                <option value="{{ role.value }}">{{ role.label }}</option>
              {% endfor %}
            </select>
            -->
        </div>

        <!-- Message Textarea -->
        <div class="form-group">
          <label class="sr-only" for="input-message">Message</label>
          <textarea required class="form-control" id="input-message" name="message" placeholder="Message" rows="5"></textarea>
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
