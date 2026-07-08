import { Rect, Text, createState } from "node_modules/@gamely/acai-jsx/src";
import { GlyApp, GlyStd } from "@gamely/gly-types";
import { Button, JucaButtonProperties } from "../button";

const LOWERKEYBOARD = [
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "Apagar"],
    ["j", "k", "l", "m", "n", "o", "p", "q", "r", '"', "&123"],
    ["s", "t", "u", "v", "w", "x", "y", "z", "-", "'", "CAPS"],
];

const UPPERKEYBOARD = [
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "Apagar"],
    ["J", "K", "L", "M", "N", "O", "P", "Q", "R", '"', "&123"],
    ["S", "T", "U", "V", "W", "X", "Y", "Z", "-", "'", "CAPS"],
];

const SYMBOLKEYBOARD = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "Apagar"],
    ["(", ")", "*", "-", "+", "=", "#", "$", "0", "%", "ABC"],
    ["\"", ":", ";", "!", "?", "-", "'", "=", "/", "@", ""],
];

export const [textKeyboard, setText] = createState("");
const [keyboard, setKeyboard] = createState(LOWERKEYBOARD);

export type KeyboardProps = {
    onEnter?: JucaButtonProperties["click"];
    showSecret?: boolean | (() => boolean);
} & {
    span?: number;
    offset?: number;
    after?: number;
    style?: string;
};

export function LargeKeyboard(props: KeyboardProps, std: GlyStd) {
    let font_size = 32;
    const showSecret = props.showSecret ?? true;

    const getSecret = typeof showSecret === "function" ? showSecret : () => showSecret;
    const displayText = () => getSecret() ? textKeyboard() : "*".repeat(textKeyboard().length);

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
                <grid class="1x10">
                    <item style="keyboard-field" span={2}>
                        <node>
                            <Rect backgroundColor={std.color.black} borderColor={std.color.white} />
                            <Text content={displayText} align={"center"} font_size={font_size} color={std.color.white} />
                        </node>
                    </item>
                    <grid class="11x1" span={2} style="keyboard-row">
                        <Button click={() => { setText((text) => text + keyboard()[0][0]); }} style="key" content={() => keyboard()[0][0]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[0][1]); }} style="key" content={() => keyboard()[0][1]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[0][2]); }} style="key" content={() => keyboard()[0][2]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[0][3]); }} style="key" content={() => keyboard()[0][3]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[0][4]); }} style="key" content={() => keyboard()[0][4]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[0][5]); }} style="key" content={() => keyboard()[0][5]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[0][6]); }} style="key" content={() => keyboard()[0][6]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[0][7]); }} style="key" content={() => keyboard()[0][7]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[0][8]); }} style="key" content={() => keyboard()[0][8]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text.slice(0, -1)); }} style="key" span={2} content={() => keyboard()[0][9]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                    </grid>
                    <grid class="11x1" span={2} style="keyboard-row">
                        <Button click={() => { setText((text) => text + keyboard()[1][0]); }} style="key" content={() => keyboard()[1][0]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[1][1]); }} style="key" content={() => keyboard()[1][1]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[1][2]); }} style="key" content={() => keyboard()[1][2]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[1][3]); }} style="key" content={() => keyboard()[1][3]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[1][4]); }} style="key" content={() => keyboard()[1][4]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[1][5]); }} style="key" content={() => keyboard()[1][5]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[1][6]); }} style="key" content={() => keyboard()[1][6]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[1][7]); }} style="key" content={() => keyboard()[1][7]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[1][8]); }} style="key" content={() => keyboard()[1][8]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[1][9]); }} style="key" content={() => keyboard()[1][9]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => {
                            if (keyboard() === SYMBOLKEYBOARD) {
                                setKeyboard(() => LOWERKEYBOARD);
                            } else {
                                setKeyboard(() => SYMBOLKEYBOARD);
                            }
                        }} style="key" content={() => keyboard()[1][10]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                    </grid>
                    <grid class="11x1" span={2} style="keyboard-row">
                        <Button click={() => { setText((text) => text + keyboard()[2][0]); }} style="key" content={() => keyboard()[2][0]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[2][1]); }} style="key" content={() => keyboard()[2][1]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[2][2]); }} style="key" content={() => keyboard()[2][2]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[2][3]); }} style="key" content={() => keyboard()[2][3]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[2][4]); }} style="key" content={() => keyboard()[2][4]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[2][5]); }} style="key" content={() => keyboard()[2][5]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[2][6]); }} style="key" content={() => keyboard()[2][6]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[2][7]); }} style="key" content={() => keyboard()[2][7]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[2][8]); }} style="key" content={() => keyboard()[2][8]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => { setText((text) => text + keyboard()[2][9]); }} style="key" content={() => keyboard()[2][9]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                        <Button click={() => {
                            if (keyboard() === LOWERKEYBOARD) {
                                setKeyboard(() => UPPERKEYBOARD);
                            } else if (keyboard() === UPPERKEYBOARD) {
                                setKeyboard(() => LOWERKEYBOARD);
                            }
                        }} style="key" content={() => keyboard()[2][10]} align={"center"} font_size={font_size} color={std.color.white} background_color={0x2a2a2aff} border_radius={8} />
                    </grid>
                    <grid class="3x1" style="keyboard-row" span={2}>
                        <Button click={() => { setText((text) => text + " "); }} style="key" content="SPACE" align={"center"} font_size={font_size} color={std.color.white} background_color={0x3d3d3dff} border_radius={8} />
                        <Button click={() => { setText(""); }} style="key" content="CLEAR" align={"center"} font_size={font_size} color={std.color.white} background_color={0x3d3d3dff} border_radius={8} />
                        <Button click={props.onEnter ?? (() => {})} style="key" content="ENTER" align={"center"} font_size={font_size} color={std.color.white} background_color={0x3d3d3dff} border_radius={8} />
                    </grid>
                </grid>
            </node>
        </item>
    );
}