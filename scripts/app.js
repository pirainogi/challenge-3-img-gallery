window.addEventListener('DOMContentLoaded', (e) => {
    console.log('DOM fully loaded and parsed');

  let dogsContainer = document.getElementById('minidogs')

  fetchDogs = () => {
    fetch('https://dog.ceo/api/breed/samoyed/images/random/4')
    .then(r => r.json())
    .then(dogs => {
      let html = dogs.message.map(dog => {
        return dogHTML(dog)
      })
      // console.log(html);
      dogsContainer.innerHTML += html.join('')
    })
  }

  dogHTML = (url) => {
    return `
    <div class="column">
      <img src="${url}" alt="Dog" id="${url.slice(-8, -4)}" onclick="photoClick(id)">
    </div>
    `
  }

  photoClick = (id) => {
    console.log("I clicked a photo", id);
    
  }

  closePhoto = () => {
    console.log("close dat photo plz");
  }

  fetchDogs()

}); // end of dom content loaded
