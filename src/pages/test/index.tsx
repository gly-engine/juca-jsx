import { GlyStd } from "@gamely/gly-types";
import { Button } from "../../components/button";
import { changeTheme, getTertiaryColor, getTextColor } from "../../theme/index";
import { AnimatedButton } from "../../components/button/animated";
import { SkeletonButton } from "../../components/button/skeleton";
import { IconButton } from "../../components/button/icon";
import { Card } from "../../components/card/index";
import { createState } from "@gamely/acai-jsx/hooks/index";
import { Keyboard } from "src/components/keyboard/keyboard";
import { LargeKeyboard } from "src/components/keyboard/LargeKeyboard";

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
          if (std.key.press.left) {
            std.ui.focus('left')
          }
          if (std.key.press.right) {
            std.ui.focus('right')
          }
          if (std.key.press.up) {
            std.ui.focus('up')
          }
          if (std.key.press.down) {
            std.ui.focus('down')
          }
          setHover(true);
        }}
        draw={() => {
          std.draw.clear(getTertiaryColor());
        }}
      />
      <grid class="4x1">
        <grid class="1x8">
          <Button
            style="margin"
            offset={2}
            content="teste 1"
            border_radius={6}
            color={getTextColor}
            on_hover={hover}
            click={() => {}}
          />
          <Button
            style="margin"
            content="teste 2"
            kind="danger"
            border_radius={6}
            color={getTextColor}
            click={() => {}}
          />
          <Button
            style="margin"
            content="teste 3"
            kind="danger_tertiary"
            border_radius={6}
            color={getTextColor}
            click={() => {}}
          />
          <SkeletonButton
            style="margin"
            color={getTextColor}
            border_radius={6}
            click={() => {}}
          />
          <AnimatedButton
            style="margin"
            kind="tertiary"
            content="teste 4"
            border_radius={6}
            color={getTextColor}
            click={() => {}}
          />
        </grid>
        <grid class="1x2">
          <IconButton style="margin" src="assets/teste.png" />
          <IconButton style="margin" src="assets/teste.png" />
        </grid>
        <grid class="1x8" style="margin" span={2}>
          <Card
            text_style="margin"
            image_src="assets/teste.png"
            image_position="left"
            backgroundColor={std.color.black}
            title_content="Video, olá"
            title_align={"left"}
            description_content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
            description_align={"justify"}
          />
          <LargeKeyboard span={4} />
          <Button
            style="margin"
            content="teste 5"
            kind="ghost"
            border_radius={6}
            color={getTextColor}
            click={() => {}}
          />
        </grid>
      </grid>
    </node>
  );
}
