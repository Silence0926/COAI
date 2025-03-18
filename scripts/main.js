document.addEventListener("DOMContentLoaded", () => {
    const pianoContainer = document.getElementById("piano");

    // 🎹 定义白键 & 黑键的排列方式
    const keys = [
        { note: "C", type: "white" }, { note: "C#", type: "black" },
        { note: "D", type: "white" }, { note: "D#", type: "black" },
        { note: "E", type: "white" },
        { note: "F", type: "white" }, { note: "F#", type: "black" },
        { note: "G", type: "white" }, { note: "G#", type: "black" },
        { note: "A", type: "white" }, { note: "A#", type: "black" },
        { note: "B", type: "white" }
    ];

    // 🎹 生成琴键（默认1组）
    function createPiano(octaves = 1) {
        pianoContainer.innerHTML = ""; // 清空键盘

        for (let o = 0; o < octaves; o++) {
            keys.forEach(({ note, type }) => {
                const key = document.createElement("div");
                key.classList.add("key", type);
                key.dataset.note = `${note}${o + 1}`; // 例如 C4, D#4
                key.addEventListener("click", () => playSound(note, o + 1));
                pianoContainer.appendChild(key);
            });
        }
    }

    // 🎼 播放音效（暂时用 `console.log` 代替）
    function playSound(note, octave) {
        console.log(`🎵 播放: ${note}${octave}`);
        // 未来我们会用 Web Audio API 播放真正的声音
    }

    // 🎛️ 绑定模式切换按钮
    document.getElementById("mode-88").addEventListener("click", () => createPiano(7));
    document.getElementById("mode-61").addEventListener("click", () => createPiano(5));
    document.getElementById("mode-simple").addEventListener("click", () => createPiano(1));

    // 🏁 初始化
    createPiano(1);
});

