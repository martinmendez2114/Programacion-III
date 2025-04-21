
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model PerfilEstudiante
 * 
 */
export type PerfilEstudiante = $Result.DefaultSelection<Prisma.$PerfilEstudiantePayload>
/**
 * Model Servicio
 * 
 */
export type Servicio = $Result.DefaultSelection<Prisma.$ServicioPayload>
/**
 * Model SolicitudServicio
 * 
 */
export type SolicitudServicio = $Result.DefaultSelection<Prisma.$SolicitudServicioPayload>
/**
 * Model Resena
 * 
 */
export type Resena = $Result.DefaultSelection<Prisma.$ResenaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Rol: {
  ESTUDIANTE: 'ESTUDIANTE',
  CLIENTE: 'CLIENTE'
};

export type Rol = (typeof Rol)[keyof typeof Rol]


export const EstadoServicio: {
  ACTIVO: 'ACTIVO',
  INACTIVO: 'INACTIVO'
};

export type EstadoServicio = (typeof EstadoServicio)[keyof typeof EstadoServicio]


export const EstadoSolicitud: {
  PENDIENTE: 'PENDIENTE',
  ACEPTADO: 'ACEPTADO',
  RECHAZADO: 'RECHAZADO',
  COMPLETADO: 'COMPLETADO'
};

export type EstadoSolicitud = (typeof EstadoSolicitud)[keyof typeof EstadoSolicitud]

}

export type Rol = $Enums.Rol

export const Rol: typeof $Enums.Rol

export type EstadoServicio = $Enums.EstadoServicio

export const EstadoServicio: typeof $Enums.EstadoServicio

export type EstadoSolicitud = $Enums.EstadoSolicitud

export const EstadoSolicitud: typeof $Enums.EstadoSolicitud

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.perfilEstudiante`: Exposes CRUD operations for the **PerfilEstudiante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PerfilEstudiantes
    * const perfilEstudiantes = await prisma.perfilEstudiante.findMany()
    * ```
    */
  get perfilEstudiante(): Prisma.PerfilEstudianteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servicio`: Exposes CRUD operations for the **Servicio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servicios
    * const servicios = await prisma.servicio.findMany()
    * ```
    */
  get servicio(): Prisma.ServicioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.solicitudServicio`: Exposes CRUD operations for the **SolicitudServicio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SolicitudServicios
    * const solicitudServicios = await prisma.solicitudServicio.findMany()
    * ```
    */
  get solicitudServicio(): Prisma.SolicitudServicioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resena`: Exposes CRUD operations for the **Resena** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resenas
    * const resenas = await prisma.resena.findMany()
    * ```
    */
  get resena(): Prisma.ResenaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    PerfilEstudiante: 'PerfilEstudiante',
    Servicio: 'Servicio',
    SolicitudServicio: 'SolicitudServicio',
    Resena: 'Resena'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "perfilEstudiante" | "servicio" | "solicitudServicio" | "resena"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      PerfilEstudiante: {
        payload: Prisma.$PerfilEstudiantePayload<ExtArgs>
        fields: Prisma.PerfilEstudianteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PerfilEstudianteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilEstudiantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PerfilEstudianteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilEstudiantePayload>
          }
          findFirst: {
            args: Prisma.PerfilEstudianteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilEstudiantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PerfilEstudianteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilEstudiantePayload>
          }
          findMany: {
            args: Prisma.PerfilEstudianteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilEstudiantePayload>[]
          }
          create: {
            args: Prisma.PerfilEstudianteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilEstudiantePayload>
          }
          createMany: {
            args: Prisma.PerfilEstudianteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PerfilEstudianteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilEstudiantePayload>[]
          }
          delete: {
            args: Prisma.PerfilEstudianteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilEstudiantePayload>
          }
          update: {
            args: Prisma.PerfilEstudianteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilEstudiantePayload>
          }
          deleteMany: {
            args: Prisma.PerfilEstudianteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PerfilEstudianteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PerfilEstudianteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilEstudiantePayload>[]
          }
          upsert: {
            args: Prisma.PerfilEstudianteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilEstudiantePayload>
          }
          aggregate: {
            args: Prisma.PerfilEstudianteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerfilEstudiante>
          }
          groupBy: {
            args: Prisma.PerfilEstudianteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PerfilEstudianteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PerfilEstudianteCountArgs<ExtArgs>
            result: $Utils.Optional<PerfilEstudianteCountAggregateOutputType> | number
          }
        }
      }
      Servicio: {
        payload: Prisma.$ServicioPayload<ExtArgs>
        fields: Prisma.ServicioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          findFirst: {
            args: Prisma.ServicioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          findMany: {
            args: Prisma.ServicioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>[]
          }
          create: {
            args: Prisma.ServicioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          createMany: {
            args: Prisma.ServicioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServicioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>[]
          }
          delete: {
            args: Prisma.ServicioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          update: {
            args: Prisma.ServicioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          deleteMany: {
            args: Prisma.ServicioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServicioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>[]
          }
          upsert: {
            args: Prisma.ServicioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          aggregate: {
            args: Prisma.ServicioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServicio>
          }
          groupBy: {
            args: Prisma.ServicioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicioCountArgs<ExtArgs>
            result: $Utils.Optional<ServicioCountAggregateOutputType> | number
          }
        }
      }
      SolicitudServicio: {
        payload: Prisma.$SolicitudServicioPayload<ExtArgs>
        fields: Prisma.SolicitudServicioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SolicitudServicioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudServicioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SolicitudServicioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudServicioPayload>
          }
          findFirst: {
            args: Prisma.SolicitudServicioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudServicioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SolicitudServicioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudServicioPayload>
          }
          findMany: {
            args: Prisma.SolicitudServicioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudServicioPayload>[]
          }
          create: {
            args: Prisma.SolicitudServicioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudServicioPayload>
          }
          createMany: {
            args: Prisma.SolicitudServicioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SolicitudServicioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudServicioPayload>[]
          }
          delete: {
            args: Prisma.SolicitudServicioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudServicioPayload>
          }
          update: {
            args: Prisma.SolicitudServicioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudServicioPayload>
          }
          deleteMany: {
            args: Prisma.SolicitudServicioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SolicitudServicioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SolicitudServicioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudServicioPayload>[]
          }
          upsert: {
            args: Prisma.SolicitudServicioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudServicioPayload>
          }
          aggregate: {
            args: Prisma.SolicitudServicioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSolicitudServicio>
          }
          groupBy: {
            args: Prisma.SolicitudServicioGroupByArgs<ExtArgs>
            result: $Utils.Optional<SolicitudServicioGroupByOutputType>[]
          }
          count: {
            args: Prisma.SolicitudServicioCountArgs<ExtArgs>
            result: $Utils.Optional<SolicitudServicioCountAggregateOutputType> | number
          }
        }
      }
      Resena: {
        payload: Prisma.$ResenaPayload<ExtArgs>
        fields: Prisma.ResenaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResenaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResenaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaPayload>
          }
          findFirst: {
            args: Prisma.ResenaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResenaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaPayload>
          }
          findMany: {
            args: Prisma.ResenaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaPayload>[]
          }
          create: {
            args: Prisma.ResenaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaPayload>
          }
          createMany: {
            args: Prisma.ResenaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResenaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaPayload>[]
          }
          delete: {
            args: Prisma.ResenaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaPayload>
          }
          update: {
            args: Prisma.ResenaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaPayload>
          }
          deleteMany: {
            args: Prisma.ResenaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResenaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResenaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaPayload>[]
          }
          upsert: {
            args: Prisma.ResenaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaPayload>
          }
          aggregate: {
            args: Prisma.ResenaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResena>
          }
          groupBy: {
            args: Prisma.ResenaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResenaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResenaCountArgs<ExtArgs>
            result: $Utils.Optional<ResenaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    perfilEstudiante?: PerfilEstudianteOmit
    servicio?: ServicioOmit
    solicitudServicio?: SolicitudServicioOmit
    resena?: ResenaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    resenas: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resenas?: boolean | UsuarioCountOutputTypeCountResenasArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountResenasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResenaWhereInput
  }


  /**
   * Count Type ServicioCountOutputType
   */

  export type ServicioCountOutputType = {
    resenas: number
  }

  export type ServicioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resenas?: boolean | ServicioCountOutputTypeCountResenasArgs
  }

  // Custom InputTypes
  /**
   * ServicioCountOutputType without action
   */
  export type ServicioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioCountOutputType
     */
    select?: ServicioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServicioCountOutputType without action
   */
  export type ServicioCountOutputTypeCountResenasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResenaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    apellido: string | null
    email: string | null
    contraseña: string | null
    rol: $Enums.Rol | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    apellido: string | null
    email: string | null
    contraseña: string | null
    rol: $Enums.Rol | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    apellido: number
    email: number
    contraseña: number
    rol: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    email?: true
    contraseña?: true
    rol?: true
    createdAt?: true
    updateAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    email?: true
    contraseña?: true
    rol?: true
    createdAt?: true
    updateAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    email?: true
    contraseña?: true
    rol?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    nombre: string
    apellido: string
    email: string
    contraseña: string
    rol: $Enums.Rol
    createdAt: Date
    updateAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    contraseña?: boolean
    rol?: boolean
    createdAt?: boolean
    updateAt?: boolean
    resenas?: boolean | Usuario$resenasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    contraseña?: boolean
    rol?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    contraseña?: boolean
    rol?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    contraseña?: boolean
    rol?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "apellido" | "email" | "contraseña" | "rol" | "createdAt" | "updateAt", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resenas?: boolean | Usuario$resenasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      resenas: Prisma.$ResenaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      apellido: string
      email: string
      contraseña: string
      rol: $Enums.Rol
      createdAt: Date
      updateAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resenas<T extends Usuario$resenasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$resenasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResenaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly apellido: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly contraseña: FieldRef<"Usuario", 'String'>
    readonly rol: FieldRef<"Usuario", 'Rol'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly updateAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.resenas
   */
  export type Usuario$resenasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resena
     */
    select?: ResenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resena
     */
    omit?: ResenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaInclude<ExtArgs> | null
    where?: ResenaWhereInput
    orderBy?: ResenaOrderByWithRelationInput | ResenaOrderByWithRelationInput[]
    cursor?: ResenaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResenaScalarFieldEnum | ResenaScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model PerfilEstudiante
   */

  export type AggregatePerfilEstudiante = {
    _count: PerfilEstudianteCountAggregateOutputType | null
    _min: PerfilEstudianteMinAggregateOutputType | null
    _max: PerfilEstudianteMaxAggregateOutputType | null
  }

  export type PerfilEstudianteMinAggregateOutputType = {
    id: string | null
    universidad: string | null
    carrera: string | null
    descripcion: string | null
    createdAt: Date | null
  }

  export type PerfilEstudianteMaxAggregateOutputType = {
    id: string | null
    universidad: string | null
    carrera: string | null
    descripcion: string | null
    createdAt: Date | null
  }

  export type PerfilEstudianteCountAggregateOutputType = {
    id: number
    universidad: number
    carrera: number
    descripcion: number
    habilidades: number
    createdAt: number
    _all: number
  }


  export type PerfilEstudianteMinAggregateInputType = {
    id?: true
    universidad?: true
    carrera?: true
    descripcion?: true
    createdAt?: true
  }

  export type PerfilEstudianteMaxAggregateInputType = {
    id?: true
    universidad?: true
    carrera?: true
    descripcion?: true
    createdAt?: true
  }

  export type PerfilEstudianteCountAggregateInputType = {
    id?: true
    universidad?: true
    carrera?: true
    descripcion?: true
    habilidades?: true
    createdAt?: true
    _all?: true
  }

  export type PerfilEstudianteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PerfilEstudiante to aggregate.
     */
    where?: PerfilEstudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PerfilEstudiantes to fetch.
     */
    orderBy?: PerfilEstudianteOrderByWithRelationInput | PerfilEstudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PerfilEstudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PerfilEstudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PerfilEstudiantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PerfilEstudiantes
    **/
    _count?: true | PerfilEstudianteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PerfilEstudianteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PerfilEstudianteMaxAggregateInputType
  }

  export type GetPerfilEstudianteAggregateType<T extends PerfilEstudianteAggregateArgs> = {
        [P in keyof T & keyof AggregatePerfilEstudiante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerfilEstudiante[P]>
      : GetScalarType<T[P], AggregatePerfilEstudiante[P]>
  }




  export type PerfilEstudianteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerfilEstudianteWhereInput
    orderBy?: PerfilEstudianteOrderByWithAggregationInput | PerfilEstudianteOrderByWithAggregationInput[]
    by: PerfilEstudianteScalarFieldEnum[] | PerfilEstudianteScalarFieldEnum
    having?: PerfilEstudianteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PerfilEstudianteCountAggregateInputType | true
    _min?: PerfilEstudianteMinAggregateInputType
    _max?: PerfilEstudianteMaxAggregateInputType
  }

  export type PerfilEstudianteGroupByOutputType = {
    id: string
    universidad: string
    carrera: string
    descripcion: string
    habilidades: string[]
    createdAt: Date
    _count: PerfilEstudianteCountAggregateOutputType | null
    _min: PerfilEstudianteMinAggregateOutputType | null
    _max: PerfilEstudianteMaxAggregateOutputType | null
  }

  type GetPerfilEstudianteGroupByPayload<T extends PerfilEstudianteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PerfilEstudianteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PerfilEstudianteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PerfilEstudianteGroupByOutputType[P]>
            : GetScalarType<T[P], PerfilEstudianteGroupByOutputType[P]>
        }
      >
    >


  export type PerfilEstudianteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    universidad?: boolean
    carrera?: boolean
    descripcion?: boolean
    habilidades?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["perfilEstudiante"]>

  export type PerfilEstudianteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    universidad?: boolean
    carrera?: boolean
    descripcion?: boolean
    habilidades?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["perfilEstudiante"]>

  export type PerfilEstudianteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    universidad?: boolean
    carrera?: boolean
    descripcion?: boolean
    habilidades?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["perfilEstudiante"]>

  export type PerfilEstudianteSelectScalar = {
    id?: boolean
    universidad?: boolean
    carrera?: boolean
    descripcion?: boolean
    habilidades?: boolean
    createdAt?: boolean
  }

  export type PerfilEstudianteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "universidad" | "carrera" | "descripcion" | "habilidades" | "createdAt", ExtArgs["result"]["perfilEstudiante"]>

  export type $PerfilEstudiantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PerfilEstudiante"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      universidad: string
      carrera: string
      descripcion: string
      habilidades: string[]
      createdAt: Date
    }, ExtArgs["result"]["perfilEstudiante"]>
    composites: {}
  }

  type PerfilEstudianteGetPayload<S extends boolean | null | undefined | PerfilEstudianteDefaultArgs> = $Result.GetResult<Prisma.$PerfilEstudiantePayload, S>

  type PerfilEstudianteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PerfilEstudianteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PerfilEstudianteCountAggregateInputType | true
    }

  export interface PerfilEstudianteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PerfilEstudiante'], meta: { name: 'PerfilEstudiante' } }
    /**
     * Find zero or one PerfilEstudiante that matches the filter.
     * @param {PerfilEstudianteFindUniqueArgs} args - Arguments to find a PerfilEstudiante
     * @example
     * // Get one PerfilEstudiante
     * const perfilEstudiante = await prisma.perfilEstudiante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PerfilEstudianteFindUniqueArgs>(args: SelectSubset<T, PerfilEstudianteFindUniqueArgs<ExtArgs>>): Prisma__PerfilEstudianteClient<$Result.GetResult<Prisma.$PerfilEstudiantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PerfilEstudiante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PerfilEstudianteFindUniqueOrThrowArgs} args - Arguments to find a PerfilEstudiante
     * @example
     * // Get one PerfilEstudiante
     * const perfilEstudiante = await prisma.perfilEstudiante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PerfilEstudianteFindUniqueOrThrowArgs>(args: SelectSubset<T, PerfilEstudianteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PerfilEstudianteClient<$Result.GetResult<Prisma.$PerfilEstudiantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PerfilEstudiante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilEstudianteFindFirstArgs} args - Arguments to find a PerfilEstudiante
     * @example
     * // Get one PerfilEstudiante
     * const perfilEstudiante = await prisma.perfilEstudiante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PerfilEstudianteFindFirstArgs>(args?: SelectSubset<T, PerfilEstudianteFindFirstArgs<ExtArgs>>): Prisma__PerfilEstudianteClient<$Result.GetResult<Prisma.$PerfilEstudiantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PerfilEstudiante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilEstudianteFindFirstOrThrowArgs} args - Arguments to find a PerfilEstudiante
     * @example
     * // Get one PerfilEstudiante
     * const perfilEstudiante = await prisma.perfilEstudiante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PerfilEstudianteFindFirstOrThrowArgs>(args?: SelectSubset<T, PerfilEstudianteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PerfilEstudianteClient<$Result.GetResult<Prisma.$PerfilEstudiantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PerfilEstudiantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilEstudianteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PerfilEstudiantes
     * const perfilEstudiantes = await prisma.perfilEstudiante.findMany()
     * 
     * // Get first 10 PerfilEstudiantes
     * const perfilEstudiantes = await prisma.perfilEstudiante.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const perfilEstudianteWithIdOnly = await prisma.perfilEstudiante.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PerfilEstudianteFindManyArgs>(args?: SelectSubset<T, PerfilEstudianteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerfilEstudiantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PerfilEstudiante.
     * @param {PerfilEstudianteCreateArgs} args - Arguments to create a PerfilEstudiante.
     * @example
     * // Create one PerfilEstudiante
     * const PerfilEstudiante = await prisma.perfilEstudiante.create({
     *   data: {
     *     // ... data to create a PerfilEstudiante
     *   }
     * })
     * 
     */
    create<T extends PerfilEstudianteCreateArgs>(args: SelectSubset<T, PerfilEstudianteCreateArgs<ExtArgs>>): Prisma__PerfilEstudianteClient<$Result.GetResult<Prisma.$PerfilEstudiantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PerfilEstudiantes.
     * @param {PerfilEstudianteCreateManyArgs} args - Arguments to create many PerfilEstudiantes.
     * @example
     * // Create many PerfilEstudiantes
     * const perfilEstudiante = await prisma.perfilEstudiante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PerfilEstudianteCreateManyArgs>(args?: SelectSubset<T, PerfilEstudianteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PerfilEstudiantes and returns the data saved in the database.
     * @param {PerfilEstudianteCreateManyAndReturnArgs} args - Arguments to create many PerfilEstudiantes.
     * @example
     * // Create many PerfilEstudiantes
     * const perfilEstudiante = await prisma.perfilEstudiante.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PerfilEstudiantes and only return the `id`
     * const perfilEstudianteWithIdOnly = await prisma.perfilEstudiante.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PerfilEstudianteCreateManyAndReturnArgs>(args?: SelectSubset<T, PerfilEstudianteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerfilEstudiantePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PerfilEstudiante.
     * @param {PerfilEstudianteDeleteArgs} args - Arguments to delete one PerfilEstudiante.
     * @example
     * // Delete one PerfilEstudiante
     * const PerfilEstudiante = await prisma.perfilEstudiante.delete({
     *   where: {
     *     // ... filter to delete one PerfilEstudiante
     *   }
     * })
     * 
     */
    delete<T extends PerfilEstudianteDeleteArgs>(args: SelectSubset<T, PerfilEstudianteDeleteArgs<ExtArgs>>): Prisma__PerfilEstudianteClient<$Result.GetResult<Prisma.$PerfilEstudiantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PerfilEstudiante.
     * @param {PerfilEstudianteUpdateArgs} args - Arguments to update one PerfilEstudiante.
     * @example
     * // Update one PerfilEstudiante
     * const perfilEstudiante = await prisma.perfilEstudiante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PerfilEstudianteUpdateArgs>(args: SelectSubset<T, PerfilEstudianteUpdateArgs<ExtArgs>>): Prisma__PerfilEstudianteClient<$Result.GetResult<Prisma.$PerfilEstudiantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PerfilEstudiantes.
     * @param {PerfilEstudianteDeleteManyArgs} args - Arguments to filter PerfilEstudiantes to delete.
     * @example
     * // Delete a few PerfilEstudiantes
     * const { count } = await prisma.perfilEstudiante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PerfilEstudianteDeleteManyArgs>(args?: SelectSubset<T, PerfilEstudianteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PerfilEstudiantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilEstudianteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PerfilEstudiantes
     * const perfilEstudiante = await prisma.perfilEstudiante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PerfilEstudianteUpdateManyArgs>(args: SelectSubset<T, PerfilEstudianteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PerfilEstudiantes and returns the data updated in the database.
     * @param {PerfilEstudianteUpdateManyAndReturnArgs} args - Arguments to update many PerfilEstudiantes.
     * @example
     * // Update many PerfilEstudiantes
     * const perfilEstudiante = await prisma.perfilEstudiante.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PerfilEstudiantes and only return the `id`
     * const perfilEstudianteWithIdOnly = await prisma.perfilEstudiante.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PerfilEstudianteUpdateManyAndReturnArgs>(args: SelectSubset<T, PerfilEstudianteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerfilEstudiantePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PerfilEstudiante.
     * @param {PerfilEstudianteUpsertArgs} args - Arguments to update or create a PerfilEstudiante.
     * @example
     * // Update or create a PerfilEstudiante
     * const perfilEstudiante = await prisma.perfilEstudiante.upsert({
     *   create: {
     *     // ... data to create a PerfilEstudiante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PerfilEstudiante we want to update
     *   }
     * })
     */
    upsert<T extends PerfilEstudianteUpsertArgs>(args: SelectSubset<T, PerfilEstudianteUpsertArgs<ExtArgs>>): Prisma__PerfilEstudianteClient<$Result.GetResult<Prisma.$PerfilEstudiantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PerfilEstudiantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilEstudianteCountArgs} args - Arguments to filter PerfilEstudiantes to count.
     * @example
     * // Count the number of PerfilEstudiantes
     * const count = await prisma.perfilEstudiante.count({
     *   where: {
     *     // ... the filter for the PerfilEstudiantes we want to count
     *   }
     * })
    **/
    count<T extends PerfilEstudianteCountArgs>(
      args?: Subset<T, PerfilEstudianteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PerfilEstudianteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PerfilEstudiante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilEstudianteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PerfilEstudianteAggregateArgs>(args: Subset<T, PerfilEstudianteAggregateArgs>): Prisma.PrismaPromise<GetPerfilEstudianteAggregateType<T>>

    /**
     * Group by PerfilEstudiante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilEstudianteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PerfilEstudianteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PerfilEstudianteGroupByArgs['orderBy'] }
        : { orderBy?: PerfilEstudianteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PerfilEstudianteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerfilEstudianteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PerfilEstudiante model
   */
  readonly fields: PerfilEstudianteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PerfilEstudiante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PerfilEstudianteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PerfilEstudiante model
   */
  interface PerfilEstudianteFieldRefs {
    readonly id: FieldRef<"PerfilEstudiante", 'String'>
    readonly universidad: FieldRef<"PerfilEstudiante", 'String'>
    readonly carrera: FieldRef<"PerfilEstudiante", 'String'>
    readonly descripcion: FieldRef<"PerfilEstudiante", 'String'>
    readonly habilidades: FieldRef<"PerfilEstudiante", 'String[]'>
    readonly createdAt: FieldRef<"PerfilEstudiante", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PerfilEstudiante findUnique
   */
  export type PerfilEstudianteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerfilEstudiante
     */
    select?: PerfilEstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerfilEstudiante
     */
    omit?: PerfilEstudianteOmit<ExtArgs> | null
    /**
     * Filter, which PerfilEstudiante to fetch.
     */
    where: PerfilEstudianteWhereUniqueInput
  }

  /**
   * PerfilEstudiante findUniqueOrThrow
   */
  export type PerfilEstudianteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerfilEstudiante
     */
    select?: PerfilEstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerfilEstudiante
     */
    omit?: PerfilEstudianteOmit<ExtArgs> | null
    /**
     * Filter, which PerfilEstudiante to fetch.
     */
    where: PerfilEstudianteWhereUniqueInput
  }

  /**
   * PerfilEstudiante findFirst
   */
  export type PerfilEstudianteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerfilEstudiante
     */
    select?: PerfilEstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerfilEstudiante
     */
    omit?: PerfilEstudianteOmit<ExtArgs> | null
    /**
     * Filter, which PerfilEstudiante to fetch.
     */
    where?: PerfilEstudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PerfilEstudiantes to fetch.
     */
    orderBy?: PerfilEstudianteOrderByWithRelationInput | PerfilEstudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PerfilEstudiantes.
     */
    cursor?: PerfilEstudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PerfilEstudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PerfilEstudiantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PerfilEstudiantes.
     */
    distinct?: PerfilEstudianteScalarFieldEnum | PerfilEstudianteScalarFieldEnum[]
  }

  /**
   * PerfilEstudiante findFirstOrThrow
   */
  export type PerfilEstudianteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerfilEstudiante
     */
    select?: PerfilEstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerfilEstudiante
     */
    omit?: PerfilEstudianteOmit<ExtArgs> | null
    /**
     * Filter, which PerfilEstudiante to fetch.
     */
    where?: PerfilEstudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PerfilEstudiantes to fetch.
     */
    orderBy?: PerfilEstudianteOrderByWithRelationInput | PerfilEstudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PerfilEstudiantes.
     */
    cursor?: PerfilEstudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PerfilEstudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PerfilEstudiantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PerfilEstudiantes.
     */
    distinct?: PerfilEstudianteScalarFieldEnum | PerfilEstudianteScalarFieldEnum[]
  }

  /**
   * PerfilEstudiante findMany
   */
  export type PerfilEstudianteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerfilEstudiante
     */
    select?: PerfilEstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerfilEstudiante
     */
    omit?: PerfilEstudianteOmit<ExtArgs> | null
    /**
     * Filter, which PerfilEstudiantes to fetch.
     */
    where?: PerfilEstudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PerfilEstudiantes to fetch.
     */
    orderBy?: PerfilEstudianteOrderByWithRelationInput | PerfilEstudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PerfilEstudiantes.
     */
    cursor?: PerfilEstudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PerfilEstudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PerfilEstudiantes.
     */
    skip?: number
    distinct?: PerfilEstudianteScalarFieldEnum | PerfilEstudianteScalarFieldEnum[]
  }

  /**
   * PerfilEstudiante create
   */
  export type PerfilEstudianteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerfilEstudiante
     */
    select?: PerfilEstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerfilEstudiante
     */
    omit?: PerfilEstudianteOmit<ExtArgs> | null
    /**
     * The data needed to create a PerfilEstudiante.
     */
    data: XOR<PerfilEstudianteCreateInput, PerfilEstudianteUncheckedCreateInput>
  }

  /**
   * PerfilEstudiante createMany
   */
  export type PerfilEstudianteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PerfilEstudiantes.
     */
    data: PerfilEstudianteCreateManyInput | PerfilEstudianteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PerfilEstudiante createManyAndReturn
   */
  export type PerfilEstudianteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerfilEstudiante
     */
    select?: PerfilEstudianteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PerfilEstudiante
     */
    omit?: PerfilEstudianteOmit<ExtArgs> | null
    /**
     * The data used to create many PerfilEstudiantes.
     */
    data: PerfilEstudianteCreateManyInput | PerfilEstudianteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PerfilEstudiante update
   */
  export type PerfilEstudianteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerfilEstudiante
     */
    select?: PerfilEstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerfilEstudiante
     */
    omit?: PerfilEstudianteOmit<ExtArgs> | null
    /**
     * The data needed to update a PerfilEstudiante.
     */
    data: XOR<PerfilEstudianteUpdateInput, PerfilEstudianteUncheckedUpdateInput>
    /**
     * Choose, which PerfilEstudiante to update.
     */
    where: PerfilEstudianteWhereUniqueInput
  }

  /**
   * PerfilEstudiante updateMany
   */
  export type PerfilEstudianteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PerfilEstudiantes.
     */
    data: XOR<PerfilEstudianteUpdateManyMutationInput, PerfilEstudianteUncheckedUpdateManyInput>
    /**
     * Filter which PerfilEstudiantes to update
     */
    where?: PerfilEstudianteWhereInput
    /**
     * Limit how many PerfilEstudiantes to update.
     */
    limit?: number
  }

  /**
   * PerfilEstudiante updateManyAndReturn
   */
  export type PerfilEstudianteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerfilEstudiante
     */
    select?: PerfilEstudianteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PerfilEstudiante
     */
    omit?: PerfilEstudianteOmit<ExtArgs> | null
    /**
     * The data used to update PerfilEstudiantes.
     */
    data: XOR<PerfilEstudianteUpdateManyMutationInput, PerfilEstudianteUncheckedUpdateManyInput>
    /**
     * Filter which PerfilEstudiantes to update
     */
    where?: PerfilEstudianteWhereInput
    /**
     * Limit how many PerfilEstudiantes to update.
     */
    limit?: number
  }

  /**
   * PerfilEstudiante upsert
   */
  export type PerfilEstudianteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerfilEstudiante
     */
    select?: PerfilEstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerfilEstudiante
     */
    omit?: PerfilEstudianteOmit<ExtArgs> | null
    /**
     * The filter to search for the PerfilEstudiante to update in case it exists.
     */
    where: PerfilEstudianteWhereUniqueInput
    /**
     * In case the PerfilEstudiante found by the `where` argument doesn't exist, create a new PerfilEstudiante with this data.
     */
    create: XOR<PerfilEstudianteCreateInput, PerfilEstudianteUncheckedCreateInput>
    /**
     * In case the PerfilEstudiante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PerfilEstudianteUpdateInput, PerfilEstudianteUncheckedUpdateInput>
  }

  /**
   * PerfilEstudiante delete
   */
  export type PerfilEstudianteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerfilEstudiante
     */
    select?: PerfilEstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerfilEstudiante
     */
    omit?: PerfilEstudianteOmit<ExtArgs> | null
    /**
     * Filter which PerfilEstudiante to delete.
     */
    where: PerfilEstudianteWhereUniqueInput
  }

  /**
   * PerfilEstudiante deleteMany
   */
  export type PerfilEstudianteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PerfilEstudiantes to delete
     */
    where?: PerfilEstudianteWhereInput
    /**
     * Limit how many PerfilEstudiantes to delete.
     */
    limit?: number
  }

  /**
   * PerfilEstudiante without action
   */
  export type PerfilEstudianteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerfilEstudiante
     */
    select?: PerfilEstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerfilEstudiante
     */
    omit?: PerfilEstudianteOmit<ExtArgs> | null
  }


  /**
   * Model Servicio
   */

  export type AggregateServicio = {
    _count: ServicioCountAggregateOutputType | null
    _min: ServicioMinAggregateOutputType | null
    _max: ServicioMaxAggregateOutputType | null
  }

  export type ServicioMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    descripcion: string | null
    categoria: string | null
    estado: $Enums.EstadoServicio | null
    createdAt: Date | null
    active: boolean | null
  }

  export type ServicioMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    descripcion: string | null
    categoria: string | null
    estado: $Enums.EstadoServicio | null
    createdAt: Date | null
    active: boolean | null
  }

  export type ServicioCountAggregateOutputType = {
    id: number
    titulo: number
    descripcion: number
    categoria: number
    estado: number
    createdAt: number
    active: number
    _all: number
  }


  export type ServicioMinAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    categoria?: true
    estado?: true
    createdAt?: true
    active?: true
  }

  export type ServicioMaxAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    categoria?: true
    estado?: true
    createdAt?: true
    active?: true
  }

  export type ServicioCountAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    categoria?: true
    estado?: true
    createdAt?: true
    active?: true
    _all?: true
  }

  export type ServicioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servicio to aggregate.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Servicios
    **/
    _count?: true | ServicioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicioMaxAggregateInputType
  }

  export type GetServicioAggregateType<T extends ServicioAggregateArgs> = {
        [P in keyof T & keyof AggregateServicio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicio[P]>
      : GetScalarType<T[P], AggregateServicio[P]>
  }




  export type ServicioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicioWhereInput
    orderBy?: ServicioOrderByWithAggregationInput | ServicioOrderByWithAggregationInput[]
    by: ServicioScalarFieldEnum[] | ServicioScalarFieldEnum
    having?: ServicioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicioCountAggregateInputType | true
    _min?: ServicioMinAggregateInputType
    _max?: ServicioMaxAggregateInputType
  }

  export type ServicioGroupByOutputType = {
    id: string
    titulo: string
    descripcion: string
    categoria: string
    estado: $Enums.EstadoServicio
    createdAt: Date
    active: boolean
    _count: ServicioCountAggregateOutputType | null
    _min: ServicioMinAggregateOutputType | null
    _max: ServicioMaxAggregateOutputType | null
  }

  type GetServicioGroupByPayload<T extends ServicioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicioGroupByOutputType[P]>
            : GetScalarType<T[P], ServicioGroupByOutputType[P]>
        }
      >
    >


  export type ServicioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    categoria?: boolean
    estado?: boolean
    createdAt?: boolean
    active?: boolean
    resenas?: boolean | Servicio$resenasArgs<ExtArgs>
    _count?: boolean | ServicioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicio"]>

  export type ServicioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    categoria?: boolean
    estado?: boolean
    createdAt?: boolean
    active?: boolean
  }, ExtArgs["result"]["servicio"]>

  export type ServicioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    categoria?: boolean
    estado?: boolean
    createdAt?: boolean
    active?: boolean
  }, ExtArgs["result"]["servicio"]>

  export type ServicioSelectScalar = {
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    categoria?: boolean
    estado?: boolean
    createdAt?: boolean
    active?: boolean
  }

  export type ServicioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descripcion" | "categoria" | "estado" | "createdAt" | "active", ExtArgs["result"]["servicio"]>
  export type ServicioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resenas?: boolean | Servicio$resenasArgs<ExtArgs>
    _count?: boolean | ServicioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServicioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ServicioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServicioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Servicio"
    objects: {
      resenas: Prisma.$ResenaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      descripcion: string
      categoria: string
      estado: $Enums.EstadoServicio
      createdAt: Date
      active: boolean
    }, ExtArgs["result"]["servicio"]>
    composites: {}
  }

  type ServicioGetPayload<S extends boolean | null | undefined | ServicioDefaultArgs> = $Result.GetResult<Prisma.$ServicioPayload, S>

  type ServicioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServicioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicioCountAggregateInputType | true
    }

  export interface ServicioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Servicio'], meta: { name: 'Servicio' } }
    /**
     * Find zero or one Servicio that matches the filter.
     * @param {ServicioFindUniqueArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicioFindUniqueArgs>(args: SelectSubset<T, ServicioFindUniqueArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Servicio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServicioFindUniqueOrThrowArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicioFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servicio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioFindFirstArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicioFindFirstArgs>(args?: SelectSubset<T, ServicioFindFirstArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servicio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioFindFirstOrThrowArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicioFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servicios
     * const servicios = await prisma.servicio.findMany()
     * 
     * // Get first 10 Servicios
     * const servicios = await prisma.servicio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicioWithIdOnly = await prisma.servicio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServicioFindManyArgs>(args?: SelectSubset<T, ServicioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Servicio.
     * @param {ServicioCreateArgs} args - Arguments to create a Servicio.
     * @example
     * // Create one Servicio
     * const Servicio = await prisma.servicio.create({
     *   data: {
     *     // ... data to create a Servicio
     *   }
     * })
     * 
     */
    create<T extends ServicioCreateArgs>(args: SelectSubset<T, ServicioCreateArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servicios.
     * @param {ServicioCreateManyArgs} args - Arguments to create many Servicios.
     * @example
     * // Create many Servicios
     * const servicio = await prisma.servicio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicioCreateManyArgs>(args?: SelectSubset<T, ServicioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Servicios and returns the data saved in the database.
     * @param {ServicioCreateManyAndReturnArgs} args - Arguments to create many Servicios.
     * @example
     * // Create many Servicios
     * const servicio = await prisma.servicio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Servicios and only return the `id`
     * const servicioWithIdOnly = await prisma.servicio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServicioCreateManyAndReturnArgs>(args?: SelectSubset<T, ServicioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Servicio.
     * @param {ServicioDeleteArgs} args - Arguments to delete one Servicio.
     * @example
     * // Delete one Servicio
     * const Servicio = await prisma.servicio.delete({
     *   where: {
     *     // ... filter to delete one Servicio
     *   }
     * })
     * 
     */
    delete<T extends ServicioDeleteArgs>(args: SelectSubset<T, ServicioDeleteArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Servicio.
     * @param {ServicioUpdateArgs} args - Arguments to update one Servicio.
     * @example
     * // Update one Servicio
     * const servicio = await prisma.servicio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicioUpdateArgs>(args: SelectSubset<T, ServicioUpdateArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servicios.
     * @param {ServicioDeleteManyArgs} args - Arguments to filter Servicios to delete.
     * @example
     * // Delete a few Servicios
     * const { count } = await prisma.servicio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicioDeleteManyArgs>(args?: SelectSubset<T, ServicioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servicios
     * const servicio = await prisma.servicio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicioUpdateManyArgs>(args: SelectSubset<T, ServicioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicios and returns the data updated in the database.
     * @param {ServicioUpdateManyAndReturnArgs} args - Arguments to update many Servicios.
     * @example
     * // Update many Servicios
     * const servicio = await prisma.servicio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Servicios and only return the `id`
     * const servicioWithIdOnly = await prisma.servicio.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServicioUpdateManyAndReturnArgs>(args: SelectSubset<T, ServicioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Servicio.
     * @param {ServicioUpsertArgs} args - Arguments to update or create a Servicio.
     * @example
     * // Update or create a Servicio
     * const servicio = await prisma.servicio.upsert({
     *   create: {
     *     // ... data to create a Servicio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servicio we want to update
     *   }
     * })
     */
    upsert<T extends ServicioUpsertArgs>(args: SelectSubset<T, ServicioUpsertArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Servicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioCountArgs} args - Arguments to filter Servicios to count.
     * @example
     * // Count the number of Servicios
     * const count = await prisma.servicio.count({
     *   where: {
     *     // ... the filter for the Servicios we want to count
     *   }
     * })
    **/
    count<T extends ServicioCountArgs>(
      args?: Subset<T, ServicioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServicioAggregateArgs>(args: Subset<T, ServicioAggregateArgs>): Prisma.PrismaPromise<GetServicioAggregateType<T>>

    /**
     * Group by Servicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServicioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicioGroupByArgs['orderBy'] }
        : { orderBy?: ServicioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Servicio model
   */
  readonly fields: ServicioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Servicio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resenas<T extends Servicio$resenasArgs<ExtArgs> = {}>(args?: Subset<T, Servicio$resenasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResenaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Servicio model
   */
  interface ServicioFieldRefs {
    readonly id: FieldRef<"Servicio", 'String'>
    readonly titulo: FieldRef<"Servicio", 'String'>
    readonly descripcion: FieldRef<"Servicio", 'String'>
    readonly categoria: FieldRef<"Servicio", 'String'>
    readonly estado: FieldRef<"Servicio", 'EstadoServicio'>
    readonly createdAt: FieldRef<"Servicio", 'DateTime'>
    readonly active: FieldRef<"Servicio", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Servicio findUnique
   */
  export type ServicioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where: ServicioWhereUniqueInput
  }

  /**
   * Servicio findUniqueOrThrow
   */
  export type ServicioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where: ServicioWhereUniqueInput
  }

  /**
   * Servicio findFirst
   */
  export type ServicioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicios.
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicios.
     */
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }

  /**
   * Servicio findFirstOrThrow
   */
  export type ServicioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicios.
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicios.
     */
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }

  /**
   * Servicio findMany
   */
  export type ServicioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicios to fetch.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Servicios.
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }

  /**
   * Servicio create
   */
  export type ServicioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * The data needed to create a Servicio.
     */
    data: XOR<ServicioCreateInput, ServicioUncheckedCreateInput>
  }

  /**
   * Servicio createMany
   */
  export type ServicioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Servicios.
     */
    data: ServicioCreateManyInput | ServicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Servicio createManyAndReturn
   */
  export type ServicioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * The data used to create many Servicios.
     */
    data: ServicioCreateManyInput | ServicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Servicio update
   */
  export type ServicioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * The data needed to update a Servicio.
     */
    data: XOR<ServicioUpdateInput, ServicioUncheckedUpdateInput>
    /**
     * Choose, which Servicio to update.
     */
    where: ServicioWhereUniqueInput
  }

  /**
   * Servicio updateMany
   */
  export type ServicioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Servicios.
     */
    data: XOR<ServicioUpdateManyMutationInput, ServicioUncheckedUpdateManyInput>
    /**
     * Filter which Servicios to update
     */
    where?: ServicioWhereInput
    /**
     * Limit how many Servicios to update.
     */
    limit?: number
  }

  /**
   * Servicio updateManyAndReturn
   */
  export type ServicioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * The data used to update Servicios.
     */
    data: XOR<ServicioUpdateManyMutationInput, ServicioUncheckedUpdateManyInput>
    /**
     * Filter which Servicios to update
     */
    where?: ServicioWhereInput
    /**
     * Limit how many Servicios to update.
     */
    limit?: number
  }

  /**
   * Servicio upsert
   */
  export type ServicioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * The filter to search for the Servicio to update in case it exists.
     */
    where: ServicioWhereUniqueInput
    /**
     * In case the Servicio found by the `where` argument doesn't exist, create a new Servicio with this data.
     */
    create: XOR<ServicioCreateInput, ServicioUncheckedCreateInput>
    /**
     * In case the Servicio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicioUpdateInput, ServicioUncheckedUpdateInput>
  }

  /**
   * Servicio delete
   */
  export type ServicioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter which Servicio to delete.
     */
    where: ServicioWhereUniqueInput
  }

  /**
   * Servicio deleteMany
   */
  export type ServicioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servicios to delete
     */
    where?: ServicioWhereInput
    /**
     * Limit how many Servicios to delete.
     */
    limit?: number
  }

  /**
   * Servicio.resenas
   */
  export type Servicio$resenasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resena
     */
    select?: ResenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resena
     */
    omit?: ResenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaInclude<ExtArgs> | null
    where?: ResenaWhereInput
    orderBy?: ResenaOrderByWithRelationInput | ResenaOrderByWithRelationInput[]
    cursor?: ResenaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResenaScalarFieldEnum | ResenaScalarFieldEnum[]
  }

  /**
   * Servicio without action
   */
  export type ServicioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
  }


  /**
   * Model SolicitudServicio
   */

  export type AggregateSolicitudServicio = {
    _count: SolicitudServicioCountAggregateOutputType | null
    _min: SolicitudServicioMinAggregateOutputType | null
    _max: SolicitudServicioMaxAggregateOutputType | null
  }

  export type SolicitudServicioMinAggregateOutputType = {
    id: string | null
    mensaje: string | null
    estado: $Enums.EstadoSolicitud | null
    fechaSolicitud: Date | null
    createdAt: Date | null
  }

  export type SolicitudServicioMaxAggregateOutputType = {
    id: string | null
    mensaje: string | null
    estado: $Enums.EstadoSolicitud | null
    fechaSolicitud: Date | null
    createdAt: Date | null
  }

  export type SolicitudServicioCountAggregateOutputType = {
    id: number
    mensaje: number
    estado: number
    fechaSolicitud: number
    createdAt: number
    _all: number
  }


  export type SolicitudServicioMinAggregateInputType = {
    id?: true
    mensaje?: true
    estado?: true
    fechaSolicitud?: true
    createdAt?: true
  }

  export type SolicitudServicioMaxAggregateInputType = {
    id?: true
    mensaje?: true
    estado?: true
    fechaSolicitud?: true
    createdAt?: true
  }

  export type SolicitudServicioCountAggregateInputType = {
    id?: true
    mensaje?: true
    estado?: true
    fechaSolicitud?: true
    createdAt?: true
    _all?: true
  }

  export type SolicitudServicioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SolicitudServicio to aggregate.
     */
    where?: SolicitudServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolicitudServicios to fetch.
     */
    orderBy?: SolicitudServicioOrderByWithRelationInput | SolicitudServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SolicitudServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolicitudServicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolicitudServicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SolicitudServicios
    **/
    _count?: true | SolicitudServicioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SolicitudServicioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SolicitudServicioMaxAggregateInputType
  }

  export type GetSolicitudServicioAggregateType<T extends SolicitudServicioAggregateArgs> = {
        [P in keyof T & keyof AggregateSolicitudServicio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSolicitudServicio[P]>
      : GetScalarType<T[P], AggregateSolicitudServicio[P]>
  }




  export type SolicitudServicioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolicitudServicioWhereInput
    orderBy?: SolicitudServicioOrderByWithAggregationInput | SolicitudServicioOrderByWithAggregationInput[]
    by: SolicitudServicioScalarFieldEnum[] | SolicitudServicioScalarFieldEnum
    having?: SolicitudServicioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SolicitudServicioCountAggregateInputType | true
    _min?: SolicitudServicioMinAggregateInputType
    _max?: SolicitudServicioMaxAggregateInputType
  }

  export type SolicitudServicioGroupByOutputType = {
    id: string
    mensaje: string
    estado: $Enums.EstadoSolicitud
    fechaSolicitud: Date
    createdAt: Date
    _count: SolicitudServicioCountAggregateOutputType | null
    _min: SolicitudServicioMinAggregateOutputType | null
    _max: SolicitudServicioMaxAggregateOutputType | null
  }

  type GetSolicitudServicioGroupByPayload<T extends SolicitudServicioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SolicitudServicioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SolicitudServicioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SolicitudServicioGroupByOutputType[P]>
            : GetScalarType<T[P], SolicitudServicioGroupByOutputType[P]>
        }
      >
    >


  export type SolicitudServicioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mensaje?: boolean
    estado?: boolean
    fechaSolicitud?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["solicitudServicio"]>

  export type SolicitudServicioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mensaje?: boolean
    estado?: boolean
    fechaSolicitud?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["solicitudServicio"]>

  export type SolicitudServicioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mensaje?: boolean
    estado?: boolean
    fechaSolicitud?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["solicitudServicio"]>

  export type SolicitudServicioSelectScalar = {
    id?: boolean
    mensaje?: boolean
    estado?: boolean
    fechaSolicitud?: boolean
    createdAt?: boolean
  }

  export type SolicitudServicioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mensaje" | "estado" | "fechaSolicitud" | "createdAt", ExtArgs["result"]["solicitudServicio"]>

  export type $SolicitudServicioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SolicitudServicio"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mensaje: string
      estado: $Enums.EstadoSolicitud
      fechaSolicitud: Date
      createdAt: Date
    }, ExtArgs["result"]["solicitudServicio"]>
    composites: {}
  }

  type SolicitudServicioGetPayload<S extends boolean | null | undefined | SolicitudServicioDefaultArgs> = $Result.GetResult<Prisma.$SolicitudServicioPayload, S>

  type SolicitudServicioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SolicitudServicioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SolicitudServicioCountAggregateInputType | true
    }

  export interface SolicitudServicioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SolicitudServicio'], meta: { name: 'SolicitudServicio' } }
    /**
     * Find zero or one SolicitudServicio that matches the filter.
     * @param {SolicitudServicioFindUniqueArgs} args - Arguments to find a SolicitudServicio
     * @example
     * // Get one SolicitudServicio
     * const solicitudServicio = await prisma.solicitudServicio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SolicitudServicioFindUniqueArgs>(args: SelectSubset<T, SolicitudServicioFindUniqueArgs<ExtArgs>>): Prisma__SolicitudServicioClient<$Result.GetResult<Prisma.$SolicitudServicioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SolicitudServicio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SolicitudServicioFindUniqueOrThrowArgs} args - Arguments to find a SolicitudServicio
     * @example
     * // Get one SolicitudServicio
     * const solicitudServicio = await prisma.solicitudServicio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SolicitudServicioFindUniqueOrThrowArgs>(args: SelectSubset<T, SolicitudServicioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SolicitudServicioClient<$Result.GetResult<Prisma.$SolicitudServicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SolicitudServicio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudServicioFindFirstArgs} args - Arguments to find a SolicitudServicio
     * @example
     * // Get one SolicitudServicio
     * const solicitudServicio = await prisma.solicitudServicio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SolicitudServicioFindFirstArgs>(args?: SelectSubset<T, SolicitudServicioFindFirstArgs<ExtArgs>>): Prisma__SolicitudServicioClient<$Result.GetResult<Prisma.$SolicitudServicioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SolicitudServicio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudServicioFindFirstOrThrowArgs} args - Arguments to find a SolicitudServicio
     * @example
     * // Get one SolicitudServicio
     * const solicitudServicio = await prisma.solicitudServicio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SolicitudServicioFindFirstOrThrowArgs>(args?: SelectSubset<T, SolicitudServicioFindFirstOrThrowArgs<ExtArgs>>): Prisma__SolicitudServicioClient<$Result.GetResult<Prisma.$SolicitudServicioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SolicitudServicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudServicioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SolicitudServicios
     * const solicitudServicios = await prisma.solicitudServicio.findMany()
     * 
     * // Get first 10 SolicitudServicios
     * const solicitudServicios = await prisma.solicitudServicio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const solicitudServicioWithIdOnly = await prisma.solicitudServicio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SolicitudServicioFindManyArgs>(args?: SelectSubset<T, SolicitudServicioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitudServicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SolicitudServicio.
     * @param {SolicitudServicioCreateArgs} args - Arguments to create a SolicitudServicio.
     * @example
     * // Create one SolicitudServicio
     * const SolicitudServicio = await prisma.solicitudServicio.create({
     *   data: {
     *     // ... data to create a SolicitudServicio
     *   }
     * })
     * 
     */
    create<T extends SolicitudServicioCreateArgs>(args: SelectSubset<T, SolicitudServicioCreateArgs<ExtArgs>>): Prisma__SolicitudServicioClient<$Result.GetResult<Prisma.$SolicitudServicioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SolicitudServicios.
     * @param {SolicitudServicioCreateManyArgs} args - Arguments to create many SolicitudServicios.
     * @example
     * // Create many SolicitudServicios
     * const solicitudServicio = await prisma.solicitudServicio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SolicitudServicioCreateManyArgs>(args?: SelectSubset<T, SolicitudServicioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SolicitudServicios and returns the data saved in the database.
     * @param {SolicitudServicioCreateManyAndReturnArgs} args - Arguments to create many SolicitudServicios.
     * @example
     * // Create many SolicitudServicios
     * const solicitudServicio = await prisma.solicitudServicio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SolicitudServicios and only return the `id`
     * const solicitudServicioWithIdOnly = await prisma.solicitudServicio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SolicitudServicioCreateManyAndReturnArgs>(args?: SelectSubset<T, SolicitudServicioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitudServicioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SolicitudServicio.
     * @param {SolicitudServicioDeleteArgs} args - Arguments to delete one SolicitudServicio.
     * @example
     * // Delete one SolicitudServicio
     * const SolicitudServicio = await prisma.solicitudServicio.delete({
     *   where: {
     *     // ... filter to delete one SolicitudServicio
     *   }
     * })
     * 
     */
    delete<T extends SolicitudServicioDeleteArgs>(args: SelectSubset<T, SolicitudServicioDeleteArgs<ExtArgs>>): Prisma__SolicitudServicioClient<$Result.GetResult<Prisma.$SolicitudServicioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SolicitudServicio.
     * @param {SolicitudServicioUpdateArgs} args - Arguments to update one SolicitudServicio.
     * @example
     * // Update one SolicitudServicio
     * const solicitudServicio = await prisma.solicitudServicio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SolicitudServicioUpdateArgs>(args: SelectSubset<T, SolicitudServicioUpdateArgs<ExtArgs>>): Prisma__SolicitudServicioClient<$Result.GetResult<Prisma.$SolicitudServicioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SolicitudServicios.
     * @param {SolicitudServicioDeleteManyArgs} args - Arguments to filter SolicitudServicios to delete.
     * @example
     * // Delete a few SolicitudServicios
     * const { count } = await prisma.solicitudServicio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SolicitudServicioDeleteManyArgs>(args?: SelectSubset<T, SolicitudServicioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SolicitudServicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudServicioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SolicitudServicios
     * const solicitudServicio = await prisma.solicitudServicio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SolicitudServicioUpdateManyArgs>(args: SelectSubset<T, SolicitudServicioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SolicitudServicios and returns the data updated in the database.
     * @param {SolicitudServicioUpdateManyAndReturnArgs} args - Arguments to update many SolicitudServicios.
     * @example
     * // Update many SolicitudServicios
     * const solicitudServicio = await prisma.solicitudServicio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SolicitudServicios and only return the `id`
     * const solicitudServicioWithIdOnly = await prisma.solicitudServicio.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SolicitudServicioUpdateManyAndReturnArgs>(args: SelectSubset<T, SolicitudServicioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitudServicioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SolicitudServicio.
     * @param {SolicitudServicioUpsertArgs} args - Arguments to update or create a SolicitudServicio.
     * @example
     * // Update or create a SolicitudServicio
     * const solicitudServicio = await prisma.solicitudServicio.upsert({
     *   create: {
     *     // ... data to create a SolicitudServicio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SolicitudServicio we want to update
     *   }
     * })
     */
    upsert<T extends SolicitudServicioUpsertArgs>(args: SelectSubset<T, SolicitudServicioUpsertArgs<ExtArgs>>): Prisma__SolicitudServicioClient<$Result.GetResult<Prisma.$SolicitudServicioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SolicitudServicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudServicioCountArgs} args - Arguments to filter SolicitudServicios to count.
     * @example
     * // Count the number of SolicitudServicios
     * const count = await prisma.solicitudServicio.count({
     *   where: {
     *     // ... the filter for the SolicitudServicios we want to count
     *   }
     * })
    **/
    count<T extends SolicitudServicioCountArgs>(
      args?: Subset<T, SolicitudServicioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SolicitudServicioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SolicitudServicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudServicioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SolicitudServicioAggregateArgs>(args: Subset<T, SolicitudServicioAggregateArgs>): Prisma.PrismaPromise<GetSolicitudServicioAggregateType<T>>

    /**
     * Group by SolicitudServicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudServicioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SolicitudServicioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SolicitudServicioGroupByArgs['orderBy'] }
        : { orderBy?: SolicitudServicioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SolicitudServicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSolicitudServicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SolicitudServicio model
   */
  readonly fields: SolicitudServicioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SolicitudServicio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SolicitudServicioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SolicitudServicio model
   */
  interface SolicitudServicioFieldRefs {
    readonly id: FieldRef<"SolicitudServicio", 'String'>
    readonly mensaje: FieldRef<"SolicitudServicio", 'String'>
    readonly estado: FieldRef<"SolicitudServicio", 'EstadoSolicitud'>
    readonly fechaSolicitud: FieldRef<"SolicitudServicio", 'DateTime'>
    readonly createdAt: FieldRef<"SolicitudServicio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SolicitudServicio findUnique
   */
  export type SolicitudServicioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudServicio
     */
    select?: SolicitudServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudServicio
     */
    omit?: SolicitudServicioOmit<ExtArgs> | null
    /**
     * Filter, which SolicitudServicio to fetch.
     */
    where: SolicitudServicioWhereUniqueInput
  }

  /**
   * SolicitudServicio findUniqueOrThrow
   */
  export type SolicitudServicioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudServicio
     */
    select?: SolicitudServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudServicio
     */
    omit?: SolicitudServicioOmit<ExtArgs> | null
    /**
     * Filter, which SolicitudServicio to fetch.
     */
    where: SolicitudServicioWhereUniqueInput
  }

  /**
   * SolicitudServicio findFirst
   */
  export type SolicitudServicioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudServicio
     */
    select?: SolicitudServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudServicio
     */
    omit?: SolicitudServicioOmit<ExtArgs> | null
    /**
     * Filter, which SolicitudServicio to fetch.
     */
    where?: SolicitudServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolicitudServicios to fetch.
     */
    orderBy?: SolicitudServicioOrderByWithRelationInput | SolicitudServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SolicitudServicios.
     */
    cursor?: SolicitudServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolicitudServicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolicitudServicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SolicitudServicios.
     */
    distinct?: SolicitudServicioScalarFieldEnum | SolicitudServicioScalarFieldEnum[]
  }

  /**
   * SolicitudServicio findFirstOrThrow
   */
  export type SolicitudServicioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudServicio
     */
    select?: SolicitudServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudServicio
     */
    omit?: SolicitudServicioOmit<ExtArgs> | null
    /**
     * Filter, which SolicitudServicio to fetch.
     */
    where?: SolicitudServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolicitudServicios to fetch.
     */
    orderBy?: SolicitudServicioOrderByWithRelationInput | SolicitudServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SolicitudServicios.
     */
    cursor?: SolicitudServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolicitudServicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolicitudServicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SolicitudServicios.
     */
    distinct?: SolicitudServicioScalarFieldEnum | SolicitudServicioScalarFieldEnum[]
  }

  /**
   * SolicitudServicio findMany
   */
  export type SolicitudServicioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudServicio
     */
    select?: SolicitudServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudServicio
     */
    omit?: SolicitudServicioOmit<ExtArgs> | null
    /**
     * Filter, which SolicitudServicios to fetch.
     */
    where?: SolicitudServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolicitudServicios to fetch.
     */
    orderBy?: SolicitudServicioOrderByWithRelationInput | SolicitudServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SolicitudServicios.
     */
    cursor?: SolicitudServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolicitudServicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolicitudServicios.
     */
    skip?: number
    distinct?: SolicitudServicioScalarFieldEnum | SolicitudServicioScalarFieldEnum[]
  }

  /**
   * SolicitudServicio create
   */
  export type SolicitudServicioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudServicio
     */
    select?: SolicitudServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudServicio
     */
    omit?: SolicitudServicioOmit<ExtArgs> | null
    /**
     * The data needed to create a SolicitudServicio.
     */
    data: XOR<SolicitudServicioCreateInput, SolicitudServicioUncheckedCreateInput>
  }

  /**
   * SolicitudServicio createMany
   */
  export type SolicitudServicioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SolicitudServicios.
     */
    data: SolicitudServicioCreateManyInput | SolicitudServicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SolicitudServicio createManyAndReturn
   */
  export type SolicitudServicioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudServicio
     */
    select?: SolicitudServicioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudServicio
     */
    omit?: SolicitudServicioOmit<ExtArgs> | null
    /**
     * The data used to create many SolicitudServicios.
     */
    data: SolicitudServicioCreateManyInput | SolicitudServicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SolicitudServicio update
   */
  export type SolicitudServicioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudServicio
     */
    select?: SolicitudServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudServicio
     */
    omit?: SolicitudServicioOmit<ExtArgs> | null
    /**
     * The data needed to update a SolicitudServicio.
     */
    data: XOR<SolicitudServicioUpdateInput, SolicitudServicioUncheckedUpdateInput>
    /**
     * Choose, which SolicitudServicio to update.
     */
    where: SolicitudServicioWhereUniqueInput
  }

  /**
   * SolicitudServicio updateMany
   */
  export type SolicitudServicioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SolicitudServicios.
     */
    data: XOR<SolicitudServicioUpdateManyMutationInput, SolicitudServicioUncheckedUpdateManyInput>
    /**
     * Filter which SolicitudServicios to update
     */
    where?: SolicitudServicioWhereInput
    /**
     * Limit how many SolicitudServicios to update.
     */
    limit?: number
  }

  /**
   * SolicitudServicio updateManyAndReturn
   */
  export type SolicitudServicioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudServicio
     */
    select?: SolicitudServicioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudServicio
     */
    omit?: SolicitudServicioOmit<ExtArgs> | null
    /**
     * The data used to update SolicitudServicios.
     */
    data: XOR<SolicitudServicioUpdateManyMutationInput, SolicitudServicioUncheckedUpdateManyInput>
    /**
     * Filter which SolicitudServicios to update
     */
    where?: SolicitudServicioWhereInput
    /**
     * Limit how many SolicitudServicios to update.
     */
    limit?: number
  }

  /**
   * SolicitudServicio upsert
   */
  export type SolicitudServicioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudServicio
     */
    select?: SolicitudServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudServicio
     */
    omit?: SolicitudServicioOmit<ExtArgs> | null
    /**
     * The filter to search for the SolicitudServicio to update in case it exists.
     */
    where: SolicitudServicioWhereUniqueInput
    /**
     * In case the SolicitudServicio found by the `where` argument doesn't exist, create a new SolicitudServicio with this data.
     */
    create: XOR<SolicitudServicioCreateInput, SolicitudServicioUncheckedCreateInput>
    /**
     * In case the SolicitudServicio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SolicitudServicioUpdateInput, SolicitudServicioUncheckedUpdateInput>
  }

  /**
   * SolicitudServicio delete
   */
  export type SolicitudServicioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudServicio
     */
    select?: SolicitudServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudServicio
     */
    omit?: SolicitudServicioOmit<ExtArgs> | null
    /**
     * Filter which SolicitudServicio to delete.
     */
    where: SolicitudServicioWhereUniqueInput
  }

  /**
   * SolicitudServicio deleteMany
   */
  export type SolicitudServicioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SolicitudServicios to delete
     */
    where?: SolicitudServicioWhereInput
    /**
     * Limit how many SolicitudServicios to delete.
     */
    limit?: number
  }

  /**
   * SolicitudServicio without action
   */
  export type SolicitudServicioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudServicio
     */
    select?: SolicitudServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudServicio
     */
    omit?: SolicitudServicioOmit<ExtArgs> | null
  }


  /**
   * Model Resena
   */

  export type AggregateResena = {
    _count: ResenaCountAggregateOutputType | null
    _avg: ResenaAvgAggregateOutputType | null
    _sum: ResenaSumAggregateOutputType | null
    _min: ResenaMinAggregateOutputType | null
    _max: ResenaMaxAggregateOutputType | null
  }

  export type ResenaAvgAggregateOutputType = {
    calificacion: number | null
  }

  export type ResenaSumAggregateOutputType = {
    calificacion: number | null
  }

  export type ResenaMinAggregateOutputType = {
    id: string | null
    calificacion: number | null
    comentario: string | null
    fecha: Date | null
    clienteId: string | null
    servicioId: string | null
  }

  export type ResenaMaxAggregateOutputType = {
    id: string | null
    calificacion: number | null
    comentario: string | null
    fecha: Date | null
    clienteId: string | null
    servicioId: string | null
  }

  export type ResenaCountAggregateOutputType = {
    id: number
    calificacion: number
    comentario: number
    fecha: number
    clienteId: number
    servicioId: number
    _all: number
  }


  export type ResenaAvgAggregateInputType = {
    calificacion?: true
  }

  export type ResenaSumAggregateInputType = {
    calificacion?: true
  }

  export type ResenaMinAggregateInputType = {
    id?: true
    calificacion?: true
    comentario?: true
    fecha?: true
    clienteId?: true
    servicioId?: true
  }

  export type ResenaMaxAggregateInputType = {
    id?: true
    calificacion?: true
    comentario?: true
    fecha?: true
    clienteId?: true
    servicioId?: true
  }

  export type ResenaCountAggregateInputType = {
    id?: true
    calificacion?: true
    comentario?: true
    fecha?: true
    clienteId?: true
    servicioId?: true
    _all?: true
  }

  export type ResenaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resena to aggregate.
     */
    where?: ResenaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resenas to fetch.
     */
    orderBy?: ResenaOrderByWithRelationInput | ResenaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResenaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resenas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resenas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resenas
    **/
    _count?: true | ResenaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResenaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResenaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResenaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResenaMaxAggregateInputType
  }

  export type GetResenaAggregateType<T extends ResenaAggregateArgs> = {
        [P in keyof T & keyof AggregateResena]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResena[P]>
      : GetScalarType<T[P], AggregateResena[P]>
  }




  export type ResenaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResenaWhereInput
    orderBy?: ResenaOrderByWithAggregationInput | ResenaOrderByWithAggregationInput[]
    by: ResenaScalarFieldEnum[] | ResenaScalarFieldEnum
    having?: ResenaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResenaCountAggregateInputType | true
    _avg?: ResenaAvgAggregateInputType
    _sum?: ResenaSumAggregateInputType
    _min?: ResenaMinAggregateInputType
    _max?: ResenaMaxAggregateInputType
  }

  export type ResenaGroupByOutputType = {
    id: string
    calificacion: number
    comentario: string
    fecha: Date
    clienteId: string
    servicioId: string
    _count: ResenaCountAggregateOutputType | null
    _avg: ResenaAvgAggregateOutputType | null
    _sum: ResenaSumAggregateOutputType | null
    _min: ResenaMinAggregateOutputType | null
    _max: ResenaMaxAggregateOutputType | null
  }

  type GetResenaGroupByPayload<T extends ResenaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResenaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResenaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResenaGroupByOutputType[P]>
            : GetScalarType<T[P], ResenaGroupByOutputType[P]>
        }
      >
    >


  export type ResenaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    calificacion?: boolean
    comentario?: boolean
    fecha?: boolean
    clienteId?: boolean
    servicioId?: boolean
    cliente?: boolean | UsuarioDefaultArgs<ExtArgs>
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resena"]>

  export type ResenaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    calificacion?: boolean
    comentario?: boolean
    fecha?: boolean
    clienteId?: boolean
    servicioId?: boolean
    cliente?: boolean | UsuarioDefaultArgs<ExtArgs>
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resena"]>

  export type ResenaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    calificacion?: boolean
    comentario?: boolean
    fecha?: boolean
    clienteId?: boolean
    servicioId?: boolean
    cliente?: boolean | UsuarioDefaultArgs<ExtArgs>
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resena"]>

  export type ResenaSelectScalar = {
    id?: boolean
    calificacion?: boolean
    comentario?: boolean
    fecha?: boolean
    clienteId?: boolean
    servicioId?: boolean
  }

  export type ResenaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "calificacion" | "comentario" | "fecha" | "clienteId" | "servicioId", ExtArgs["result"]["resena"]>
  export type ResenaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | UsuarioDefaultArgs<ExtArgs>
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }
  export type ResenaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | UsuarioDefaultArgs<ExtArgs>
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }
  export type ResenaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | UsuarioDefaultArgs<ExtArgs>
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }

  export type $ResenaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resena"
    objects: {
      cliente: Prisma.$UsuarioPayload<ExtArgs>
      servicio: Prisma.$ServicioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      calificacion: number
      comentario: string
      fecha: Date
      clienteId: string
      servicioId: string
    }, ExtArgs["result"]["resena"]>
    composites: {}
  }

  type ResenaGetPayload<S extends boolean | null | undefined | ResenaDefaultArgs> = $Result.GetResult<Prisma.$ResenaPayload, S>

  type ResenaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResenaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResenaCountAggregateInputType | true
    }

  export interface ResenaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resena'], meta: { name: 'Resena' } }
    /**
     * Find zero or one Resena that matches the filter.
     * @param {ResenaFindUniqueArgs} args - Arguments to find a Resena
     * @example
     * // Get one Resena
     * const resena = await prisma.resena.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResenaFindUniqueArgs>(args: SelectSubset<T, ResenaFindUniqueArgs<ExtArgs>>): Prisma__ResenaClient<$Result.GetResult<Prisma.$ResenaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resena that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResenaFindUniqueOrThrowArgs} args - Arguments to find a Resena
     * @example
     * // Get one Resena
     * const resena = await prisma.resena.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResenaFindUniqueOrThrowArgs>(args: SelectSubset<T, ResenaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResenaClient<$Result.GetResult<Prisma.$ResenaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resena that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenaFindFirstArgs} args - Arguments to find a Resena
     * @example
     * // Get one Resena
     * const resena = await prisma.resena.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResenaFindFirstArgs>(args?: SelectSubset<T, ResenaFindFirstArgs<ExtArgs>>): Prisma__ResenaClient<$Result.GetResult<Prisma.$ResenaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resena that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenaFindFirstOrThrowArgs} args - Arguments to find a Resena
     * @example
     * // Get one Resena
     * const resena = await prisma.resena.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResenaFindFirstOrThrowArgs>(args?: SelectSubset<T, ResenaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResenaClient<$Result.GetResult<Prisma.$ResenaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resenas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resenas
     * const resenas = await prisma.resena.findMany()
     * 
     * // Get first 10 Resenas
     * const resenas = await prisma.resena.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resenaWithIdOnly = await prisma.resena.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResenaFindManyArgs>(args?: SelectSubset<T, ResenaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResenaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resena.
     * @param {ResenaCreateArgs} args - Arguments to create a Resena.
     * @example
     * // Create one Resena
     * const Resena = await prisma.resena.create({
     *   data: {
     *     // ... data to create a Resena
     *   }
     * })
     * 
     */
    create<T extends ResenaCreateArgs>(args: SelectSubset<T, ResenaCreateArgs<ExtArgs>>): Prisma__ResenaClient<$Result.GetResult<Prisma.$ResenaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resenas.
     * @param {ResenaCreateManyArgs} args - Arguments to create many Resenas.
     * @example
     * // Create many Resenas
     * const resena = await prisma.resena.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResenaCreateManyArgs>(args?: SelectSubset<T, ResenaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resenas and returns the data saved in the database.
     * @param {ResenaCreateManyAndReturnArgs} args - Arguments to create many Resenas.
     * @example
     * // Create many Resenas
     * const resena = await prisma.resena.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resenas and only return the `id`
     * const resenaWithIdOnly = await prisma.resena.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResenaCreateManyAndReturnArgs>(args?: SelectSubset<T, ResenaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResenaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resena.
     * @param {ResenaDeleteArgs} args - Arguments to delete one Resena.
     * @example
     * // Delete one Resena
     * const Resena = await prisma.resena.delete({
     *   where: {
     *     // ... filter to delete one Resena
     *   }
     * })
     * 
     */
    delete<T extends ResenaDeleteArgs>(args: SelectSubset<T, ResenaDeleteArgs<ExtArgs>>): Prisma__ResenaClient<$Result.GetResult<Prisma.$ResenaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resena.
     * @param {ResenaUpdateArgs} args - Arguments to update one Resena.
     * @example
     * // Update one Resena
     * const resena = await prisma.resena.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResenaUpdateArgs>(args: SelectSubset<T, ResenaUpdateArgs<ExtArgs>>): Prisma__ResenaClient<$Result.GetResult<Prisma.$ResenaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resenas.
     * @param {ResenaDeleteManyArgs} args - Arguments to filter Resenas to delete.
     * @example
     * // Delete a few Resenas
     * const { count } = await prisma.resena.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResenaDeleteManyArgs>(args?: SelectSubset<T, ResenaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resenas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resenas
     * const resena = await prisma.resena.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResenaUpdateManyArgs>(args: SelectSubset<T, ResenaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resenas and returns the data updated in the database.
     * @param {ResenaUpdateManyAndReturnArgs} args - Arguments to update many Resenas.
     * @example
     * // Update many Resenas
     * const resena = await prisma.resena.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resenas and only return the `id`
     * const resenaWithIdOnly = await prisma.resena.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResenaUpdateManyAndReturnArgs>(args: SelectSubset<T, ResenaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResenaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resena.
     * @param {ResenaUpsertArgs} args - Arguments to update or create a Resena.
     * @example
     * // Update or create a Resena
     * const resena = await prisma.resena.upsert({
     *   create: {
     *     // ... data to create a Resena
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resena we want to update
     *   }
     * })
     */
    upsert<T extends ResenaUpsertArgs>(args: SelectSubset<T, ResenaUpsertArgs<ExtArgs>>): Prisma__ResenaClient<$Result.GetResult<Prisma.$ResenaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resenas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenaCountArgs} args - Arguments to filter Resenas to count.
     * @example
     * // Count the number of Resenas
     * const count = await prisma.resena.count({
     *   where: {
     *     // ... the filter for the Resenas we want to count
     *   }
     * })
    **/
    count<T extends ResenaCountArgs>(
      args?: Subset<T, ResenaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResenaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resena.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResenaAggregateArgs>(args: Subset<T, ResenaAggregateArgs>): Prisma.PrismaPromise<GetResenaAggregateType<T>>

    /**
     * Group by Resena.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResenaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResenaGroupByArgs['orderBy'] }
        : { orderBy?: ResenaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResenaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResenaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resena model
   */
  readonly fields: ResenaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resena.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResenaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    servicio<T extends ServicioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServicioDefaultArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Resena model
   */
  interface ResenaFieldRefs {
    readonly id: FieldRef<"Resena", 'String'>
    readonly calificacion: FieldRef<"Resena", 'Int'>
    readonly comentario: FieldRef<"Resena", 'String'>
    readonly fecha: FieldRef<"Resena", 'DateTime'>
    readonly clienteId: FieldRef<"Resena", 'String'>
    readonly servicioId: FieldRef<"Resena", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Resena findUnique
   */
  export type ResenaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resena
     */
    select?: ResenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resena
     */
    omit?: ResenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaInclude<ExtArgs> | null
    /**
     * Filter, which Resena to fetch.
     */
    where: ResenaWhereUniqueInput
  }

  /**
   * Resena findUniqueOrThrow
   */
  export type ResenaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resena
     */
    select?: ResenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resena
     */
    omit?: ResenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaInclude<ExtArgs> | null
    /**
     * Filter, which Resena to fetch.
     */
    where: ResenaWhereUniqueInput
  }

  /**
   * Resena findFirst
   */
  export type ResenaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resena
     */
    select?: ResenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resena
     */
    omit?: ResenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaInclude<ExtArgs> | null
    /**
     * Filter, which Resena to fetch.
     */
    where?: ResenaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resenas to fetch.
     */
    orderBy?: ResenaOrderByWithRelationInput | ResenaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resenas.
     */
    cursor?: ResenaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resenas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resenas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resenas.
     */
    distinct?: ResenaScalarFieldEnum | ResenaScalarFieldEnum[]
  }

  /**
   * Resena findFirstOrThrow
   */
  export type ResenaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resena
     */
    select?: ResenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resena
     */
    omit?: ResenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaInclude<ExtArgs> | null
    /**
     * Filter, which Resena to fetch.
     */
    where?: ResenaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resenas to fetch.
     */
    orderBy?: ResenaOrderByWithRelationInput | ResenaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resenas.
     */
    cursor?: ResenaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resenas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resenas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resenas.
     */
    distinct?: ResenaScalarFieldEnum | ResenaScalarFieldEnum[]
  }

  /**
   * Resena findMany
   */
  export type ResenaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resena
     */
    select?: ResenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resena
     */
    omit?: ResenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaInclude<ExtArgs> | null
    /**
     * Filter, which Resenas to fetch.
     */
    where?: ResenaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resenas to fetch.
     */
    orderBy?: ResenaOrderByWithRelationInput | ResenaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resenas.
     */
    cursor?: ResenaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resenas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resenas.
     */
    skip?: number
    distinct?: ResenaScalarFieldEnum | ResenaScalarFieldEnum[]
  }

  /**
   * Resena create
   */
  export type ResenaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resena
     */
    select?: ResenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resena
     */
    omit?: ResenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaInclude<ExtArgs> | null
    /**
     * The data needed to create a Resena.
     */
    data: XOR<ResenaCreateInput, ResenaUncheckedCreateInput>
  }

  /**
   * Resena createMany
   */
  export type ResenaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resenas.
     */
    data: ResenaCreateManyInput | ResenaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resena createManyAndReturn
   */
  export type ResenaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resena
     */
    select?: ResenaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resena
     */
    omit?: ResenaOmit<ExtArgs> | null
    /**
     * The data used to create many Resenas.
     */
    data: ResenaCreateManyInput | ResenaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resena update
   */
  export type ResenaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resena
     */
    select?: ResenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resena
     */
    omit?: ResenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaInclude<ExtArgs> | null
    /**
     * The data needed to update a Resena.
     */
    data: XOR<ResenaUpdateInput, ResenaUncheckedUpdateInput>
    /**
     * Choose, which Resena to update.
     */
    where: ResenaWhereUniqueInput
  }

  /**
   * Resena updateMany
   */
  export type ResenaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resenas.
     */
    data: XOR<ResenaUpdateManyMutationInput, ResenaUncheckedUpdateManyInput>
    /**
     * Filter which Resenas to update
     */
    where?: ResenaWhereInput
    /**
     * Limit how many Resenas to update.
     */
    limit?: number
  }

  /**
   * Resena updateManyAndReturn
   */
  export type ResenaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resena
     */
    select?: ResenaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resena
     */
    omit?: ResenaOmit<ExtArgs> | null
    /**
     * The data used to update Resenas.
     */
    data: XOR<ResenaUpdateManyMutationInput, ResenaUncheckedUpdateManyInput>
    /**
     * Filter which Resenas to update
     */
    where?: ResenaWhereInput
    /**
     * Limit how many Resenas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resena upsert
   */
  export type ResenaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resena
     */
    select?: ResenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resena
     */
    omit?: ResenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaInclude<ExtArgs> | null
    /**
     * The filter to search for the Resena to update in case it exists.
     */
    where: ResenaWhereUniqueInput
    /**
     * In case the Resena found by the `where` argument doesn't exist, create a new Resena with this data.
     */
    create: XOR<ResenaCreateInput, ResenaUncheckedCreateInput>
    /**
     * In case the Resena was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResenaUpdateInput, ResenaUncheckedUpdateInput>
  }

  /**
   * Resena delete
   */
  export type ResenaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resena
     */
    select?: ResenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resena
     */
    omit?: ResenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaInclude<ExtArgs> | null
    /**
     * Filter which Resena to delete.
     */
    where: ResenaWhereUniqueInput
  }

  /**
   * Resena deleteMany
   */
  export type ResenaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resenas to delete
     */
    where?: ResenaWhereInput
    /**
     * Limit how many Resenas to delete.
     */
    limit?: number
  }

  /**
   * Resena without action
   */
  export type ResenaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resena
     */
    select?: ResenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resena
     */
    omit?: ResenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    apellido: 'apellido',
    email: 'email',
    contraseña: 'contraseña',
    rol: 'rol',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const PerfilEstudianteScalarFieldEnum: {
    id: 'id',
    universidad: 'universidad',
    carrera: 'carrera',
    descripcion: 'descripcion',
    habilidades: 'habilidades',
    createdAt: 'createdAt'
  };

  export type PerfilEstudianteScalarFieldEnum = (typeof PerfilEstudianteScalarFieldEnum)[keyof typeof PerfilEstudianteScalarFieldEnum]


  export const ServicioScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descripcion: 'descripcion',
    categoria: 'categoria',
    estado: 'estado',
    createdAt: 'createdAt',
    active: 'active'
  };

  export type ServicioScalarFieldEnum = (typeof ServicioScalarFieldEnum)[keyof typeof ServicioScalarFieldEnum]


  export const SolicitudServicioScalarFieldEnum: {
    id: 'id',
    mensaje: 'mensaje',
    estado: 'estado',
    fechaSolicitud: 'fechaSolicitud',
    createdAt: 'createdAt'
  };

  export type SolicitudServicioScalarFieldEnum = (typeof SolicitudServicioScalarFieldEnum)[keyof typeof SolicitudServicioScalarFieldEnum]


  export const ResenaScalarFieldEnum: {
    id: 'id',
    calificacion: 'calificacion',
    comentario: 'comentario',
    fecha: 'fecha',
    clienteId: 'clienteId',
    servicioId: 'servicioId'
  };

  export type ResenaScalarFieldEnum = (typeof ResenaScalarFieldEnum)[keyof typeof ResenaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Rol'
   */
  export type EnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol'>
    


  /**
   * Reference to a field of type 'Rol[]'
   */
  export type ListEnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'EstadoServicio'
   */
  export type EnumEstadoServicioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoServicio'>
    


  /**
   * Reference to a field of type 'EstadoServicio[]'
   */
  export type ListEnumEstadoServicioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoServicio[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'EstadoSolicitud'
   */
  export type EnumEstadoSolicitudFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoSolicitud'>
    


  /**
   * Reference to a field of type 'EstadoSolicitud[]'
   */
  export type ListEnumEstadoSolicitudFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoSolicitud[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    nombre?: StringFilter<"Usuario"> | string
    apellido?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    contraseña?: StringFilter<"Usuario"> | string
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updateAt?: DateTimeFilter<"Usuario"> | Date | string
    resenas?: ResenaListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    resenas?: ResenaOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    apellido?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    contraseña?: StringFilter<"Usuario"> | string
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updateAt?: DateTimeFilter<"Usuario"> | Date | string
    resenas?: ResenaListRelationFilter
  }, "id">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    apellido?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    contraseña?: StringWithAggregatesFilter<"Usuario"> | string
    rol?: EnumRolWithAggregatesFilter<"Usuario"> | $Enums.Rol
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type PerfilEstudianteWhereInput = {
    AND?: PerfilEstudianteWhereInput | PerfilEstudianteWhereInput[]
    OR?: PerfilEstudianteWhereInput[]
    NOT?: PerfilEstudianteWhereInput | PerfilEstudianteWhereInput[]
    id?: StringFilter<"PerfilEstudiante"> | string
    universidad?: StringFilter<"PerfilEstudiante"> | string
    carrera?: StringFilter<"PerfilEstudiante"> | string
    descripcion?: StringFilter<"PerfilEstudiante"> | string
    habilidades?: StringNullableListFilter<"PerfilEstudiante">
    createdAt?: DateTimeFilter<"PerfilEstudiante"> | Date | string
  }

  export type PerfilEstudianteOrderByWithRelationInput = {
    id?: SortOrder
    universidad?: SortOrder
    carrera?: SortOrder
    descripcion?: SortOrder
    habilidades?: SortOrder
    createdAt?: SortOrder
  }

  export type PerfilEstudianteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PerfilEstudianteWhereInput | PerfilEstudianteWhereInput[]
    OR?: PerfilEstudianteWhereInput[]
    NOT?: PerfilEstudianteWhereInput | PerfilEstudianteWhereInput[]
    universidad?: StringFilter<"PerfilEstudiante"> | string
    carrera?: StringFilter<"PerfilEstudiante"> | string
    descripcion?: StringFilter<"PerfilEstudiante"> | string
    habilidades?: StringNullableListFilter<"PerfilEstudiante">
    createdAt?: DateTimeFilter<"PerfilEstudiante"> | Date | string
  }, "id">

  export type PerfilEstudianteOrderByWithAggregationInput = {
    id?: SortOrder
    universidad?: SortOrder
    carrera?: SortOrder
    descripcion?: SortOrder
    habilidades?: SortOrder
    createdAt?: SortOrder
    _count?: PerfilEstudianteCountOrderByAggregateInput
    _max?: PerfilEstudianteMaxOrderByAggregateInput
    _min?: PerfilEstudianteMinOrderByAggregateInput
  }

  export type PerfilEstudianteScalarWhereWithAggregatesInput = {
    AND?: PerfilEstudianteScalarWhereWithAggregatesInput | PerfilEstudianteScalarWhereWithAggregatesInput[]
    OR?: PerfilEstudianteScalarWhereWithAggregatesInput[]
    NOT?: PerfilEstudianteScalarWhereWithAggregatesInput | PerfilEstudianteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PerfilEstudiante"> | string
    universidad?: StringWithAggregatesFilter<"PerfilEstudiante"> | string
    carrera?: StringWithAggregatesFilter<"PerfilEstudiante"> | string
    descripcion?: StringWithAggregatesFilter<"PerfilEstudiante"> | string
    habilidades?: StringNullableListFilter<"PerfilEstudiante">
    createdAt?: DateTimeWithAggregatesFilter<"PerfilEstudiante"> | Date | string
  }

  export type ServicioWhereInput = {
    AND?: ServicioWhereInput | ServicioWhereInput[]
    OR?: ServicioWhereInput[]
    NOT?: ServicioWhereInput | ServicioWhereInput[]
    id?: StringFilter<"Servicio"> | string
    titulo?: StringFilter<"Servicio"> | string
    descripcion?: StringFilter<"Servicio"> | string
    categoria?: StringFilter<"Servicio"> | string
    estado?: EnumEstadoServicioFilter<"Servicio"> | $Enums.EstadoServicio
    createdAt?: DateTimeFilter<"Servicio"> | Date | string
    active?: BoolFilter<"Servicio"> | boolean
    resenas?: ResenaListRelationFilter
  }

  export type ServicioOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    categoria?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    resenas?: ResenaOrderByRelationAggregateInput
  }

  export type ServicioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServicioWhereInput | ServicioWhereInput[]
    OR?: ServicioWhereInput[]
    NOT?: ServicioWhereInput | ServicioWhereInput[]
    titulo?: StringFilter<"Servicio"> | string
    descripcion?: StringFilter<"Servicio"> | string
    categoria?: StringFilter<"Servicio"> | string
    estado?: EnumEstadoServicioFilter<"Servicio"> | $Enums.EstadoServicio
    createdAt?: DateTimeFilter<"Servicio"> | Date | string
    active?: BoolFilter<"Servicio"> | boolean
    resenas?: ResenaListRelationFilter
  }, "id">

  export type ServicioOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    categoria?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    _count?: ServicioCountOrderByAggregateInput
    _max?: ServicioMaxOrderByAggregateInput
    _min?: ServicioMinOrderByAggregateInput
  }

  export type ServicioScalarWhereWithAggregatesInput = {
    AND?: ServicioScalarWhereWithAggregatesInput | ServicioScalarWhereWithAggregatesInput[]
    OR?: ServicioScalarWhereWithAggregatesInput[]
    NOT?: ServicioScalarWhereWithAggregatesInput | ServicioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Servicio"> | string
    titulo?: StringWithAggregatesFilter<"Servicio"> | string
    descripcion?: StringWithAggregatesFilter<"Servicio"> | string
    categoria?: StringWithAggregatesFilter<"Servicio"> | string
    estado?: EnumEstadoServicioWithAggregatesFilter<"Servicio"> | $Enums.EstadoServicio
    createdAt?: DateTimeWithAggregatesFilter<"Servicio"> | Date | string
    active?: BoolWithAggregatesFilter<"Servicio"> | boolean
  }

  export type SolicitudServicioWhereInput = {
    AND?: SolicitudServicioWhereInput | SolicitudServicioWhereInput[]
    OR?: SolicitudServicioWhereInput[]
    NOT?: SolicitudServicioWhereInput | SolicitudServicioWhereInput[]
    id?: StringFilter<"SolicitudServicio"> | string
    mensaje?: StringFilter<"SolicitudServicio"> | string
    estado?: EnumEstadoSolicitudFilter<"SolicitudServicio"> | $Enums.EstadoSolicitud
    fechaSolicitud?: DateTimeFilter<"SolicitudServicio"> | Date | string
    createdAt?: DateTimeFilter<"SolicitudServicio"> | Date | string
  }

  export type SolicitudServicioOrderByWithRelationInput = {
    id?: SortOrder
    mensaje?: SortOrder
    estado?: SortOrder
    fechaSolicitud?: SortOrder
    createdAt?: SortOrder
  }

  export type SolicitudServicioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SolicitudServicioWhereInput | SolicitudServicioWhereInput[]
    OR?: SolicitudServicioWhereInput[]
    NOT?: SolicitudServicioWhereInput | SolicitudServicioWhereInput[]
    mensaje?: StringFilter<"SolicitudServicio"> | string
    estado?: EnumEstadoSolicitudFilter<"SolicitudServicio"> | $Enums.EstadoSolicitud
    fechaSolicitud?: DateTimeFilter<"SolicitudServicio"> | Date | string
    createdAt?: DateTimeFilter<"SolicitudServicio"> | Date | string
  }, "id">

  export type SolicitudServicioOrderByWithAggregationInput = {
    id?: SortOrder
    mensaje?: SortOrder
    estado?: SortOrder
    fechaSolicitud?: SortOrder
    createdAt?: SortOrder
    _count?: SolicitudServicioCountOrderByAggregateInput
    _max?: SolicitudServicioMaxOrderByAggregateInput
    _min?: SolicitudServicioMinOrderByAggregateInput
  }

  export type SolicitudServicioScalarWhereWithAggregatesInput = {
    AND?: SolicitudServicioScalarWhereWithAggregatesInput | SolicitudServicioScalarWhereWithAggregatesInput[]
    OR?: SolicitudServicioScalarWhereWithAggregatesInput[]
    NOT?: SolicitudServicioScalarWhereWithAggregatesInput | SolicitudServicioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SolicitudServicio"> | string
    mensaje?: StringWithAggregatesFilter<"SolicitudServicio"> | string
    estado?: EnumEstadoSolicitudWithAggregatesFilter<"SolicitudServicio"> | $Enums.EstadoSolicitud
    fechaSolicitud?: DateTimeWithAggregatesFilter<"SolicitudServicio"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"SolicitudServicio"> | Date | string
  }

  export type ResenaWhereInput = {
    AND?: ResenaWhereInput | ResenaWhereInput[]
    OR?: ResenaWhereInput[]
    NOT?: ResenaWhereInput | ResenaWhereInput[]
    id?: StringFilter<"Resena"> | string
    calificacion?: IntFilter<"Resena"> | number
    comentario?: StringFilter<"Resena"> | string
    fecha?: DateTimeFilter<"Resena"> | Date | string
    clienteId?: StringFilter<"Resena"> | string
    servicioId?: StringFilter<"Resena"> | string
    cliente?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    servicio?: XOR<ServicioScalarRelationFilter, ServicioWhereInput>
  }

  export type ResenaOrderByWithRelationInput = {
    id?: SortOrder
    calificacion?: SortOrder
    comentario?: SortOrder
    fecha?: SortOrder
    clienteId?: SortOrder
    servicioId?: SortOrder
    cliente?: UsuarioOrderByWithRelationInput
    servicio?: ServicioOrderByWithRelationInput
  }

  export type ResenaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResenaWhereInput | ResenaWhereInput[]
    OR?: ResenaWhereInput[]
    NOT?: ResenaWhereInput | ResenaWhereInput[]
    calificacion?: IntFilter<"Resena"> | number
    comentario?: StringFilter<"Resena"> | string
    fecha?: DateTimeFilter<"Resena"> | Date | string
    clienteId?: StringFilter<"Resena"> | string
    servicioId?: StringFilter<"Resena"> | string
    cliente?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    servicio?: XOR<ServicioScalarRelationFilter, ServicioWhereInput>
  }, "id">

  export type ResenaOrderByWithAggregationInput = {
    id?: SortOrder
    calificacion?: SortOrder
    comentario?: SortOrder
    fecha?: SortOrder
    clienteId?: SortOrder
    servicioId?: SortOrder
    _count?: ResenaCountOrderByAggregateInput
    _avg?: ResenaAvgOrderByAggregateInput
    _max?: ResenaMaxOrderByAggregateInput
    _min?: ResenaMinOrderByAggregateInput
    _sum?: ResenaSumOrderByAggregateInput
  }

  export type ResenaScalarWhereWithAggregatesInput = {
    AND?: ResenaScalarWhereWithAggregatesInput | ResenaScalarWhereWithAggregatesInput[]
    OR?: ResenaScalarWhereWithAggregatesInput[]
    NOT?: ResenaScalarWhereWithAggregatesInput | ResenaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Resena"> | string
    calificacion?: IntWithAggregatesFilter<"Resena"> | number
    comentario?: StringWithAggregatesFilter<"Resena"> | string
    fecha?: DateTimeWithAggregatesFilter<"Resena"> | Date | string
    clienteId?: StringWithAggregatesFilter<"Resena"> | string
    servicioId?: StringWithAggregatesFilter<"Resena"> | string
  }

  export type UsuarioCreateInput = {
    id?: string
    nombre: string
    apellido: string
    email: string
    contraseña: string
    rol: $Enums.Rol
    createdAt?: Date | string
    updateAt?: Date | string
    resenas?: ResenaCreateNestedManyWithoutClienteInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    nombre: string
    apellido: string
    email: string
    contraseña: string
    rol: $Enums.Rol
    createdAt?: Date | string
    updateAt?: Date | string
    resenas?: ResenaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resenas?: ResenaUpdateManyWithoutClienteNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resenas?: ResenaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    nombre: string
    apellido: string
    email: string
    contraseña: string
    rol: $Enums.Rol
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerfilEstudianteCreateInput = {
    id?: string
    universidad: string
    carrera: string
    descripcion: string
    habilidades?: PerfilEstudianteCreatehabilidadesInput | string[]
    createdAt?: Date | string
  }

  export type PerfilEstudianteUncheckedCreateInput = {
    id?: string
    universidad: string
    carrera: string
    descripcion: string
    habilidades?: PerfilEstudianteCreatehabilidadesInput | string[]
    createdAt?: Date | string
  }

  export type PerfilEstudianteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    universidad?: StringFieldUpdateOperationsInput | string
    carrera?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    habilidades?: PerfilEstudianteUpdatehabilidadesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerfilEstudianteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    universidad?: StringFieldUpdateOperationsInput | string
    carrera?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    habilidades?: PerfilEstudianteUpdatehabilidadesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerfilEstudianteCreateManyInput = {
    id?: string
    universidad: string
    carrera: string
    descripcion: string
    habilidades?: PerfilEstudianteCreatehabilidadesInput | string[]
    createdAt?: Date | string
  }

  export type PerfilEstudianteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    universidad?: StringFieldUpdateOperationsInput | string
    carrera?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    habilidades?: PerfilEstudianteUpdatehabilidadesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerfilEstudianteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    universidad?: StringFieldUpdateOperationsInput | string
    carrera?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    habilidades?: PerfilEstudianteUpdatehabilidadesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicioCreateInput = {
    id?: string
    titulo: string
    descripcion: string
    categoria: string
    estado?: $Enums.EstadoServicio
    createdAt?: Date | string
    active?: boolean
    resenas?: ResenaCreateNestedManyWithoutServicioInput
  }

  export type ServicioUncheckedCreateInput = {
    id?: string
    titulo: string
    descripcion: string
    categoria: string
    estado?: $Enums.EstadoServicio
    createdAt?: Date | string
    active?: boolean
    resenas?: ResenaUncheckedCreateNestedManyWithoutServicioInput
  }

  export type ServicioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoServicioFieldUpdateOperationsInput | $Enums.EstadoServicio
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    resenas?: ResenaUpdateManyWithoutServicioNestedInput
  }

  export type ServicioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoServicioFieldUpdateOperationsInput | $Enums.EstadoServicio
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    resenas?: ResenaUncheckedUpdateManyWithoutServicioNestedInput
  }

  export type ServicioCreateManyInput = {
    id?: string
    titulo: string
    descripcion: string
    categoria: string
    estado?: $Enums.EstadoServicio
    createdAt?: Date | string
    active?: boolean
  }

  export type ServicioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoServicioFieldUpdateOperationsInput | $Enums.EstadoServicio
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ServicioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoServicioFieldUpdateOperationsInput | $Enums.EstadoServicio
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SolicitudServicioCreateInput = {
    id?: string
    mensaje: string
    estado?: $Enums.EstadoSolicitud
    fechaSolicitud?: Date | string
    createdAt?: Date | string
  }

  export type SolicitudServicioUncheckedCreateInput = {
    id?: string
    mensaje: string
    estado?: $Enums.EstadoSolicitud
    fechaSolicitud?: Date | string
    createdAt?: Date | string
  }

  export type SolicitudServicioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoSolicitudFieldUpdateOperationsInput | $Enums.EstadoSolicitud
    fechaSolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolicitudServicioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoSolicitudFieldUpdateOperationsInput | $Enums.EstadoSolicitud
    fechaSolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolicitudServicioCreateManyInput = {
    id?: string
    mensaje: string
    estado?: $Enums.EstadoSolicitud
    fechaSolicitud?: Date | string
    createdAt?: Date | string
  }

  export type SolicitudServicioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoSolicitudFieldUpdateOperationsInput | $Enums.EstadoSolicitud
    fechaSolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolicitudServicioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoSolicitudFieldUpdateOperationsInput | $Enums.EstadoSolicitud
    fechaSolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResenaCreateInput = {
    id?: string
    calificacion: number
    comentario: string
    fecha?: Date | string
    cliente: UsuarioCreateNestedOneWithoutResenasInput
    servicio: ServicioCreateNestedOneWithoutResenasInput
  }

  export type ResenaUncheckedCreateInput = {
    id?: string
    calificacion: number
    comentario: string
    fecha?: Date | string
    clienteId: string
    servicioId: string
  }

  export type ResenaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    calificacion?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: UsuarioUpdateOneRequiredWithoutResenasNestedInput
    servicio?: ServicioUpdateOneRequiredWithoutResenasNestedInput
  }

  export type ResenaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    calificacion?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: StringFieldUpdateOperationsInput | string
    servicioId?: StringFieldUpdateOperationsInput | string
  }

  export type ResenaCreateManyInput = {
    id?: string
    calificacion: number
    comentario: string
    fecha?: Date | string
    clienteId: string
    servicioId: string
  }

  export type ResenaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    calificacion?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResenaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    calificacion?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: StringFieldUpdateOperationsInput | string
    servicioId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ResenaListRelationFilter = {
    every?: ResenaWhereInput
    some?: ResenaWhereInput
    none?: ResenaWhereInput
  }

  export type ResenaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type PerfilEstudianteCountOrderByAggregateInput = {
    id?: SortOrder
    universidad?: SortOrder
    carrera?: SortOrder
    descripcion?: SortOrder
    habilidades?: SortOrder
    createdAt?: SortOrder
  }

  export type PerfilEstudianteMaxOrderByAggregateInput = {
    id?: SortOrder
    universidad?: SortOrder
    carrera?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
  }

  export type PerfilEstudianteMinOrderByAggregateInput = {
    id?: SortOrder
    universidad?: SortOrder
    carrera?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumEstadoServicioFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoServicio | EnumEstadoServicioFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoServicio[] | ListEnumEstadoServicioFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoServicio[] | ListEnumEstadoServicioFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoServicioFilter<$PrismaModel> | $Enums.EstadoServicio
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ServicioCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    categoria?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
  }

  export type ServicioMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    categoria?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
  }

  export type ServicioMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    categoria?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
  }

  export type EnumEstadoServicioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoServicio | EnumEstadoServicioFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoServicio[] | ListEnumEstadoServicioFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoServicio[] | ListEnumEstadoServicioFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoServicioWithAggregatesFilter<$PrismaModel> | $Enums.EstadoServicio
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoServicioFilter<$PrismaModel>
    _max?: NestedEnumEstadoServicioFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumEstadoSolicitudFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoSolicitud | EnumEstadoSolicitudFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoSolicitud[] | ListEnumEstadoSolicitudFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoSolicitud[] | ListEnumEstadoSolicitudFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoSolicitudFilter<$PrismaModel> | $Enums.EstadoSolicitud
  }

  export type SolicitudServicioCountOrderByAggregateInput = {
    id?: SortOrder
    mensaje?: SortOrder
    estado?: SortOrder
    fechaSolicitud?: SortOrder
    createdAt?: SortOrder
  }

  export type SolicitudServicioMaxOrderByAggregateInput = {
    id?: SortOrder
    mensaje?: SortOrder
    estado?: SortOrder
    fechaSolicitud?: SortOrder
    createdAt?: SortOrder
  }

  export type SolicitudServicioMinOrderByAggregateInput = {
    id?: SortOrder
    mensaje?: SortOrder
    estado?: SortOrder
    fechaSolicitud?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumEstadoSolicitudWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoSolicitud | EnumEstadoSolicitudFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoSolicitud[] | ListEnumEstadoSolicitudFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoSolicitud[] | ListEnumEstadoSolicitudFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoSolicitudWithAggregatesFilter<$PrismaModel> | $Enums.EstadoSolicitud
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoSolicitudFilter<$PrismaModel>
    _max?: NestedEnumEstadoSolicitudFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type ServicioScalarRelationFilter = {
    is?: ServicioWhereInput
    isNot?: ServicioWhereInput
  }

  export type ResenaCountOrderByAggregateInput = {
    id?: SortOrder
    calificacion?: SortOrder
    comentario?: SortOrder
    fecha?: SortOrder
    clienteId?: SortOrder
    servicioId?: SortOrder
  }

  export type ResenaAvgOrderByAggregateInput = {
    calificacion?: SortOrder
  }

  export type ResenaMaxOrderByAggregateInput = {
    id?: SortOrder
    calificacion?: SortOrder
    comentario?: SortOrder
    fecha?: SortOrder
    clienteId?: SortOrder
    servicioId?: SortOrder
  }

  export type ResenaMinOrderByAggregateInput = {
    id?: SortOrder
    calificacion?: SortOrder
    comentario?: SortOrder
    fecha?: SortOrder
    clienteId?: SortOrder
    servicioId?: SortOrder
  }

  export type ResenaSumOrderByAggregateInput = {
    calificacion?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ResenaCreateNestedManyWithoutClienteInput = {
    create?: XOR<ResenaCreateWithoutClienteInput, ResenaUncheckedCreateWithoutClienteInput> | ResenaCreateWithoutClienteInput[] | ResenaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ResenaCreateOrConnectWithoutClienteInput | ResenaCreateOrConnectWithoutClienteInput[]
    createMany?: ResenaCreateManyClienteInputEnvelope
    connect?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
  }

  export type ResenaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<ResenaCreateWithoutClienteInput, ResenaUncheckedCreateWithoutClienteInput> | ResenaCreateWithoutClienteInput[] | ResenaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ResenaCreateOrConnectWithoutClienteInput | ResenaCreateOrConnectWithoutClienteInput[]
    createMany?: ResenaCreateManyClienteInputEnvelope
    connect?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRolFieldUpdateOperationsInput = {
    set?: $Enums.Rol
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ResenaUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ResenaCreateWithoutClienteInput, ResenaUncheckedCreateWithoutClienteInput> | ResenaCreateWithoutClienteInput[] | ResenaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ResenaCreateOrConnectWithoutClienteInput | ResenaCreateOrConnectWithoutClienteInput[]
    upsert?: ResenaUpsertWithWhereUniqueWithoutClienteInput | ResenaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ResenaCreateManyClienteInputEnvelope
    set?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    disconnect?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    delete?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    connect?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    update?: ResenaUpdateWithWhereUniqueWithoutClienteInput | ResenaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ResenaUpdateManyWithWhereWithoutClienteInput | ResenaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ResenaScalarWhereInput | ResenaScalarWhereInput[]
  }

  export type ResenaUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ResenaCreateWithoutClienteInput, ResenaUncheckedCreateWithoutClienteInput> | ResenaCreateWithoutClienteInput[] | ResenaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ResenaCreateOrConnectWithoutClienteInput | ResenaCreateOrConnectWithoutClienteInput[]
    upsert?: ResenaUpsertWithWhereUniqueWithoutClienteInput | ResenaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ResenaCreateManyClienteInputEnvelope
    set?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    disconnect?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    delete?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    connect?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    update?: ResenaUpdateWithWhereUniqueWithoutClienteInput | ResenaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ResenaUpdateManyWithWhereWithoutClienteInput | ResenaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ResenaScalarWhereInput | ResenaScalarWhereInput[]
  }

  export type PerfilEstudianteCreatehabilidadesInput = {
    set: string[]
  }

  export type PerfilEstudianteUpdatehabilidadesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ResenaCreateNestedManyWithoutServicioInput = {
    create?: XOR<ResenaCreateWithoutServicioInput, ResenaUncheckedCreateWithoutServicioInput> | ResenaCreateWithoutServicioInput[] | ResenaUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: ResenaCreateOrConnectWithoutServicioInput | ResenaCreateOrConnectWithoutServicioInput[]
    createMany?: ResenaCreateManyServicioInputEnvelope
    connect?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
  }

  export type ResenaUncheckedCreateNestedManyWithoutServicioInput = {
    create?: XOR<ResenaCreateWithoutServicioInput, ResenaUncheckedCreateWithoutServicioInput> | ResenaCreateWithoutServicioInput[] | ResenaUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: ResenaCreateOrConnectWithoutServicioInput | ResenaCreateOrConnectWithoutServicioInput[]
    createMany?: ResenaCreateManyServicioInputEnvelope
    connect?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
  }

  export type EnumEstadoServicioFieldUpdateOperationsInput = {
    set?: $Enums.EstadoServicio
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ResenaUpdateManyWithoutServicioNestedInput = {
    create?: XOR<ResenaCreateWithoutServicioInput, ResenaUncheckedCreateWithoutServicioInput> | ResenaCreateWithoutServicioInput[] | ResenaUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: ResenaCreateOrConnectWithoutServicioInput | ResenaCreateOrConnectWithoutServicioInput[]
    upsert?: ResenaUpsertWithWhereUniqueWithoutServicioInput | ResenaUpsertWithWhereUniqueWithoutServicioInput[]
    createMany?: ResenaCreateManyServicioInputEnvelope
    set?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    disconnect?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    delete?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    connect?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    update?: ResenaUpdateWithWhereUniqueWithoutServicioInput | ResenaUpdateWithWhereUniqueWithoutServicioInput[]
    updateMany?: ResenaUpdateManyWithWhereWithoutServicioInput | ResenaUpdateManyWithWhereWithoutServicioInput[]
    deleteMany?: ResenaScalarWhereInput | ResenaScalarWhereInput[]
  }

  export type ResenaUncheckedUpdateManyWithoutServicioNestedInput = {
    create?: XOR<ResenaCreateWithoutServicioInput, ResenaUncheckedCreateWithoutServicioInput> | ResenaCreateWithoutServicioInput[] | ResenaUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: ResenaCreateOrConnectWithoutServicioInput | ResenaCreateOrConnectWithoutServicioInput[]
    upsert?: ResenaUpsertWithWhereUniqueWithoutServicioInput | ResenaUpsertWithWhereUniqueWithoutServicioInput[]
    createMany?: ResenaCreateManyServicioInputEnvelope
    set?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    disconnect?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    delete?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    connect?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    update?: ResenaUpdateWithWhereUniqueWithoutServicioInput | ResenaUpdateWithWhereUniqueWithoutServicioInput[]
    updateMany?: ResenaUpdateManyWithWhereWithoutServicioInput | ResenaUpdateManyWithWhereWithoutServicioInput[]
    deleteMany?: ResenaScalarWhereInput | ResenaScalarWhereInput[]
  }

  export type EnumEstadoSolicitudFieldUpdateOperationsInput = {
    set?: $Enums.EstadoSolicitud
  }

  export type UsuarioCreateNestedOneWithoutResenasInput = {
    create?: XOR<UsuarioCreateWithoutResenasInput, UsuarioUncheckedCreateWithoutResenasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutResenasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ServicioCreateNestedOneWithoutResenasInput = {
    create?: XOR<ServicioCreateWithoutResenasInput, ServicioUncheckedCreateWithoutResenasInput>
    connectOrCreate?: ServicioCreateOrConnectWithoutResenasInput
    connect?: ServicioWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUpdateOneRequiredWithoutResenasNestedInput = {
    create?: XOR<UsuarioCreateWithoutResenasInput, UsuarioUncheckedCreateWithoutResenasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutResenasInput
    upsert?: UsuarioUpsertWithoutResenasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutResenasInput, UsuarioUpdateWithoutResenasInput>, UsuarioUncheckedUpdateWithoutResenasInput>
  }

  export type ServicioUpdateOneRequiredWithoutResenasNestedInput = {
    create?: XOR<ServicioCreateWithoutResenasInput, ServicioUncheckedCreateWithoutResenasInput>
    connectOrCreate?: ServicioCreateOrConnectWithoutResenasInput
    upsert?: ServicioUpsertWithoutResenasInput
    connect?: ServicioWhereUniqueInput
    update?: XOR<XOR<ServicioUpdateToOneWithWhereWithoutResenasInput, ServicioUpdateWithoutResenasInput>, ServicioUncheckedUpdateWithoutResenasInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumEstadoServicioFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoServicio | EnumEstadoServicioFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoServicio[] | ListEnumEstadoServicioFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoServicio[] | ListEnumEstadoServicioFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoServicioFilter<$PrismaModel> | $Enums.EstadoServicio
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumEstadoServicioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoServicio | EnumEstadoServicioFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoServicio[] | ListEnumEstadoServicioFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoServicio[] | ListEnumEstadoServicioFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoServicioWithAggregatesFilter<$PrismaModel> | $Enums.EstadoServicio
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoServicioFilter<$PrismaModel>
    _max?: NestedEnumEstadoServicioFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumEstadoSolicitudFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoSolicitud | EnumEstadoSolicitudFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoSolicitud[] | ListEnumEstadoSolicitudFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoSolicitud[] | ListEnumEstadoSolicitudFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoSolicitudFilter<$PrismaModel> | $Enums.EstadoSolicitud
  }

  export type NestedEnumEstadoSolicitudWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoSolicitud | EnumEstadoSolicitudFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoSolicitud[] | ListEnumEstadoSolicitudFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoSolicitud[] | ListEnumEstadoSolicitudFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoSolicitudWithAggregatesFilter<$PrismaModel> | $Enums.EstadoSolicitud
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoSolicitudFilter<$PrismaModel>
    _max?: NestedEnumEstadoSolicitudFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ResenaCreateWithoutClienteInput = {
    id?: string
    calificacion: number
    comentario: string
    fecha?: Date | string
    servicio: ServicioCreateNestedOneWithoutResenasInput
  }

  export type ResenaUncheckedCreateWithoutClienteInput = {
    id?: string
    calificacion: number
    comentario: string
    fecha?: Date | string
    servicioId: string
  }

  export type ResenaCreateOrConnectWithoutClienteInput = {
    where: ResenaWhereUniqueInput
    create: XOR<ResenaCreateWithoutClienteInput, ResenaUncheckedCreateWithoutClienteInput>
  }

  export type ResenaCreateManyClienteInputEnvelope = {
    data: ResenaCreateManyClienteInput | ResenaCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type ResenaUpsertWithWhereUniqueWithoutClienteInput = {
    where: ResenaWhereUniqueInput
    update: XOR<ResenaUpdateWithoutClienteInput, ResenaUncheckedUpdateWithoutClienteInput>
    create: XOR<ResenaCreateWithoutClienteInput, ResenaUncheckedCreateWithoutClienteInput>
  }

  export type ResenaUpdateWithWhereUniqueWithoutClienteInput = {
    where: ResenaWhereUniqueInput
    data: XOR<ResenaUpdateWithoutClienteInput, ResenaUncheckedUpdateWithoutClienteInput>
  }

  export type ResenaUpdateManyWithWhereWithoutClienteInput = {
    where: ResenaScalarWhereInput
    data: XOR<ResenaUpdateManyMutationInput, ResenaUncheckedUpdateManyWithoutClienteInput>
  }

  export type ResenaScalarWhereInput = {
    AND?: ResenaScalarWhereInput | ResenaScalarWhereInput[]
    OR?: ResenaScalarWhereInput[]
    NOT?: ResenaScalarWhereInput | ResenaScalarWhereInput[]
    id?: StringFilter<"Resena"> | string
    calificacion?: IntFilter<"Resena"> | number
    comentario?: StringFilter<"Resena"> | string
    fecha?: DateTimeFilter<"Resena"> | Date | string
    clienteId?: StringFilter<"Resena"> | string
    servicioId?: StringFilter<"Resena"> | string
  }

  export type ResenaCreateWithoutServicioInput = {
    id?: string
    calificacion: number
    comentario: string
    fecha?: Date | string
    cliente: UsuarioCreateNestedOneWithoutResenasInput
  }

  export type ResenaUncheckedCreateWithoutServicioInput = {
    id?: string
    calificacion: number
    comentario: string
    fecha?: Date | string
    clienteId: string
  }

  export type ResenaCreateOrConnectWithoutServicioInput = {
    where: ResenaWhereUniqueInput
    create: XOR<ResenaCreateWithoutServicioInput, ResenaUncheckedCreateWithoutServicioInput>
  }

  export type ResenaCreateManyServicioInputEnvelope = {
    data: ResenaCreateManyServicioInput | ResenaCreateManyServicioInput[]
    skipDuplicates?: boolean
  }

  export type ResenaUpsertWithWhereUniqueWithoutServicioInput = {
    where: ResenaWhereUniqueInput
    update: XOR<ResenaUpdateWithoutServicioInput, ResenaUncheckedUpdateWithoutServicioInput>
    create: XOR<ResenaCreateWithoutServicioInput, ResenaUncheckedCreateWithoutServicioInput>
  }

  export type ResenaUpdateWithWhereUniqueWithoutServicioInput = {
    where: ResenaWhereUniqueInput
    data: XOR<ResenaUpdateWithoutServicioInput, ResenaUncheckedUpdateWithoutServicioInput>
  }

  export type ResenaUpdateManyWithWhereWithoutServicioInput = {
    where: ResenaScalarWhereInput
    data: XOR<ResenaUpdateManyMutationInput, ResenaUncheckedUpdateManyWithoutServicioInput>
  }

  export type UsuarioCreateWithoutResenasInput = {
    id?: string
    nombre: string
    apellido: string
    email: string
    contraseña: string
    rol: $Enums.Rol
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type UsuarioUncheckedCreateWithoutResenasInput = {
    id?: string
    nombre: string
    apellido: string
    email: string
    contraseña: string
    rol: $Enums.Rol
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type UsuarioCreateOrConnectWithoutResenasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutResenasInput, UsuarioUncheckedCreateWithoutResenasInput>
  }

  export type ServicioCreateWithoutResenasInput = {
    id?: string
    titulo: string
    descripcion: string
    categoria: string
    estado?: $Enums.EstadoServicio
    createdAt?: Date | string
    active?: boolean
  }

  export type ServicioUncheckedCreateWithoutResenasInput = {
    id?: string
    titulo: string
    descripcion: string
    categoria: string
    estado?: $Enums.EstadoServicio
    createdAt?: Date | string
    active?: boolean
  }

  export type ServicioCreateOrConnectWithoutResenasInput = {
    where: ServicioWhereUniqueInput
    create: XOR<ServicioCreateWithoutResenasInput, ServicioUncheckedCreateWithoutResenasInput>
  }

  export type UsuarioUpsertWithoutResenasInput = {
    update: XOR<UsuarioUpdateWithoutResenasInput, UsuarioUncheckedUpdateWithoutResenasInput>
    create: XOR<UsuarioCreateWithoutResenasInput, UsuarioUncheckedCreateWithoutResenasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutResenasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutResenasInput, UsuarioUncheckedUpdateWithoutResenasInput>
  }

  export type UsuarioUpdateWithoutResenasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateWithoutResenasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicioUpsertWithoutResenasInput = {
    update: XOR<ServicioUpdateWithoutResenasInput, ServicioUncheckedUpdateWithoutResenasInput>
    create: XOR<ServicioCreateWithoutResenasInput, ServicioUncheckedCreateWithoutResenasInput>
    where?: ServicioWhereInput
  }

  export type ServicioUpdateToOneWithWhereWithoutResenasInput = {
    where?: ServicioWhereInput
    data: XOR<ServicioUpdateWithoutResenasInput, ServicioUncheckedUpdateWithoutResenasInput>
  }

  export type ServicioUpdateWithoutResenasInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoServicioFieldUpdateOperationsInput | $Enums.EstadoServicio
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ServicioUncheckedUpdateWithoutResenasInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoServicioFieldUpdateOperationsInput | $Enums.EstadoServicio
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ResenaCreateManyClienteInput = {
    id?: string
    calificacion: number
    comentario: string
    fecha?: Date | string
    servicioId: string
  }

  export type ResenaUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    calificacion?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    servicio?: ServicioUpdateOneRequiredWithoutResenasNestedInput
  }

  export type ResenaUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    calificacion?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    servicioId?: StringFieldUpdateOperationsInput | string
  }

  export type ResenaUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    calificacion?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    servicioId?: StringFieldUpdateOperationsInput | string
  }

  export type ResenaCreateManyServicioInput = {
    id?: string
    calificacion: number
    comentario: string
    fecha?: Date | string
    clienteId: string
  }

  export type ResenaUpdateWithoutServicioInput = {
    id?: StringFieldUpdateOperationsInput | string
    calificacion?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: UsuarioUpdateOneRequiredWithoutResenasNestedInput
  }

  export type ResenaUncheckedUpdateWithoutServicioInput = {
    id?: StringFieldUpdateOperationsInput | string
    calificacion?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: StringFieldUpdateOperationsInput | string
  }

  export type ResenaUncheckedUpdateManyWithoutServicioInput = {
    id?: StringFieldUpdateOperationsInput | string
    calificacion?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}