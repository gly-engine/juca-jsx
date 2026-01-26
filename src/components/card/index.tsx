import { GlyStd } from "@gamely/gly-types";

export type JucaCardProperties = {
  span?: number;
  offset?: number;
  after?: number;
  style?: string;
  children: [JSX.Element, JSX.Element, JSX.Element, JSX.Element];
};

export function Card(props: JucaCardProperties, std: GlyStd) {
  const [button, icon, title, description] = props.children;

  return (
    <item
      style={props.style}
      offset={props.offset}
      span={props.span ?? 1}>
      <node>
        {button}
        <grid class="3x1">
          {icon}
          <grid class="1x3" span={2}>
            {title}
            {description}
          </grid>
        </grid>
      </node>
    </item>
  )
}