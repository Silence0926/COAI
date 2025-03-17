// 更新代码：
// 1. 乐谱区域支持滚动/静态模式切换
// 2. 琴键按下的视觉反馈优化

// 添加乐谱模式切换按钮
document.body.insertAdjacentHTML('beforeend', '<button id="toggleMode">切换模式</button>');
const sheet = document.querySelector('.sheet');
const toggleButton = document.getElementById('toggleMode');
let scrollMode = true;

toggleButton.addEventListener('click', () => {
    scrollMode = !scrollMode;
    toggleButton.textContent = scrollMode ? '切换为静态模式' : '切换为滚动模式';
});

function playNote(note, keyElement) {
    // 按键高亮
    keyElement.classList.add('active');
    setTimeout(() => keyElement.classList.remove('active'), 200);
    
    // 记录到乐谱
    const noteElement = document.createElement('span');
    noteElement.textContent = note + ' ';
    sheet.appendChild(noteElement);
    
    // 滚动到最新音符（仅在滚动模式下）
    if (scrollMode) {
        sheet.scrollLeft = sheet.scrollWidth;
    }
}
