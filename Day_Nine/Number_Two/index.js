const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
const outputDiv = document.getElementById("output");


function renderToDOM(title, content) {
  outputDiv.innerHTML = `<h4>${title}</h4><pre>${JSON.stringify(content, null, 2)}</pre>`;
}

document.getElementById("getBtn").addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", BASE_URL);

  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      const posts = JSON.parse(xhr.responseText);
      
      // Render first 5 posts inside DOM elements
      outputDiv.innerHTML = "<h4>Fetched Posts (First 5):</h4>";
      posts.slice(0, 5).forEach((post) => {
        const card = document.createElement("div");
        card.className = "post-card";
        card.innerHTML = `<strong>#${post.id} ${post.title}</strong><p>${post.body}</p>`;
        outputDiv.appendChild(card);
      });
    } else {
      renderToDOM("GET Failed", `Status: ${xhr.status}`);
    }
  });

  xhr.addEventListener("error", () => {
    outputDiv.innerText = "Network error while fetching data.";
  });

  xhr.send();
});


document.getElementById("postBtn").addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", BASE_URL);
  
  // Set headers before sending JSON payloads
  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

  const newPost = {
    title: "New Created Post",
    body: "This post was created via XHR POST request.",
    userId: 1
  };

  xhr.addEventListener("load", () => {
    if (xhr.status === 201 || xhr.status === 200) {
      const responseData = JSON.parse(xhr.responseText);
      renderToDOM("POST Success (201 Created)", responseData);
    } else {
      renderToDOM("POST Failed", `Status: ${xhr.status}`);
    }
  });

  xhr.addEventListener("error", () => {
    outputDiv.innerText = "Network error while posting data.";
  });

  xhr.send(JSON.stringify(newPost));
});


document.getElementById("putBtn").addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  xhr.open("PUT", `${BASE_URL}/1`);
  
  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

  const updatedPost = {
    id: 1,
    title: "Updated Title via PUT",
    body: "Updated content body.",
    userId: 1
  };

  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      const responseData = JSON.parse(xhr.responseText);
      renderToDOM("PUT Success (200 OK)", responseData);
    } else {
      renderToDOM("PUT Failed", `Status: ${xhr.status}`);
    }
  });

  xhr.addEventListener("error", () => {
    outputDiv.innerText = "Network error while updating data.";
  });

  xhr.send(JSON.stringify(updatedPost));
});


document.getElementById("deleteBtn").addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  xhr.open("DELETE", `${BASE_URL}/1`);

  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      renderToDOM("DELETE Success (200 OK)", { message: "Item with ID 1 deleted successfully." });
    } else {
      renderToDOM("DELETE Failed", `Status: ${xhr.status}`);
    }
  });

  xhr.addEventListener("error", () => {
    outputDiv.innerText = "Network error while deleting data.";
  });

  xhr.send();
});