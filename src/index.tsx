import { GlyStd } from "@gamely/gly-types";
import { TestPage } from "./pages/test/index";
import { changeTheme, initTheme } from "./theme/index";

export { Button, AnimatedButton, SkeletonButton, IconButton } from "./components/button"
export { Card } from "./components/card"
export { Icon } from "./components/icon"

export const meta = {
  title: "jucajsx",
  author: "juca",
  version: "0.0.1",
  description: "JSX library",
};

export const config = {
  require: "*",
};

// export const [getcolor1, getcolor2, getcolor3, setDarkMode ] = useTheme(0xffffff, )

// getBackgroundPrimary
function load(props: never, std: GlyStd) {
  initTheme(std);
  std.node.spawn(std.node.load(TestPage({}, std)));
}

function error(_: never, std: GlyStd, msg: string) {
	console.error(msg);
	return true;
}


export const callbacks = {
  load,
  error,
};
