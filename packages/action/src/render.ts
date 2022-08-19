export interface List {
  command: string
  count: number
  percent: string
}

export function render(lists: List[]) {
  let commandSvg = ''
  const length = lists.length
  lists.forEach((list, index) => {
    commandSvg
    += `<div class="item">
      <div class="index">${index + 1}</div>
      <div class="percent">${list.count}(${list.percent})</div>
      <div class="text">${list.command}</div>
    </div>`
  })

  return `
  <svg width="450" height="${70 + length * 14}" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
  <style>
    .foreign{
        width: 450px;
        height: ${70 + length * 14}px;
        border-radius: 7px;
      }

    .terminal {
      color: #c7c7c7;
      font-family: "DM Mono","input mono",ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
      font-size:12px;
    }

    .menuBar {
      width: 100%;
      height: 25px;
      background: rgba(0,0,0);
    }

    .left {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      margin-left:10px;
      gap:5px;
    }

    .close {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #ed6a5d;
    }

    .minimize {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #f4bf4f;
    }

    .fullscreen {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #61c554;
    }

    .window {
      background: rgba(0,0,0,0.8);
      height: ${70 + length * 14 - 25}px;
      padding: 5px 10px;
    }

    .command {
      display:flex;
      align-items: center;
      gap: 10px;
    }

    .dot {
     color: #89f178;
    }

    .text {
      color: #57c038;
    }

    .list {
      display: flex;
      flex-direction: column;
      margin-top: 5px;
    }

    .item {
      display: flex;
    }

    .index {
      flex-basis: 10%;
    }

    .percent {
      flex-basis: 28%;
    }
  </style>
  
  <foreignObject class="foreign">
    <div class="terminal" xmlns="http://www.w3.org/1999/xhtml">
      <div class="menuBar">
        <div class="left">
          <div class="close"></div>
          <div class="minimize"></div>
          <div class="fullscreen"></div>
        </div>
      </div>
      <div class="window">
        <div class="command">
          <div class="dot">➜</div>
          <div class="text">gitmand</div>
        </div>
        <div class="list">
          ${commandSvg}
        </div>
      </div>
    </div>
  </foreignObject>
</svg>
  `
}
