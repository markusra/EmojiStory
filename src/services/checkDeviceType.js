export function checkDeviceType() {
  var deviceType = "";

  if (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  ) {
    deviceType = "mobile";
  } else {
    deviceType = "desktop";
  }

  return deviceType;
}
