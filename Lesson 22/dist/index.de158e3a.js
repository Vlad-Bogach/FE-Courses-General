const paragraph = document.createElement("p");
paragraph.id = "container";
const image = document.createElement("img");
image.src = "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp";
image.alt = "\u041A\u043E\u043B\u0435\u0441\u043E \u043E\u0431\u043E\u0437\u0440\u0435\u043D\u0438\u044F";
image.classList.add("pict");
paragraph.append(image);
document.querySelector("#root").append(paragraph);
const generateInputs = (value)=>{
    const input = document.createElement("input");
    input.type = "button";
    input.value = value;
    return input;
};
paragraph.append(generateInputs("Delete All"), generateInputs("Add"));

//# sourceMappingURL=index.de158e3a.js.map
