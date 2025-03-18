/piano-website
│── index.html       # 主页（包含钢琴、乐谱、控制按钮）
│── styles/          # CSS 文件夹
│   ├── main.css     # 全局样式（背景、按钮、布局）
│   ├── piano.css    # 钢琴样式（键盘外观、按键动画）
│   ├── score.css    # 乐谱样式（显示 & 滚动）
│── scripts/         # JS 文件夹
│   ├── script.js    # 主要交互逻辑（页面初始化）
│   ├── piano.js     # 钢琴控制（键盘 & 鼠标弹奏）
│   ├── audio.js     # 处理钢琴音效（Web Audio API）
│   ├── recorder.js  # 录制 & 回放功能
│   ├── score.js     # 乐谱显示 & 解析
│── assets/          # 资源文件夹
│   ├── images/      # 图片资源（如 Logo）
│── README.md        # 项目介绍 & 说明

<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>钢琴键盘（带背景图片）</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: #111;
        }
        .piano {
            display: flex;
        }
        .key {
            width: 40px;
            height: 150px;
            border: 1px solid #000;
            background-size: 1000px 150px;
            cursor: pointer;
        }
        .white {
            background-color: white;
        }
        .black {
            width: 30px;
            height: 100px;
            background-color: black;
            margin-left: -15px;
            margin-right: -15px;
            z-index: 1;
        }
    </style>
</head>
<body>
    <div class="piano" id="piano"></div>
    <script>
        const piano = document.getElementById("piano");
        const imgSrc = "your-image.png"; // 替换为你的图片路径
        const numKeys = 14; // 示例琴键数量，可扩展

        for (let i = 0; i < numKeys; i++) {
            let key = document.createElement("div");
            key.classList.add("key", "white");
            key.style.backgroundImage = `url('${imgSrc}')`;
            key.style.backgroundPosition = `-${i * 40}px 0`;
            piano.appendChild(key);
        }
    </script>
</body>
</html>
