export default {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageReporters: ["text", "html", "lcov"]
};
