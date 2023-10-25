const getEnvironmentVariable = (environmentVariable: string): string => {
  const unvalidatedEnvironmentVariable = process.env[environmentVariable];
  if (!unvalidatedEnvironmentVariable) {
    throw new Error(`Couldn't find environment variable: ${environmentVariable}`);
  } else {
    return unvalidatedEnvironmentVariable;
  }
};

export const config = {
  ytApiKey: getEnvironmentVariable("REACT_APP_YOUTUBE_API_KEY"),
  //   ytApiToken: getEnvironmentVariable("REACT_APP_YOUTUBE_API_KEY")
};
