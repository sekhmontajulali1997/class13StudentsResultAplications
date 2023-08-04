// send data to Ls functions

const sendDataLS = (key, data) =>{
    localStorage.setItem(key,JSON.stringify(data));

}


// get data to Ls functions

const getDataLs = (key) => {
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
    }else{
        return [];
    }

};

// form validations alert

const formValidation = (message, type) =>{
    return `
    <p class="alert alert-${type} d-flex justify-content-between">${message}<button class="btn-close" data-bs-dismiss="alert"></button></p>
    `

};

// time functionss

function getFacebookPostTime(postDate) {
    const currentDate = new Date();
    const postDateTime = new Date(postDate);
    const timeDiffInSeconds = Math.floor((currentDate - postDateTime) / 1000);
  
    if (timeDiffInSeconds < 60) {
      return `${timeDiffInSeconds} seconds ago`;
    } else if (timeDiffInSeconds < 3600) {
      const minutes = Math.floor(timeDiffInSeconds / 60);
      return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
    } else if (timeDiffInSeconds < 86400) {
      const hours = Math.floor(timeDiffInSeconds / 3600);
      return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    } else if (timeDiffInSeconds < 604800) {
      const days = Math.floor(timeDiffInSeconds / 86400);
      return `${days} day${days === 1 ? '' : 's'} ago`;
    } else {
      // If more than a week, display the full date
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return postDateTime.toLocaleDateString(undefined, options);
    }
  }
  
  // Example usage:
  const postDate = "2023-08-02T15:30:00"; // Replace this with your post date
  const fbPostTime = getFacebookPostTime(postDate);
//   console.log(fbPostTime);
  

// radom id generotor functions

function generateRandomID() {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const idLength = 26;
  let randomID = '';

  for (let i = 0; i < idLength; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    randomID += chars.charAt(randomIndex);
  }

  return randomID;
};
