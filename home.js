const showImg = document.getElementById("showImg");

const images = ["slider_01.jpg","slider_02.jpg","slider_03.jpg"];

let index = 0;


let loopInterval = setInterval(() => {
    nextMove(); // 다음 슬라이드를 보여주는 함수
  }, 3000);

  function nextMove(){
    if(index === images.length - 1){
        index = 0;
    }else{
        index++;
    }

    const imgName = images[index];

    showImg.src = `/img/${imgName}`;
  }


  const menu = document.getElementById("menu");
  const showMenu = document.getElementById("showMenu");

  let isShow = false;

  menu.addEventListener("click", (event) => {
    if(isShow === false){
        showMenu.style.display = 'flex';
        isShow = true;
    }
    else if(isShow === true){
        showMenu.style.display = 'none';
        isShow = false;
    }
  })