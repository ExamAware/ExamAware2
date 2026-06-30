import { i as __toESM, t as __commonJSMin } from "./chunk.js";
import { i as rawTransferSupported$1, r as parseRawSync, t as getBufferOffset } from "./bindings.js";
import { A as ObjectHasOwn, C as ObjectAssign, D as ObjectEntries, E as ObjectDefineProperty, M as ObjectSetPrototypeOf, N as ObjectValues, O as ObjectFreeze, S as JSONStringify, T as ObjectDefineProperties, _ as BUFFER_ALIGN, b as ArrayFrom, d as setOptions, f as PLACEHOLDER_REGEX, g as getNodeByRangeIndex, h as getLineColumnFromOffset, i as resetStateAfterError, j as ObjectKeys, k as ObjectGetPrototypeOf, l as DEFAULT_OPTIONS_ID, m as replacePlaceholders, o as registerPlugin, p as diagnostics, r as lintFileImpl, s as registeredRules, t as buffers, u as allOptions, v as BUFFER_SIZE, w as ObjectCreate, x as ArrayIsArray, y as DATA_POINTER_POS_32 } from "./lint.js";
import assert, { AssertionError } from "node:assert";
import util from "node:util";
const EMPTY_VISITOR = {};
function definePlugin(plugin) {
	if (typeof plugin != "object" || !plugin) throw Error("Plugin must be an object");
	let { rules } = plugin;
	if (typeof rules != "object" || !rules) throw Error("Plugin must have an object as `rules` property");
	for (let ruleName in rules) ObjectHasOwn(rules, ruleName) && (rules[ruleName] = defineRule(rules[ruleName]));
	return plugin;
}
function defineRule(rule) {
	if (typeof rule != "object" || !rule) throw Error("Rule must be an object");
	if ("create" in rule) return rule;
	let context = null, visitor, beforeHook;
	return rule.create = (eslintContext) => (context === null && ({context, visitor, beforeHook} = createContextAndVisitor(rule)), ObjectDefineProperties(context, {
		id: { value: eslintContext.id },
		options: { value: eslintContext.options },
		report: { value: eslintContext.report }
	}), ObjectSetPrototypeOf(context, ObjectGetPrototypeOf(eslintContext)), beforeHook !== null && beforeHook() === !1 ? EMPTY_VISITOR : visitor), rule;
}
let cwd = null;
const FILE_CONTEXT = ObjectFreeze({
	get filename() {
		throw Error("Cannot access `context.filename` in `createOnce`");
	},
	getFilename() {
		throw Error("Cannot call `context.getFilename` in `createOnce`");
	},
	get physicalFilename() {
		throw Error("Cannot access `context.physicalFilename` in `createOnce`");
	},
	getPhysicalFilename() {
		throw Error("Cannot call `context.getPhysicalFilename` in `createOnce`");
	},
	get cwd() {
		return cwd === null && (cwd = process.cwd()), cwd;
	},
	getCwd() {
		return cwd === null && (cwd = process.cwd()), cwd;
	},
	get sourceCode() {
		throw Error("Cannot access `context.sourceCode` in `createOnce`");
	},
	getSourceCode() {
		throw Error("Cannot call `context.getSourceCode` in `createOnce`");
	},
	get languageOptions() {
		throw Error("Cannot access `context.languageOptions` in `createOnce`");
	},
	get settings() {
		throw Error("Cannot access `context.settings` in `createOnce`");
	},
	extend(extension) {
		return ObjectFreeze(ObjectAssign(ObjectCreate(this), extension));
	},
	get parserOptions() {
		throw Error("Cannot access `context.parserOptions` in `createOnce`");
	},
	get parserPath() {
		throw Error("Cannot access `context.parserPath` in `createOnce`");
	}
});
function createContextAndVisitor(rule) {
	let { createOnce } = rule;
	if (createOnce == null) throw Error("Rules must define either a `create` or `createOnce` method");
	if (typeof createOnce != "function") throw Error("Rule `createOnce` property must be a function");
	let context = ObjectCreate(FILE_CONTEXT, {
		id: {
			value: "",
			enumerable: !0,
			configurable: !0
		},
		options: {
			value: null,
			enumerable: !0,
			configurable: !0
		},
		report: {
			value: null,
			enumerable: !0,
			configurable: !0
		}
	}), { before: beforeHook, after: afterHook, ...visitor } = createOnce.call(rule, context);
	if (beforeHook === void 0) beforeHook = null;
	else if (beforeHook !== null && typeof beforeHook != "function") throw Error("`before` property of visitor must be a function if defined");
	if (afterHook != null) {
		if (typeof afterHook != "function") throw Error("`after` property of visitor must be a function if defined");
		let programExit = visitor["Program:exit"];
		visitor["Program:exit"] = programExit == null ? (_node) => afterHook() : (node) => {
			programExit(node), afterHook();
		};
	}
	return {
		context,
		visitor,
		beforeHook
	};
}
var import_json_stable_stringify_without_jsonify = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function(obj, opts) {
		opts ||= {}, typeof opts == "function" && (opts = { cmp: opts });
		var space = opts.space || "";
		typeof space == "number" && (space = Array(space + 1).join(" "));
		var cycles = typeof opts.cycles == "boolean" ? opts.cycles : !1, replacer = opts.replacer || function(key, value) {
			return value;
		}, cmp = opts.cmp && (function(f) {
			return function(node) {
				return function(a, b) {
					return f({
						key: a,
						value: node[a]
					}, {
						key: b,
						value: node[b]
					});
				};
			};
		})(opts.cmp), seen = [];
		return (function stringify(parent, key, node, level) {
			var indent = space ? "\n" + Array(level + 1).join(space) : "", colonSeparator = space ? ": " : ":";
			if (node && node.toJSON && typeof node.toJSON == "function" && (node = node.toJSON()), node = replacer.call(parent, key, node), node !== void 0) {
				if (typeof node != "object" || !node) return JSON.stringify(node);
				if (isArray(node)) {
					for (var out = [], i = 0; i < node.length; i++) {
						var item = stringify(node, i, node[i], level + 1) || JSON.stringify(null);
						out.push(indent + space + item);
					}
					return "[" + out.join(",") + indent + "]";
				} else {
					if (seen.indexOf(node) !== -1) {
						if (cycles) return JSON.stringify("__cycle__");
						throw TypeError("Converting circular structure to JSON");
					} else seen.push(node);
					for (var keys = objectKeys(node).sort(cmp && cmp(node)), out = [], i = 0; i < keys.length; i++) {
						var key = keys[i], value = stringify(node, key, node[key], level + 1);
						if (value) {
							var keyValue = JSON.stringify(key) + colonSeparator + value;
							out.push(indent + space + keyValue);
						}
					}
					return seen.splice(seen.indexOf(node), 1), "{" + out.join(",") + indent + "}";
				}
			}
		})({ "": obj }, "", obj, 0);
	};
	var isArray = Array.isArray || function(x) {
		return {}.toString.call(x) === "[object Array]";
	}, objectKeys = Object.keys || function(obj) {
		var has = Object.prototype.hasOwnProperty || function() {
			return !0;
		}, keys = [];
		for (var key in obj) has.call(obj, key) && keys.push(key);
		return keys;
	};
})))(), 1);
const ARRAY_BUFFER_SIZE = BUFFER_SIZE + BUFFER_ALIGN, textEncoder = new TextEncoder();
let buffer = null, rawTransferIsSupported = null;
function parse(path, sourceText, options) {
	if (!rawTransferSupported()) throw Error("`RuleTester` is not supported on 32-bit or big-endian systems, versions of NodeJS prior to v22.0.0, versions of Deno prior to v2.0.0, or other runtimes");
	buffer === null && initBuffer();
	let sourceBuffer = new Uint8Array(buffer.buffer, buffer.byteOffset, 1073741824), { read, written: sourceByteLen } = textEncoder.encodeInto(sourceText, sourceBuffer);
	if (read !== sourceText.length) throw Error("Failed to write source text into buffer");
	if (parseRawSync(path, buffer, sourceByteLen, options), buffer.uint32[DATA_POINTER_POS_32] === 0) throw Error("Parsing failed");
}
function initBuffer() {
	let arrayBuffer = new ArrayBuffer(ARRAY_BUFFER_SIZE), offset = getBufferOffset(new Uint8Array(arrayBuffer));
	buffer = new Uint8Array(arrayBuffer, offset, BUFFER_SIZE), buffer.uint32 = new Uint32Array(arrayBuffer, offset, BUFFER_SIZE / 4), buffer.float64 = new Float64Array(arrayBuffer, offset, BUFFER_SIZE / 8), buffers.push(buffer);
}
function rawTransferSupported() {
	return rawTransferIsSupported === null && (rawTransferIsSupported = rawTransferRuntimeSupported() && rawTransferSupported$1()), rawTransferIsSupported;
}
function rawTransferRuntimeSupported() {
	let global;
	try {
		global = globalThis;
	} catch {
		return !1;
	}
	if (global.Bun || global.process?.versions?.bun) return !1;
	if (global.Deno) {
		let match$1 = Deno.version?.deno?.match(/^(\d+)\./);
		return !!match$1 && +match$1[1] >= 2;
	}
	if (global.process?.release?.name !== "node") return !1;
	let match = process.version?.match(/^v(\d+)\./);
	return !!match && +match[1] >= 22;
}
function defaultDescribe(text, method) {
	return method.call(this);
}
const globalObj = globalThis;
let describe = typeof globalObj.describe == "function" ? globalObj.describe : defaultDescribe;
function defaultIt(text, method) {
	try {
		return method.call(this);
	} catch (err) {
		throw err instanceof AssertionError && (err.message += ` (${util.inspect(err.actual)} ${err.operator} ${util.inspect(err.expected)})`), err;
	}
}
let it = typeof globalObj.it == "function" ? globalObj.it : defaultIt, itOnly = it !== defaultIt && typeof it.only == "function" ? it.only.bind(it) : null;
function getIt(only) {
	return only ? getItOnly() : it;
}
function getItOnly() {
	if (itOnly === null) throw Error("To use `only`, use `RuleTester` with a test framework that provides `it.only()` like Mocha, or provide a custom `it.only` function by assigning it to `RuleTester.itOnly`");
	return itOnly;
}
let sharedConfig = {};
const TEST_CASE_PROP_KEYS = new Set([
	"code",
	"name",
	"only",
	"filename",
	"options",
	"before",
	"after",
	"output",
	"errors",
	"__proto__"
]);
var RuleTester = class {
	#config;
	constructor(config) {
		if (config === void 0) config = null;
		else if (config !== null && typeof config != "object") throw TypeError("`config` must be an object if provided");
		this.#config = config;
	}
	static setDefaultConfig(config) {
		if (typeof config != "object" || !config) throw TypeError("`config` must be an object");
		sharedConfig = config;
	}
	static getDefaultConfig() {
		return sharedConfig;
	}
	static resetDefaultConfig() {
		sharedConfig = {};
	}
	static get describe() {
		return describe;
	}
	static set describe(value) {
		describe = value;
	}
	static get it() {
		return it;
	}
	static set it(value) {
		it = value, itOnly = typeof it.only == "function" ? it.only.bind(it) : null;
	}
	static get itOnly() {
		return getItOnly();
	}
	static set itOnly(value) {
		itOnly = value;
	}
	static only(item) {
		return typeof item == "string" ? {
			code: item,
			only: !0
		} : {
			...item,
			only: !0
		};
	}
	run(ruleName, rule, tests) {
		let plugin = {
			meta: { name: "rule-to-test" },
			rules: { [ruleName]: rule }
		}, config = createConfigForRun(this.#config);
		describe(ruleName, () => {
			tests.valid.length > 0 && describe("valid", () => {
				let seenTestCases = /* @__PURE__ */ new Set();
				for (let test of tests.valid) typeof test == "string" && (test = { code: test }), getIt(test.only)(getTestName(test), () => {
					runValidTestCase(test, plugin, config, seenTestCases);
				});
			}), tests.invalid.length > 0 && describe("invalid", () => {
				let seenTestCases = /* @__PURE__ */ new Set();
				for (let test of tests.invalid) getIt(test.only)(getTestName(test), () => {
					runInvalidTestCase(test, plugin, config, seenTestCases);
				});
			});
		});
	}
};
function runValidTestCase(test, plugin, config, seenTestCases) {
	try {
		runBeforeHook(test), assertValidTestCaseIsWellFormed(test, seenTestCases), assertValidTestCasePasses(test, plugin, config);
	} finally {
		runAfterHook(test);
	}
}
function assertValidTestCasePasses(test, plugin, config) {
	test = mergeConfigIntoTestCase(test, config), assertErrorCountIsCorrect(lint(test, plugin), 0);
}
function runInvalidTestCase(test, plugin, config, seenTestCases) {
	let ruleName = ObjectKeys(plugin.rules)[0];
	try {
		runBeforeHook(test), assertInvalidTestCaseIsWellFormed(test, seenTestCases, ruleName), assertInvalidTestCasePasses(test, plugin, config);
	} finally {
		runAfterHook(test);
	}
}
function assertInvalidTestCasePasses(test, plugin, config) {
	test = mergeConfigIntoTestCase(test, config);
	let diagnostics$1 = lint(test, plugin), { errors } = test;
	if (typeof errors == "number") assertErrorCountIsCorrect(diagnostics$1, errors);
	else {
		assertErrorCountIsCorrect(diagnostics$1, errors.length), diagnostics$1.sort((diag1, diag2) => diag1.line - diag2.line || diag1.column - diag2.column);
		let messages = ObjectValues(plugin.rules)[0].meta?.messages ?? null;
		for (let errorIndex = 0; errorIndex < errors.length; errorIndex++) {
			let error = errors[errorIndex], diagnostic = diagnostics$1[errorIndex];
			typeof error == "string" || error instanceof RegExp ? (assertMessageMatches(diagnostic.message, error), assert(diagnostic.suggestions === null, `Error at index ${errorIndex} has suggestions. Please convert the test error into an object and specify \`suggestions\` property on it to test suggestions`)) : (assertInvalidTestCaseMessageIsCorrect(diagnostic, error, messages), assertInvalidTestCaseLocationIsCorrect(diagnostic, error, test));
		}
	}
}
function assertInvalidTestCaseMessageIsCorrect(diagnostic, error, messages) {
	if (ObjectHasOwn(error, "message")) {
		assert(!ObjectHasOwn(error, "messageId"), "Error should not specify both `message` and a `messageId`"), assert(!ObjectHasOwn(error, "data"), "Error should not specify both `data` and `message`"), assertMessageMatches(diagnostic.message, error.message);
		return;
	}
	assert(ObjectHasOwn(error, "messageId"), "Test error must specify either a `messageId` or `message`"), assert(messages !== null, "Error can not use `messageId` if rule under test doesn't define `meta.messages`");
	let messageId = error.messageId;
	if (!ObjectHasOwn(messages, messageId)) {
		let legalMessageIds = `[${ObjectKeys(messages).map((key) => `'${key}'`).join(", ")}]`;
		assert.fail(`Invalid messageId '${messageId}'. Expected one of ${legalMessageIds}`);
	}
	assert.strictEqual(diagnostic.messageId, messageId, `messageId '${diagnostic.messageId}' does not match expected messageId '${messageId}'`);
	let reportedMessage = diagnostic.message, ruleMessage = messages[messageId], unsubstitutedPlaceholders = getUnsubstitutedMessagePlaceholders(reportedMessage, ruleMessage, error.data);
	if (unsubstitutedPlaceholders.length !== 0 && assert.fail("The reported message has " + (unsubstitutedPlaceholders.length > 1 ? `unsubstituted placeholders: ${unsubstitutedPlaceholders.map((name) => `'${name}'`).join(", ")}` : `an unsubstituted placeholder '${unsubstitutedPlaceholders[0]}'`) + `. Please provide the missing ${unsubstitutedPlaceholders.length > 1 ? "values" : "value"} via the \`data\` property on the error object.`), ObjectHasOwn(error, "data")) {
		let rehydratedMessage = replacePlaceholders(ruleMessage, error.data);
		assert.strictEqual(reportedMessage, rehydratedMessage, `Hydrated message "${rehydratedMessage}" does not match "${reportedMessage}"`);
	}
}
function assertInvalidTestCaseLocationIsCorrect(diagnostic, error, test) {
	let actualLocation = {}, expectedLocation = {}, columnOffset = test.eslintCompat === !0 ? 1 : 0;
	ObjectHasOwn(error, "line") && (actualLocation.line = diagnostic.line, expectedLocation.line = error.line), ObjectHasOwn(error, "column") && (actualLocation.column = diagnostic.column + columnOffset, expectedLocation.column = error.column);
	let canVoidEndLocation = test.eslintCompat === !0 && diagnostic.endLine === diagnostic.line && diagnostic.endColumn === diagnostic.column;
	ObjectHasOwn(error, "endLine") && (error.endLine === void 0 && canVoidEndLocation ? actualLocation.endLine = void 0 : actualLocation.endLine = diagnostic.endLine, expectedLocation.endLine = error.endLine), ObjectHasOwn(error, "endColumn") && (error.endColumn === void 0 && canVoidEndLocation ? actualLocation.endColumn = void 0 : actualLocation.endColumn = diagnostic.endColumn + columnOffset, expectedLocation.endColumn = error.endColumn), ObjectKeys(expectedLocation).length > 0 && assert.deepStrictEqual(actualLocation, expectedLocation, "Actual error location does not match expected error location.");
}
function assertErrorCountIsCorrect(diagnostics$1, expectedErrorCount) {
	diagnostics$1.length !== expectedErrorCount && assert.strictEqual(diagnostics$1.length, expectedErrorCount, util.format("Should have %s error%s but had %d: %s", expectedErrorCount === 0 ? "no" : expectedErrorCount, expectedErrorCount === 1 ? "" : "s", diagnostics$1.length, util.inspect(diagnostics$1)));
}
function assertMessageMatches(message, matcher) {
	typeof matcher == "string" ? assert.strictEqual(message, matcher) : assert(matcher.test(message), `Expected '${message}' to match ${matcher}`);
}
function getUnsubstitutedMessagePlaceholders(message, raw, data) {
	let unsubstituted = getMessagePlaceholders(message);
	if (unsubstituted.length === 0) return [];
	let known = getMessagePlaceholders(raw), provided = data === void 0 ? [] : ObjectKeys(data);
	return unsubstituted.filter((name) => known.includes(name) && !provided.includes(name));
}
function getMessagePlaceholders(message) {
	return ArrayFrom(message.matchAll(PLACEHOLDER_REGEX), ([, name]) => name.trim());
}
function createConfigForRun(config) {
	let merged = {};
	return addConfigPropsFrom(sharedConfig, merged), config !== null && addConfigPropsFrom(config, merged), merged;
}
function addConfigPropsFrom(config, merged) {
	for (let key of ObjectKeys(config)) TEST_CASE_PROP_KEYS.has(key) || (key === "languageOptions" ? merged.languageOptions = mergeLanguageOptions(config.languageOptions, merged.languageOptions) : merged[key] = config[key]);
}
function mergeConfigIntoTestCase(test, config) {
	return {
		...config,
		...test,
		languageOptions: mergeLanguageOptions(test.languageOptions, config.languageOptions)
	};
}
function mergeLanguageOptions(localLanguageOptions, baseLanguageOptions) {
	return localLanguageOptions == null ? baseLanguageOptions ?? void 0 : baseLanguageOptions == null ? localLanguageOptions : {
		...baseLanguageOptions,
		...localLanguageOptions,
		parserOptions: mergeParserOptions(localLanguageOptions.parserOptions, baseLanguageOptions.parserOptions),
		globals: mergeGlobals(localLanguageOptions.globals, baseLanguageOptions.globals)
	};
}
function mergeParserOptions(localParserOptions, baseParserOptions) {
	return localParserOptions == null ? baseParserOptions ?? void 0 : baseParserOptions == null ? localParserOptions : {
		...baseParserOptions,
		...localParserOptions,
		ecmaFeatures: mergeEcmaFeatures(localParserOptions.ecmaFeatures, baseParserOptions.ecmaFeatures)
	};
}
function mergeEcmaFeatures(localEcmaFeatures, baseEcmaFeatures) {
	return localEcmaFeatures == null ? baseEcmaFeatures ?? void 0 : baseEcmaFeatures == null ? localEcmaFeatures : {
		...baseEcmaFeatures,
		...localEcmaFeatures
	};
}
function mergeGlobals(localGlobals, baseGlobals) {
	return localGlobals == null ? baseGlobals ?? void 0 : baseGlobals == null ? localGlobals : {
		...baseGlobals,
		...localGlobals
	};
}
function lint(test, plugin) {
	let parseOptions = getParseOptions(test), { filename } = test;
	if (filename == null) {
		let ext = parseOptions.lang;
		ext == null ? ext = "js" : ext === "dts" && (ext = "d.ts"), filename = `file.${ext}`;
	}
	try {
		registerPlugin(plugin, null, !1);
		let optionsId = setupOptions(test);
		parse(filename, test.code, parseOptions);
		let globalsJSON = getGlobalsJson(test);
		lintFileImpl(filename, 0, null, [0], [optionsId], "{}", globalsJSON);
		let ruleId = `${plugin.meta.name}/${ObjectKeys(plugin.rules)[0]}`;
		return diagnostics.map((diagnostic) => {
			let { line, column } = getLineColumnFromOffset(diagnostic.start), { line: endLine, column: endColumn } = getLineColumnFromOffset(diagnostic.end), node = getNodeByRangeIndex(diagnostic.start);
			return {
				ruleId,
				message: diagnostic.message,
				messageId: diagnostic.messageId,
				severity: 1,
				nodeType: node === null ? null : node.type,
				line,
				column,
				endLine,
				endColumn,
				suggestions: null
			};
		});
	} finally {
		registeredRules.length = 0, allOptions !== null && (allOptions.length = 1), resetStateAfterError();
	}
}
function getParseOptions(test) {
	let parseOptions = {}, languageOptions = test.languageOptions;
	if (languageOptions == null) return parseOptions;
	if (languageOptions.parser != null) throw Error("Custom parsers are not supported");
	let { sourceType } = languageOptions;
	if (sourceType != null) {
		if (test.eslintCompat === !0) {
			if (sourceType === "commonjs") sourceType = "script";
			else if (sourceType === "unambiguous") throw Error("'unambiguous' source type is not supported in ESLint compatibility mode.\nDisable ESLint compatibility mode by setting `eslintCompat` to `false` in the config / test case.");
		} else if (sourceType === "commonjs") throw Error("'commonjs' source type is only supported in ESLint compatibility mode.\nEnable ESLint compatibility mode by setting `eslintCompat` to `true` in the config / test case.");
		parseOptions.sourceType = sourceType;
	}
	let { parserOptions } = languageOptions;
	if (parserOptions != null) {
		parserOptions.ignoreNonFatalErrors === !0 && (parseOptions.ignoreNonFatalErrors = !0);
		let { lang } = parserOptions;
		lang == null ? parserOptions.ecmaFeatures?.jsx === !0 && (parseOptions.lang = "jsx") : parseOptions.lang = lang;
	}
	return parseOptions;
}
function getGlobalsJson(test) {
	let globals = { ...test.languageOptions?.globals }, eslintCompat = !!test.eslintCompat;
	for (let key in globals) {
		let value = globals[key];
		switch (value) {
			case "readonly":
			case "writable":
			case "off": continue;
			case "writeable":
			case "true":
			case !0:
				value = "writable";
				break;
			case "readable":
			case "false":
			case !1:
				value = "readonly";
				break;
			case null: if (eslintCompat) {
				value = "readonly";
				break;
			}
			default: throw Error(`'${value}' is not a valid configuration for a global (use 'readonly', 'writable', or 'off')`);
		}
		globals[key] = value;
	}
	let originalEnvs = test.languageOptions?.env, envs = {};
	if (originalEnvs != null) for (let [key, value] of ObjectEntries(originalEnvs)) value !== !1 && ObjectDefineProperty(envs, key, {
		value: !0,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
	return JSONStringify({
		globals,
		envs
	});
}
function setupOptions(test) {
	let allOptions$1 = [[]], allRuleIds = [0], optionsId = DEFAULT_OPTIONS_ID, testOptions = test.options;
	testOptions != null && (allOptions$1.push(testOptions), allRuleIds.push(0), optionsId = 1);
	let allOptionsJson;
	try {
		allOptionsJson = JSONStringify({
			options: allOptions$1,
			ruleIds: allRuleIds
		});
	} catch (err) {
		throw Error(`Failed to serialize options: ${err}`);
	}
	return setOptions(allOptionsJson), optionsId;
}
const CONTROL_CHAR_REGEX = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/gu;
function getTestName(test) {
	let name = test.name || test.code;
	return typeof name == "string" ? name.replace(CONTROL_CHAR_REGEX, (c) => `\\u${c.codePointAt(0).toString(16).padStart(4, "0")}`) : "";
}
function runBeforeHook(test) {
	ObjectHasOwn(test, "before") && runHook(test, test.before, "before");
}
function runAfterHook(test) {
	ObjectHasOwn(test, "after") && runHook(test, test.after, "after");
}
function runHook(test, hook, name) {
	assert.strictEqual(typeof hook, "function", `Optional test case property \`${name}\` must be a function`), hook.call(test);
}
function assertValidTestCaseIsWellFormed(test, seenTestCases) {
	assertTestCaseCommonPropertiesAreWellFormed(test), assert(!("errors" in test) || test.errors === void 0, "Valid test case must not have `errors` property"), assert(!("output" in test) || test.output === void 0, "Valid test case must not have `output` property"), assertNotDuplicateTestCase(test, seenTestCases);
}
function assertInvalidTestCaseIsWellFormed(test, seenTestCases, ruleName) {
	assertTestCaseCommonPropertiesAreWellFormed(test);
	let { errors } = test;
	typeof errors == "number" ? assert(errors > 0, "Invalid cases must have `errors` value greater than 0") : (assert(errors !== void 0, `Did not specify errors for an invalid test of rule \`${ruleName}\``), assert(ArrayIsArray(errors), `Invalid 'errors' property for invalid test of rule \`${ruleName}\`:expected a number or an array but got ${errors === null ? "null" : typeof errors}`), assert(errors.length !== 0, "Invalid cases must have at least one error")), ObjectHasOwn(test, "output") && assert(test.output === null || typeof test.output == "string", "Test property `output`, if specified, must be a string or null. If no autofix is expected, then omit the `output` property or set it to null."), assertNotDuplicateTestCase(test, seenTestCases);
}
function assertTestCaseCommonPropertiesAreWellFormed(test) {
	assert(typeof test.code == "string", "Test case must specify a string value for `code`"), test.name && assert(typeof test.name == "string", "Optional test case property `name` must be a string"), ObjectHasOwn(test, "only") && assert(typeof test.only == "boolean", "Optional test case property `only` must be a boolean"), ObjectHasOwn(test, "filename") && assert(typeof test.filename == "string", "Optional test case property `filename` must be a string"), ObjectHasOwn(test, "options") && assert(ArrayIsArray(test.options), "Optional test case property `options` must be an array");
}
const DUPLICATION_IGNORED_PROPS = new Set([
	"name",
	"errors",
	"output"
]);
function assertNotDuplicateTestCase(test, seenTestCases) {
	if (!isSerializable(test)) return;
	let serializedTestCase = (0, import_json_stable_stringify_without_jsonify.default)(test, { replacer(key, value) {
		return test !== this || !DUPLICATION_IGNORED_PROPS.has(key) ? value : void 0;
	} });
	assert(!seenTestCases.has(serializedTestCase), "Detected duplicate test case"), seenTestCases.add(serializedTestCase);
}
function isSerializable(value, seenObjects = /* @__PURE__ */ new Set()) {
	if (!isSerializablePrimitiveOrPlainObject(value)) return !1;
	if (typeof value != "object" || !value) return !0;
	if (seenObjects.has(value)) return !1;
	for (let property in value) {
		if (!ObjectHasOwn(value, property)) continue;
		let prop = value[property];
		if (!isSerializablePrimitiveOrPlainObject(prop) || !(typeof prop != "object" || !prop) && !isSerializable(prop, new Set([...seenObjects, value]))) return !1;
	}
	return !0;
}
function isSerializablePrimitiveOrPlainObject(value) {
	return value === null || typeof value == "string" || typeof value == "boolean" || typeof value == "number" || typeof value == "object" && (value.constructor === Object || ArrayIsArray(value));
}
export { RuleTester, definePlugin, defineRule };
