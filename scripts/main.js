/*Start Of My Name ID*/
const text = 'Kamaal Farah';

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
      if (letter == ' ') {
        layer += '<span class="space"></span>';
      } else {
        layer += '<span class="letter-' + i + '">' + letter + '</span>';
      }
    }
    return layer;
  });
};

// this function wraps each letter in a parent container
const createLetterContainers = array => {
  return array.map(item => {
    let container = '';
    container += '<div class="wrapper">' + item + '</div>';
    return container;
  });
};

// use a promise to output text layers into DOM first
const outputLayers = new Promise((resolve, reject) => {
  document.getElementById('my-name').innerHTML = createLetterContainers(
    createLetterLayers(createLetterArray(text))
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
const time = date => {
  const s = date.split('');

  let year = `${s.slice(0, 4).join('')}`,
    month = `${s.slice(5, 7)}`,
    day = `${s.slice(8, 10).join('')}`,
    hour = `${s.slice(11, 13).join('')}`,
    minute = `${s.slice(14, 16).join('')}`,
    second = `${s.slice(17, 19).join('')}`;

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
  fetch(`https://api.github.com/users/${user}/repos`)
    .then(response => response.json())
    .then(data => {
      let str = '<ul>';
      for (let i = 0; i < data.length; i++) {
        const { full_name, html_url, language, updated_at } = data[i];

        const readableTime = time((date = updated_at));

        str += `<li class="repo-tag"><a href="${html_url}" target="_blank">${full_name}</a> ${language} ${readableTime}</li>`;
      }
      str += '</ul>';
      callback(str);
    });
};

fetchRepositories((user = 'kamaal111'), response => {
  document.getElementById('repositories').innerHTML = response;
});
/*End Of Repositories*/
