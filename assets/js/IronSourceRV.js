window.InitRV = function InitRV(id) {
  $.getScript("/assets/js/rv-min.js", function () {

    let userId = id === undefined ? "Guest" : id;
    let ironRV = IronRV.getInstance({
      applicationKey: "1-mb5whk",
      applicationUserId: userId,
    });

    ironRV.addListener(IronRV.EVENTS.READY, function () {
      window.unityInstance.SendMessage("MainMenuManagers", "RvReady");
    });

    ironRV.addListener(IronRV.EVENTS.CLOSE, function () {
      window.unityInstance.SendMessage("MainMenuManagers", "RvWatchComplete", "false");
    });

    ironRV.addListener(IronRV.EVENTS.COMPLETION, function () {
      window.unityInstance.SendMessage("MainMenuManagers", "RvWatchComplete", "true");
    });

    ironRV.addListener(IronRV.EVENTS.INIT_ERROR, function () {
    });

    window.showRV = () => {
      ironRV.show();
    };
  });
}
