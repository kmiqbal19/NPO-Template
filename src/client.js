import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
  //   projectId: process.env.SANITY_PROJECT_ID,
  //   dataset: process.env.SANITY_DATASET,
  //   apiVersion: process.env.SANITY_API_VERSION,
  //   useCdn: true,
  //   token: process.env.SANITY_API_TOKEN,
  projectId: "ej4o7okg",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skQ6nM0zQ7ByL3tNmtpQmHS9xa97R91hzRbjehQq6e24SslWSRCApeQsy08eFQ1OP8pxN8CO4g5VfRqNPefEbA9wP3gCiiFulYQTqIpmslYtg2wFsRHol031j5zLdykYlZrKn8YHPpxCaN2QmLErcOP0VAuUkiNjnMqffyR1pZJsjnS5jfaq",
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};
