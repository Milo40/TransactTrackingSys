import chalk from "chalk";

const logSuccess: Function = (message: string, info?: string) => {
  console.log(
    chalk.bgGreen.black(message),
    info ? chalk.bgGreen.black(" -> ") + chalk.bgYellowBright.black(info) : ""
  );
};

const logFailure: Function = (
  message: string,
  info?: string | String,
  type?: string
) => {
  console.log(
    chalk.bgRed(message),
    info && type
      ? type.toLowerCase() == "error"
        ? chalk.bgRed(" -> ") + chalk.bgBlack(info)
        : chalk.bgRed(" -> ") + chalk.bgYellow.black(info)
      : ""
  );
};

const logInfo: Function = (message: string) => {
  console.log(chalk.bgWhite.black.bold(message));
};

export { logFailure, logSuccess, logInfo };
