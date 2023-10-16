import { readFileSync } from 'fs';
import { join } from 'path';
import * as yaml from 'js-yaml';
// todo 启动传参
const configDir = '../config';
const commonPath = join(__dirname, configDir, 'config.yaml');
const envPath = join(
  __dirname,
  configDir,
  `config.${process.env.NODE_ENV || 'development'}.yaml`,
);
// commonConfig 公共配置文件
const commonConfig = yaml.load(readFileSync(commonPath));

// envConfig 加载多环境配置文件
const envConfig = yaml.load(readFileSync(envPath));
const loadCommon = () => commonConfig;
const loadEnv = () => envConfig;
export default [loadCommon, loadEnv];
