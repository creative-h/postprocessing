import test from "ava";
import { ClearPass } from "../../build/postprocessing.esm.js";

test("can be created and destroyed", t => {

	const object = new ClearPass();
	object.dispose();

	t.truthy(object);

});
