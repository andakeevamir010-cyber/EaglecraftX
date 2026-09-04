"use strict";

window.EagleIPAD = {

    MAX_FPS: 60,

    fullscreen: function () {
        const element = document.documentElement;

        if (element.requestFullscreen) {
            element.requestFullscreen().catch(() => {});
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        }
    },

    importSkin: function () {

        const input = document.getElementById("fileInput");

        input.value = "";

        input.onchange = function () {

            if (!input.files || input.files.length === 0) {
                return;
            }

            const file = input.files[0];

            if (file.type !== "image/png" &&
                !file.name.toLowerCase().endsWith(".png")) {

                alert("Skin must be a PNG file.");
                return;
            }

            const reader = new FileReader();

            reader.onload = function () {

                const skinData = reader.result;

                localStorage.setItem(
                    "EagleIPAD_Skin",
                    skinData
                );

                window.dispatchEvent(
                    new CustomEvent(
                        "eaglecraft-skin-imported",
                        {
                            detail: {
                                name: file.name,
                                data: skinData
                            }
                        }
                    )
                );

                alert(
                    "Skin imported!\n\n" +
                    "Open the Eaglercraft skin settings to apply it."
                );
            };

            reader.readAsDataURL(file);
        };

        input.click();
    },

    importPack: function () {

        const input = document.getElementById("packInput");

        input.value = "";

        input.onchange = function () {

            if (!input.files || input.files.length === 0) {
                return;
            }

            const file = input.files[0];

            if (
                !file.name.toLowerCase().endsWith(".zip")
            ) {
                alert("Texture pack must be a .zip file.");
                return;
            }

            const reader = new FileReader();

            reader.onload = function () {

                const data = reader.result;

                const bytes = new Uint8Array(data);

                let binary = "";

                const chunkSize = 8192;

                for (
                    let i = 0;
                    i < bytes.length;
                    i += chunkSize
                ) {
                    binary += String.fromCharCode(
                        ...bytes.subarray(
                            i,
                            Math.min(
                                i + chunkSize,
                                bytes.length
                            )
                        )
                    );
                }

                const encoded = btoa(binary);

                try {

                    localStorage.setItem(
                        "EagleIPAD_TexturePack",
                        encoded
                    );

                    localStorage.setItem(
                        "EagleIPAD_TexturePackName",
                        file.name
                    );

                    window.dispatchEvent(
                        new CustomEvent(
                            "eaglecraft-pack-imported",
                            {
                                detail: {
                                    name: file.name
                                }
                            }
                        )
                    );

                    alert(
                        "Texture pack imported:\n" +
                        file.name
                    );

                } catch (error) {

                    console.error(error);

                    alert(
                        "The texture pack is too large " +
                        "for this browser storage method."
                    );
                }
            };

            reader.readAsArrayBuffer(file);
        };

        input.click();
    }
};


/*
 * iPad keyboard improvements
 */

document.addEventListener(
    "keydown",
    function (event) {

        /*
         * Don't let Safari use browser shortcuts
         * while playing.
         */

        const gameKeys = [
            "KeyW",
            "KeyA",
            "KeyS",
            "KeyD",
            "Space",
            "ShiftLeft",
            "ShiftRight",
            "ControlLeft",
            "ControlRight",
            "KeyE",
            "KeyQ",
            "KeyF",
            "KeyR",
            "Digit1",
            "Digit2",
            "Digit3",
            "Digit4",
            "Digit5",
            "Digit6",
            "Digit7",
            "Digit8",
            "Digit9",
            "Escape"
        ];

        if (gameKeys.includes(event.code)) {
            event.stopPropagation();
        }
    },
    true
);


/*
 * 60 FPS limiter helper.
 *
 * This does NOT magically change Eaglercraft's
 * internal renderer. The actual renderer should
 * also be configured for 60 FPS.
 */

(function () {

    let lastFrame = 0;

    window.EagleIPAD.nextFrame = function (callback) {

        const frameTime = 1000 / 60;

        function frame(now) {

            if (
                now - lastFrame >=
                frameTime - 0.5
            ) {

                lastFrame = now;

                callback(now);
            }

            requestAnimationFrame(frame);
        }

        requestAnimationFrame(frame);
    };

})();


/*
 * Prevent accidental browser zooming while playing.
 */

document.addEventListener(
    "gesturestart",
    function (event) {
        event.preventDefault();
    },
    { passive: false }
);

document.addEventListener(
    "gesturechange",
    function (event) {
        event.preventDefault();
    },
    { passive: false }
);

document.addEventListener(
    "gestureend",
    function (event) {
        event.preventDefault();
    },
    { passive: false }
);
