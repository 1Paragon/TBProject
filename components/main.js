import * as views from "./views";

export default st => `
${views[st.view](st)}
`;

export default() => `${<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Savvy Coders Jan. 2020 Cohort</title>
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
    <link href="https://fonts.googleapis.com/css?family=Merriweather:400,900,900i|Montserrat&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" rel="stylesheet">
  </head>
  <body>
    <header>
      <h1>Helping form future tech leaders</h1>
    </header>
    <nav>
      <i class="fas fa-bars"></i>
      <ul class="hidden--mobile nav-links">
     //amend from views
        <li><a href="bio.html">Bio</a></li>
        <li><a href= "gallery.html">Gallery</a></li>
        <li><a href="register.html">Register</a></li>
      </ul>
    </nav>
    <section id="jumbotron">
      <h3>Supporting youth as they utilize technology
      <br>to navigate our ever changing world</h3>
        <a href="">"JOIN US" "Button"</a>
    </section>
    <footer>
      &copy; 2020 <a href="https://savvycoders.com/">Savvy Coders</a>
    </footer>
    <script src="index.js"></script>
  </body>
  </html>
}`