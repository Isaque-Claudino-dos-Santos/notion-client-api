import { pathsToModuleNameMapper, JestConfigWithTsJest } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";

export default {
  clearMocks: true,
  coverageProvider: "v8",
  preset: "ts-jest",
  setupFilesAfterEnv: ['./__tests__/jest.setup.ts'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    useESM: true,
    prefix: "../../"
  }),

} as JestConfigWithTsJest
