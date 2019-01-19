# Notable

Notable eliminates tabs from firefox by putting each tab in its own window. Whenever a new tab is created in a window that already has another tab, it is moved to a new window. It's useful for people who want to use their window manager's tab functions for their browser.

Since the idea is to get rid of firefox's tabs, you may also want to hide the tab bar. The extension can't hide parts of firefox's UI, but you can hide the tab bar if you edit your [userChrome.css](http://kb.mozillazine.org/index.php?title=UserChrome.css&printable=yes), Here's what you need to hide the tab bar:

    @namespace url("http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul");
    #TabsToolbar {
        visibility: collapse;
    }

[Install (requires Firefox 57.0+)](https://github.com/adrusi/notable/releases/download/v1.1/notable-1.1-an+fx.xpi)
