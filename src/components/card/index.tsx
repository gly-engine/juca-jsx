import { GlyStd } from "@gamely/gly-types";
import { Image } from "../image";
import { Text, TextBlock } from "@gamely/acai-jsx/basics/text";
import { Rect } from "@gamely/acai-jsx/basics/index";

type TextProperties = Parameters<typeof Text>[0];
type TextBlockProperties = Parameters<typeof TextBlock>[0];
type RectProperties = Parameters<typeof Rect>[0];
type ImageProperties = Parameters<typeof Image>[0];

export type JucaCardProperties = {
  span?: number;
  offset?: number;
  after?: number;
  style?: string;

  image_src: ImageProperties["src"];
  image_position?: ImageProperties["position"];

  title_content: TextProperties["content"];
} & Pick<TextProperties, "color" | "font_size" | "align" | "valign"> & {
    title_color?: TextProperties["color"];
    title_font_size?: TextProperties["font_size"];
    title_align?: TextProperties["align"];
    title_valign?: TextProperties["valign"];
  } & {
    description_content: TextBlockProperties["content"];
  } & Pick<TextBlockProperties, "color" | "font_size" | "align" | "valign"> & {
    description_color?: TextBlockProperties["color"];
    description_font_size?: TextBlockProperties["font_size"];
    description_align?: TextBlockProperties["align"];
    description_valign?: TextBlockProperties["valign"];
  } & {
    backgroundColor: RectProperties["backgroundColor"];
    radius?: RectProperties["radius"];
  };

export function Card(props: JucaCardProperties, std: GlyStd) {
  const backgroundColor = props.backgroundColor ?? std.color.white;
  const description_content = props.description_content ?? "";
  const title_content = props.title_content ?? "";

  const getBackgroundColor = () => {
    if (typeof backgroundColor === "function") {
      return backgroundColor();
    }
    return backgroundColor;
  };

  return (
    <node>
      <Rect
        backgroundColor={getBackgroundColor()}
        radius={props.radius}
      />
        <grid class="3x1" style={props.style} offset={props.offset} span={props.span ?? 1}>
          <Image src={props.image_src} position={props.image_position} />
          <grid class="1x4" span={2}>
            <Text
              content={title_content}
              color={props.title_color}
              font_size={props.title_font_size}
              align={props.title_align}
              valign={props.title_valign}
            />
            <TextBlock
              content={description_content}
              color={props.description_color}
              font_size={props.description_font_size}
              align={props.description_align}
              valign={props.description_valign}
              span={3}
            />
          </grid>
        </grid>
      </node>
  );
}
