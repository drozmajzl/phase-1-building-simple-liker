// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//DECLARE GLOBAL CONSTANTS
const errorModal = document.querySelector('#modal')
const h2 = document.querySelector('#modal').children[0]
const heartClass = document.getElementsByClassName('like')
Array.from(heartClass).forEach(enableLike)


//EVENT LISTENER FUNCTION
function enableLike (li) {
li.addEventListener('click', () => likeButton(li))
}

//LIKE BUTTON FUNCTIONALITY
function likeButton(li){
  mimicServerCall("http://mimicServer.example.com", configuration)
  .then(res => liker(li, res))
  .catch(function (error) {
    errorModal.className = 'visible'
    h2.textContent = `${error}`
    console.log(error);
    setTimeout((() => errorModal.className ='hidden'),3000);
  });
}

function liker (li, res) {
  console.log(res)
  if(li.textContent === 'Like! ♡'){
    li.children[0].textContent = FULL_HEART
    li.children[0].className = 'activated-heart'
  }
  else{
    li.children[0].textContent = EMPTY_HEART
    li.children[0].className = 'like'
  }
}

const configuration = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
  }),
};

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

