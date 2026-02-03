import type { GlyStd, GlyApp } from "@gamely/gly-types";
import { Text, AcaiTextProperties } from "@gamely/acai-jsx/basics/text";
import { getContrastColor, getDangerColor, getPrimaryColor, getSecondaryColor } from "../../theme";

export { AnimatedButton } from "./animated";
export { SkeletonButton } from "./skeleton";
export { IconButton } from "./icon";

export type JucaButtonProperties = {
  width?: number | (() => number);
  height?: number | (() => number);
  background_color?: number | (() => number);
  border_color?: number | (() => number);
  border_width?: number | (() => number);
  border_radius?: number | (() => number);
  on_hover?: boolean | (() => boolean);
  x?: number | (() => number);
  y?: number | (() => number);
} & Pick<
  AcaiTextProperties,
  "content" | "color" | "font_size" | "font_name" | "align" | "valign"
> & {
    span?: number;
    offset?: number;
    after?: number;
    style?: string;
    kind?: "default" | "tertiary" | "danger" | "danger_tertiary";
  };

export function Button(props: JucaButtonProperties, std: GlyStd) {
  const border_width = props.border_width ?? 1;
  const border_radius = props.border_radius ?? 0;
  const x_pos = props.x ?? 0;
  const y_pos = props.y ?? 0;
  const btn_width = props.width;
  const btn_height = props.height;
  const content = props.content ?? "";
  const kind = props.kind ?? "default";
  const on_hover = props.on_hover ?? false;

  let bg_color = props.background_color ?? getPrimaryColor;
  let border_color = props.border_color ?? getContrastColor;
  let fill = 0;

  if (kind === "danger" || kind === "danger_tertiary") {
    bg_color = getDangerColor;
    border_color = getDangerColor;
    props.color = std.color.white;
  }

  if (kind === "tertiary" || kind === "danger_tertiary") {
    fill = 1;
  }

  const getBorderWidth =
    typeof border_width !== "function" ? () => border_width : border_width;
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
  const getOnHover = typeof on_hover !== "function" ? () => on_hover : on_hover;

  const baseBgColor: () => number =
    typeof bg_color === "function" ? bg_color : () => bg_color;

  const baseBorderColor: () => number =
    typeof border_color === "function" ? border_color : () => border_color;

  const getBgColor = () =>
    getOnHover() ? getSecondaryColor() : baseBgColor();

  const getBorderColor = () =>
    getOnHover() ? getPrimaryColor() : baseBorderColor();

  return (
    <item
      style={props.style}
      offset={props.offset}
      span={props.span ?? 1}>
      <node>
        <node 
          draw={(self: GlyApp["data"]) => {
            const btnWidth = getWidth ? getWidth() : self.width;
            const btnHeight = getHeight ? getHeight() : self.height;
            const radius = getBorderRadius();
            
            const xPos =
              props.x !== undefined ? getX() : (self.width - btnWidth) / 2;
            const yPos =
            props.y !== undefined ? getY() : (self.height - btnHeight) / 2;
            
            std.draw.color(getBgColor());
            std.draw.rect2(fill, xPos, yPos, btnWidth, btnHeight, radius);

            const borderColor = getBorderColor();
            std.draw.color(borderColor);
            const bw = getBorderWidth();
            for (let i = 0; i < bw; i++) {
              std.draw.rect2(
                1,
                xPos + i,
                yPos + i,
                btnWidth - i * 2,
                btnHeight - i * 2,
                radius,
              );
            }
          }
        }
        />
        <Text
          content={content}
          color={props.color}
          font_size={props.font_size}
          font_name={props.font_name}
          align={props.align}
          valign={props.valign}
        />
      </node>
    </item>
  );
}
