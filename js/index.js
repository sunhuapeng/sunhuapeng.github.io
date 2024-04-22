import { GUI } from './lil-gui.module.min.js';

var cvs = document.getElementById("cvs");
//创建image对象
var imgObj = new Image();
imgObj.src = "../img/迷宫.jpg";
var ctx = null, imgW, imgH
const limit = 4; // 颜色坐标偏移量
let points = [] // 可行走点位
let runFlag = [] // 标记是否可行走的二维数组 可行走为1 不可行走为0
const gui = new GUI({ width: 285 });

let start = [], end = [] // 起点和终点
const params = {
    accuracy: 3, // 识别间隔像素 数字越大，识别精度越低
    colorDeff: 40, // 像素色值与底色色值的色差  小于等于这个值视为可通行范围
    standardColor: '#000',
    closest: true, // 是否启用就近原则
    chooseImg: () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.addEventListener('change', (event) => {
            runFlag = []
            const file = event.target.files[0];
            // 在这里对选择的图片进行处理
            imgObj.src = URL.createObjectURL(file);
            gui.children[4].name(file.name)
        });

        fileInput.click();
    },
    run: () => {
        run()
    },
    chooseStart: () => {
        chooseStart()

    },
    chooseEnd: () => {
        chooseEnd()
    },
};

let standardColor = [0, 0, 0] // 计算色差的标准色（不可行走的颜色）

/**
 * 
 * @param {颜色数据} pixelData 
 * @param {图像宽度} width 
 * @param {图像高度} height 
 */
var getImgColors = (pixelData, width, height) => {
    let row = 0
    let col = 0
    let flagRow = -1
    let flagCol = -1
    console.log('standardColor', standardColor);
    for (let i = 0; i < (pixelData.length / limit); i++) {
        const r = pixelData[i * limit + 0]
        const g = pixelData[i * limit + 1]
        const b = pixelData[i * limit + 2]
        // 获取色差
        const diff = distance([r, g, b])
        const flag = diff <= params.colorDeff // 可通行标志
        col++
        if (i % params.accuracy === 0) {
            flagCol++
        }
        if (i % width === 0) { // 折行
            col = 0
            row++

            flagCol = 0
            if (i % params.accuracy === 0) {
                // flagCol++
                flagRow++ // 数据数组加一行
            }
        }
        if (i % params.accuracy === 0) {
            // flagCol++
            if (flag) {
                if (!runFlag[flagCol] && !runFlag[flagCol] !== 0) runFlag[flagCol] = [];
                if (!runFlag[flagCol][flagRow] && runFlag[flagCol][flagRow] !== 0) runFlag[flagCol][flagRow] = 1
            } else {
                if (!runFlag[flagCol]) runFlag[flagCol] = [];
                if (!runFlag[flagCol][flagRow]) runFlag[flagCol][flagRow] = 0

            }
            if (!points[flagCol]) points[flagCol] = [];
            if (!points[flagCol][flagRow]) {
                points[flagCol][flagRow] = {
                    x: col, y: row
                }
            }
        }
    }
}


// 绘制一个矩形
let drawRect = (x, y, w, h, color) => {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.strokeStyle = color || "green";
    ctx.rect(x, y, w, h);
    ctx.stroke();
    ctx.closePath();
    ctx.fill();
}

// 获取色差
var distance = function (color) {
    var i,
        d = 0;
    for (i = 0; i < color.length; i++) {
        d += (color[i] - standardColor[i]) * (color[i] - standardColor[i]);
    }
    return Math.sqrt(d);
};

// 绘制img到canvas
var drawImg = (that) => {
    const { width, height } = imgObj
    ctx = cvs.getContext('2d');
    cvs.width = width
    cvs.height = height
    imgW = width
    imgH = height
    ctx.drawImage(that, 0, 0);


}


//待图片加载完后，将其显示在canvas上
imgObj.onload = function () {
    drawImg(this)
}


// 计算路径 
function astarCreate(star, end, graph) {
    var maps = new Graph(graph);
    var starPosition = maps.grid[star[0]][star[1]];
    var endPosition = maps.grid[end[0]][end[1]];
    var result = astar.search(maps, starPosition, endPosition, { closest: params.closest });
    return result
}

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const getImgDataInfo = () => {
    let imgData = ctx.getImageData(0, 0, imgW, imgH).data;
    getImgColors(imgData, imgW, imgH)
}
const run = () => {
    getImgDataInfo()
    if (start.length === 0) {
        start = [5, 7]
    }
    if (end.length === 0) {
        const ex = runFlag.length - 1
        const ey = runFlag[0].length - 1
        const randomX = getRandomInt(ex / 2, ex)
        const randomY = getRandomInt(ey / 2, ey)
        end = [randomX, randomY]
    }
    console.log(start, end);
    drawRect(points[start[0]][start[1]].x, points[start[0]][start[1]].y, 6, 6, 'red');
    drawRect(points[end[0]][end[1]].x, points[end[0]][end[1]].y, 6, 6, 'red');
    console.log(start, end)
    let runPoints = []
    if (runFlag) runPoints = astarCreate(start, end, runFlag)
    if (runPoints.length !== 0) {

        for (let i = 0; i < runPoints.length; i++) {

            const { x, y } = runPoints[i]

            const { x: x1, y: y2 } = points[x][y]

            drawRect(x1, y2, 2, 2, 'red')
        }
    } else {

        setGuiName('run', `你无路可逃`)
        console.log('你无路可逃')
    }
}

const createGui = () => {
    const folderGeometry = gui
    // 识别精度
    folderGeometry.add(params, 'accuracy', 0).step(1).name('识别精度')
    folderGeometry.add(params, 'colorDeff', 0).name('色差')
    gui.addColor(params, 'standardColor').name('底色标准色').onChange(function (val) {
        let r = parseInt(val.substring(1, 3), 16);
        let g = parseInt(val.substring(3, 5), 16);
        let b = parseInt(val.substring(5, 7), 16);
        standardColor = [r, g, b]
    });
    gui.add(params, 'closest').name('就近原则')

    gui.add(params, 'chooseImg').name('替换图片')
    gui.add(params, 'chooseStart').name('设定起点')
    gui.add(params, 'chooseEnd').name('设定终点')
    gui.add(params, 'run').name('寻找路线')

}

let flag = ''
const chooseStart = () => {
    getImgDataInfo()
    flag = 'start'
}
const chooseEnd = () => {
    getImgDataInfo()
    flag = 'end'
}

if (cvs) {
    cvs.addEventListener('click', (e) => {
        const x = Math.floor(e.offsetX / params.accuracy)
        const y = Math.floor(e.offsetY / cvs.height * runFlag[x].length)
        drawRect(e.offsetX, e.offsetY, 6, 6, 'green')
        if (flag === 'start') {
            start = [x, y]
            setGuiName('chooseStart', `起点 x:${e.offsetX}y:${e.offsetY}`)
        } else if (flag === 'end') {
            end = [x, y]
            setGuiName('chooseEnd', `终点 x:${e.offsetX}y:${e.offsetY}`)
        }
    })

}

const setGuiName = (fieldName, name) => {
    gui.children.find((item) => item.property === fieldName)?.name?.(name)
}
createGui()

