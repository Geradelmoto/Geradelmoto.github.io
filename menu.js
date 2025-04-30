// 메뉴 데이터
const menuData = [
    { name: "Remebering Paul", price: 8000, description: "매콤한 김치와 돼지고기가 들어간 찌개" },
    { name: "된장찌개", price: 7000, description: "구수한 된장과 야채가 어우러진 찌개" },
    { name: "제육볶음", price: 9000, description: "매콤한 양념의 돼지고기 볶음" }
  ];
  
  // 메뉴판을 렌더링
  const menuBoard = document.getElementById("menu-board");
  
  menuData.forEach(item => {
    const menuItem = document.createElement("div");
    menuItem.className = "menu-item";
    menuItem.innerHTML = `<strong>${item.name}</strong> - ${item.price}원
                          <div class="description">${item.description}</div>`;
  
    menuItem.addEventListener("click", () => {
      const desc = menuItem.querySelector(".description");
      desc.style.display = desc.style.display === "none" ? "block" : "none";
    });
  
    menuBoard.appendChild(menuItem);
  });
  