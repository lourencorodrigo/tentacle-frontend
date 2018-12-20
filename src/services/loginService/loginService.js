export default (env, request, errorHandler) => ({
  auth: errorHandler((email, password) =>
    request.get(`${env.api_endpoint}/login`, {
      email,
      password
    })
  )
});
