export default () => `
<form id="register" method="POST" action="">
    <div>
      <label for="username">Username:</label>
      <input type="text" name="username" id="username" placeholder="Url">
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="text" name="password" id="password">
    </div>
    <div>
    <input type="submit" name="register" value="Submit">
    </div>
  </form>`;
//this section will allow the addition of PDF and other organizational documents with links
//to external fundraising sites  It is hidden from public view and for site administrators
//put in a particular url for a photo or doc in ln5 after placeholder
