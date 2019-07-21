window.addEventListener('DOMContentLoaded', (e) => {
    console.log('DOM fully loaded and parsed');

  let dogsContainer = document.getElementById('minidogs')
  let closeBtn = document.querySelector(".closebtn")
  let bigImg = document.getElementById('expandedImg')
  // let fetchBtn = document.getElementById('fetch')

  fetchDogs = () => {
    fetch('https://dog.ceo/api/breed/samoyed/images/random/4')
    .then(r => r.json())
    .then(dogs => {
      let html = dogs.message.map(dog => {
        return dogHTML(dog)
      })
      // console.log(html);
      dogsContainer.innerHTML = html.join('')
    })
  }

  dogHTML = (url) => {
    return `
    <div class="column">
      <img src="${url}" alt="Dog" id="${url.slice(-8, -4)}" onclick="photoClick(src)">
    </div>
    `
  }

  photoClick = (url) => {
    // console.log("I clicked a photo", url);
    bigImg.src = `${url}`
    bigImg.parentElement.style.display = "block"
    closeBtn.style.display = "block"
  }

  closePhoto = () => {
    // console.log("close dat photo plz");
    bigImg.parentElement.style.display = "none";
  }

  fetchNewDogs = () => {
    fetchDogs()
  }

  fetchDogs()

}); // end of dom content loaded
