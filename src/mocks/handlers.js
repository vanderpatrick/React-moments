const baseURL = "https://moments-drf-patrick.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 5,
        username: "testuser5",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 5,
        profile_image:
          "https://res.cloudinary.com/volendam/image/upload/v1/media/../default_profile_gslre8.jpg",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req,rex,ctz) => {
    return res(ctx.status(200))
  })
];
