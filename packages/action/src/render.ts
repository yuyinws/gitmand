export interface List {
  command: string
  count: number
}

export function render(lists: List[]) {
  let commandSvg = ''

  lists.forEach((list, index) => {
    commandSvg
    += `<div class="item">
      <div>${index + 1}</div>
      <div>${list.count}</div>
      <div>${list.command}</div>
    </div>`
  })

  return `
  <svg width="450" height="400" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
  <style>
    .foreign{
        width: 450px;
        height: 400px;
        border-radius: 7px;
      }

    .terminal {
      color: #c7c7c7;
      font-family: 'input mono', sans-serif;
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
      height: 375px;
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
      gap: 10px;
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
