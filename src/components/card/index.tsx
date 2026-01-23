import { GlyApp, GlyStd } from "@gamely/gly-types";
import { Button, JucaButtonProperties } from "../button";
import { AcaiTextProperties, Text } from "@gamely/acai-jsx/basics/text";
import { Icon, JucaIconProperties } from "../icon";

export type JucaCardProperties = JucaButtonProperties 
  & JucaIconProperties & {
    title?: AcaiTextProperties["content"];
    description?: AcaiTextProperties["content"];
  }
  & Pick<
  AcaiTextProperties,
  "content" | "color" | "font_size" | "font_name" | "align" | "valign"
> & {
  span?: number;
  offset?: number;
  after?: number;
  style?: string;
};

export function Card(props: JucaCardProperties, std: GlyStd) {
  const title = props.title ?? "";
  const description = props.description ?? "";

  return (
    <item
      style={props.style}
      offset={props.offset}
      span={props.span ?? 1}>
      <node>
        <Button {...props}></Button>
        <grid class="3x1">
          <Icon src={props.src}></Icon>
          <grid class="1x3" span={2}>
            <Text content={title} {...props}></Text>
            <Text span={2} content={description} {...props}></Text>
          </grid>
        </grid>
      </node>
    </item>
  )
}