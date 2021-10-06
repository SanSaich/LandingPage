const items = document.querySelectorAll(".menu__link");

for (const item of items) {
  item.addEventListener("click", () => {
    clearActiveClasses();
    item.classList.add("menu__link_active");
  });
}

function clearActiveClasses() {
  items.forEach((item) => {
    item.classList.remove("menu__link_active");
  });
}

//-----------------------------------

// const blockText = document.querySelector(".main-block__text");

// blockText.innerHTML =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis officia natus recusandae nam incidunt animi magnam, iste aliquam enim rem ipsum nihil eius temporibus distinctio molestias veniam assumenda sint." +
//   console.log(blockText);
