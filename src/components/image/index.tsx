import type { GlyStd, GlyApp } from "@gamely/gly-types";

export type ImagePosition = "center" | "left" | "right" | "top" | "bottom";

export type JucaImageProperties = {
  src: string | (() => string);
  x?: number | (() => number);
  y?: number | (() => number);
  position?: ImagePosition;
} & {
  span?: number;
  offset?: number;
  after?: number;
  style?: string;
};

export function Image(props: JucaImageProperties, std: GlyStd) {
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
        draw={function (this: void, self: GlyApp["data"]) {
          const srcPath = getSrc();

          const imgWidth = std.image.mensure_width(getSrc());
          const imgHeight = std.image.mensure_height(getSrc());

          let ImageX = getX();
          let ImageY = getY();

          if (position === "center") {
            ImageX = (self.width - imgWidth) / 2;
            ImageY = (self.height - imgHeight) / 2;
          } else if (position === "left") {
            ImageX = 0;
            ImageY = (self.height - imgHeight) / 2;
          } else if (position === "right") {
            ImageX = self.width - imgWidth;
            ImageY = (self.height - imgHeight) / 2;
          } else if (position === "top") {
            ImageX = (self.width - imgWidth) / 2;
            ImageY = 0;
          } else if (position === "bottom") {
            ImageX = (self.width - imgWidth) / 2;
            ImageY = self.height - imgHeight;
          }

          std.image.draw(srcPath, ImageX, ImageY);
        }}
      />
    </item>
  );
}
