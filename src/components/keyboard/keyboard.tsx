import { Rect } from "@gamely/acai-jsx/basics/index";
import { GlyApp, GlyStd } from "@gamely/gly-types";
import { Text } from "@gamely/acai-jsx/basics/text";
import { createState } from "@gamely/acai-jsx/hooks";
import { Button, JucaButtonProperties } from "../button";

const UPPERKEYBOARD = [
    ["A", "B", "C", "D", "E", "F", "G", "Apagar"],
    ["H", "I", "J", "K", "L", "M", "N", "&123"],
    ["O", "P", "Q", "R", "S", "T", "U", "CAPS"],
    ["V", "W", "X", "Y", "Z", "-", "'", ""],
];

const LOWERKEYBOARD = [
    ["a", "b", "c", "d", "e", "f", "g", "Apagar"],
    ["h", "i", "j", "k", "l", "m", "n", "&123"],
    ["o", "p", "q", "r", "s", "t", "u", "CAPS"],
    ["v", "w", "x", "y", "z", "-", "'", ""],
];

const SYMBOLKEYBOARD = [
    ["1", "4", "7", "(", ")", "_", "@", "Apagar"],
    ["2", "5", "8", "0", "#", "$", "%", "ABC"],
    ["3", "6", "9", "+", "=", "/", "\\", ""],
    ["\"", ":", ";", "!", "?", "-", "'", ""],
];

const [text, setText] = createState("");
const [keyboard, setKeyboard] = createState(LOWERKEYBOARD);

export type KeyboardProps = {
    onEnter?: JucaButtonProperties["click"];
    showSecret?: boolean;
} & {
    span?: number;
    offset?: number;
    after?: number;
    style?: string;
};

export function Keyboard(props: KeyboardProps, std: GlyStd) {
    let font_size = 32;
    const showSecret = props.showSecret ?? true;

    const displayText = () => showSecret ? text() : "*".repeat(text().length);

    <style class="keyboard-row" left={30} right={30} top={8} bottom={8} />;
    <style class="keyboard-field" left={30} right={30} top={10} bottom={10} />;
    <style class="key" left={8} right={8} />;

    return (
        <item style={props.style} span={props.span} offset={props.offset} after={props.after}>
            <node>
                <node
                    load={function (this: void, self: GlyApp["data"]) {
                        font_size = self.width / 60;
                    }}
                />
                <Rect backgroundColor={std.color.black} />
                <grid class="1x11">
                    <item style="keyboard-field">
                        <node>
                            <Rect backgroundColor={std.color.black} borderColor={std.color.white} />
                            <Text content={displayText} align={"center"} font_size={font_size} color={std.color.white} />
                        </node>
                    </item>
                    <grid class="8x1" span={2} style="keyboard-row">
                        <Button click={() => { setText((text) => text + keyboard()[0][0]); }} style="key" content={() => keyboard()[0][0]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[0][1]); }} style="key" content={() => keyboard()[0][1]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[0][2]); }} style="key" content={() => keyboard()[0][2]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[0][3]); }} style="key" content={() => keyboard()[0][3]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[0][4]); }} style="key" content={() => keyboard()[0][4]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[0][5]); }} style="key" content={() => keyboard()[0][5]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[0][6]); }} style="key" content={() => keyboard()[0][6]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text.slice(0, -1)); }} style="key" content={() => keyboard()[0][7]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                    </grid>
                    <grid class="8x1" span={2} style="keyboard-row">
                        <Button click={() => { setText((text) => text + keyboard()[1][0]); }} style="key" content={() => keyboard()[1][0]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[1][1]); }} style="key" content={() => keyboard()[1][1]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[1][2]); }} style="key" content={() => keyboard()[1][2]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[1][3]); }} style="key" content={() => keyboard()[1][3]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[1][4]); }} style="key" content={() => keyboard()[1][4]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[1][5]); }} style="key" content={() => keyboard()[1][5]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[1][6]); }} style="key" content={() => keyboard()[1][6]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => {
                            if (keyboard() === SYMBOLKEYBOARD) {
                                setKeyboard(() => LOWERKEYBOARD);
                            } else {
                                setKeyboard(() => SYMBOLKEYBOARD);
                            }
                        }} style="key" content={() => keyboard()[1][7]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                    </grid>
                    <grid class="8x1" span={2} style="keyboard-row">
                        <Button click={() => { setText((text) => text + keyboard()[2][0]); }} style="key" content={() => keyboard()[2][0]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[2][1]); }} style="key" content={() => keyboard()[2][1]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[2][2]); }} style="key" content={() => keyboard()[2][2]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[2][3]); }} style="key" content={() => keyboard()[2][3]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[2][4]); }} style="key" content={() => keyboard()[2][4]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[2][5]); }} style="key" content={() => keyboard()[2][5]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[2][6]); }} style="key" content={() => keyboard()[2][6]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => {
                            if (keyboard() === LOWERKEYBOARD) {
                                setKeyboard(() => UPPERKEYBOARD);
                            } else if (keyboard() === UPPERKEYBOARD) {
                                setKeyboard(() => LOWERKEYBOARD);
                            }
                        }} style="key" content={() => keyboard()[2][7]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                    </grid>
                    <grid class="8x1" span={2} style="keyboard-row">
                        <Button click={() => { setText((text) => text + keyboard()[3][0]); }} style="key" content={() => keyboard()[3][0]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[3][1]); }} style="key" content={() => keyboard()[3][1]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[3][2]); }} style="key" content={() => keyboard()[3][2]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[3][3]); }} style="key" content={() => keyboard()[3][3]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[3][4]); }} style="key" content={() => keyboard()[3][4]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[3][5]); }} style="key" content={() => keyboard()[3][5]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[3][6]); }} style="key" content={() => keyboard()[3][6]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                    </grid>
                    <grid class="8x1" style="keyboard-row" span={2}>
                        <grid class="3x1" span={7} >
                            <Button click={() => { setText((text) => text + " "); }} style="key" content="SPACE" align={"center"} font_size={font_size} color={std.color.white} background_color={0x3d3d3dff} border_radius={8} />
                            <Button click={() => { setText(""); }} style="key" content="CLEAR" align={"center"} font_size={font_size} color={std.color.white} background_color={0x3d3d3dff} border_radius={8} />
                            <Button click={props.onEnter ?? (() => {})} style="key" content="ENTER" align={"center"} font_size={font_size} color={std.color.white} background_color={0x3d3d3dff} border_radius={8} />
                        </grid>
                    </grid>
                </grid>
            </node>
        </item>
    );
}