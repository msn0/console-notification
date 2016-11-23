const notificationTimeoutMs = 4000;

Notification.requestPermission();

console.log = new Proxy(console.log, {
  apply(target, thisArgument, argumentsList) {
    const notification = new Notification(argumentsList.join('\n'));
    target.apply(thisArgument, argumentsList);
    setTimeout(notification.close.bind(notification), notificationTimeoutMs);
  }
});
