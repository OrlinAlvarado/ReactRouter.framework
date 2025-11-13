import { Link } from "react-router";
import type { Route } from "./+types/testing-args-page";
import { sleep } from "~/lib/sleep";

export function meta() {
  return [
    { title: "Support Chat" },
    {
      property: "og:title",
      content: "Support Chat",
    },
    {
      name: "description",
      content: "Support Chat for The App",
    },
  ];
}

export function headers() {
  return {
    "X-Stretchy-Pants": "its for fun",
    "Cache-Control": "max-age=300, s-maxage=3600",
  };
}

export function links() {
  return [
    // {
    //   rel: "icon",
    //   href: "/favicon.png",
    //   type: "image/png",
    // },
    // {
    //   rel: "stylesheet",
    //   href: "https://example.com/some/styles.css",
    // },
    // {
    //   rel: "preload",
    //   href: "/images/banner.jpg",
    //   as: "image",
    // },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  console.log(params)
  return { hola: 'mundo' };
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {

  console.log(params)
  await sleep(1500)
  return { hola: 'mundo'};
}

export function HydrateFallback() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12">
          <svg className="animate-spin text-primary w-full h-full" viewBox="0 0 24 24" fill="none">
            <circle
              className="opacity-20"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-80"
              fill="currentColor"
              d="M22 12a10 10 0 01-10 10v-4a6 6 0 006-6h4z"
            />
          </svg>
        </div>
        <span className="text-lg font-medium text-muted-foreground">Cargando juego...</span>
      </div>
    </div>
  );
}


clientLoader.hydrate = true as const


export default function TestingArgsPage({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {

  const { id, name, age} = params

  console.log({ id, name, age})
  return (
    <div>
      <h1 className="font-bold text-2xl">Testing Args Page</h1>
      <p>Loader Data: {JSON.stringify(loaderData)}</p>
      <p>Action Data: {JSON.stringify(actionData)}</p>
      <p>Route Parameters: {JSON.stringify(params)}</p>
      <p>Matched Routes: {JSON.stringify(matches)}</p>

      <Link to="/auth/testing" className="text-blue-500 underline text-2xl">Testing</Link>
    </div>
  );
}