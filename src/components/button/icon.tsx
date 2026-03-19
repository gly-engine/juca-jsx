import type { GlyStd } from "@gamely/gly-types";
import { Button, JucaButtonProperties } from "./index";
import { Image } from "../image";

export type IconPosition = "center" | "left" | "right" | "top" | "bottom";

export type IconButtonProperties = JucaButtonProperties & {
  src: string;
  icon_position?: IconPosition;
  icon_color?: number | (() => number);
  spacing?: number;
};

export function IconButton(props: IconButtonProperties, std: GlyStd) {
  const { style, offset, span, after, ...buttonProps } = props;
  
  const icon_position = props.icon_position ?? "center";
  const src = props.src;

  return (
    <item style={style} offset={offset} span={span ?? 1} after={after}>
      <node>
        <Button {...buttonProps} />
        <Image src={src} position={icon_position} />
      </node>
    </item>
  );
}
