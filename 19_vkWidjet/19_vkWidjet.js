const token = '48c1c03148c1c03148c1c031264bd75bf5448c148c1c0312db9e1fb5fda75b4949b2841';
const id = '176864224';
let offset = 0;
let cache = [];
let isFetching = false;

const widget = document.querySelector('.widget');
const widjetItems = document.querySelector('.widget__items');

widget.addEventListener('scroll', (e) => {
  if (widget.scrollTop + widget.clientHeight + 20 > widget.scrollHeight && isFetching === false) {
    console.log('click');
    offset += 5;
    getApi();
  }
});

function getApi() {
  isFetching = true;
  const script = document.createElement('SCRIPT');
  script.src = `https://api.vk.com/method/wall.get?owner_id=-${id}&count=${5}&offset=${offset}&access_token=${token}&v=5.131&callback=${
    handleResponse.name
  }`;
  document.head.append(script);
}

function handleResponse(result) {
  updateItems(result.response.items);

  cache = cache.concat(result.response.items);

  localStorage.setItem('items', JSON.stringify(cache));
  localStorage.setItem('offset', offset);
}

function updateItems(items) {
  console.log(items.length);
  isFetching = false;
  items.forEach((item) => {
    console.log(item);
    const imageURL = item.attachments[0]?.photo?.sizes[1].url;

    const divElement = document.createElement('div');
    const textElement = document.createElement('p');
    const imgElemtent = document.createElement('img');

    imgElemtent.src = imageURL;
    textElement.textContent = item.text;

    divElement.appendChild(imgElemtent);
    divElement.appendChild(textElement);

    widjetItems.appendChild(divElement);
  });
}

function getItems() {
  const cacheOffset = localStorage.getItem('offset');

  if (cacheOffset) {
    const cacheItems = localStorage.getItem('items');
    updateItems(JSON.parse(cacheItems));
  } else {
    getApi();
  }
}

getItems();
