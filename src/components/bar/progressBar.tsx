import type { GlyStd, GlyApp } from "@gamely/gly-types";

export type JucaProgressBarProperties = {
    backgroundColor: number | (() => number);
    progress: number | (() => number);
    barColor: number | (() => number);
    width?: number | (() => number);
    height?: number | (() => number);
    radius?: number | (() => number);
    borderColor?: number | (() => number);
    x?: number | (() => number);
    y?: number | (() => number);
} & {
    span?: number;
    offset?: number;
    after?: number;
    style?: string;
};

export function ProgressBar(props: JucaProgressBarProperties, std: GlyStd) {
    const radius = props.radius ?? 0;
    const barColor = props.barColor ?? std.color.white;
    const backgroundColor = props.backgroundColor ?? std.color.darkgray;
    const borderColor = props.borderColor ?? 0;
    const x_pos = props.x ?? 0;
    const y_pos = props.y ?? 0;
    const btn_width = props.width;
    const btn_height = props.height;
    const progress = props.progress;

    const getProgress = typeof progress === "function" ? progress : () => progress;
    const getBarColor = typeof barColor === "function" ? barColor : () => barColor;
    const getBorderRadius =
        typeof radius !== "function" ? () => radius : radius;
    const getBorderColor =
        typeof borderColor === "function" ? borderColor : () => borderColor;
    const getX = typeof x_pos !== "function" ? () => x_pos : x_pos;
    const getY = typeof y_pos !== "function" ? () => y_pos : y_pos;
    const getWidth =
        btn_width !== undefined
            ? typeof btn_width !== "function"
                ? () => btn_width
                : btn_width
            : undefined;
    const getHeight =
        btn_height !== undefined
            ? typeof btn_height !== "function"
                ? () => btn_height
                : btn_height
            : undefined;

    const baseBgColor: () => number =
        typeof backgroundColor === "function" ? backgroundColor : () => backgroundColor;

    const getBgColor = () => (baseBgColor());
    const getProgressBarColor = () => (getBarColor());

    return (
        <item style={props.style} offset={props.offset} span={props.span ?? 1} after={props.after}>
            <node>
                <node
                    draw={function (this: void, self: GlyApp["data"]) {
                        const btnWidth = getWidth ? getWidth() : self.width;
                        const btnHeight = getHeight ? getHeight() : self.height;
                        const radius = getBorderRadius();
                        const progress = std.math.max(0, std.math.min(100, getProgress()));
                        const progressWidth = (btnWidth * progress) / 100;

                        const xPos =
                            props.x !== undefined ? getX() : (self.width - btnWidth) / 2;
                        const yPos =
                            props.y !== undefined ? getY() : (self.height - btnHeight) / 2;

                        std.draw.color(getBgColor());
                        std.draw.rect2(0, xPos, yPos, btnWidth, btnHeight, radius);

                        std.draw.color(getProgressBarColor());
                        std.draw.rect2(0, xPos, yPos, progressWidth, btnHeight, radius);

                        if (getBorderColor() !== 0) {
                            std.draw.color(getBorderColor());
                            std.draw.rect2(1, xPos - 1, yPos - 1, btnWidth, btnHeight, radius);
                        }
                    }}
                />
            </node>
        </item>
    );
}
