import type { StorybookConfig } from "@storybook/react-webpack5";
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import webpack, { RuleSetRule } from 'webpack'
const path = require('path');


const config: StorybookConfig = {
  stories: ["../../src/**/*.mdx", "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve?.modules?.push(path.resolve(__dirname, "..", "..", "src"))
    config.resolve?.extensions?.push('.ts', '.tsxs'),
    
    config.module?.rules?.push(buildCssLoader(true))
    
    //@ts-ignore
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
          return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
  });

    config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
    
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic'
        }
      }
    }
  }),
};
export default config;
