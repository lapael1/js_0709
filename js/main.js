// window.onload =functin({

// })
// 위에 것도 쓰지만 아래를 더 많이 씀.
window.addEventListener("load",function(){
  // 1.변수 애플을 선언하고 애플에 값을 할당한다
        // 2. 변수 바나나를 선언하고 바나나에 값을 할당한다
        // 3. 합계를 선언하고 거기에 애플이랑 바나나를 더한 내용을 할당한다
        // 4. 화면출력 : 애플이랑 바나나
        var apple = 2000;
        var banana = 3000;
        var totalPlus = apple + banana;
        var totalMinus = apple - banana;
        var totalX = apple * banana;
        var totalDiv = apple / banana;
        document.write(`<p class = "totalPlus">사과랑 바나나를 합한 가격은 <span>${totalPlus}</span>원 입니다.</p><br>`);
        document.write(`<p class = "totalMinus">사과랑 바나나를 뺀 가격은 <span>${totalMinus}</span>원 입니다.<br>`);
        document.write(`<p class = "totalX">사과랑 바나나를 곱한 가격은 <span>${totalX}</span>원 입니다.<br>`);
        document.write(`<p class = "totalDiv">사과랑 바나나를 나눈 가격은 <span>${totalDiv}</span>원 입니다.`);
});