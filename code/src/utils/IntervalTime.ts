export class IntervalTime {
  private intervals: {
    callback: () => void;
    time: number;
    lastTime: number;
    remainingIterations: number;
    id?: string;
  }[] = [];

  constructor() { }

  interval(
    callback: () => void,
    time: number,
    iterations: number = Infinity,
    id = ""
  ) {
    this.intervals.push({
      callback,
      time,
      lastTime: 0,
      remainingIterations: iterations,
      id,
    });
  }

  update() {
    let now = performance.now(); // 使用 performance.now() 获取高精度时间
    if (this.intervals?.length) {
      for (let i = 0; i < this.intervals.length; i++) {
        const { callback, time, lastTime } = this.intervals[i];
        let deltaTime = now - lastTime;

        if (deltaTime > time) {
          // 执行一秒内需要做的事情
          callback();
          // 更新剩余执行次数
          if(this.intervals[i]) {
            this.intervals[i].remainingIterations--;
  
            if (this.intervals[i].remainingIterations === 0) {
              // 移除该interval
              this.intervals.splice(i, 1);
              i--; // 调整索引以正确处理移除元素后的下一个元素
            } else {
              // 重置时间
              this.intervals[i].lastTime = now;
            }
          }
        }

      }
    }
  }
  removeIntervalById(id: string) {
    const thatIndex = this.intervals.findIndex(
      ({ id: that_id }) => id === that_id
    );
    if (thatIndex || thatIndex >= 0) {
      this.intervals.splice(thatIndex, 1);
    }
  }
  clearIntervals() {
    this.intervals = [];
  }
}
