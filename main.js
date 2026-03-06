// Get the body element
let body = document.body;

// Styling the page background and layout
body.style.backgroundColor = "#0b1b3f";
body.style.fontFamily = "Murecho, sans-serif";
body.style.display = "flex";
body.style.alignItems = "center";
body.style.flexDirection = "column";
body.style.textAlign = "center";
body.style.margin = "0px";
body.style.padding = "0px";

// Create header section
let header = document.createElement("header");
header.style.width = "100%";
header.style.height = "400px";
header.style.display = "flex";
header.style.justifyContent = "center";
header.style.alignItems = "center";
header.style.position = "relative";
body.appendChild(header);

// Create header background image
let headerImg = document.createElement("div");
headerImg.style.filter = "brightness(0.3)";
headerImg.style.width = "100%";
headerImg.style.height = "400px";
headerImg.style.backgroundImage = "url('images/movieHeader.png')";
headerImg.style.backgroundSize = "cover";
headerImg.style.backgroundRepeat = "no-repeat";
headerImg.style.marginBottom = "20px";
header.appendChild(headerImg);

// Create header title text
let headerTitle = document.createElement("h1");
headerTitle.textContent = "Favorite Disney Movies";
headerTitle.style.fontFamily = "Fraunces, serif";
headerTitle.style.color = "rgb(255, 239, 239)";
headerTitle.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.93)";
headerTitle.style.position = "absolute";
headerTitle.style.fontSize = "50px";
headerTitle.style.marginTop = "40px";
header.appendChild(headerTitle);

// Array of movie images
let images = [
  "images/image1.png",
  "images/image2.png",
  "images/image3.png",
  "images/image4.png",
  "images/image5.png",
  "images/image6.png",
  "images/image7.png",
  "images/image8.png",
  "images/image9.png",
  "images/image10.png",
  "images/image11.png",
  "images/image12.png",
];

// Array of movie names
let names = [
  "Hoppers",
  "Moana",
  "Toy Story 5",
  "Elemental",
  "Elio",
  "Zootropolis 2",
  "Lilo & Stitch",
  "Mufasa: The Lion King",
  "Inside Out 2",
  "Frozen 2",
  "Encanto",
  "Coco",
];

// Array of short descriptions
let moviesDescriptions = [
  "Humans communicate with animals using robotic bodies.",
  "New adventure of Disney’s ocean hero Moana.",
  "Toys face a new technology threat.",
  "Opposites discover they share common feelings.",
  "A boy mistaken as Earth’s leader in space.",
  "Judy and Nick solve a mysterious case.",
  "A girl befriends a runaway alien.",
  "The origin story of King Mufasa.",
  "New emotions appear in Riley’s mind.",
  "Elsa and Anna discover the truth about their magical family.",
  "A magical Colombian family uncovers the power of music and love.",
  "A young musician enters the Land of the Dead to uncover his family story.",
];

// Array of movie links
let links = [
  "https://en.disneyme.com/movies/hoppers",
  "https://en.disneyme.com/movies/moana-2026",
  "https://en.disneyme.com/movies/toy-story-5",
  "https://en.disneyme.com/movies/elemental",
  "https://en.disneyme.com/movies/elio",
  "https://en.disneyme.com/movies/zootropolis-2",
  "https://en.disneyme.com/movies/lilo-and-stitch-2025",
  "https://en.disneyme.com/movies/mufasa-the-lion-king",
  "https://en.disneyme.com/movies/inside-out-2",
  "https://en.disneyme.com/movies/frozen-2",
  "https://en.disneyme.com/movies/encanto",
  "https://en.disneyme.com/movies/coco",
];

// Create main container for all movie cards
let container = document.createElement("section");
container.className = "container";

// Style the container
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.gap = "20px";
container.style.width = "70%";
container.style.flexWrap = "wrap";
container.style.margin = "40px";

// Loop through all movies to create cards dynamically
for (let i = 0; i < images.length; i++) {
  // Create card elements
  let link = document.createElement("a");
  let card = document.createElement("div");
  let img = document.createElement("img");
  let title = document.createElement("h2");
  let description = document.createElement("p");
  let button = document.createElement("button");

  // Set link to open in a new tab
  link.target = "_blank";
  link.href = links[i];

  // Insert movie data into elements
  img.src = images[i];
  title.textContent = names[i];
  description.textContent = moviesDescriptions[i];
  button.textContent = "Watch";

  // Add elements inside the card
  link.appendChild(button);
  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(link);
  container.appendChild(card);

  // Card styling
  card.style.backgroundColor = "rgba(217, 231, 16, 0.9)";
  card.style.width = "250px";
  card.style.height = "360px";
  card.style.padding = "6px";
  card.style.display = "flex";
  card.style.flexDirection = "column";
  card.style.alignItems = "center";
  card.style.borderRadius = "20px";

  // Card hover animation
  card.addEventListener("mouseover", function () {
    card.style.transform = "scale(1.02)";
  });

  card.addEventListener("mouseout", function () {
    card.style.transform = "scale(1)";
  });

  // Image styling
  img.style.margin = "10px";
  img.style.borderRadius = "10px";
  img.style.height = "210px";
  img.style.objectFit = "cover";
  img.style.width = "200px";

  // Title styling
  title.style.margin = "0px";
  title.style.fontSize = "20px";
  title.style.fontFamily = "Fraunces, serif";

  // Description styling
  description.style.fontSize = "15px";
  description.style.display = "flex";
  description.style.alignItems = "center";
  description.style.margin = "5px";
  description.style.height = "45px";

  // Button styling
  button.style.width = "130px";
  button.style.padding = "10px";
  button.style.backgroundColor = "rgb(243, 30, 30)";
  button.style.margin = "10px";
  button.style.border = "0px";
  button.style.borderRadius = "10px";
  button.style.fontWeight = "700";
  button.style.color = "rgb(255, 255, 255)";

  // Button hover effect
  button.addEventListener("mouseover", function () {
    button.style.backgroundColor = "rgb(119, 17, 17)";
    button.style.transform = "scale(1.05)";
  });

  button.addEventListener("mouseout", function () {
    button.style.backgroundColor = "rgb(243, 30, 30)";
    button.style.transform = "scale(1)";
  });
}

// Add the container with all cards to the body
body.appendChild(container);
