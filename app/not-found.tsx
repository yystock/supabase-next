import { headers } from "next/headers";
// import log from "@/lib/logger";

export const metadata = {
  title: "404: Not Found",
};

const NotFound = () => {
  const headersList = headers();
  const referer = headersList.get("referer");
  console.error("404: Not Found " + referer);

  return (
    <div className="p-4 max-w-3xl mx-auto text-center items-center">
      <h1 className="font-display text-3xl font-semibold">Not Found</h1>

      <p className="font-base text-lg">
        You just hit a route that doesn&#39;t exist... the sadness.{" "}
        <span role="img" aria-label="Sad Emoji">
          😢
        </span>
      </p>
    </div>
  );
};

export default NotFound;
