import type { GlyStd, GlyApp } from "@gamely/gly-types";
import { Button, AcaiButtonProperties } from "./index";

export type IconPosition = "center" | "left" | "right" | "top" | "bottom";

export type IconButtonProperties = AcaiButtonProperties & {
  src: string;
  icon_position?: IconPosition;
  icon_color?: number | (() => number);
  spacing?: number;
};

export function IconButton(props: IconButtonProperties, std: GlyStd) {
  const icon_position = props.icon_position ?? "center";
  const spacing = props.spacing ?? 8;
  const x_pos = props.x ?? 0;
  const y_pos = props.y ?? 0;
  const src = props.src;

  const getX = typeof x_pos !== "function" ? () => x_pos : x_pos;
  const getY = typeof y_pos !== "function" ? () => y_pos : y_pos;
  const getSrc = typeof src !== "function" ? () => src : src;

  return (
    <item
      style={props.style}
      offset={props.offset}
      span={props.span ?? 1}
    >
      <node
        load={() => <Button border_width={0} {...props} />}
        post_draw={(self: GlyApp["data"]) => {

          const btnWidth = self.width;
          const btnHeight = self.height;

          // const imgWidth = std.image.mensure_width(getSrc());
          // const imgHeight = std.image.mensure_height(getSrc());

          const imgWidth = 80
          const imgHeight = 80


          const btnX = getX();
          const btnY = getY();
          const centerX = btnX + btnWidth / 2;
          const centerY = btnY + btnHeight / 2;

          let iconX = centerX - imgWidth / 2;
          let iconY = centerY - imgHeight / 2;

          if (icon_position === "left") {
            iconX = btnX + spacing;
            iconY = centerY - imgHeight / 2;
          } else if (icon_position === "right") {
            iconX = btnX + btnWidth - imgWidth - spacing;
            iconY = centerY - imgHeight / 2;
          } else if (icon_position === "top") {
            iconX = centerX - imgWidth / 2;
            iconY = btnY + spacing;
          } else if (icon_position === "bottom") {
            iconX = centerX - imgWidth / 2;
            iconY = btnY + btnHeight - imgHeight - spacing;
          }
          std.image.draw(getSrc(), iconX, iconY);
        }}
      />
    </item>
  );
}
