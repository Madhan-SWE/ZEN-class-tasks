type power = "ON" | "OFF";
type play = "PLAY" | "PAUSE";
let tvContent: HTMLElement = document.getElementById("tvContent");
tvContent.style.visibility = "hidden";
let channelListDiv = document.querySelector(".songsListInner");

console.log(channelListDiv);

let video = document.querySelector("video");
let source = document.querySelector("source");

let statusBarBtn = document.querySelectorAll(".statusBarButton");

let remoteStatusBtn = document.querySelectorAll(".remoteStatusBtn");
let remoteButton = document.querySelectorAll(".remoteButton");

interface channelConfig {
  channelName: string;
  channelVideo: string;
}

class TV {
  currentChannel: number;
  channelsList: Array<channelConfig>;
  volume: number;
  powerState: power;
  totalChannels: number;
  playPause: play;
  listChannels: boolean;

  constructor() {
    this.currentChannel = 0;
    this.volume = 50;
    this.channelsList = [];
    this.totalChannels = 0;
    this.powerState = "OFF";
    this.playPause = "PLAY";
    this.listChannels = false;
  }

  addChannel(channelInfo: channelConfig): void {
    this.channelsList.push(channelInfo);
    this.totalChannels = this.channelsList.length;
  }
  channelUp(): void {
    if (this.powerState !== "ON") return;
    if (this.currentChannel < this.totalChannels - 1) {
      this.currentChannel += 1;
    } else {
      this.currentChannel = 0;
    }
    source.setAttribute(
      "src",
      this.channelsList[this.currentChannel]["channelVideo"]
    );
    document.getElementById("songText").innerText = this.channelsList[
      this.currentChannel
    ]["channelName"];
    video.load();
    video.play();
  }

  channelDown(): void {
    if (this.powerState !== "ON") return;
    if (this.currentChannel < 1) {
      this.currentChannel = this.totalChannels - 1;
    } else {
      this.currentChannel -= 1;
    }
    source.setAttribute(
      "src",
      this.channelsList[this.currentChannel]["channelVideo"]
    );
    document.getElementById("songText").innerText = this.channelsList[
      this.currentChannel
    ]["channelName"];
    video.load();
    video.play();
  }

  togglepower(): void {
    if (this.powerState === "ON") {
      if (this.listChannels) {
        this.listChannel("OK");
      }
      this.powerState = "OFF";
      tvContent.style.visibility = "hidden";
      document.getElementById("powerBtn").classList.remove("btn-danger");
      document.getElementById("powerBtn").classList.add("btn-success");
      video.pause();
    } else {
      this.powerState = "ON";
      tvContent.style.visibility = "visible";
      document.getElementById("powerBtn").classList.remove("btn-success");
      document.getElementById("powerBtn").classList.add("btn-danger");
      video.load();
      video.play();
    }
  }

  togglePlay(): void {
    if (this.powerState !== "ON") return;
    if (this.playPause === "PLAY") {
      this.playPause = "PAUSE";
      document.getElementById("playbtn").setAttribute("class", "fa fa-pause");
      video.pause();
    } else {
      this.playPause = "PLAY";
      video.play();
      document.getElementById("playbtn").setAttribute("class", "fa fa-play");
    }
  }

  listChannel(cmd: string): void {
    if (this.powerState !== "ON") return;
    if (cmd === "up") {
      this.channelDown();
    }
    if (cmd === "down") {
      this.channelUp();
    }
    if (cmd === "OK" && this.listChannels) {
      channelListDiv.setAttribute("style", "visibility: hidden");
      this.listChannels = false;
    } else if (cmd === "OK" && !this.listChannels) {
      channelListDiv.setAttribute("style", "visibility: visible");
      this.listChannels = true;
    }

    if (this.listChannels) {
      let lowerBound: number = this.currentChannel - 2;
      let upperBound: number = this.currentChannel + 2;
      if (this.currentChannel - 2 < 0) {
        lowerBound = 0;
        upperBound = 4;
      }
      if (this.currentChannel + 2 >= this.totalChannels) {
        upperBound = this.totalChannels - 1;
        lowerBound = this.totalChannels - 5;
      }
      let listContent = document.querySelector("#addChannel");
      listContent.innerHTML = "";

      for (let i: number = lowerBound; i <= upperBound; i++) {
        let element = document.createElement("li");

        element.classList.add("songName");
        if (i === this.currentChannel) {
          element.classList.add("activeSong");
        }
        element.innerText = "Channel " + (i + 1);
        listContent.appendChild(element);
      }
    }
  }

  volumeUp(): void {
    if (this.powerState !== "ON") return;
    if (this.volume < 100) {
      this.volume += 1;
    }
    video.volume = this.volume / 100;
    let audioProgress = document.querySelectorAll(".audioProgressPoints");
    audioProgress[0].setAttribute("style", "width:" + this.volume + "%");
  }

  volumeDown(): void {
    if (this.powerState !== "ON") return;
    if (this.volume > 0) {
      this.volume -= 1;
    }
    video.volume = this.volume / 100;
    video.volume = this.volume / 100;
    let audioProgress = document.querySelectorAll(".audioProgressPoints");
    audioProgress[0].setAttribute("style", "width:" + this.volume + "%");
  }
}

class statusBar extends TV {
  constructor() {
    super();
  }

  next(): void {
    super.channelUp();
  }

  prev(): void {
    super.channelDown();
  }

  togglePlay(): void {
    super.togglePlay();
  }

  addVolume(): void {
    super.volumeUp();
  }

  redVolume(): void {
    super.volumeDown();
  }
}

let tvObj: TV = new statusBar();
tvObj.addChannel({
  channelName: "Big Bunny Video Cartoon.mp4",
  channelVideo:
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
});
tvObj.addChannel({
  channelName: "Elephant's dream mp4 public video",
  channelVideo:
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
});
tvObj.addChannel({
  channelName: "For bigger blazes public video ",
  channelVideo:
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
});
tvObj.addChannel({
  channelName:
    "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes",
  channelVideo:
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
});

tvObj.addChannel({
  channelName: "Bigger Joy rides",
  channelVideo:
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
});
tvObj.addChannel({
  channelName: "Big Bunny Video Cartoon.mp4",
  channelVideo:
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
});
tvObj.addChannel({
  channelName: "Elephant's dream mp4 public video",
  channelVideo:
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
});
tvObj.addChannel({
  channelName: "For bigger blazes public video ",
  channelVideo:
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
});
tvObj.addChannel({
  channelName:
    "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes",
  channelVideo:
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
});

video.addEventListener("timeupdate", () => {
  let videoProgressPoints: HTMLElement = document.getElementById(
    "VideoProgressPoints"
  );
  let curPercent =
    ((video.currentTime - video.duration) / video.duration) * 100 + 100 + "%";

  videoProgressPoints.style.width = curPercent;
});

remoteButton.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let action = (<HTMLButtonElement>e.currentTarget).getAttribute("value");
    if (action === "OK" || action === "up" || action === "down") {
      tvObj.listChannel(action);
    }
    if (action === "left") {
      tvObj.volumeDown();
    }
    if (action === "right") {
      tvObj.volumeUp();
    }
    if (action === "power") {
      tvObj.togglepower();
    }
  });
});

let btnEventListener = (btn) => {
  btn.addEventListener("click", (e) => {
    let action = (<HTMLButtonElement>e.currentTarget).getAttribute("value");
    if (action === "next") {
      tvObj.channelUp();
    } else if (action === "prev") {
      tvObj.channelDown();
    } else if (action === "play/pause") {
      tvObj.togglePlay();
    } else if (action === "plus") {
      tvObj.volumeUp();
    } else {
      tvObj.volumeDown();
    }
  });
};

statusBarBtn.forEach(btnEventListener);
remoteStatusBtn.forEach(btnEventListener);

source.setAttribute(
  "src",
  tvObj.channelsList[tvObj.currentChannel]["channelVideo"]
);

document.getElementById("songText").innerText =
  tvObj.channelsList[tvObj.currentChannel]["channelName"];
