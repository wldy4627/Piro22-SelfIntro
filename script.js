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
/* for 문 이용 */
const sections = document.querySelectorAll('.right_container section');

for (let index = 0; index < sections.length; index++) {
    const section = sections[index];
    section.addEventListener('click', function (event) {
        const sectionWidth = section.offsetWidth;  // margin을 제외한 padding 값, border 값까지 계산한 값을 가져옴.

        // event.clickX: 클릭한 위치의 X 좌표 (뷰포트 기준)
        // section.getBoundingClickRect().left: section의 가장 왼쪽 가장자리의 X 좌표 (뷰포트 기준)
        // 두 값을 빼줌으로써 section 내에서 클릭한 위치의 X 좌표를 계산
        const clickX = event.clientX - section.getBoundingClientRect().left;

        if (clickX < sectionWidth / 2) {  // 만약 section의 왼쪽을 클릭했다면
            if (index != 0) {  // 더 왼쪽으로 갈 section이 있다면
                section.style.display = 'none';
                sections[index - 1].style.display = 'flex';
            }
        } else {  // 만약 section의 오른쪽을 클릭했다면
            if (index != (sections.length - 1)) {  // 더 오른쪽으로 갈 section이 있다면
                section.style.display = 'none';
                sections[index + 1].style.display = 'flex';
            }
        }
    })
}