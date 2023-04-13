// ページの読み込みが完了したら、入力ボタンを追加する
window.addEventListener("load", function() {
    const textArea = document.querySelector("textarea");

    if (textArea) {
        const button = document.createElement("button");
        button.textContent = "続き";
        button.style.position = "fixed";
        button.style.bottom = "10px";
        button.style.right = "10px";
        button.style.backgroundColor = "#f8f8f8";
        button.style.color = "#4d4d4d";
        button.style.border = "1px solid #e6e6e6";
        button.style.borderRadius = "5px";
        button.style.padding = "6px 12px";
        button.style.fontSize = "16px";
        button.style.cursor = "pointer";
        button.style.transition = "all 0.3s ease-in-out";
        button.addEventListener("click", function() {
            textArea.value += "続き";
        });
        document.body.insertBefore(button, document.body.nextSibling);
    }
});
