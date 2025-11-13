import { Form, Link, NavLink, useNavigation } from "react-router";
import type { Route } from "./+types/testing-page";
import { sleep } from "~/lib/sleep";

export async function action({ request }: Route.ActionArgs) {
  await sleep(1000)
  const data = await request.formData();

  const name = data.get('name')
  const allData = Object.fromEntries(data)
  
  console.log('Server Side - Action')
  console.log({ name, allData })
  return { ok: true, message: 'Todo bien desde el serverAction' };
}

export async function clientAction({ serverAction, request }: Route.ClientActionArgs) {
  await sleep(1000)

  const formData = await request.clone().formData();
  const allData = Object.fromEntries(formData)
  // can still call the server action if needed
  const data = await serverAction();

  return { message: 'Hola mundo desde el ClientAction - Client', data, allData}
}


export async function loader() {
  const message = 'Hola mundo desde el loader - Server'
  console.log(message)
  return { message };
}

export async function clientLoader({ serverLoader }: Route.ClientLoaderArgs) {
  const message = 'Hola mundo desde el clientLoader - Client'
  // call the server loader
  const serverData = await serverLoader();
  // And/or fetch data on the client
  // const data = getDataFromClient();
  // Return the data to expose through useLoaderData()
  console.log(message)
  return { message, serverData};
}

export default function TestingPage({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  const navigation = useNavigation()


  const isPosting = navigation.state === 'submitting'

  return (
    <div>
      <h1 className="font-bold text-2xl">Testing Page</h1>
      <p>Loader Data: {JSON.stringify(loaderData)}</p>
      <p>Action Data: {JSON.stringify(actionData)}</p>
      <p>Route Parameters: {JSON.stringify(params)}</p>
      <p>Matched Routes: {JSON.stringify(matches)}</p>

      <NavLink 
        to="/auth/testing-args/ABC-123/Juan/25" 
        className={ ({ isPending }) => 
          isPending
            ? 'text-gray-500 underline text-2xl'
            : 'text-blue-500 underline text-2xl'

        }
      >
        Testing Args
      </NavLink>

      <Form className="mt-8 flex flex-col gap-4 w-full max-w-xs" method="post">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="border border-input rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="age" className="text-sm font-medium text-muted-foreground">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            min={0}
            placeholder="Enter your age"
            className="border border-input rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isPosting}
          className="mt-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 font-medium disabled:opacity-10"
        >
          { isPosting ? 'Submitting...' : 'Submit'}
        </button>
      </Form>
    </div>
  );
}