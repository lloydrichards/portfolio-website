import React from "react";
import anime from "animejs";

const Example3 = () => {
  const ref = React.useRef<SVGSVGElement>(null);
  const ref2 = React.useRef<SVGSVGElement>(null);
  React.useEffect(() => {
    const path1 = anime.path("#Example3Path1");
    const path2 = anime.path("#Example3Path2");
    anime({
      targets: ref.current,
      translateX: path1("x"),
      translateY: path1("y"),
      rotate: path1("angle"),
      delay: 1000,
      duration: path1("d").totalLength / 0.05,
      easing: "linear",
      loop: true,
    });
    anime({
      targets: ref2.current,
      translateX: path2("x"),
      translateY: path2("y"),
      rotate: path2("angle"),
      delay: 3000,
      duration: path2("d").totalLength / 0.05,
      easing: "easeOutBounce",
      loop: true,
    });
  }, []);
  return (
    <div style={{position: "relative"}}>
      <svg
        width="226"
        height="251"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path id="Example3Path2" d="M165.67 43.945v162.731" stroke="#000" />
        <path
          d="M158.801 201.195h14.25M162.76 201.194v-1.583a1.584 1.584 0 011.583-1.584h3.167a1.582 1.582 0 011.583 1.584v1.583m2.375 0v11.083a1.584 1.584 0 01-1.583 1.584h-7.917a1.58 1.58 0 01-1.583-1.584v-11.083h11.083zM164.344 205.152v4.75M167.51 205.152v4.75"
          stroke="#434040"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Example3Path1"
          d="M165.67 43.945V162.48c0 11.046 9.076 20 20.121 20v0c11.046 0 20.122-8.954 20.122-20V63.945c0-11.045-8.955-20-20-20h-17.369"
          stroke="#000"
        />
        <path
          d="M111.753 49.027V39.06h.952l4.046 9.198h-.532l4.004-9.198h.952v9.968h-1.064v-8.456l.434.056-3.668 8.4h-.812l-3.724-8.4.462-.056.014 8.456h-1.064zm12.371 0h-1.19l4.382-9.968h1.008l4.382 9.968h-1.176l-3.906-9.128h.42l-3.92 9.128zm.672-2.562l.406-.952h5.236l.406.952h-6.048zm15.965 2.562l-5.488-5.068 5.25-4.9h1.47l-5.628 5.25.056-.742 5.838 5.46h-1.498zm-6.286 0V39.06h1.148v9.968h-1.148zm9.153 0V39.06h6.3v.952h-5.166v3.472h4.886v.966h-4.886v3.626h5.166v.952h-6.3zM89.64 170.945v-9.968H93.6c1.074 0 1.895.238 2.464.714.58.476.868 1.162.868 2.058 0 .859-.294 1.536-.882 2.03-.578.486-1.395.728-2.45.728l1.036-.196c.364 0 .677.103.938.308.262.196.472.514.63.952l1.26 3.374h-1.218l-1.232-3.318c-.158-.42-.378-.695-.658-.826-.27-.14-.634-.21-1.092-.21h-2.492v4.354H89.64zm1.133-5.306h2.73c.775 0 1.35-.158 1.722-.476.383-.317.574-.784.574-1.4 0-.616-.186-1.073-.56-1.372-.373-.308-.952-.462-1.736-.462h-2.73v3.71zm8.853 5.306v-9.968h6.3v.952h-5.166v3.472h4.886v.966h-4.886v3.626h5.166v.952h-6.3zm12.712.112c-.952 0-1.773-.205-2.464-.616-.69-.41-1.222-.998-1.596-1.764-.373-.765-.56-1.675-.56-2.73 0-1.054.187-1.96.56-2.716a4.1 4.1 0 011.596-1.75c.691-.41 1.512-.616 2.464-.616.682 0 1.312.108 1.89.322a3.968 3.968 0 011.498.938l-.434.882c-.476-.41-.947-.704-1.414-.882a4.265 4.265 0 00-1.526-.266c-1.092 0-1.941.355-2.548 1.064-.597.71-.896 1.718-.896 3.024 0 1.316.299 2.334.896 3.052.598.71 1.447 1.064 2.548 1.064.551 0 1.06-.088 1.526-.266.467-.177.938-.471 1.414-.882l.434.882a4.1 4.1 0 01-1.498.952 5.592 5.592 0 01-1.89.308zm7.798-.112v-4.48l.252.812-4.172-6.3h1.344l3.36 5.208h-.392l3.36-5.208h1.316l-4.158 6.3.238-.812v4.48h-1.148zm9.989.112c-.952 0-1.774-.205-2.464-.616-.691-.41-1.223-.998-1.596-1.764-.374-.765-.56-1.675-.56-2.73 0-1.054.186-1.96.56-2.716a4.087 4.087 0 011.596-1.75c.69-.41 1.512-.616 2.464-.616.681 0 1.311.108 1.89.322a3.975 3.975 0 011.498.938l-.434.882c-.476-.41-.948-.704-1.414-.882a4.273 4.273 0 00-1.526-.266c-1.092 0-1.942.355-2.548 1.064-.598.71-.896 1.718-.896 3.024 0 1.316.298 2.334.896 3.052.597.71 1.446 1.064 2.548 1.064.55 0 1.059-.088 1.526-.266.466-.177.938-.471 1.414-.882l.434.882c-.42.42-.92.738-1.498.952a5.6 5.6 0 01-1.89.308zm5.594-.112v-9.968h1.148v8.988h4.998v.98h-6.146zm7.909 0v-9.968h6.3v.952h-5.166v3.472h4.886v.966h-4.886v3.626h5.166v.952h-6.3zM84.694 131.143c-.952 0-1.773-.205-2.464-.616-.69-.41-1.222-.998-1.596-1.764-.373-.765-.56-1.675-.56-2.73 0-1.054.187-1.96.56-2.716a4.092 4.092 0 011.596-1.75c.69-.41 1.512-.616 2.464-.616.682 0 1.312.108 1.89.322a3.97 3.97 0 011.498.938l-.434.882c-.476-.41-.947-.704-1.414-.882a4.269 4.269 0 00-1.526-.266c-1.092 0-1.941.355-2.548 1.064-.597.71-.896 1.718-.896 3.024 0 1.316.299 2.334.896 3.052.598.71 1.447 1.064 2.548 1.064.55 0 1.06-.088 1.526-.266.467-.177.938-.471 1.414-.882l.434.882c-.42.42-.92.738-1.498.952a5.597 5.597 0 01-1.89.308zm9.602 0c-.933 0-1.74-.205-2.422-.616-.671-.41-1.194-.998-1.567-1.764-.365-.765-.547-1.67-.547-2.716 0-1.054.182-1.96.546-2.716.365-.765.883-1.353 1.555-1.764.68-.41 1.493-.616 2.435-.616.934 0 1.741.206 2.422.616.682.411 1.204.999 1.569 1.764.363.756.545 1.657.545 2.702 0 1.055-.186 1.965-.56 2.73-.364.766-.886 1.354-1.568 1.764-.671.411-1.474.616-2.407.616zm0-.98c1.055 0 1.876-.354 2.464-1.064.588-.718.882-1.74.882-3.066 0-1.325-.293-2.338-.882-3.038-.588-.709-1.409-1.064-2.464-1.064-1.054 0-1.88.355-2.478 1.064-.587.71-.882 1.722-.882 3.038 0 1.316.294 2.334.882 3.052.598.719 1.424 1.078 2.478 1.078zm6.923.868v-9.968h.882l6.356 8.47-.336.084v-8.554h1.092v9.968h-.896l-6.342-8.456.322-.098v8.554h-1.078zm13.889.112c-.513 0-.994-.042-1.442-.126a5.266 5.266 0 01-1.246-.42 4.768 4.768 0 01-1.036-.714l.434-.882c.504.42 1.008.719 1.512.896.514.178 1.111.266 1.792.266.794 0 1.41-.154 1.848-.462.439-.317.658-.76.658-1.33 0-.345-.112-.62-.336-.826-.214-.214-.513-.382-.896-.504-.373-.13-.798-.252-1.274-.364a16.57 16.57 0 01-1.358-.35 5.385 5.385 0 01-1.148-.518 2.29 2.29 0 01-.77-.784c-.186-.317-.28-.714-.28-1.19 0-.569.15-1.068.448-1.498.299-.438.719-.779 1.26-1.022.542-.242 1.181-.364 1.918-.364.458 0 .896.052 1.316.154.42.094.808.234 1.162.42.364.187.686.416.966.686l-.448.882a4.73 4.73 0 00-1.414-.882 4.38 4.38 0 00-1.582-.28c-.774 0-1.381.164-1.82.49-.438.327-.658.784-.658 1.372 0 .364.098.658.294.882.196.224.472.406.826.546.355.131.761.252 1.218.364.486.112.952.234 1.4.364.448.131.845.294 1.19.49.355.187.635.434.84.742.206.299.308.682.308 1.148 0 .57-.149 1.064-.448 1.484-.298.42-.723.747-1.274.98-.55.234-1.204.35-1.96.35zm9.731 0c-1.297 0-2.282-.336-2.954-1.008-.672-.681-1.008-1.684-1.008-3.01v-6.062h1.134v6.16c0 .98.238 1.718.714 2.212.476.486 1.181.728 2.114.728.915 0 1.61-.247 2.086-.742.476-.494.714-1.227.714-2.198v-6.16h1.148v6.062c0 1.316-.336 2.315-1.008 2.996-.672.682-1.652 1.022-2.94 1.022zm6.628-.112v-9.968h.952l4.046 9.198h-.532l4.004-9.198h.952v9.968h-1.064v-8.456l.434.056-3.668 8.4h-.812l-3.724-8.4.462-.056.014 8.456h-1.064zm12.161 0v-9.968h6.3v.952h-5.166v3.472h4.886v.966h-4.886v3.626h5.166v.952h-6.3zM105.445 210.859v-8.988h-3.472v-.98h8.106v.98h-3.472v8.988h-1.162zm6.308 0v-9.968h3.962c1.073 0 1.895.238 2.464.714.579.476.868 1.162.868 2.058 0 .859-.294 1.536-.882 2.03-.579.486-1.395.728-2.45.728l1.036-.196c.364 0 .677.103.938.308.261.196.471.514.63.952l1.26 3.374h-1.218l-1.232-3.318c-.159-.42-.378-.695-.658-.826-.271-.14-.635-.21-1.092-.21h-2.492v4.354h-1.134zm1.134-5.306h2.73c.775 0 1.349-.158 1.722-.476.383-.317.574-.784.574-1.4 0-.616-.187-1.073-.56-1.372-.373-.308-.952-.462-1.736-.462h-2.73v3.71zm8.981 5.306h-1.19l4.382-9.968h1.008l4.382 9.968h-1.176l-3.906-9.128h.42l-3.92 9.128zm.672-2.562l.406-.952h5.236l.406.952h-6.048zm12.761 2.674c-.513 0-.994-.042-1.442-.126a5.266 5.266 0 01-1.246-.42 4.744 4.744 0 01-1.036-.714l.434-.882c.504.42 1.008.719 1.512.896.513.178 1.111.266 1.792.266.793 0 1.409-.154 1.848-.462.439-.317.658-.76.658-1.33 0-.345-.112-.62-.336-.826-.215-.214-.513-.382-.896-.504-.373-.13-.798-.252-1.274-.364a16.467 16.467 0 01-1.358-.35 5.385 5.385 0 01-1.148-.518 2.281 2.281 0 01-.77-.784c-.187-.317-.28-.714-.28-1.19 0-.569.149-1.068.448-1.498.299-.438.719-.779 1.26-1.022.541-.242 1.181-.364 1.918-.364.457 0 .896.052 1.316.154.42.094.807.234 1.162.42.364.187.686.416.966.686l-.448.882a4.743 4.743 0 00-1.414-.882 4.385 4.385 0 00-1.582-.28c-.775 0-1.381.164-1.82.49-.439.327-.658.784-.658 1.372 0 .364.098.658.294.882.196.224.471.406.826.546.355.131.761.252 1.218.364.485.112.952.234 1.4.364.448.131.845.294 1.19.49.355.187.635.434.84.742.205.299.308.682.308 1.148 0 .57-.149 1.064-.448 1.484-.299.42-.723.747-1.274.98-.551.234-1.204.35-1.96.35zm12.951-.112v-9.968h1.148v9.968h-1.148zm-7.112 0v-9.968h1.134v9.968h-1.134zm.532-4.578v-.966h7.224v.966h-7.224z"
          fill="#000"
        />
        <path
          d="M173.676 125.945a7.75 7.75 0 01-7.75 7.75 7.75 7.75 0 117.75-7.75zM173.676 165.195a7.75 7.75 0 01-7.75 7.75 7.75 7.75 0 117.75-7.75zM173.676 43.945a7.75 7.75 0 11-15.5 0 7.75 7.75 0 0115.5 0z"
          fill="#D2E799"
          stroke="#000"
          stroke-width=".5"
        />
      </svg>
      <svg
        ref={ref}
        width="21"
        height="21"
        fill="none"
        style={{ position: "absolute", top: "-10px", left: "-10px" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="PET1" transform="rotate(-90) translate(-21 0)">
          <path
            d="M9.036.348h2.675v1.538h-.236v.75c.794.246 2.381.966 2.381 1.872v1.664c-.054.216 0 .555-.601 1.087.2.162.601.67.601 1.41v10.518a1.16 1.16 0 01-2.32 0 1.16 1.16 0 01-2.321 0 1.16 1.16 0 11-2.32 0V8.67c0-.74.4-1.248.6-1.41-.6-.532-.546-.871-.6-1.087V4.508c0-.906 1.587-1.626 2.38-1.873v-.75h-.239V.349z"
            fill={"tomato"}
          />
          <path
            d="M9.276 1.886h-.24V.348h2.675v1.538h-.236m-2.2 0v.75c-.793.246-2.38.966-2.38 1.872v1.664c.054.216 0 .555.6 1.087m1.78-5.373h2.2m-3.98 5.373c-.2.162-.6.67-.6 1.41v10.518a1.16 1.16 0 102.32 0 1.16 1.16 0 102.32 0 1.16 1.16 0 102.321 0V8.67c0-.74-.4-1.248-.601-1.41m-5.76 0h5.76m0 0c.601-.532.547-.871.601-1.087V4.508c0-.906-1.587-1.626-2.381-1.873v-.75"
            stroke="#000"
            stroke-width=".5"
          />
        </g>
      </svg>
      <svg
        ref={ref2}
        width="21"
        height="21"
        fill="none"
        style={{ position: "absolute", top: "-10px", left: "-10px" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="PET1" transform="rotate(-90) translate(-21 0)">
          <path
            d="M9.036.348h2.675v1.538h-.236v.75c.794.246 2.381.966 2.381 1.872v1.664c-.054.216 0 .555-.601 1.087.2.162.601.67.601 1.41v10.518a1.16 1.16 0 01-2.32 0 1.16 1.16 0 01-2.321 0 1.16 1.16 0 11-2.32 0V8.67c0-.74.4-1.248.6-1.41-.6-.532-.546-.871-.6-1.087V4.508c0-.906 1.587-1.626 2.38-1.873v-.75h-.239V.349z"
            fill={"tomato"}
          />
          <path
            d="M9.276 1.886h-.24V.348h2.675v1.538h-.236m-2.2 0v.75c-.793.246-2.38.966-2.38 1.872v1.664c.054.216 0 .555.6 1.087m1.78-5.373h2.2m-3.98 5.373c-.2.162-.6.67-.6 1.41v10.518a1.16 1.16 0 102.32 0 1.16 1.16 0 102.32 0 1.16 1.16 0 102.321 0V8.67c0-.74-.4-1.248-.601-1.41m-5.76 0h5.76m0 0c.601-.532.547-.871.601-1.087V4.508c0-.906-1.587-1.626-2.381-1.873v-.75"
            stroke="#000"
            stroke-width=".5"
          />
        </g>
      </svg>
    </div>
  );
};

export default Example3;
