import { GlyStd } from "@gamely/gly-types";
import { Button } from "../../components/button";
import { changeTheme, getTertiaryColor, getTextColor } from "../../theme/index";
import { AnimatedButton } from "../../components/button/animated";
import { SkeletonButton } from "../../components/button/skeleton";
import { IconButton } from "../../components/button/icon";
import { Card } from "../../components/card";
import { createState } from "@gamely/acai-jsx/hooks/index";

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
            style="margin"
            offset={2}
            content="teste 1"
            color={getTextColor}
            on_hover={hover}
          />
          <Button
            style="margin"
            content="teste 2"
            kind="danger"
            color={getTextColor}
          />
          <Button
            style="margin"
            content="teste 3"
            kind="danger_tertiary"
            color={getTextColor}
          />
          <SkeletonButton style="margin" color={getTextColor} />
          <AnimatedButton
            style="margin"
            kind="tertiary"
            content="teste 4"
            color={getTextColor}
          />
        </grid>
        <grid class="1x2">
          <IconButton style="margin" src="assets/teste.png" />
          <IconButton style="margin" src="assets/teste.png" />
        </grid>
        <grid class="1x8">
          <Card
            icon_src="assets/teste.png"
            title_content="Video, olá"
            title_align={"left"}
            description_content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
            description_align={"left"}
          />
        </grid>
      </grid>
    </node>
  );
}
