import { GlyStd } from "@gamely/gly-types";
import { Button } from "../../components/button";
import {
  changeTheme,
  getTertiaryColor,
  getTextColor,
} from "../../theme/index";
import { AnimatedButton } from "../../components/button/animated";
import { SkeletonButton } from "../../components/button/skeleton";
import { IconButton } from "../../components/button/icon";
import { Card } from "../../components/card";
import { createState, Text, TextBlock } from "@gamely/acai-jsx/index";
import { Icon } from "../../components/icon";

const [hover, setHover] = createState(false);

export function TestPage(props: any, std: GlyStd): JSX.Element {
  <style class="margin" top={10} bottom={10} left={30} right={30} />;

  return (
    <node>
      <node 
        key={() => {
          if (std.key.press.a) {
            changeTheme("dark");
          }
          setHover(true);
        }}
        draw={() => {
          std.draw.clear(getTertiaryColor());
        }}
      />
      <grid class="3x1">
        <grid class="1x8">
            <Button
              offset={2}
              content="teste 1"
              color={getTextColor}
              on_hover={hover}
            />
            <Button
              content="teste 2"
              kind="danger"
              color={getTextColor}
            />
            <Button
              content="teste 3"
              kind="danger_tertiary"
              color={getTextColor}
            />
            <SkeletonButton
              color={getTextColor}
            />
            <AnimatedButton
              kind="tertiary"
              content="teste 4"
              color={getTextColor}
            />
        </grid>
        <grid class="1x2">
          <IconButton
            src="assets/teste.png"
          />
          <IconButton
            src="assets/teste.png"
          />
        </grid>
        <grid class="1x8">
          <Card>
            <Button border_radius={10}/>
            <Icon src="assets/teste.png"></Icon>
            <Text content="Card Title" color={getTextColor} align={"left"}></Text>
            <TextBlock span={2} align={"justify"} content="This is a card component, lorem ipsum dolor sit amet. This is a card component, lorem ipsum dolor sit amet."></TextBlock>
          </Card>
        </grid>
      </grid>
    </node>
  );
}
