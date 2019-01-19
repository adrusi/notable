let tabs = browser.tabs
let windows = browser.windows

tabs.onCreated.addListener(tab => {
  // The hamburger_menu > Customize... panel breaks when its tab is moved to a
  // new window, so don't do anything.
  if (tab.favIconUrl === "chrome://browser/skin/customize.svg") return

  windows.get(tab.windowId, { populate: true }).then(oldwin => {
    if (oldwin.tabs.length <= 1) return
    return windows.create({
      incognito: oldwin.incognito,
      tabId: tab.id
    }).then(newwin => {
      return {
        shouldFocus: oldwin.focuses && tab.active,
        window: newwin
      }
    })
  }).then(info => {
    let newwin = info.window
    return windows.update(newwin.id, {
      focused: info.shouldFocus
    })
  })
})
