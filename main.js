

const num_option = 2;
const myCanvas = document.getElementById('myCanvas');
const ctx = myCanvas.getContext('2d');
const bk = document.getElementById('bk');

/**
 * 初始化
 */
function init(bk_src) {
    bk.addEventListener('load', () => {
        myCanvas.width = bk.width;
        myCanvas.height = bk.height;
        ctx.drawImage(bk, 0, 0);
    });
    bk.setAttribute('src', bk_src);
};

/**
 * 開關重繪
 */
function refresh() {
    //清除
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    //背景
    ctx.drawImage(bk, 0, 0);
    //選項
    for (let i = 0; i < num_option; ++i) {
        let ckbtn = document.getElementById(`ckbtn_${i}`);
        if (ckbtn.checked) {
            let img = document.getElementById(`img_${i}`);
            ctx.drawImage(img, 0, 0);
        }
    }
}


// 當按鈕被點擊時，執行保存功能
const saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click', function () {
    // 創建一個圖片數據URL
    var imgDataUrl = myCanvas.toDataURL('image/png');

    // 創建一個<a>元素，用於下載圖片
    var a = document.createElement('a');
    a.href = imgDataUrl;
    a.download = 'myCanvas.png'; // 下載文件名
    a.click();
});