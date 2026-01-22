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

export function TestPage(props: any, std: GlyStd): JSX.Element {
  <style class="margin" top={10} bottom={10} left={30} right={30} />;

  return ( 
    <node
      load={() => (
        <grid class="3x1">
          <grid class="1x8">
              <Button
                style="margin"
                offset={2}
                content="teste 1"
                color={getTextColor}
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
              <SkeletonButton
                style="margin"
                color={getTextColor}
              />
              <AnimatedButton
                style="margin"
                kind="tertiary"
                content="teste 4"
                color={getTextColor}
              />
          </grid>
          <grid class="1x2">
            <IconButton
              style="margin"
              src="assets/teste.png"
            />
            <IconButton
              style="margin"
              src="assets/teste.png"
            />
          </grid>
        </grid> 
      )
    }
    key={() => (
        changeTheme("dark")
      )
    }
    draw={() => (
        std.draw.clear(getTertiaryColor())
      )
    }
    />
  );
}
