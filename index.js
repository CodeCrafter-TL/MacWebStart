// Dock initialization

const dock = document.getElementsByClassName("dock")[0];
const containers = dock.querySelectorAll(".container");

dock.style.transform = "translateY(0)";

// DateTime initialization
const time = document.getElementById("timeText");
const date = document.getElementById("dateText");

// DateTime position setting
function svg() {
    let timeRect = time.getBoundingClientRect();
    let dateRect = date.getBoundingClientRect();

    let timePos = (document.body.clientWidth - timeRect.width) / 2;
    let datePos = (document.body.clientWidth - dateRect.width) / 2;

    time.setAttribute('x', timePos);
    date.setAttribute('x', datePos);
}

// First call
svg();

// Update DateTime
function updateTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');

    time.innerHTML = hours + ":" + minutes;
    svg();
}
function updateDate() {
    const currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;

    const days = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    let weekDay = days[currentDate.getDay()];

    day = day.toString();
    month = month.toString();

    date.innerHTML = month + "月" + day + "日" + " " + weekDay;
    svg();
}

// Apps initialization
containers.forEach(container => {
    const img = container.querySelector("img.app");
    const light = container.querySelector(".light");

    img.addEventListener("click", () => {
        img.style.animation = "loading 1.5s cubic-bezier(.41,.36,.78,.94)";
        setTimeout(() => {
            light.classList.add("lighting");
            window.location = img.getAttribute("target");
        }, 1500);
    });
});

// Main initializations
window.addEventListener('resize', svg);
updateTime();
setInterval(updateTime, 1200);
updateDate();
setInterval(updateDate, 10000);