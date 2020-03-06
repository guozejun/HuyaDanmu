const area = document.getElementById('pub_msg_input')
const btn = document.getElementById('msg_send_bt')

var count = 0
var val
let interval

function loop(temp, flag) {
    let num = 100;
    interval = setInterval(send, 10);
    function send() {
        if (num == 0) {
            clearInterval(interval);
        } else {
            if (flag == "normal") {
                num--;
                console.log('normal processing' + temp)
                area.value = temp
                btn.setAttribute('class', 'btn-sendMsg hiido_stat enable')
                btn.click()
            } else {
                console.log('full processing' + temp)
                area.value = temp
                btn.setAttribute('class', 'btn-sendMsg hiido_stat enable')
                btn.click()
            }
        }
    }

}

function stopSendDanmu() {
    clearInterval(interval);
}
