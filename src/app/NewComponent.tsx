export default async function NewComponent() {
  console.log('render')
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return <>345345534</>;
}
