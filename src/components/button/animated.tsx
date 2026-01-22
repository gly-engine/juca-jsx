import type { GlyStd, GlyApp } from "@gamely/gly-types";
import { Button, AcaiButtonProperties } from "./index";
import { getPrimaryColor, getDangerColor } from "../../theme";

export type AnimatedButtonProperties = AcaiButtonProperties;

export function AnimatedButton(props: AnimatedButtonProperties, std: GlyStd) {
  const border_radius = props.border_radius ?? 0;
  const x_pos = props.x ?? 0;
  const y_pos = props.y ?? 0;
  const btn_width = props.width;
  const btn_height = props.height;
  const kind = props.kind ?? "default";
  
  let bg_color = props.background_color ?? getPrimaryColor;
  let fill = 0;
  
  if (kind === "danger" || kind === "danger_tertiary") {
    bg_color = getDangerColor;
  }

  if (kind === "tertiary" || kind === "danger_tertiary") {
    fill = 1;
  }

  const getBgColor = typeof bg_color !== "function" ? () => bg_color : bg_color;
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
    <item
      style={props.style}
      offset={props.offset}
      span={props.span ?? 1}
    >
      <node
        load={() => <Button border_width={0} {...props} />}
        draw={(self: GlyApp["data"]) => {
          const btnWidth = getWidth ? getWidth() : self.width;
          const btnHeight = getHeight ? getHeight() : self.height;
          const radius = getBorderRadius();

          const xPos =
            props.x !== undefined ? getX() : (self.width - btnWidth) / 2;
          const yPos =
            props.y !== undefined ? getY() : (self.height - btnHeight) / 2;

          const cycle = 1750;
          const progress = (std.milis % cycle) / cycle;
          const pulseOffset = std.math.sin(progress * Math.PI * 2) * 2;
          const offset = std.math.abs(pulseOffset);

          const animatedWidth = btnWidth + offset * 2;
          const animatedHeight = btnHeight + offset * 2;
          const animatedX = xPos - offset;
          const animatedY = yPos - offset;

          std.draw.color(getBgColor());
          std.draw.rect2(
            fill,
            animatedX,
            animatedY,
            animatedWidth,
            animatedHeight,
            radius,
          );
        }}
      />
    </item>
  );
}
