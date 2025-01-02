/* 다크모드 */
const profilePhoto = document.querySelector(".profile-photo");

profilePhoto.addEventListener("click", () => {
    // if (document.body.className == 'dark-mode') {
    //     document.body.className = '';
    // } else {
    //     document.body.className = 'dark-mode';
    // }

    // DOM 요소에 지정한 클래스 값이 없으면 추가하고, 있다면 제거
    document.body.classList.toggle('dark-mode');
})

/* 스크롤 모드 */
/* forEach 함수 이용 */
const sections = document.querySelectorAll('.right_container section');
let currentIndex = 0;

// sections는 위 작용을 통해 반환된 NodeList
sections.forEach((section, index) => {
    // 각 section 요소가 이 NodeList의 개별 항목
    // index는 forEach에서 현재 순회 중인 요소의 위치를 나타냄
    // index는 forEach 메서드가 자동으로 계산해서 콜백 함수의 두 번째 매개변수로 전달하므로, 별도로 초기화하지 않아도 됨

    section.addEventListener('click', function (event) {
        const sectionWidth = section.offsetWidth;  // margin을 제외한 padding 값, border 값까지 계산한 값을 가져옴.

        // event.clientX: 클릭한 위치의 X 좌표 (뷰포트 기준)
        // section.getBoundingClientRect().left: section의 가장 왼쪽 가장자리의 X 좌표 (뷰포트 기준)
        // 두 값을 빼줌으로써 section 내에서 클릭한 위치의 X 좌표를 계산
        const clickX = event.clientX - section.getBoundingClientRect().left;

        if (clickX < sectionWidth / 2) {  // 만약 section의 왼쪽을 클릭했다면
            if (index != 0) {  // 더 왼쪽으로 갈 section이 있다면
                section.style.display = 'none';
                sections[index - 1].style.display = 'flex';
                currentIndex = index - 1;
            }
        } else {  // 만약 section의 오른쪽을 클릭했다면
            if (index != (sections.length - 1)) {  // 더 오른쪽으로 갈 section이 있다면
                section.style.display = 'none';
                sections[index + 1].style.display = 'flex';
                currentIndex = index + 1;
            }
        }
    })
})