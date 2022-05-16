random = randomize(dotfiles)

function randomize(sourceArray) {

    for (var i = 0; i < sourceArray.length - 1; i++) {

        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];

        sourceArray[j] = sourceArray[i];

        sourceArray[i] = temp;

    }

    return sourceArray;

}

random.forEach((dotfile) => {
  header = document.createElement("header");

  downld = document.createElement("a");
  downld.classList.add("button-child");
  downld.href = dotfile.link;
  downld.innerHTML = "Download";

  // Desc
  desc = document.createElement("h3");
  desc.innerHTML = dotfile.description;
  desc.classList.add("theme-desc");
  header.appendChild(desc);

  // Title
  title = document.createElement("h3");
  title.innerHTML = dotfile.title;
  title.classList.add("theme-title");
  header.appendChild(title);

  // Image
  image = document.createElement("img");
  image.src = dotfile.image;

  // link
  link = document.createElement("a");
  link.href = dotfile.link;
  link.target = "_blank";
  header.appendChild(link);

  // tags
  tag = document.createElement("h3");
  tag.innerHTML = dotfile.tags[0];
  tag.classList.add("tags");
  link.appendChild(tag);

  // Buttons Thingy
  buttonz = document.createElement("div");
  buttonz.classList.add("buttons");
  buttonz.appendChild(downld);

  // Card
  dotfile_div = document.createElement("div");
  dotfile_div.classList.add("card");
  dotfile_div.appendChild(header);
  dotfile_div.appendChild(image);
  dotfile_div.appendChild(buttonz);

  document.getElementById("themes_container").appendChild(dotfile_div);
});
