import { GlyStd } from "@gamely/gly-types";
import { Button } from "../button";
import { Icon } from "../icon";
import { Text, TextBlock } from "@gamely/acai-jsx/basics/text";

export type JucaCardProperties = {
  span?: number;
  offset?: number;
  after?: number;
  style?: string;

  icon_src: string | (() => string);

  title_content: string | (() => string);
  title_color?: number | (() => number);
  title_font_size?: number | (() => number);
  title_align?:
    | "left"
    | "center"
    | "right"
    | (() => "left" | "center" | "right");
  title_valign?:
    | "top"
    | "middle"
    | "bottom"
    | (() => "top" | "middle" | "bottom");

  description_content: string | (() => string);
  description_color?: number | (() => number);
  description_font_size?: number | (() => number);
  description_align?:
    | "left"
    | "center"
    | "right"
    | (() => "left" | "center" | "right");
  description_valign?:
    | "top"
    | "middle"
    | "bottom"
    | (() => "top" | "middle" | "bottom");
};

export function Card(props: JucaCardProperties, std: GlyStd) {
  return (
    <item style={props.style} offset={props.offset} span={props.span ?? 1}>
      <node>
        <Button />
        <grid class="3x1">
          <Icon src={props.icon_src} />
          <grid class="1x4" span={2}>
            <Text
              content={props.title_content}
              color={props.title_color}
              font_size={props.title_font_size}
              align={props.title_align}
              valign={props.title_valign}
            />
            <TextBlock
              content={props.description_content}
              color={props.description_color}
              font_size={props.description_font_size}
              align={props.description_align}
              valign={props.description_valign}
              span={3}
            />
          </grid>
        </grid>
      </node>
    </item>
  );
}
