import React from "react";

type LoaderProps = {
    color?: string;
    fixed?: boolean;
};

const Loader: React.FC<LoaderProps> = ({
    color = "#00adb5",
    fixed = false,
}) => (
    <>
        {fixed ? (
            <div className="loader-fixed">
                <svg
                    className="loader-container"
                    viewBox="0 0 40 40"
                    height="40"
                    width="40"
                    style={
                        {
                            ["--uib-color" as any]: color,
                        }
                    }
                >
                    <circle
                        className="loader-track"
                        cx="20"
                        cy="20"
                        r="17.5"
                        pathLength={100}
                        strokeWidth="5px"
                        fill="none"
                    />
                    <circle
                        className="loader-car"
                        cx="20"
                        cy="20"
                        r="17.5"
                        pathLength={100}
                        strokeWidth="5px"
                        fill="none"
                    />
                </svg>
            </div>
        ) : (
            <svg
                className="loader-container"
                viewBox="0 0 40 40"
                height="40"
                width="40"
                style={
                    {
                        ["--uib-color" as any]: color,
                    }
                }
            >
                <circle
                    className="loader-track"
                    cx="20"
                    cy="20"
                    r="17.5"
                    pathLength={100}
                    strokeWidth="5px"
                    fill="none"
                />
                <circle
                    className="loader-car"
                    cx="20"
                    cy="20"
                    r="17.5"
                    pathLength={100}
                    strokeWidth="5px"
                    fill="none"
                />
            </svg>
        )}
        <style>{`
            .loader-container {
                --uib-size: 40px;
                --uib-color: ${color};
                --uib-speed: 2s;
                --uib-bg-opacity: 0;
                height: var(--uib-size);
                width: var(--uib-size);
                transform-origin: center;
                animation: rotate var(--uib-speed) linear infinite;
                will-change: transform;
                overflow: visible;
                display: block;
            }
            .loader-fixed {
                position: fixed;
                top: 0; left: 0; right: 0; bottom: 0;
                z-index: 9999;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(255,255,255,0.4);
                width: 100vw;
                height: 100vh;
            }
            .loader-car {
                fill: none;
                stroke: var(--uib-color);
                stroke-dasharray: 1, 200;
                stroke-dashoffset: 0;
                stroke-linecap: round;
                animation: stretch calc(var(--uib-speed) * 0.75) ease-in-out infinite;
                will-change: stroke-dasharray, stroke-dashoffset;
                transition: stroke 0.5s ease;
            }
            .loader-track {
                fill: none;
                stroke: var(--uib-color);
                opacity: var(--uib-bg-opacity);
                transition: stroke 0.5s ease;
            }
            @keyframes rotate {
                100% {
                    transform: rotate(360deg);
                }
            }
            @keyframes stretch {
                0% {
                    stroke-dasharray: 0, 150;
                    stroke-dashoffset: 0;
                }
                50% {
                    stroke-dasharray: 75, 150;
                    stroke-dashoffset: -25;
                }
                100% {
                    stroke-dashoffset: -100;
                }
            }
        `}</style>
    </>
);

export default Loader;