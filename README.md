# EaglercraftX 1.8

### Play Minecraft 1.8 in your browser, supports singleplayer and multiplayer

![EaglercraftX 1.8 Screenshot Main Menu](https://deev.is/eagler/cors/eagler-1.8-u22-titlescreen-480p.png)

### This repository contains:

 - **Utilities to decompile Minecraft 1.8 and apply patch files to it**
 - **Source code to provide the LWJGL keyboard, mouse, and OpenGL APIs in a browser**
 - **Patch files to mod the Minecraft 1.8 source code to make it browser compatible**
 - **Browser-modified portions of Minecraft 1.8's open-source dependencies**

### This repository does NOT contain:

 - **Any portion of the decompiled Minecraft 1.8 source code or resources**
 - **Any portion of Mod Coder Pack and it's config files**
 - **Data that can be used alone to reconstruct portions of the game's source code**

## Getting Started:

### To compile the latest version of the JavaScript client, on Windows:

1. Make sure you have at least Java 11 installed and added to your PATH, it is recommended to use Java 17
2. Download (clone) this repository to your computer
3. Double click `CompileLatestClient.bat`, a GUI resembling a classic windows installer should open
4. Follow the steps shown to you in the new window to finish compiling

### To compile the latest version of the JavaScript client, on Linux/macOS:

1. Make sure you have at least Java 11 installed, it is recommended to use Java 17
2. Download (clone) this repository to your computer
3. Open a terminal in the folder the repository was cloned to
4. Type `chmod +x CompileLatestClient.sh` and hit enter
5. Type `./CompileLatestClient.sh` and hit enter, a GUI resembling a classic windows installer should open
6. Follow the steps shown to you in the new window to finish compiling

### To set up the development environment

1. Prepare the required files in the mcp918 folder ([readme](mcp918/readme.txt))
2. Run the `build_init` script
3. Run the `build_make_workspace` script

## Browser Compatibility

The JavaScript runtime of EaglercraftX 1.8 is currently known to work on browsers as old as Chrome 38 on Windows XP, the game supports both WebGL 1.0 and WebGL 2.0 however features such as dynamic[...]

## WebAssembly GC Support

EaglercraftX 1.8 also has an experimental WebAssembly GC (WASM-GC) runtime, almost all of the features supported on the JavaScript runtime are also supported on the WebAssembly GC runtime, however[...]

There is no GUI for compiling the WASM-GC client at the moment, you need to compile it using the `MakeWASMClientBundle` script in the development environment.

## Singleplayer

EaglercraftX 1.8 fully supports singleplayer mode through an integrated server. Worlds are saved to your browser's local storage and are available even if your device does not have an internet con[...]

You can also import and export your existing vanilla Minecraft 1.8 worlds into EaglercraftX using ZIP files if you want to try playing all your old 1.8 maps in a modern browser. The glitch that ca[...]

## Shared Worlds

**This feature used to be known as "LAN Worlds" but has been renamed to "Shared Worlds" to avoid confusion**

If you would like to invite other players to join your singleplayer world and play the game together, use the "Invite" button in the pause menu. You can configure gamemode and cheats for the other[...]

Once you press "Start Shared World", EaglercraftX 1.8 will give you a "join code" (usually 5 letters) to share with your friends. On a different device, go the "Multiplayer" screen and press "Dire[...]

If you would like to host your own relay, the JAR file and instructions can be downloaded from the "Network Settings" screen in the client. EaglercraftX 1.8 uses the same "LAN world" relay server [...]

## PBR Shaders

EaglercraftX 1.8 includes a deferred physically-based renderer modeled after the GTA V rendering engine with many new improvements and a novel raytracing technique for fast realistic reflections. [...]

## Voice Chat

EaglercraftX 1.8 includes an integrated voice-chat service that can be used in shared worlds and also on multiplayer servers when it is enabled by the server owner. This feature also uses WebRTC l[...]

## Resource Packs

EaglercraftX 1.8 allows you to use any vanilla Minecraft 1.8 resource pack in your browser by importing it as a zip file, resource packs are saved to your browser's local storage and are saved bet[...]

If you are creating a resource pack and want to disable the blur filter on the main menu panorama, create a file called `assets/minecraft/textures/gui/title/background/enable_blur.txt` in your pac[...]

## Making a Server

To make a server for EaglercraftX 1.8 the recommended software to use is EaglercraftXServer ("EaglerXServer"), which you can get from lax1dude here: [https://lax1dude.net/eaglerxserver/](https://l[...]

## Launch Options

The EaglercraftX 1.8 client is configured primarily through a variable called `window.eaglercraftXOpts` that must be set before the client starts up.

The default eaglercraftXOpts values is this:

    const relayId = Math.floor(Math.random() * 3);
    window.eaglercraftXOpts = {
        demoMode: false,
        container: "game_frame",
        assetsURI: "assets.epk",
        localesURI: "lang/",
        worldsDB: "worlds",
        servers: [
            { addr: "ws://localhost:8081/", name: "Local test server" }
        ],
        relays: [
            { addr: "wss://relay.deev.is/", comment: "lax1dude relay #1", primary: relayId == 0 },
            { addr: "wss://relay.lax1dude.net/", comment: "lax1dude relay #2", primary: relayId == 1 },
            { addr: "wss://relay.shhnowisnottheti.me/", comment: "ayunami relay #1", primary: relayId == 2 }
        ]
    };

### List of available options

- `container:` the ID of the HTML element to create the canvas in **(required)**
- `assetsURI:` the URL of the assets.epk file **(required)**
- `localesURI:` the URL where extra .lang files can be found
- `lang`: the default language to use for the game (like "en_US")
- `joinServer`: server address to join when the game launches
- `worldsDB:` the name of the IndexedDB database to store worlds in
- `resourcePacksDB:` the name of the IndexedDB database to store resource packs in
- `demoMode:` whether to launch the game in java edition demo mode
- `servers:` a list of default servers to display on the Multiplayer screen
- `relays:` the default list of shared world relays to use for invites
- `checkGLErrors:` if the game should check for opengl errors
- `checkShaderGLErrors:` enables more verbose opengl error logging for the shaders
- `enableDownloadOfflineButton:` whether to show a "Download Offline" button on the title screen
- `downloadOfflineButtonLink:` overrides the download link for the "Download Offline" button
- `html5CursorSupport:` enables support for showing the CSS "pointer" cursor over buttons
- `allowUpdateSvc:` enables the certificate-based update system
- `allowUpdateDL:` allows the client to download new updates it finds
- `logInvalidCerts:` print update certificates with invalid signatures to console
- `enableSignatureBadge:` show a badge on the title screen indicating if digital signature is valid
- `checkRelaysForUpdates:` proprietary feature used in offline downloads
- `allowVoiceClient:` can be used to disable the voice chat feature
- `allowFNAWSkins:` can be used to disable the high poly FNAW skins
- `localStorageNamespace:` can be used to change the prefix of the local storage keys (Default: `"_eaglercraftX"`)
- `enableMinceraft:` can be used to disable the "Minceraft" title screen
- `crashOnUncaughtExceptions:` display crash reports when `window.onerror` is fired
- `openDebugConsoleOnLaunch:` open debug console automatically at launch
- `fixDebugConsoleUnloadListener:` close debug console beforeunload instead of unload
- `forceWebViewSupport:` if the server info webview should be allowed even on browsers without the required safety features
- `enableWebViewCSP:` if the `csp` attibute should be set on the server info webview for extra security
- `enableServerCookies:` can be used to disable server cookies
- `allowServerRedirects:` if servers should be allowed to make the client reconnect to a different address
- `autoFixLegacyStyleAttr:` if the viewport meta tag and style attributes on old offline downloads and websites should be automatically patched
- `showBootMenuOnLaunch:` if the client should always show the boot menu on every launch
- `bootMenuBlocksUnsignedClients:` if the boot menu should only be allowed to launch signed clients
- `allowBootMenu:` can be used to disable the boot menu entirely
- `forceProfanityFilter:` if the profanity filter should be forced enabled
- `forceWebGL1:` if the game should force the browser to only use WebGL 1.0 for the canvas
- `forceWebGL2:` if the game should force the browser to only use WebGL 2.0 for the canvas
- `allowExperimentalWebGL1:` if the game should be allowed to create an `experimental-webgl` context
- `useWebGLExt:` can be used to disable all OpenGL ES extensions to test the game on a pure WebGL 1.0/2.0 context
- `useDelayOnSwap:` if the game should `setTimeout(..., 0)` every frame instead of using MessageChannel hacks
- `useJOrbisAudioDecoder:` if OGG vorbis files should be decoded using the JOrbis Java OGG decoder instead of using the browser
- `useXHRFetch:` if the game should use XMLHttpRequest for downloading resources instead of the fetch API
- `useVisualViewport:` if the game should resize some GUIs relative to `window.visualViewport` (needed on mobile browsers when the keyboard is open)
- `deobfStackTraces:` can be used to disable the runtime stack-trace deobfuscation, reduces micro stutters if the game is logging errors
- `disableBlobURLs:` if the game should use `data:` URLs instead of `blob:` URLs for loading certain resources
- `eaglerNoDelay:` can be used to disable "Vigg's Algorithm", an algorithm that delays and combines multiple EaglercraftX packets together if they are sent in the same tick (does not affect regul[...]
- `ramdiskMode:` if worlds and resource packs should be stored in RAM instead of IndexedDB
- `singleThreadMode:` if the game should run the client and integrated server in the same context instead of creating a worker object
- `enableEPKVersionCheck:` if the game should attempt to bypass the browser's cache and retry downloading assets.epk when its outdated
- `enforceVSync:` (WASM only) if the game should automatically re-enable VSync at launch if its disabled
- `keepAliveHack:` if the game should embed a looping `<audio>` tag to keep the tab from becoming inactive on Chrome
- `finishOnSwap:` if the WebGL `finish` function should be called after every frame when VSync is disabled
- `hooks:` can be used to define JavaScript callbacks for certain events
    * `localStorageSaved:` JavaScript callback to save local storage keys (key, data)
    * `localStorageLoaded:` JavaScript callback to load local storage keys (key) returns data
    * `crashReportShow:` JavaScript callback when a crash report is shown (report, customMessageCB)
    * `screenChanged:` JavaScript callback when the screen changes/resizes (screenName, scaledWidth, scaledHeight, realWidth, realHeight, scaleFactor)

### Using Hooks

You may want to implement some custom logic for loading/saving certain local storage keys. The eaglercraftXOpts hooks section can be used to override the client's local storage load and save func[...]

    window.eaglercraftXOpts = {
        ...
        ...
        ...
        hooks: {
            localStorageSaved: function(key, data) {
                // 'key' is local storage key name as a string
                // 'data' is base64-encoded byte array as a string
                // function returns nothing
            },
            localStorageLoaded: function(key) {
                // 'key' is local storage key name as a string
                // function returns a base64-encoded byte array as a string
                // function returns null if the key does not exist
            }
        }
    }

Be aware that the client will still save the key to the browser's local storage anyway even if you define a custom save handler, and will just attempt to load the key from the browser's local sto[...]

On a normal client you will only ever need to handle local storage keys called `p` (profile), `g` (game settings), `s` (server list), `r` (shared world relays), in your hooks functions. Feel free[...]

### Crash Report Hook

The `crashReportShow` hook can be used to capture crash reports and append additional text to them. It takes two parameters, the crash report as a string and a callback function for appending tex[...]

    hooks: {
        crashReportShow: function(report, customMessageCB) {
            // 'report' is crash report as a string
            customMessageCB("Hello from crashReportShow hook!");
        }
    }

## Developing a Client

There is currently no system in place to make forks of 1.8 and merge commits made to the patch files in this repository with the patch files or workspace of the fork, you're on your own if you tr[...]
