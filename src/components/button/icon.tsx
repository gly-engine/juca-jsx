import type { GlyStd } from "@gamely/gly-types";
import { Button, JucaButtonProperties } from "./index";
import { Icon } from "../icon";

export type IconPosition = "center" | "left" | "right" | "top" | "bottom";

export type IconButtonProperties = JucaButtonProperties & {
  src: string;
  icon_position?: IconPosition;
  icon_color?: number | (() => number);
  spacing?: number;
};

export function IconButton(props: IconButtonProperties, std: GlyStd) {
  const icon_position = props.icon_position ?? "center";
  const src = props.src;

  return (
    <item style={props.style} offset={props.offset} span={props.span ?? 1}>
      <node>
        <Button border_width={0} {...props} />
        <Icon src={src} position={icon_position} />
      </node>
    </item>
  );
}
