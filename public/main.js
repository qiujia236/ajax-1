let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response);
      array.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n += 1;
    }
  };
  request.send();
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const object = JSON.parse(request.response);
      myName.innerHTML = object.name;
    }
  };
  request.send();
};

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("body")[0].textContent;
      const p = document.createElement("p");
      p.innerHTML = text;
      document.body.appendChild(p);
    }
  };
  request.send();
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "3.html");
  request.onload = () => {
    const div = document.createElement("div");
    div.innerHTML = request.response;
    document.body.appendChild(div);
  };
  request.onerror = () => {
    console.log("failed");
  };
  request.send();
};

getJs.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "2.js");
  request.onload = () => {
    const script = document.createElement("script");
    script.innerHTML = request.response;
    document.body.appendChild(script);
  };
  request.onerror = () => {
    console.log("failed");
  };
  request.send();
};

getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/style.css");
  request.onload = () => {
    console.log("success");
    //创建style标签
    const style = document.createElement("style");
    //填写style内容
    style.innerHTML = request.response;
    //插到head标签里面
    document.head.appendChild(style);
  };
  request.onerror = () => {
    console.log("failed");
  };
  request.send();
};
