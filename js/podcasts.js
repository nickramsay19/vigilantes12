createjs.Sound.alternateExtensions = ["mp3"];
createjs.Sound.on("fileload", this.loadHandler, this);
createjs.Sound.registerSound("../podcasts/podcast1.mp3", "sound");
function loadHandler(event) {
    // This is fired for each sound that is registered.
    var instance = createjs.Sound.play("sound");  // play using id.  Could also use full sourcepath or event.src.
    instance.on("complete", this.handleComplete, this);
    instance.volume = 0.5;
}
