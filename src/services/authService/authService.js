export default (env, request, errorHandler) => ({
  login: errorHandler((email, password) =>
    request.post(`${env.api_endpoint}/login`, {
      email,
      password
    })
  )
});
