import type { GlyStd, GlyApp } from "@gamely/gly-types";

export type IconPosition = "center" | "left" | "right" | "top" | "bottom";
export type IconSize = "fill" | "contain" | "cover";

export type JucaIconProperties = {
  src: string | (() => string);
  x?: number | (() => number);
  y?: number | (() => number);
  position?: IconPosition;
  size?: IconSize;
} & {
  span?: number;
  offset?: number;
  after?: number;
  style?: string;
};

export function Icon(props: JucaIconProperties, std: GlyStd) {
  const src = props.src;
  const x_pos = props.x ?? 0;
  const y_pos = props.y ?? 0;
  const position = props.position ?? "center";

  const getSrc = typeof src !== "function" ? () => src : src;
  const getX = typeof x_pos !== "function" ? () => x_pos : x_pos;
  const getY = typeof y_pos !== "function" ? () => y_pos : y_pos;

  return (
    <item style={props.style} offset={props.offset} span={props.span ?? 1}>
      <node
        draw={(self: GlyApp["data"]) => {
          const srcPath = getSrc();

          const imgWidth = std.image.mensure_width(getSrc());
          const imgHeight = std.image.mensure_height(getSrc());

          let iconX = getX();
          let iconY = getY();

          if (position === "center") {
            iconX = (self.width - imgWidth) / 2;
            iconY = (self.height - imgHeight) / 2;
          } else if (position === "left") {
            iconX = 0;
            iconY = (self.height - imgHeight) / 2;
          } else if (position === "right") {
            iconX = self.width - imgWidth;
            iconY = (self.height - imgHeight) / 2;
          } else if (position === "top") {
            iconX = (self.width - imgWidth) / 2;
            iconY = 0;
          } else if (position === "bottom") {
            iconX = (self.width - imgWidth) / 2;
            iconY = self.height - imgHeight;
          }

          std.image.draw(srcPath, iconX, iconY);
        }}
      />
    </item>
  );
}
