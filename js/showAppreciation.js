const data = [
    { name: 'StarLess', money: '5.20', date: '2099/12/31' },
    { name: '陳好人', money: '0.01', date: '2025/03/04' },
];

(function () {
    const rewardDom = document.getElementById('reward');
    var html = '';
    for (var i = 0; i < data.length; i++) {
        html += `<div class="reward-item-content">
        <div class="reward-item-name">${data[i].name}</div>
        <div class="reward-item-time">
            <div class="reward-item-money">￥${data[i].money}</div>
            <div>${data[i].date}</div>
        </div>
        </div>`;
    };
    rewardDom.innerHTML = html;
})();