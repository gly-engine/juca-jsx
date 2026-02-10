import type { GlyStd, GlyApp } from "@gamely/gly-types";
import { Button, JucaButtonProperties } from "./index";
import { getSecondaryColor } from "../../theme";

export type SkeletonButtonProperties = JucaButtonProperties;

export function SkeletonButton(props: SkeletonButtonProperties, std: GlyStd) {
  const border_radius = props.border_radius ?? 0;
  const x_pos = props.x ?? 0;
  const y_pos = props.y ?? 0;
  const btn_width = props.width;
  const btn_height = props.height;

  const getBorderRadius =
    typeof border_radius !== "function" ? () => border_radius : border_radius;
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

  return (
    <item style={props.style} offset={props.offset} span={props.span ?? 1}>
      <node>
        <Button border_width={0} {...props} />
        <node
          draw={(self: GlyApp["data"]) => {
            const btnWidth = getWidth ? getWidth() : self.width;
            const btnHeight = getHeight ? getHeight() : self.height;
            const radius = getBorderRadius();

            const xPos =
              props.x !== undefined ? getX() : (self.width - btnWidth) / 2;
            const yPos =
              props.y !== undefined ? getY() : (self.height - btnHeight) / 2;

            const cycle = 3000;
            const progress = (std.milis % cycle) / cycle;
            const wave = 1 - std.math.abs(1 - 2 * progress);

            const scaledBtnWidth = btnWidth * 1.5;
            const travel = btnWidth + scaledBtnWidth;
            const shimmerX = xPos - scaledBtnWidth + travel * wave;

            const shimmerStart = shimmerX;
            const shimmerEnd = shimmerX + scaledBtnWidth;
            const clipStart = xPos;
            const clipEnd = xPos + btnWidth;
            const drawStart = Math.max(shimmerStart, clipStart);
            const drawEnd = Math.min(shimmerEnd, clipEnd);
            const drawWidth = drawEnd - drawStart;

            if (drawWidth > 0) {
              std.draw.color(getSecondaryColor());
              std.draw.rect2(0, drawStart, yPos, drawWidth, btnHeight, radius);
            }
          }}
        />
      </node>
    </item>
  );
}
