const textarea = useRef();

const handleResizeHeight = () => {
  textarea.current.style.height = "auto";
  textarea.current.style.height = textarea.current.scrollHeight + "px";
};

const changeColor = (target) => {
  const bgColor = document.querySelectorAll(".backgroundSection");
  const markColor = document.querySelectorAll(".menu");
  const homeColor = document.querySelectorAll("aside input");
  const heartColor = document.querySelectorAll(".heartColor");

  bgColor.forEach((section) => {
    const val = target.value;
    section.style.backgroundColor = `${val}`;
  });

  markColor.forEach((div) => {
    const val =
      target.options[target.selectedIndex].getAttribute("data-color1");
    div.style.backgroundColor = `${val}`;
  });

  homeColor.forEach((div) => {
    const val =
      target.options[target.selectedIndex].getAttribute("data-color2");
    div.style.backgroundColor = `${val}`;
    const val2 =
      target.options[target.selectedIndex].getAttribute("data-color3");
    div.style.border = `2px solid ${val2}`;
  });

  heartColor.forEach((span) => {
    const val =
      target.options[target.selectedIndex].getAttribute("data-color4");
    span.textContent = `${val}`;
  });
};
