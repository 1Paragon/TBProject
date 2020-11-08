export default () => `
<h2>If you would like to Volunteer or Donate to our youth
<br>Please enter your information into the form below</h2>
<br>
<form id="register" method="POST" action="">
    <div>
      <label for="username">Username:</label>
      <input type="text" name="username" id="username" placeholder="Enter Your Username">
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" name="password" id="password">
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" name="email" id="email" placeholder="your@email.here">
    </div>
    <input type="submit" name="register" value="Register">
  </form>
  <br>
  <h2>Please Donate</h2>
  <p>Please Select Your Preferred Secure Payment Method Below</p>
  <br>
   <a href="#" class="myButton">DONATE</a>
  `;
// add section to allow user to go to payment methods and forms
