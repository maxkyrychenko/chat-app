import {GET} from "@src/app/api/hello/route";
import {expect, test} from "vitest";
import {requestHandler} from "@tests/utils";

test("should respond with 'Hello world!' message", async () => {
	const {res, body} = await requestHandler(GET);

	expect(res.status).toBe(200);
	expect(body).toBe("Hello world!");
});
