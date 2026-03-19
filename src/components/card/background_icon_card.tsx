import { GlyStd } from "@gamely/gly-types";
import { Text } from "@gamely/acai-jsx/basics/text";
import { IconButton } from "../button/icon";

type TextProperties = Parameters<typeof Text>[0];
type IconButtonProperties = Parameters<typeof IconButton>[0];

export type BackgroundIconCardProperties = {
  id: string;
  src: IconButtonProperties["src"];
  backgroundColor?: IconButtonProperties["background_color"];
  borderRadius?: IconButtonProperties["border_radius"];
  title: TextProperties["content"];
  tagline: TextProperties["content"];
  span?: number;
  offset?: number;
  after?: number;
  style?: string;
  text_style?: string;
  title_color?: TextProperties["color"];
  title_font_size?: TextProperties["font_size"];
  tagline_color?: TextProperties["color"];
  tagline_font_size?: TextProperties["font_size"];
};

export function BackgroundIconCard(props: BackgroundIconCardProperties, std: GlyStd): JSX.Element {
  const backgroundColor = props.backgroundColor ?? std.color.darkgray;

  const getBackgroundColor = () => {
    if (typeof backgroundColor === "function") {
      return backgroundColor();
    }
    return backgroundColor;
  };

  return (
    <item span={props.span} offset={props.offset} after={props.after} style={props.style} id={props.id}>
      <node>
        <IconButton background_color={getBackgroundColor()} border_radius={props.borderRadius} src={props.src} />
        <grid class="1x6" style={props.text_style}>
          <Text
            offset={4}
            content={props.title}
            align="left"
            valign="bottom"
            color={props.title_color ?? std.color.white}
            font_size={props.title_font_size ?? 18}
          />
          <Text
            content={props.tagline}
            align="left"
            color={props.tagline_color ?? std.color.lightgray}
            font_size={props.tagline_font_size ?? 14}
          />
        </grid>
      </node>
    </item>
  );
}
