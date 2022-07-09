function stopwatch() {
    
    let StartTime, EndTime, Running, Duration = 0;

    this.start = function () {
        
        if (Running) {
            throw new Error("Stopwatch has already started!");
        }
        Running = true;
        StartTime = new Date();
    }

    this.stop = function () {
        
        if (!Running) {
            throw new Error("Stopwatch is already running");
        }
        Running = false;
        EndTime = new Date();

        const seconds = (EndTime.getTime() - StartTime.getTime()) / 1000;
        Duration += seconds;
    }

    this.reset = function () {
        
        StartTime = null;
        EndTime = null;
        Running = false;
        Duration = 0;
    }

    Object.defineProperty(this, 'duration', {
        get: function () { return Duration; }
    })
}