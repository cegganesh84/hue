// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

export const RESERVED_WORDS: Set<string> = new Set([
  'ABS',
  'ACOS',
  'ADD',
  'AGGREGATE',
  'ALL',
  'ALLOCATE',
  'ALTER',
  'ANALYTIC',
  'AND',
  'ANTI',
  'ANY',
  'API_VERSION',
  'ARE',
  'ARRAY',
  'ARRAY_AGG',
  'ARRAY_MAX_CARDINALITY',
  'AS',
  'ASC',
  'ASENSITIVE',
  'ASIN',
  'ASYMMETRIC',
  'AT',
  'ATAN',
  'ATOMIC',
  'AUTHORIZATION',
  'AVG',
  'AVRO',
  'BACKUP',
  'BEGIN',
  'BEGIN_FRAME',
  'BEGIN_PARTITION',
  'BETWEEN',
  'BIGINT',
  'BINARY',
  'BLOB',
  'BLOCK_SIZE',
  'BOOLEAN',
  'BOTH',
  'BREAK',
  'BROWSE',
  'BULK',
  'BY',
  'CACHE',
  'CACHED',
  'CALL',
  'CALLED',
  'CARDINALITY',
  'CASCADE',
  'CASCADED',
  'CASE',
  'CAST',
  'CEIL',
  'CEILING',
  'CHANGE',
  'CHAR',
  'CHAR_LENGTH',
  'CHARACTER',
  'CHARACTER_LENGTH',
  'CHECK',
  'CHECKPOINT',
  'CLASS',
  'CLASSIFIER',
  'CLOB',
  'CLOSE',
  'CLOSE_FN',
  'CLUSTERED',
  'COALESCE',
  'COLLATE',
  'COLLECT',
  'COLUMN',
  'COLUMNS',
  'COMMENT',
  'COMMIT',
  'COMPRESSION',
  'COMPUTE',
  'CONDITION',
  'CONF',
  'CONNECT',
  'CONSTRAINT',
  'CONTAINS',
  'CONTINUE',
  'CONVERT',
  'COPY',
  'CORR',
  'CORRESPONDING',
  'COS',
  'COSH',
  'COUNT',
  'COVAR_POP',
  'COVAR_SAMP',
  'CREATE',
  'CROSS',
  'CUBE',
  'CUME_DIST',
  'CURRENT',
  'CURRENT_CATALOG',
  'CURRENT_DATE',
  'CURRENT_DEFAULT_TRANSFORM_GROUP',
  'CURRENT_PATH',
  'CURRENT_ROLE',
  'CURRENT_ROW',
  'CURRENT_SCHEMA',
  'CURRENT_TIME',
  'CURRENT_TIMESTAMP',
  'CURRENT_TRANSFORM_GROUP_FOR_TYPE',
  'CURRENT_USER',
  'CURSOR',
  'CYCLE',
  'DATA',
  'DATABASE',
  'DATABASES',
  'DATE',
  'DATETIME',
  'DAY',
  'DAYOFWEEK',
  'DBCC',
  'DEALLOCATE',
  'DEC',
  'DECFLOAT',
  'DECIMAL',
  'DECLARE',
  'DEFAULT',
  'DEFINE',
  'DELETE',
  'DELIMITED',
  'DENSE_RANK',
  'DENY',
  'DEREF',
  'DESC',
  'DESCRIBE',
  'DETERMINISTIC',
  'DISCONNECT',
  'DISK',
  'DISTINCT',
  'DISTRIBUTED',
  'DIV',
  'DOUBLE',
  'DROP',
  'DUMP',
  'DYNAMIC',
  'EACH',
  'ELEMENT',
  'ELSE',
  'EMPTY',
  'ENCODING',
  'END',
  'END-EXEC',
  'END_FRAME',
  'END_PARTITION',
  'EQUALS',
  'ERRLVL',
  'ESCAPE',
  'ESCAPED',
  'EVERY',
  'EXCEPT',
  'EXCHANGE',
  'EXEC',
  'EXECUTE',
  'EXISTS',
  'EXIT',
  'EXP',
  'EXPLAIN',
  'EXTENDED',
  'EXTERNAL',
  'EXTRACT',
  'FALSE',
  'FETCH',
  'FIELDS',
  'FILE',
  'FILEFACTOR',
  'FILEFORMAT',
  'FILES',
  'FILTER',
  'FINALIZE_FN',
  'FIRST',
  'FIRST_VALUE',
  'FLOAT',
  'FLOOR',
  'FOLLOWING',
  'FOR',
  'FOREIGN',
  'FORMAT',
  'FORMATTED',
  'FRAME_ROW',
  'FREE',
  'FREETEXT',
  'FROM',
  'FULL',
  'FUNCTION',
  'FUNCTIONS',
  'FUSION',
  'GET',
  'GLOBAL',
  'GOTO',
  'GRANT',
  'GROUP',
  'GROUPING',
  'GROUPS',
  'HASH',
  'HAVING',
  'HOLD',
  'HOLDLOCK',
  'HOUR',
  'IDENTITY',
  'IF',
  'IGNORE',
  'ILIKE',
  'IMPORT',
  'IN',
  'INCREMENTAL',
  'INDEX',
  'INDICATOR',
  'INIT_FN',
  'INITIAL',
  'INNER',
  'INOUT',
  'INPATH',
  'INSENSITIVE',
  'INSERT',
  'INT',
  'INTEGER',
  'INTERMEDIATE',
  'INTERSECT',
  'INTERSECTION',
  'INTERVAL',
  'INTO',
  'INVALIDATE',
  'IREGEXP',
  'IS',
  'JOIN',
  'JSON_ARRAY',
  'JSON_ARRAYAGG',
  'JSON_EXISTS',
  'JSON_OBJECT',
  'JSON_OBJECTAGG',
  'JSON_QUERY',
  'JSON_TABLE',
  'JSON_TABLE_PRIMITIVE',
  'JSON_VALUE',
  'KEY',
  'KILL',
  'KUDU',
  'LAG',
  'LANGUAGE',
  'LARGE',
  'LAST',
  'LAST_VALUE',
  'LATERAL',
  'LEAD',
  'LEADING',
  'LEFT',
  'LESS',
  'LIKE',
  'LIKE_REGEX',
  'LIMIT',
  'LINENO',
  'LINES',
  'LISTAGG',
  'LN',
  'LOAD',
  'LOCAL',
  'LOCALTIME',
  'LOCALTIMESTAMP',
  'LOCATION',
  'LOG',
  'LOG10',
  'LOWER',
  'MACRO',
  'MAP',
  'MATCH',
  'MATCH_NUMBER',
  'MATCH_RECOGNIZE',
  'MATCHES',
  'MAX',
  'MEMBER',
  'MERGE',
  'MERGE_FN',
  'METADATA',
  'METHOD',
  'MIN',
  'MINUTE',
  'MOD',
  'MODIFIES',
  'MODULE',
  'MONTH',
  'MORE',
  'MULTISET',
  'NATIONAL',
  'NATURAL',
  'NCHAR',
  'NCLOB',
  'NEW',
  'NO',
  'NOCHECK',
  'NONCLUSTERED',
  'NONE',
  'NORMALIZE',
  'NOT',
  'NTH_VALUE',
  'NTILE',
  'NULL',
  'NULLIF',
  'NULLS',
  'NUMERIC',
  'OCCURRENCES_REGEX',
  'OCTET_LENGTH',
  'OF',
  'OFF',
  'OFFSET',
  'OFFSETS',
  'OLD',
  'OMIT',
  'ON',
  'ONE',
  'ONLY',
  'OPEN',
  'OPTION',
  'OR',
  'ORDER',
  'OUT',
  'OUTER',
  'OVER',
  'OVERLAPS',
  'OVERLAY',
  'OVERWRITE',
  'PARAMETER',
  'PARQUET',
  'PARQUETFILE',
  'PARTIALSCAN',
  'PARTITION',
  'PARTITIONED',
  'PARTITIONS',
  'PATTERN',
  'PER',
  'PERCENT',
  'PERCENT_RANK',
  'PERCENTILE_CONT',
  'PERCENTILE_DISC',
  'PERIOD',
  'PIVOT',
  'PLAN',
  'PORTION',
  'POSITION',
  'POSITION_REGEX',
  'POWER',
  'PRECEDES',
  'PRECEDING',
  'PRECISION',
  'PREPARE',
  'PREPARE_FN',
  'PRESERVE',
  'PRIMARY',
  'PRINT',
  'PROC',
  'PROCEDURE',
  'PRODUCED',
  'PTF',
  'PUBLIC',
  'PURGE',
  'RAISEERROR',
  'RANGE',
  'RANK',
  'RCFILE',
  'READ',
  'READS',
  'READTEXT',
  'REAL',
  'RECONFIGURE',
  'RECOVER',
  'RECURSIVE',
  'REDUCE',
  'REF',
  'REFERENCES',
  'REFERENCING',
  'REFRESH',
  'REGEXP',
  'REGR_AVGX',
  'REGR_AVGY',
  'REGR_COUNT',
  'REGR_INTERCEPT',
  'REGR_R2',
  'REGR_SLOPE',
  'REGR_SXX',
  'REGR_SXY',
  'REGR_SYY',
  'RELEASE',
  'RENAME',
  'REPEATABLE',
  'REPLACE',
  'REPLICATION',
  'RESTORE',
  'RESTRICT',
  'RESULT',
  'RETURN',
  'RETURNS',
  'REVERT',
  'REVOKE',
  'RIGHT',
  'RLIKE',
  'ROLE',
  'ROLES',
  'ROLLBACK',
  'ROLLUP',
  'ROW',
  'ROW_NUMBER',
  'ROWCOUNT',
  'ROWS',
  'RULE',
  'RUNNING',
  'SAVE',
  'SAVEPOINT',
  'SCHEMA',
  'SCHEMAS',
  'SCOPE',
  'SCROLL',
  'SEARCH',
  'SECOND',
  'SECURITYAUDIT',
  'SEEK',
  'SELECT',
  'SEMI',
  'SENSITIVE',
  'SEQUENCEFILE',
  'SERDEPROPERTIES',
  'SERIALIZE_FN',
  'SESSION_USER',
  'SET',
  'SETUSER',
  'SHOW',
  'SHUTDOWN',
  'SIMILAR',
  'SIN',
  'SINH',
  'SKIP',
  'SMALLINT',
  'SOME',
  'SORT',
  'SPECIFIC',
  'SPECIFICTYPE',
  'SQL',
  'SQLEXCEPTION',
  'SQLSTATE',
  'SQLWARNING',
  'SQRT',
  'START',
  'STATIC',
  'STATISTICS',
  'STATS',
  'STDDEV_POP',
  'STDDEV_SAMP',
  'STORED',
  'STRAIGHT_JOIN',
  'STRING',
  'STRUCT',
  'SUBMULTISET',
  'SUBSET',
  'SUBSTRING',
  'SUBSTRING_REGEX',
  'SUCCEEDS',
  'SUM',
  'SYMBOL',
  'SYMMETRIC',
  'SYSTEM',
  'SYSTEM_TIME',
  'SYSTEM_USER',
  'TABLE',
  'TABLES',
  'TABLESAMPLE',
  'TAN',
  'TANH',
  'TBLPROPERTIES',
  'TERMINATED',
  'TEXTFILE',
  'TEXTSIZE',
  'THEN',
  'TIME',
  'TIMESTAMP',
  'TIMEZONE_HOUR',
  'TIMEZONE_MINUTE',
  'TINYINT',
  'TO',
  'TOP',
  'TRAILING',
  'TRAN',
  'TRANSFORM',
  'TRANSLATE',
  'TRANSLATE_REGEX',
  'TRANSLATION',
  'TREAT',
  'TRIGGER',
  'TRIM',
  'TRIM_ARRAY',
  'TRUE',
  'TRUNCATE',
  'TRY_CONVERT',
  'UESCAPE',
  'UNBOUNDED',
  'UNCACHED',
  'UNION',
  'UNIQUE',
  'UNIQUEJOIN',
  'UNKNOWN',
  'UNNEST',
  'UNPIVOT',
  'UPDATE',
  'UPDATE_FN',
  'UPDATETEXT',
  'UPPER',
  'UPSERT',
  'USE',
  'USER',
  'USING',
  'UTC_TMESTAMP',
  'VALUE',
  'VALUE_OF',
  'VALUES',
  'VAR_POP',
  'VAR_SAMP',
  'VARBINARY',
  'VARCHAR',
  'VARYING',
  'VERSIONING',
  'VIEW',
  'VIEWS',
  'WAITFOR',
  'WHEN',
  'WHENEVER',
  'WHERE',
  'WHILE',
  'WIDTH_BUCKET',
  'WINDOW',
  'WITH',
  'WITHIN',
  'WITHOUT',
  'WRITETEXT',
  'YEAR'
]);