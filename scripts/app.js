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
      dogsContainer.innerHTML += html
    })
  }

  dogHTML = (url) => {
    return `
    <div class="column">
      <img src="${url}" alt="Dog">
    </div>
    `
  }
  //
  // photoClick = () => {
  //   console.log("I clicked a photo");
  // }

  fetchDogs()

}); // end of dom content loaded
