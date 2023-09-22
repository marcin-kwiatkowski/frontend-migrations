window.addEventListener("message", function (event) {
  if (event.origin === "http://app.local:3000") {
    const messageData = event.data;
    if (messageData.type === 'navigation') {
      if (messageData?.params?.page === 'reports') {
        window.location.href = '/reports'
      }
    }
  }
})
