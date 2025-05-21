function isNextJSFetchError(error: any): boolean {
  return error instanceof TypeError && error.message === "fetch failed";
}

export { isNextJSFetchError };
