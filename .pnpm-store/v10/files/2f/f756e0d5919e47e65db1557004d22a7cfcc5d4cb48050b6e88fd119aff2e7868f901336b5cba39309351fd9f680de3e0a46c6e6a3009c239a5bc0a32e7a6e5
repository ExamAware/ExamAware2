import * as koa from 'koa';
import { DefaultState, DefaultContext, Middleware, ParameterizedContext } from 'koa';
import { Key } from 'path-to-regexp';

/**
 * Extended middleware with param metadata
 * @internal
 */
type ParameterMiddleware<StateT = DefaultState, ContextT = DefaultContext, BodyT = unknown> = RouterMiddleware<StateT, ContextT, BodyT> & {
    param?: string;
    _originalFn?: RouterParameterMiddleware<StateT, ContextT, BodyT>;
};
/**
 * Layer class represents a single route or middleware layer.
 * It handles path matching, parameter extraction, and middleware execution.
 *
 * @typeParam StateT - Custom state type extending Koa's DefaultState
 * @typeParam ContextT - Custom context type extending Koa's DefaultContext
 * @typeParam BodyT - Response body type
 */
declare class Layer<StateT = DefaultState, ContextT = DefaultContext, BodyT = unknown> {
    opts: LayerOptions;
    name: string | undefined;
    methods: string[];
    paramNames: Key[];
    stack: Array<RouterMiddleware<StateT, ContextT, BodyT> | ParameterMiddleware<StateT, ContextT, BodyT>>;
    path: string | RegExp;
    regexp: RegExp;
    /**
     * Initialize a new routing Layer with given `method`, `path`, and `middleware`.
     *
     * @param path - Path string or regular expression
     * @param methods - Array of HTTP verbs
     * @param middleware - Layer callback/middleware or series of
     * @param opts - Layer options
     * @private
     */
    constructor(path: string | RegExp, methods: string[], middleware: RouterMiddleware<StateT, ContextT, BodyT> | Array<RouterMiddleware<StateT, ContextT, BodyT>>, options?: LayerOptions);
    /**
     * Normalize HTTP methods and add automatic HEAD support for GET
     * @private
     */
    private _normalizeHttpMethods;
    /**
     * Normalize middleware to array and validate all are functions
     * @private
     */
    private _normalizeAndValidateMiddleware;
    /**
     * Configure path matching regexp and parameters
     * @private
     */
    private _configurePathMatching;
    /**
     * Configure path-to-regexp for string paths
     * @private
     */
    private _configurePathToRegexp;
    /**
     * Returns whether request `path` matches route.
     *
     * @param path - Request path
     * @returns Whether path matches
     * @private
     */
    match(path: string): boolean;
    /**
     * Returns map of URL parameters for given `path` and `paramNames`.
     *
     * @param _path - Request path (not used, kept for API compatibility)
     * @param captures - Captured values from regexp
     * @param existingParams - Existing params to merge with
     * @returns Parameter map
     * @private
     */
    params(_path: string, captures: string[], existingParameters?: Record<string, string>): Record<string, string>;
    /**
     * Returns array of regexp url path captures.
     *
     * @param path - Request path
     * @returns Array of captured values
     * @private
     */
    captures(path: string): string[];
    /**
     * Generate URL for route using given `params`.
     *
     * @example
     *
     * ```javascript
     * const route = new Layer('/users/:id', ['GET'], fn);
     *
     * route.url({ id: 123 }); // => "/users/123"
     * ```
     *
     * @param args - URL parameters (various formats supported)
     * @returns Generated URL
     * @throws Error if route path is a RegExp (cannot generate URL from RegExp)
     * @private
     */
    url(...arguments_: unknown[]): string;
    /**
     * Parse url() arguments into params and options
     * Supports multiple call signatures:
     * - url({ id: 1 })
     * - url(1, 2, 3)
     * - url({ query: {...} })
     * - url({ id: 1 }, { query: {...} })
     * @private
     */
    private _parseUrlArguments;
    /**
     * Build parameter replacements for URL generation
     * @private
     */
    private _buildParamReplacements;
    /**
     * Add query string to URL
     * @private
     */
    private _addQueryString;
    /**
     * Run validations on route named parameters.
     *
     * @example
     *
     * ```javascript
     * router
     *   .param('user', function (id, ctx, next) {
     *     ctx.user = users[id];
     *     if (!ctx.user) return ctx.status = 404;
     *     next();
     *   })
     *   .get('/users/:user', function (ctx, next) {
     *     ctx.body = ctx.user;
     *   });
     * ```
     *
     * @param paramName - Parameter name
     * @param paramHandler - Middleware function
     * @returns This layer instance
     * @private
     */
    param(parameterName: string, parameterHandler: RouterParameterMiddleware<StateT, ContextT, BodyT>): Layer<StateT, ContextT, BodyT>;
    /**
     * Create param middleware with deduplication tracking
     * @private
     */
    private _createParamMiddleware;
    /**
     * Insert param middleware at the correct position in the stack
     * @private
     */
    private _insertParamMiddleware;
    /**
     * Prefix route path.
     *
     * @param prefixPath - Prefix to prepend
     * @returns This layer instance
     * @private
     */
    setPrefix(prefixPath: string): Layer<StateT, ContextT, BodyT>;
    /**
     * Apply prefix to the current path
     * @private
     */
    private _applyPrefix;
    /**
     * Reconfigure path matching after prefix is applied
     * @private
     */
    private _reconfigurePathMatching;
}

/**
 * Middleware with router property
 */
type RouterComposedMiddleware<StateT = koa.DefaultState, ContextT = koa.DefaultContext> = Middleware<StateT, ContextT & RouterParameterContext<StateT, ContextT>> & {
    router?: Router<StateT, ContextT>;
};
/**
 * @module koa-router
 */
declare class Router<StateT = koa.DefaultState, ContextT = koa.DefaultContext> {
    opts: RouterOptions;
    methods: string[];
    exclusive: boolean;
    params: Record<string, RouterParameterMiddleware<StateT, ContextT> | RouterParameterMiddleware<StateT, ContextT>[]>;
    stack: Layer<StateT, ContextT>[];
    host?: string | string[] | RegExp;
    /**
     * Create a new router.
     *
     * @example
     *
     * Basic usage:
     *
     * ```javascript
     * const Koa = require('koa');
     * const Router = require('@koa/router');
     *
     * const app = new Koa();
     * const router = new Router();
     *
     * router.get('/', (ctx, next) => {
     *   // ctx.router available
     * });
     *
     * app
     *   .use(router.routes())
     *   .use(router.allowedMethods());
     * ```
     *
     * @alias module:koa-router
     * @param opts - Router options
     * @constructor
     */
    constructor(options?: RouterOptions);
    /**
     * Generate URL from url pattern and given `params`.
     *
     * @example
     *
     * ```javascript
     * const url = Router.url('/users/:id', {id: 1});
     * // => "/users/1"
     * ```
     *
     * @param path - URL pattern
     * @param args - URL parameters
     * @returns Generated URL
     */
    static url(path: string | RegExp, ...arguments_: unknown[]): string;
    /**
     * Use given middleware.
     *
     * Middleware run in the order they are defined by `.use()`. They are invoked
     * sequentially, requests start at the first middleware and work their way
     * "down" the middleware stack.
     *
     * @example
     *
     * ```javascript
     * // session middleware will run before authorize
     * router
     *   .use(session())
     *   .use(authorize());
     *
     * // use middleware only with given path
     * router.use('/users', userAuth());
     *
     * // or with an array of paths
     * router.use(['/users', '/admin'], userAuth());
     *
     * app.use(router.routes());
     * ```
     *
     * @param middleware - Middleware functions
     * @returns This router instance
     */
    use<T = {}, U = {}, B = unknown>(middleware: RouterMiddleware<StateT & T, ContextT & U, B>): Router<StateT, ContextT>;
    use<T = {}, U = {}>(middleware: RouterComposedMiddleware<StateT & T, ContextT & U>): Router<StateT, ContextT>;
    use<T = {}, U = {}, B = unknown>(path: string | RegExp | string[], middleware: RouterMiddleware<StateT & T, ContextT & U, B>): Router<StateT, ContextT>;
    use<T = {}, U = {}>(path: string | RegExp | string[], middleware: RouterComposedMiddleware<StateT & T, ContextT & U>): Router<StateT, ContextT>;
    use<T = {}, U = {}, B = unknown>(path: string | RegExp | string[], m1: RouterMiddleware<StateT & T, ContextT & U, B>, m2: RouterMiddleware<StateT & T, ContextT & U, B> | RouterComposedMiddleware<StateT & T, ContextT & U>, ...middleware: Array<RouterMiddleware<StateT & T, ContextT & U, B> | RouterComposedMiddleware<StateT & T, ContextT & U>>): Router<StateT, ContextT>;
    use<T = {}, U = {}, B = unknown>(m1: RouterMiddleware<StateT & T, ContextT & U, B>, m2: RouterMiddleware<StateT & T, ContextT & U, B> | RouterComposedMiddleware<StateT & T, ContextT & U>, ...middleware: Array<RouterMiddleware<StateT & T, ContextT & U, B> | RouterComposedMiddleware<StateT & T, ContextT & U>>): Router<StateT, ContextT>;
    /**
     * Check if first argument is an array of paths (all elements must be strings)
     * @private
     */
    private _isPathArray;
    /**
     * Check if first argument is an explicit path (string or RegExp)
     * Empty string counts as explicit path to enable param capture
     * @private
     */
    private _hasExplicitPath;
    /**
     * Check if middleware contains a nested router
     * @private
     */
    private _isNestedRouter;
    /**
     * Apply middleware to multiple paths
     * @private
     */
    private _useWithPathArray;
    /**
     * Mount a nested router
     * @private
     */
    private _mountNestedRouter;
    /**
     * Clone a router instance
     * @private
     */
    private _cloneRouter;
    /**
     * Clone a layer instance (deep clone to avoid shared references)
     * @private
     */
    private _cloneLayer;
    /**
     * Apply this router's param middleware to a nested router
     * @private
     */
    private _applyParamMiddlewareToRouter;
    /**
     * Register regular middleware (not nested router)
     * @private
     */
    private _registerMiddleware;
    /**
     * Set the path prefix for a Router instance that was already initialized.
     * Note: Calling this method multiple times will replace the prefix, not stack them.
     *
     * @example
     *
     * ```javascript
     * router.prefix('/things/:thing_id')
     * ```
     *
     * @param prefixPath - Prefix string
     * @returns This router instance
     */
    prefix(prefixPath: string): Router<StateT, ContextT>;
    /**
     * Returns router middleware which dispatches a route matching the request.
     *
     * @returns Router middleware
     */
    middleware(): RouterComposedMiddleware<StateT, ContextT>;
    /**
     * Get the request path to use for routing
     * @private
     */
    private _getRequestPath;
    /**
     * Store matched routes on context
     * @private
     */
    private _storeMatchedRoutes;
    /**
     * Set matched route information on context
     * @private
     */
    private _setMatchedRouteInfo;
    /**
     * Build middleware chain from matched layers
     * @private
     */
    private _buildMiddlewareChain;
    routes(): RouterComposedMiddleware<StateT, ContextT>;
    /**
     * Returns separate middleware for responding to `OPTIONS` requests with
     * an `Allow` header containing the allowed methods, as well as responding
     * with `405 Method Not Allowed` and `501 Not Implemented` as appropriate.
     *
     * @example
     *
     * ```javascript
     * const Koa = require('koa');
     * const Router = require('@koa/router');
     *
     * const app = new Koa();
     * const router = new Router();
     *
     * app.use(router.routes());
     * app.use(router.allowedMethods());
     * ```
     *
     * **Example with [Boom](https://github.com/hapijs/boom)**
     *
     * ```javascript
     * const Koa = require('koa');
     * const Router = require('@koa/router');
     * const Boom = require('boom');
     *
     * const app = new Koa();
     * const router = new Router();
     *
     * app.use(router.routes());
     * app.use(router.allowedMethods({
     *   throw: true,
     *   notImplemented: () => new Boom.notImplemented(),
     *   methodNotAllowed: () => new Boom.methodNotAllowed()
     * }));
     * ```
     *
     * @param options - Options object
     * @returns Middleware function
     */
    allowedMethods(options?: AllowedMethodsOptions): RouterMiddleware<StateT, ContextT>;
    /**
     * Check if we should process allowed methods
     * @private
     */
    private _shouldProcessAllowedMethods;
    /**
     * Collect all allowed methods from matched routes
     * @private
     */
    private _collectAllowedMethods;
    /**
     * Handle 501 Not Implemented response
     * @private
     */
    private _handleNotImplemented;
    /**
     * Handle OPTIONS request
     * @private
     */
    private _handleOptionsRequest;
    /**
     * Handle 405 Method Not Allowed response
     * @private
     */
    private _handleMethodNotAllowed;
    /**
     * Register route with all methods.
     *
     * @param args - Route arguments (name, path, middleware)
     * @returns This router instance
     */
    all<T = {}, U = {}, B = unknown>(name: string, path: string | RegExp, ...middleware: Array<RouterMiddleware<StateT & T, ContextT & U, B>>): Router<StateT, ContextT>;
    all<T = {}, U = {}, B = unknown>(path: string | RegExp | Array<string | RegExp>, ...middleware: Array<RouterMiddleware<StateT & T, ContextT & U, B>>): Router<StateT, ContextT>;
    /**
     * Redirect `source` to `destination` URL with optional 30x status `code`.
     *
     * Both `source` and `destination` can be route names.
     *
     * ```javascript
     * router.redirect('/login', 'sign-in');
     * ```
     *
     * This is equivalent to:
     *
     * ```javascript
     * router.all('/login', ctx => {
     *   ctx.redirect('/sign-in');
     *   ctx.status = 301;
     * });
     * ```
     *
     * @param source - URL or route name
     * @param destination - URL or route name
     * @param code - HTTP status code (default: 301)
     * @returns This router instance
     */
    redirect(source: string | symbol, destination: string | symbol, code?: number): Router<StateT, ContextT>;
    /**
     * Create and register a route.
     *
     * @param path - Path string
     * @param methods - Array of HTTP verbs
     * @param middleware - Middleware functions
     * @param additionalOptions - Additional options
     * @returns Created layer
     * @private
     */
    register(path: string | RegExp | string[], methods: string[], middleware: RouterMiddleware<StateT, ContextT> | RouterMiddleware<StateT, ContextT>[], additionalOptions?: LayerOptions): Layer<StateT, ContextT> | Router<StateT, ContextT>;
    /**
     * Register multiple paths with the same configuration
     * @private
     */
    private _registerMultiplePaths;
    /**
     * Create a route layer with given configuration
     * @private
     */
    private _createRouteLayer;
    /**
     * Lookup route with given `name`.
     *
     * @param name - Route name
     * @returns Matched layer or false
     */
    route(name: string): Layer<StateT, ContextT> | false;
    /**
     * Generate URL for route. Takes a route name and map of named `params`.
     *
     * @example
     *
     * ```javascript
     * router.get('user', '/users/:id', (ctx, next) => {
     *   // ...
     * });
     *
     * router.url('user', 3);
     * // => "/users/3"
     *
     * router.url('user', { id: 3 });
     * // => "/users/3"
     *
     * router.use((ctx, next) => {
     *   // redirect to named route
     *   ctx.redirect(ctx.router.url('sign-in'));
     * })
     *
     * router.url('user', { id: 3 }, { query: { limit: 1 } });
     * // => "/users/3?limit=1"
     *
     * router.url('user', { id: 3 }, { query: "limit=1" });
     * // => "/users/3?limit=1"
     * ```
     *
     * @param name - Route name
     * @param args - URL parameters
     * @returns Generated URL or Error
     */
    url(name: string, ...arguments_: unknown[]): string | Error;
    /**
     * Match given `path` and return corresponding routes.
     *
     * @param path - Request path
     * @param method - HTTP method
     * @returns Match result with matched layers
     * @private
     */
    match(path: string, method: string): MatchResult<StateT, ContextT>;
    /**
     * Match given `input` to allowed host
     * @param input - Host to check
     * @returns Whether host matches
     */
    matchHost(input?: string): boolean;
    /**
     * Run middleware for named route parameters. Useful for auto-loading or
     * validation.
     *
     * @example
     *
     * ```javascript
     * router
     *   .param('user', (id, ctx, next) => {
     *     ctx.user = users[id];
     *     if (!ctx.user) return ctx.status = 404;
     *     return next();
     *   })
     *   .get('/users/:user', ctx => {
     *     ctx.body = ctx.user;
     *   })
     *   .get('/users/:user/friends', ctx => {
     *     return ctx.user.getFriends().then(function(friends) {
     *       ctx.body = friends;
     *     });
     *   })
     *   // /users/3 => {"id": 3, "name": "Alex"}
     *   // /users/3/friends => [{"id": 4, "name": "TJ"}]
     * ```
     *
     * @param param - Parameter name
     * @param middleware - Parameter middleware
     * @returns This router instance
     */
    param(parameter: string, middleware: RouterParameterMiddleware<StateT, ContextT>): Router<StateT, ContextT>;
    /**
     * Helper method for registering HTTP verb routes
     * @internal - Used by dynamically added HTTP methods
     */
    _registerMethod(method: string, ...arguments_: unknown[]): Router<StateT, ContextT>;
    /**
     * HTTP GET method
     */
    get<T = {}, U = {}, B = unknown>(name: string, path: string | RegExp, ...middleware: Array<RouterMiddleware<StateT & T, ContextT & U, B>>): Router<StateT, ContextT>;
    get<T = {}, U = {}, B = unknown>(path: string | RegExp | Array<string | RegExp>, ...middleware: Array<RouterMiddleware<StateT & T, ContextT & U, B>>): Router<StateT, ContextT>;
    /**
     * HTTP POST method
     */
    post<T = {}, U = {}, B = unknown>(name: string, path: string | RegExp, ...middleware: Array<RouterMiddleware<StateT & T, ContextT & U, B>>): Router<StateT, ContextT>;
    post<T = {}, U = {}, B = unknown>(path: string | RegExp | Array<string | RegExp>, ...middleware: Array<RouterMiddleware<StateT & T, ContextT & U, B>>): Router<StateT, ContextT>;
    /**
     * HTTP PUT method
     */
    put<T = {}, U = {}, B = unknown>(name: string, path: string | RegExp, ...middleware: Array<RouterMiddleware<StateT & T, ContextT & U, B>>): Router<StateT, ContextT>;
    put<T = {}, U = {}, B = unknown>(path: string | RegExp | Array<string | RegExp>, ...middleware: Array<RouterMiddleware<StateT & T, ContextT & U, B>>): Router<StateT, ContextT>;
    /**
     * HTTP PATCH method
     */
    patch<T = {}, U = {}, B = unknown>(name: string, path: string | RegExp, ...middleware: Array<RouterMiddleware<StateT & T, ContextT & U, B>>): Router<StateT, ContextT>;
    patch<T = {}, U = {}, B = unknown>(path: string | RegExp | Array<string | RegExp>, ...middleware: Array<RouterMiddleware<StateT & T, ContextT & U, B>>): Router<StateT, ContextT>;
    /**
     * HTTP DELETE method
     */
    delete<T = {}, U = {}, B = unknown>(name: string, path: string | RegExp, ...middleware: Array<RouterMiddleware<StateT & T, ContextT & U, B>>): Router<StateT, ContextT>;
    delete<T = {}, U = {}, B = unknown>(path: string | RegExp | Array<string | RegExp>, ...middleware: Array<RouterMiddleware<StateT & T, ContextT & U, B>>): Router<StateT, ContextT>;
    /**
     * HTTP DELETE method alias (del)
     */
    del<T = {}, U = {}, B = unknown>(name: string, path: string | RegExp, ...middleware: Array<RouterMiddleware<StateT & T, ContextT & U, B>>): Router<StateT, ContextT>;
    del<T = {}, U = {}, B = unknown>(path: string | RegExp | Array<string | RegExp>, ...middleware: Array<RouterMiddleware<StateT & T, ContextT & U, B>>): Router<StateT, ContextT>;
    /**
     * HTTP HEAD method
     */
    head<T = {}, U = {}, B = unknown>(name: string, path: string | RegExp, ...middleware: Array<RouterMiddleware<StateT & T, ContextT & U, B>>): Router<StateT, ContextT>;
    head<T = {}, U = {}, B = unknown>(path: string | RegExp | Array<string | RegExp>, ...middleware: Array<RouterMiddleware<StateT & T, ContextT & U, B>>): Router<StateT, ContextT>;
    /**
     * HTTP OPTIONS method
     */
    options<T = {}, U = {}, B = unknown>(name: string, path: string | RegExp, ...middleware: Array<RouterMiddleware<StateT & T, ContextT & U, B>>): Router<StateT, ContextT>;
    options<T = {}, U = {}, B = unknown>(path: string | RegExp | Array<string | RegExp>, ...middleware: Array<RouterMiddleware<StateT & T, ContextT & U, B>>): Router<StateT, ContextT>;
    /**
     * Dynamic HTTP method handler for any method from http.METHODS.
     * Use this index signature to access methods like PURGE, COPY, CONNECT, TRACE, etc.
     * These are dynamically added at runtime from Node's http.METHODS.
     *
     * @example
     * ```typescript
     * // Type-safe way to use dynamic methods
     * const router = new Router();
     * router.register('/cache/:key', ['PURGE'], middleware);
     *
     * // Or cast to access dynamic method directly
     * (router as any).purge('/cache/:key', middleware);
     * ```
     */
    [method: string]: unknown;
}
/**
 * Router constructor interface with automatic type inference for custom HTTP methods.
 *
 * @example
 * ```typescript
 * // Methods are automatically typed based on what you pass
 * const router = new Router({
 *   methods: ['GET', 'POST', 'PURGE', 'CUSTOM'] as const
 * });
 *
 * // TypeScript knows these methods exist
 * router.get('/users', handler);
 * router.purge('/cache/:key', handler);
 * router.custom('/special', handler);
 * ```
 */
interface RouterConstructor {
    new <M extends string, StateT = koa.DefaultState, ContextT = koa.DefaultContext>(options: RouterOptionsWithMethods<M>): RouterWithMethods<M, StateT, ContextT>;
    new <StateT = koa.DefaultState, ContextT = koa.DefaultContext>(options?: RouterOptions): Router<StateT, ContextT>;
    /**
     * Generate URL from url pattern and given `params`.
     */
    url(path: string, parameters?: Record<string, unknown>): string;
    url(path: string, ...parameters: unknown[]): string;
    readonly prototype: Router;
}
declare const RouterExport: RouterConstructor;

/**
 * Type definitions for @koa/router
 */

type RouterOptions = {
    /**
     * Only run last matched route's controller when there are multiple matches
     */
    exclusive?: boolean;
    /**
     * Prefix for all routes
     */
    prefix?: string;
    /**
     * Host for router match (string, array of strings, or RegExp)
     * - string: exact match
     * - string[]: matches if input equals any string in the array
     * - RegExp: pattern match
     */
    host?: string | string[] | RegExp;
    /**
     * HTTP methods this router should respond to
     */
    methods?: string[];
    /**
     * Path to use for routing (internal)
     */
    routerPath?: string;
    /**
     * Whether to use case-sensitive routing
     */
    sensitive?: boolean;
    /**
     * Whether trailing slashes are significant
     */
    strict?: boolean;
    /**
     * Additional options passed through
     */
    [key: string]: unknown;
};
type LayerOptions = {
    /**
     * Route name for URL generation
     */
    name?: string | null;
    /**
     * Case sensitive routing
     */
    sensitive?: boolean;
    /**
     * Require trailing slash
     */
    strict?: boolean;
    /**
     * Whether trailing slashes matter (path-to-regexp v8)
     */
    trailing?: boolean;
    /**
     * Route path ends at this path
     */
    end?: boolean;
    /**
     * Prefix for the route
     */
    prefix?: string;
    /**
     * Ignore captures in route matching
     */
    ignoreCaptures?: boolean;
    /**
     * Treat path as a regular expression
     */
    pathAsRegExp?: boolean;
    /**
     * Additional options passed through to path-to-regexp
     */
    [key: string]: unknown;
};
type UrlOptions = {
    /**
     * Query string parameters
     */
    query?: Record<string, unknown> | string;
    [key: string]: unknown;
};
type RouterParameterContext<StateT = DefaultState, ContextT = DefaultContext> = {
    /**
     * URL parameters
     */
    params: Record<string, string>;
    /**
     * Router instance
     */
    router: Router<StateT, ContextT>;
    /**
     * Matched route path (internal)
     */
    _matchedRoute?: string | RegExp;
    /**
     * Matched route name (internal)
     */
    _matchedRouteName?: string;
};
type RouterParameterMiddleware<StateT = DefaultState, ContextT = DefaultContext, BodyT = unknown> = (parameterValue: string, context: RouterContext<StateT, ContextT, BodyT>, next: () => Promise<unknown>) => unknown | Promise<unknown>;
type MatchResult<StateT = DefaultState, ContextT = DefaultContext, BodyT = unknown> = {
    /**
     * Layers that matched the path
     */
    path: Layer<StateT, ContextT, BodyT>[];
    /**
     * Layers that matched both path and HTTP method
     */
    pathAndMethod: Layer<StateT, ContextT, BodyT>[];
    /**
     * Whether a route (not just middleware) was matched
     */
    route: boolean;
};
type AllowedMethodsOptions = {
    /**
     * Throw error instead of setting status and header
     */
    throw?: boolean;
    /**
     * Throw the returned value in place of the default NotImplemented error
     */
    notImplemented?: () => Error;
    /**
     * Throw the returned value in place of the default MethodNotAllowed error
     */
    methodNotAllowed?: () => Error;
};
/**
 * Extended Koa context with router-specific properties
 * Matches the structure from @types/koa-router
 */
type RouterContext<StateT = DefaultState, ContextT = DefaultContext, BodyT = unknown> = ParameterizedContext<StateT, ContextT & RouterParameterContext<StateT, ContextT>, BodyT> & {
    /**
     * Request with params (set by router during routing)
     */
    request: {
        params: Record<string, string>;
    };
    /**
     * Path of matched route
     */
    routerPath?: string;
    /**
     * Name of matched route
     */
    routerName?: string;
    /**
     * Array of matched layers
     */
    matched?: Layer<StateT, ContextT, BodyT>[];
    /**
     * Captured values from path
     */
    captures?: string[];
    /**
     * New router path (for nested routers)
     */
    newRouterPath?: string;
    /**
     * Track param middleware execution (internal)
     */
    _matchedParams?: WeakMap<Function, boolean>;
};
/**
 * Router middleware function type
 */
type RouterMiddleware<StateT = DefaultState, ContextT = DefaultContext, BodyT = unknown> = Middleware<StateT, RouterContext<StateT, ContextT, BodyT>, BodyT>;
/**
 * HTTP method names in lowercase
 */
type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete' | 'del' | 'head' | 'options' | 'connect' | 'trace' | string;
/**
 * Router options with generic methods array for type inference
 */
type RouterOptionsWithMethods<M extends string = string> = Omit<RouterOptions, 'methods'> & {
    methods?: readonly M[];
};
/**
 * Type for a dynamic HTTP method function on Router
 */
type RouterMethodFunction<StateT = DefaultState, ContextT = DefaultContext> = {
    <T = {}, U = {}, B = unknown>(name: string, path: string | RegExp, ...middleware: Array<RouterMiddleware<StateT & T, ContextT & U, B>>): Router<StateT, ContextT>;
    <T = {}, U = {}, B = unknown>(path: string | RegExp | Array<string | RegExp>, ...middleware: Array<RouterMiddleware<StateT & T, ContextT & U, B>>): Router<StateT, ContextT>;
};
/**
 * Router with additional HTTP methods based on the methods option.
 * Use createRouter() factory function for automatic type inference.
 */
type RouterWithMethods<M extends string, StateT = DefaultState, ContextT = DefaultContext> = Router<StateT, ContextT> & Record<Lowercase<M>, RouterMethodFunction<StateT, ContextT>>;

export { type AllowedMethodsOptions, type HttpMethod, Layer, type LayerOptions, type MatchResult, RouterExport as Router, type RouterContext, Router as RouterInstance, type RouterMethodFunction, type RouterMiddleware, type RouterOptions, type RouterOptionsWithMethods, type RouterParameterMiddleware, type RouterWithMethods, type UrlOptions, RouterExport as default };
