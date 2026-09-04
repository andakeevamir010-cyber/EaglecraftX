# eaglercraft-workspace

### Java 17 or greater is required!

**To get started, import this entire folder into your IDE as a Gradle project, this will automatically create several different projects to build all the common classes and each runtime.**

The Gradle plugin was created by [cire3](https://github.com/cire3wastaken), and the source code is available [here](https://github.com/The-Resent-Team/open-source-projects).

**To compile the JavaScript client:**

Run the `MakeOfflineDownload` script in the "target_teavm_javascript" folder (or the `makeMainOfflineDownload` Gradle task in your IDE) to build the JavaScript client. This will build the "classes[...]

**To compile the WASM-GC client:**

Run the `MakeWASMClientBundle` script in the "target_teavm_wasm_gc" folder (or the `makeMainWasmClientBundle` Gradle task in your IDE) to build the WASM-GC client. This will build the "assets.epw"[...]

The WASM-GC client uses a custom fork of TeaVM, the source is available [here](https://github.com/Eaglercraft-TeaVM-Fork/eagler-teavm).

**To run the desktop runtime:**

**Note:** Athough it may be tempting to release "desktop" copies of your client, the current desktop runtime was designed for debug use only and is a poor choice for distribution to end users.

Run the `StartDesktopRuntime` script in the "target_lwjgl_desktop" folder (or the `eaglercraftDebugRuntime` Gradle task in your IDE) to run the desktop runtime. This will run the client using the [...]

To debug the desktop runtime from your IDE, one way you can do it is by enabling the debugger in the LWJGL target's `eaglercraftDebugRuntime` task, but something that will launch even [...]
