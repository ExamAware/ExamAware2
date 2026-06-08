"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodePreGyp = void 0;
const debug_1 = __importDefault(require("debug"));
const cross_spawn_promise_1 = require("@malept/cross-spawn-promise");
const read_binary_file_arch_1 = require("read-binary-file-arch");
const _1 = require(".");
const d = (0, debug_1.default)('electron-rebuild');
class NodePreGyp extends _1.NativeModule {
    async usesTool() {
        const packageName = await this.findPackageInDependencies('node-pre-gyp');
        return !!packageName;
    }
    async locateBinary() {
        const packageName = await this.findPackageInDependencies('node-pre-gyp');
        if (!packageName)
            return null;
        return (0, _1.locateBinary)(this.modulePath, `node_modules/${packageName}/bin/node-pre-gyp`);
    }
    async run(nodePreGypPath) {
        const redownloadBinary = await this.shouldUpdateBinary(nodePreGypPath);
        await (0, cross_spawn_promise_1.spawn)(process.execPath, [
            nodePreGypPath,
            'reinstall',
            '--fallback-to-build',
            ...(redownloadBinary ? ['--update-binary'] : []),
            `--arch=${this.rebuilder.arch}`,
            `--target_arch=${this.rebuilder.arch}`,
            `--target_platform=${this.rebuilder.platform}`,
            ...await this.getNodePreGypRuntimeArgs(),
        ], {
            cwd: this.modulePath,
        });
    }
    async findPrebuiltModule() {
        var _a;
        const nodePreGypPath = await this.locateBinary();
        if (nodePreGypPath) {
            d(`triggering prebuild download step: ${this.moduleName}`);
            try {
                await this.run(nodePreGypPath);
                return true;
            }
            catch (err) {
                d('failed to use node-pre-gyp:', err);
                if ((_a = err === null || err === void 0 ? void 0 : err.message) === null || _a === void 0 ? void 0 : _a.includes('requires Node-API but Electron')) {
                    throw err;
                }
            }
        }
        else {
            d(`could not find node-pre-gyp relative to: ${this.modulePath}`);
        }
        return false;
    }
    async getNodePreGypRuntimeArgs() {
        const moduleNapiVersions = await this.getSupportedNapiVersions();
        if (moduleNapiVersions) {
            return [];
        }
        else {
            return [
                '--runtime=electron',
                `--target=${this.rebuilder.electronVersion}`,
                `--dist-url=${this.rebuilder.headerURL}`,
            ];
        }
    }
    async shouldUpdateBinary(nodePreGypPath) {
        let shouldUpdate = false;
        // Redownload binary only if the existing module arch differs from the
        // target arch.
        try {
            const modulePaths = await this.getModulePaths(nodePreGypPath);
            d('module paths:', modulePaths);
            for (const modulePath of modulePaths) {
                let moduleArch;
                try {
                    moduleArch = await (0, read_binary_file_arch_1.readBinaryFileArch)(modulePath);
                    d('module arch:', moduleArch);
                }
                catch (error) {
                    d('failed to read module arch:', error.message);
                    continue;
                }
                if (moduleArch && moduleArch !== this.rebuilder.arch) {
                    shouldUpdate = true;
                    d('module architecture differs:', `${moduleArch} !== ${this.rebuilder.arch}`);
                    break;
                }
            }
        }
        catch (error) {
            d('failed to get existing binary arch:', error.message);
            // Assume architecture differs
            shouldUpdate = true;
        }
        return shouldUpdate;
    }
    async getModulePaths(nodePreGypPath) {
        const results = await (0, cross_spawn_promise_1.spawn)(process.execPath, [
            nodePreGypPath,
            'reveal',
            'module',
            `--target_arch=${this.rebuilder.arch}`,
            `--target_platform=${this.rebuilder.platform}`,
        ], {
            cwd: this.modulePath,
        });
        // Packages with multiple binaries will output one per line
        return results.split('\n').filter(Boolean);
    }
}
exports.NodePreGyp = NodePreGyp;
//# sourceMappingURL=node-pre-gyp.js.map