
const name = "Ada";
let labsCompleted = 6;
let isEnrolled = false;
labsCompleted = labsCompleted + 1;
console.log(`${name} has completed ${labsCompleted} labs.`);

const likeBtn = document.querySelector("#like-btn");
const likeCount = document.querySelector("#like-count");
const likeMessage = document.querySelector("#like-message");
const themeBtn = document.querySelector("#theme-btn");
const goalsList = document.querySelector("#goals-list");
const factBtn = document.querySelector("#fact-btn");
const factDisplay = document.querySelector("#fact-display");

const goals = ["HTML", "CSS", "JavaScript"];

if (goalsList) {
  goals.forEach(function(goal) {
    const item = document.createElement("li");
    item.textContent = goal;
    goalsList.appendChild(item);
  });
}

const LikeCounter = {
  likes: 0,

  increment() {
    this.likes = this.likes + 1;
    this.render();
  },

  render() {
    if (likeCount) {
      likeCount.textContent = `${this.likes} likes`;
    }

    if (likeMessage) {
      if (this.likes >= 10) {
        likeMessage.textContent = "Wow, thanks for all the likes!";
      } else if (this.likes >= 5) {
        likeMessage.textContent = "Glad you like it!";
      } else {
        likeMessage.textContent = "";
      }
    }
  }
};

if (likeBtn) {
  likeBtn.addEventListener("click", function() {
    LikeCounter.increment();
  });
}

if (themeBtn) {
  themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");
  });
}

async function loadFact() {
  if (!factDisplay) {
    return;
  }

  factDisplay.textContent = "Loading...";

  try {
    const response = await fetch("https://catfact.ninja/fact");

    if (!response.ok) {
      throw new Error("Server responded with an error");
    }

    const data = await response.json();
    factDisplay.textContent = data.fact;
  } catch (error) {
    factDisplay.textContent = "Couldn't load a fact right now. Try again.";
    console.error(error);
  }
}

if (factBtn) {
  factBtn.addEventListener("click", loadFact);
}
