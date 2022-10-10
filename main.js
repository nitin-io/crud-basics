form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");

    formValidation();
});

let formValidation = () => {
    if(input.value === "") {
        msg.innerHTML = "Post cannot be blank";
    }
    else {
        console.log("success")
        msg.innerHTML = "";
        acceptData();
    }
};

let data = {};

let acceptData = () => {
    data.text = input.value;
    console.log(data);
    createPost();
}

let createPost = () => {
    posts.innerHTML += `<div>
    <p>${data.text}</p>
    <span class="options">
        <i>Edit</i>
        <i>Delete</i>
    </span>
</div>
  `;
  input.value = "";
}