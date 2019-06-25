/*Start Of My Name ID*/
const myName = 'Kamaal Farah';

// this function turns a string into an array
const createLetterArray = string => {
  return string.split('');
};

// this function creates letter layers wrapped in span tags
const createLetterLayers = array => {
  return array.map(letter => {
    let layer = '';
    //specify # of layers per letter
    for (let i = 1; i <= 2; i++) {
      // if letter is a space
      letter == ' '
        ? (layer += `<span class="space"></span>`)
        : (layer += `<span class="letter-${i}">${letter}</span>`);
    }

    return layer;
  });
};

// this function wraps each letter in a parent container
const createLetterContainers = array => {
  return array.map(item => {
    let container = '';
    container += `<div class="wrapper">${item}</div>`;

    return container;
  });
};

// use a promise to output text layers into DOM first
const outputLayers = new Promise((resolve, reject) => {
  document.getElementById('my-name').innerHTML = createLetterContainers(
    createLetterLayers(createLetterArray(myName))
  ).join('');

  resolve();
});

// then adjust width and height of each letter
const spans = Array.prototype.slice.call(document.getElementsByTagName('span'));
outputLayers
  .then(() => {
    return spans.map(span => {
      setTimeout(() => {
        span.parentElement.style.width = span.offsetWidth + 'px';
        span.parentElement.style.height = span.offsetHeight + 'px';
      }, 200);
    });
  })
  .then(() => {
    // then slide letters into view one at a time
    let time = 200;
    return spans.map(span => {
      time += 75;
      setTimeout(() => {
        span.parentElement.style.top = '0px';
      }, time);
    });
  });
/*End Of My Name ID*/

/*Start Of About Me Age*/

// this function calculates a age by giving a date of birth as a parameter
const getAge = dateOfBirth => {
  const today = new Date(),
    birthDate = new Date(dateOfBirth),
    month = today.getMonth() - birthDate.getMonth();

  let age = today.getFullYear() - birthDate.getFullYear();

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age = age - 1;
  }

  return age;
};

document.getElementById('age').innerHTML = getAge((dateOfBirth = '6/10/1994'));
/*End Of About Me Age*/

/*Start Of Repositories*/

// this function splits the given date and returns a more readable time
const time = date => {
  const splitten = date.split('');

  let year = `${splitten.slice(0, 4).join('')}`,
    month = `${splitten.slice(5, 7)}`,
    day = `${splitten.slice(8, 10).join('')}`,
    hour = `${splitten.slice(11, 13).join('')}`,
    minute = `${splitten.slice(14, 16).join('')}`,
    second = `${splitten.slice(17, 19).join('')}`;

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  month[0] === 0 ? (month = month[0] + month[2]) : (month = month[2]);

  return `${day} ${months[month - 1]} ${year} ${hour}:${minute}:${second}`;
};

const fetchRepositories = (user, callback) => {
  // fetch from users repository
  fetch(`https://api.github.com/users/${user}/repos`)
    // convert response in to JSON
    .then(response => response.json())
    .then(data => {
      let str = '<ul>';

      // loop through all repositories
      for (let i = 0; i < data.length; i++) {
        const { full_name, html_url, language, updated_at } = data[i];

        // turns updated time to a more readable format
        const readableTime = time((date = updated_at));

        // concatinate the list tag to the unordered list
        str +=
          `<li class="repo-tag"><a href="${html_url}" target="_blank">${full_name}</a>` +
          `<br /><p class="repo-language">${language}</p><p class="repo-date">${readableTime}</p></li>`;
      }

      // end unordered list
      str += '</ul>';

      callback(str);
    });
};

fetchRepositories((user = 'kamaal111'), response => {
  document.getElementById('repositories').innerHTML = response;
});
/*End Of Repositories*/
