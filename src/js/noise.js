export const Noise = function(elem){
    this.init = function() {
        this.canvas = elem,
        this.ctx = this.canvas.getContext("2d"),
        this.noiseData = [],
        this.frame = 0,
        this.loopTimeout = null,
        this.resizeThrottle = null,
        this.setup()
    },
    this.setup = function() {console.log(123)
        this.noiseData = [],
        this.canvas.width = window.innerWidth,
        this.canvas.height = window.innerHeight;
        for (var t = 0; t < 10; t += 1)
            this.createNoise();
        this.loop()
    },
    this.createNoise = function() {
        for (var t = this.ctx.createImageData(window.innerWidth, window.innerHeight), e = new Uint32Array(t.data.buffer), a = e.length, n = 0; n < a; n += 1)
            Math.random() < .5 && (e[n] = 4278190080);
        this.noiseData.push(t)
    },
    this.paintNoise = function() {
        9 === this.frame ? this.frame = 0 : this.frame = this.frame + 1,
        this.ctx.putImageData(this.noiseData[this.frame], 0, 0)
    },
    this.loop = function() {
        var t = this;
        this.paintNoise(this.frame),
        this.loopTimeout = window.setTimeout(function() {
            t.loop = t.loop.bind(t),
            window.requestAnimationFrame(t.loop)
        }, 120)
    },
    this.destroy = function() {
        this.reset(),
        this.loopTimeout = 0,
        document.removeChild(this.$el)
    }
}